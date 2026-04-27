import { useEffect, useState } from 'react'
import axios from 'axios'
import { repositories } from '../data/repositories'

export function useGitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const results = await Promise.all(
          repositories.map(async (repo) => {
            try {
              const { data } = await axios.get(
                `https://api.github.com/repos/${repo.owner}/${repo.name}`
              )
              // Fetch languages
              let languages = []
              try {
                const { data: langData } = await axios.get(data.languages_url)
                languages = Object.keys(langData)
              } catch (e) {
                languages = data.language ? [data.language] : []
              }
              return {
                ...repo,
                description: data.description || 'No description available',
                language: data.language,
                languages,
                stars: data.stargazers_count,
                forks: data.forks_count,
                updatedAt: data.updated_at,
                htmlUrl: data.html_url,
                topics: data.topics || [],
                isPrivate: data.private,
                available: true,
              }
            } catch (err) {
              // Repository might be private or not accessible
              return {
                ...repo,
                description: 'Private repository',
                language: null,
                languages: [],
                stars: 0,
                forks: 0,
                updatedAt: null,
                htmlUrl: `https://github.com/${repo.owner}/${repo.name}`,
                topics: [],
                isPrivate: true,
                available: false,
              }
            }
          })
        )
        setRepos(results)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAll()
  }, [])

  return { repos, loading, error }
}
