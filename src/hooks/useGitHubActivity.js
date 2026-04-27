import { useEffect, useState } from 'react'
import axios from 'axios'

const USERS = ['hk493']

function shortDate(iso) {
  const d = new Date(iso)
  return d.toLocaleString('en-US', { month: 'short', day: 'numeric' })
}

function describeEvent(ev) {
  const repo = ev.repo?.name?.split('/')[1] ?? ev.repo?.name ?? ''
  const owner = ev.repo?.name?.split('/')[0] ?? ''
  switch (ev.type) {
    case 'PushEvent': {
      const n = ev.payload?.commits?.length ?? ev.payload?.size
      const msg = ev.payload?.commits?.[0]?.message?.split('\n')[0]
      const branch = ev.payload?.ref?.replace('refs/heads/', '')
      const detail = msg
        ? msg.slice(0, 48)
        : n
        ? `Pushed ${n} commit${n === 1 ? '' : 's'}`
        : `Pushed to ${branch ?? 'main'}`
      return { desc: detail, status: 'Live', tone: 'green', project: repo, owner }
    }
    case 'CreateEvent':
      return {
        desc: `Created ${ev.payload?.ref_type ?? 'item'}${ev.payload?.ref ? ` ${ev.payload.ref}` : ''}`,
        status: 'New',
        tone: 'green',
        project: repo,
        owner,
      }
    case 'PullRequestEvent':
      return {
        desc: `${ev.payload?.action ?? 'updated'} PR · ${ev.payload?.pull_request?.title?.slice(0, 36) ?? ''}`,
        status: ev.payload?.pull_request?.merged ? 'Merged' : 'Open',
        tone: ev.payload?.pull_request?.merged ? 'green' : 'amber',
        project: repo,
        owner,
      }
    case 'IssuesEvent':
      return {
        desc: `${ev.payload?.action ?? 'updated'} issue · ${ev.payload?.issue?.title?.slice(0, 36) ?? ''}`,
        status: ev.payload?.action === 'closed' ? 'Closed' : 'Open',
        tone: ev.payload?.action === 'closed' ? 'green' : 'amber',
        project: repo,
        owner,
      }
    case 'WatchEvent':
      return { desc: 'Starred', status: 'Star', tone: 'amber', project: repo, owner }
    case 'ReleaseEvent':
      return {
        desc: `Released ${ev.payload?.release?.tag_name ?? ''}`,
        status: 'Live',
        tone: 'green',
        project: repo,
        owner,
      }
    default:
      return {
        desc: ev.type?.replace(/Event$/, '') ?? 'Activity',
        status: 'Update',
        tone: 'green',
        project: repo,
        owner,
      }
  }
}

export function useGitHubActivity() {
  const [data, setData] = useState({ repos: [], events: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    const run = async () => {
      try {
        const responses = await Promise.all(
          USERS.flatMap((u) => [
            axios.get(`https://api.github.com/users/${u}/repos?sort=updated&per_page=10`),
            axios.get(`https://api.github.com/users/${u}/events/public?per_page=20`),
          ])
        )

        const repos = []
        const events = []
        responses.forEach((res, i) => {
          if (i % 2 === 0) repos.push(...res.data)
          else events.push(...res.data)
        })

        repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        events.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

        const formattedRepos = repos.slice(0, 4).map((r) => ({
          name: r.full_name,
          htmlUrl: r.html_url,
          stars: r.stargazers_count,
          updatedAt: r.updated_at,
          language: r.language,
          stat: r.language
            ? `${r.language}${r.stargazers_count ? ` · ★${r.stargazers_count}` : ''}`
            : `Updated ${shortDate(r.updated_at)}`,
        }))

        const formattedEvents = events.slice(0, 4).map((ev) => ({
          date: shortDate(ev.created_at),
          ...describeEvent(ev),
        }))

        if (!cancelled) {
          setData({ repos: formattedRepos, events: formattedEvents })
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [])

  return { ...data, loading, error }
}
