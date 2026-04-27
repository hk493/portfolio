import {
  ChevronDown,
  Search,
  Bell,
  Plus,
  MoreHorizontal,
  Check,
  Home as HomeIcon,
  ListChecks,
  ArrowRightLeft,
  CreditCard,
  Wallet,
  Banknote,
  GitBranch,
  Bot,
  Bell as BellIcon,
  Settings,
} from 'lucide-react'

// Pure-React mock dashboard, ported to portfolio context (Orbito).
// All text is select-none / pointer-events-none; this is a visual prop only.
export default function DashboardPreview() {
  return (
    <div
      className="rounded-2xl p-3 md:p-4"
      style={{
        background: 'rgba(255, 255, 255, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: 'var(--shadow-dashboard)',
      }}
    >
      <div className="rounded-xl bg-white overflow-x-auto md:overflow-hidden border border-border select-none pointer-events-none text-[11px] text-foreground min-w-0">
       <div className="min-w-[820px]">
        {/* Top bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-foreground text-background flex items-center justify-center font-display italic text-sm leading-none">
              O
            </div>
            <span className="font-semibold">Orbito</span>
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </div>
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-md bg-secondary w-72">
            <Search className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Search projects, repos…</span>
            <span className="ml-auto text-[10px] text-muted-foreground">⌘K</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full bg-foreground text-background px-3 py-1 text-[10px] font-medium">
              New Build
            </button>
            <Bell className="h-4 w-4 text-muted-foreground" />
            <div className="h-6 w-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-medium text-[10px]">
              HT
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <aside className="w-40 border-r border-border p-2 hidden md:block">
            <SidebarItem icon={HomeIcon} label="Home" active />
            <SidebarItem icon={ListChecks} label="Tasks" badge="9" />
            <SidebarItem icon={ArrowRightLeft} label="Deployments" />
            <SidebarItem icon={CreditCard} label="Repos" chevron />
            <SidebarItem icon={Wallet} label="Models" />
            <SidebarItem icon={Banknote} label="Usage" />
            <SidebarItem icon={GitBranch} label="Pipelines" chevron />

            <div className="text-[9px] uppercase tracking-wider text-muted-foreground mt-3 mb-1 px-2">
              Workflows
            </div>
            <SidebarItem icon={GitBranch} label="Track runs" />
            <SidebarItem icon={Bot} label="Agents" />
            <SidebarItem icon={BellIcon} label="Notifications" />
            <SidebarItem icon={Settings} label="Settings" />
          </aside>

          {/* Main */}
          <main className="flex-1 bg-secondary/30 p-3 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Welcome, Hoto</div>
              <div className="text-[10px] text-muted-foreground">Apr 27, 2026</div>
            </div>

            {/* Action pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <Pill primary>Deploy</Pill>
              <Pill>New Repo</Pill>
              <Pill>Run Agent</Pill>
              <Pill>Invite</Pill>
              <Pill>Create Doc</Pill>
              <Pill>Open API</Pill>
              <span className="text-[10px] text-muted-foreground ml-1">Customize</span>
            </div>

            {/* Two cards */}
            <div className="flex gap-3">
              {/* Build/usage card */}
              <div className="flex-1 basis-0 rounded-lg bg-white border border-border p-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    Production output
                    <Check className="h-3 w-3 text-foreground" />
                  </div>
                  <MoreHorizontal className="h-3 w-3 text-muted-foreground" />
                </div>
                <div className="text-base font-semibold leading-none">
                  9<span className="text-xs text-muted-foreground"> products</span>
                </div>
                <div className="flex items-center gap-3 mt-1 text-[10px]">
                  <div>
                    <div className="text-muted-foreground">Last 30 days</div>
                    <div className="font-medium">+2 shipped</div>
                  </div>
                  <div>
                    <div className="text-emerald-600">+18% MAU</div>
                  </div>
                  <div>
                    <div className="text-rose-600">-3% churn</div>
                  </div>
                </div>

                {/* SVG area chart */}
                <svg viewBox="0 0 240 80" className="h-20 w-full mt-2" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 60 C 30 50, 50 65, 80 45 S 130 20, 160 30 S 210 50, 240 18 L 240 80 L 0 80 Z"
                    fill="url(#chartFill)"
                  />
                  <path
                    d="M0 60 C 30 50, 50 65, 80 45 S 130 20, 160 30 S 210 50, 240 18"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Repos card */}
              <div className="flex-1 basis-0 rounded-lg bg-white border border-border p-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-[10px] text-muted-foreground">Repositories</div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Plus className="h-3 w-3" />
                    <MoreHorizontal className="h-3 w-3" />
                  </div>
                </div>
                <RepoRow name="Orbito-ai/orbito" stat="Core · v2.4" />
                <RepoRow name="Orbito-ai/avatar-v2" stat="42 commits" />
                <RepoRow name="Orbito-ai/giziroku-ai" stat="Active" />
                <RepoRow name="hikari-houto/madoka" stat="Stable" last />
              </div>
            </div>

            {/* Recent activity */}
            <div className="rounded-lg bg-white border border-border p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[10px] font-medium">Recent Activity</div>
                <div className="text-[10px] text-muted-foreground">View all</div>
              </div>
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="text-muted-foreground">
                    <th className="text-left font-normal pb-1">Date</th>
                    <th className="text-left font-normal pb-1">Description</th>
                    <th className="text-left font-normal pb-1">Project</th>
                    <th className="text-right font-normal pb-1">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <Row date="Apr 26" desc="Deployed avatar pipeline" project="avatar-v2" status="Live" tone="green" />
                  <Row date="Apr 24" desc="Indexed customer KB" project="research-ai" status="Pending" tone="amber" />
                  <Row date="Apr 22" desc="Released v2.4" project="orbito" status="Live" tone="green" />
                  <Row date="Apr 18" desc="Patched STT latency" project="giziroku-ai" status="Live" tone="green" />
                </tbody>
              </table>
            </div>
          </main>
        </div>
       </div>
      </div>
    </div>
  )
}

function SidebarItem({ icon: Icon, label, active, badge, chevron }) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] ${
        active ? 'bg-secondary font-medium' : 'text-muted-foreground'
      }`}
    >
      <Icon className="h-3 w-3" />
      <span>{label}</span>
      {badge && (
        <span className="ml-auto bg-foreground text-background rounded-full px-1.5 text-[9px]">
          {badge}
        </span>
      )}
      {chevron && <ChevronDown className="ml-auto h-3 w-3" />}
    </div>
  )
}

function Pill({ children, primary }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-medium border ${
        primary
          ? 'bg-accent text-accent-foreground border-accent'
          : 'bg-white text-foreground border-border'
      }`}
    >
      {children}
    </span>
  )
}

function RepoRow({ name, stat, last }) {
  return (
    <div className={`flex items-center justify-between py-1.5 ${last ? '' : ''}`}>
      <span className="font-mono text-[10px] truncate">{name}</span>
      <span className="text-[10px] text-muted-foreground">{stat}</span>
    </div>
  )
}

function Row({ date, desc, project, status, tone }) {
  const toneCls =
    tone === 'green'
      ? 'bg-emerald-100 text-emerald-700'
      : tone === 'amber'
      ? 'bg-amber-100 text-amber-700'
      : 'bg-secondary text-muted-foreground'
  return (
    <tr className="border-t border-border">
      <td className="py-1.5 text-muted-foreground">{date}</td>
      <td className="py-1.5">{desc}</td>
      <td className="py-1.5 text-muted-foreground font-mono">{project}</td>
      <td className="py-1.5 text-right">
        <span className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${toneCls}`}>
          {status}
        </span>
      </td>
    </tr>
  )
}
