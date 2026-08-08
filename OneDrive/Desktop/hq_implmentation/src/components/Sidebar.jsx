import { NavLink } from 'react-router-dom'
import Logo from '../ui/Logo'

const NAV_ITEMS = [
  { label: 'Import Guests', to: '/import-guests' },
  { label: 'Badge Templates', to: '/badge-templates' },
  { label: 'Report', to: '/report' },
  { label: 'Edit Event', to: '/edit-event' },
]

export default function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-[100dvh] flex-col overflow-hidden border-r border-[color:var(--border-standard)] bg-white px-4 py-4">
      <div className="mb-2">
        <Logo className="h-10 w-auto max-w-[160px]" />
      </div>

      <div className="mb-4 rounded-2xl border border-[color:var(--border-standard)] bg-[color:var(--bg-soft)] p-3">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Current Event</p>
        <p className="mt-1 text-base font-bold text-[color:var(--color-text)]">new event01</p>
        <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
          <div>
            <p className="text-slate-400">Starts at</p>
            <p className="font-semibold text-[color:var(--color-text)]">04 AUG 2026 08:30 AM</p>
          </div>
          <div>
            <p className="text-slate-400">Ends at</p>
            <p className="font-semibold text-[color:var(--color-text)]">07 AUG 2026 04:30 AM</p>
          </div>
        </div>
        <p className="mt-2 text-sm font-extrabold text-[color:var(--color-text)]">0d 15h 3m to start</p>
      </div>

      <nav className="space-y-2">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex w-full items-center rounded-xl border px-2.5 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? 'border-[color:var(--color-secondary)] bg-[color:var(--color-secondary)] text-[color:var(--color-text)]'
                  : 'border-transparent text-slate-600 hover:bg-slate-100'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <section className="mt-4 w-full">
        <div className="mb-1 rounded-xl px-2.5 py-2">
          <p className="text-sm font-extrabold text-[color:var(--color-text)]">Registration Statistics</p>
        </div>
        <div className="space-y-0.5 text-sm text-slate-600">
          <div className="flex items-center justify-between rounded-xl px-2.5 py-2 hover:bg-slate-100">
            <p className="font-bold text-[color:var(--color-text)]">Total Registered</p>
            <p className="font-bold text-[color:var(--color-text)]">900</p>
          </div>
          <div className="flex items-center justify-between rounded-xl px-2.5 py-2 hover:bg-slate-100">
            <p className="font-semibold">Mobile</p>
            <p className="font-semibold">Status</p>
          </div>
          <div className="rounded-xl px-2.5 py-2 hover:bg-slate-100">
            <p className="font-semibold">Messages</p>
          </div>
        </div>
      </section>

      <div className="mt-auto pt-2">
        <div className="flex items-center gap-2 rounded-full border border-[color:var(--border-standard)] bg-white px-2 py-1">
        <div className="grid h-7 w-7 place-content-center rounded-full bg-[color:var(--color-primary)] text-xs font-bold text-[color:var(--color-on-dark)]">TS</div>
        <div>
          <p className="text-sm font-bold text-[color:var(--color-text)]">Tapaswi</p>
          <p className="text-xs text-slate-400">Organiser</p>
        </div>
        </div>
      </div>
    </aside>
  )
}
