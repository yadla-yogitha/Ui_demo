import Logo from '../ui/Logo'
import Button from '../ui/Button'
import Panel from '../ui/Panel'
import DataTable from '../ui/DataTable'

const USER_TAG_ROWS = [
  { tag: 'Attendee', registered: 1, attended: 0, notAttended: 1, pct: '0%' },
  { tag: 'Guest',    registered: 1, attended: 0, notAttended: 1, pct: '0%' },
  { tag: 'Speaker',  registered: 1, attended: 0, notAttended: 1, pct: '0%' },
  { tag: 'Staff',    registered: 1, attended: 0, notAttended: 1, pct: '0%' },
  { tag: 'VIP',      registered: 1, attended: 0, notAttended: 1, pct: '0%' },
]

const NOT_ARRIVED = [
  { firstName: 'Michael', lastName: 'Brown',   position: 'QA Engineer',      company: 'TechNova',   userTag: 'Guest'    },
  { firstName: 'Sophia',  lastName: 'Davis',   position: 'UX Designer',      company: 'InnovateX',  userTag: 'Attendee' },
  { firstName: 'Emma',    lastName: 'Johnson', position: 'Product Manager',  company: 'Aviva',      userTag: 'Speaker'  },
  { firstName: 'John',    lastName: 'Smith',   position: 'Software Engineer', company: 'Blendology', userTag: 'VIP'      },
  { firstName: 'Liam',    lastName: 'Wilson',  position: 'DevOps Engineer',  company: 'CloudOps',   userTag: 'Staff'    },
]

function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border py-12 text-center" style={{ borderColor: 'var(--border-standard)' }}>
      <svg className="h-8 w-8 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-primary)' }}>
        <circle cx="12" cy="12" r="9" />
      </svg>
      <p className="text-sm font-semibold text-slate-500">No attendees recorded</p>
      <p className="text-xs text-slate-400">{message}</p>
    </div>
  )
}

function StatLine({ label, value, bold }) {
  return (
    <p className="text-sm">
      <span className={bold ? 'font-bold' : ''}>{label} </span>
      <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>{value}</span>
    </p>
  )
}

export default function ReportPage() {
  return (
    <div className="space-y-6">
      {/* Event header card */}
      <Panel className="border-t-4 !shadow-sm" style={{ borderTopColor: 'var(--color-secondary)' }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1" />
          <div className="flex gap-2">
            <Button variant="ghost">
              Export to PDF
            </Button>
            <Button variant="ghost">
              Export Excel
            </Button>
          </div>
        </div>

        <div className="grid gap-4 pb-1 pt-2 md:grid-cols-[1fr_auto]">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold" style={{ color: 'var(--color-text)' }}>Aws user group</h2>
            <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>Hyderabad</p>
            <p className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>
              Mon, 3 August 2026 at 6:00 pm – Mon, 3 August 2026 at 9:00 pm
            </p>
            <p className="pt-2 text-sm" style={{ color: 'var(--color-primary)' }}>
              Thank you for choosing Blendology's self-managed badging solution and supporting a more sustainable approach to event delivery.
            </p>
            <p className="text-sm" style={{ color: 'var(--color-primary)' }}>
              This report provides a snapshot of badge usage and attendee engagement at your event.
            </p>
          </div>
          <div className="flex items-start">
            <Logo className="!h-36 w-auto" />
          </div>
        </div>
      </Panel>

      {/* Key Event Statistics */}
      <Panel title="Key Event Statistics" className="!shadow-sm">
        <div className="space-y-1">
          <StatLine label="Total registered before event:" value="5" bold />
          <StatLine label="Walk-ups:" value="0" bold />
          <StatLine label="Total registered end of event:" value="5" bold />
          <StatLine label="Total attended:" value="0" bold />
          <StatLine label="Not Attended:" value="5" bold />
          <StatLine label="Unreturned Badges:" value="0" bold />
        </div>
      </Panel>

      {/* User Tag Breakdown */}
      <Panel title="User Tag Breakdown" className="!shadow-sm">
        <div className="overflow-x-auto">
          <DataTable
            columns={['User Tag', 'Registered', 'Attended', 'Not Attended', '% of Total Attended']}
            rows={USER_TAG_ROWS}
            getRowKey={(row) => row.tag}
            renderRow={(row) => (
              <>
                <td className="whitespace-nowrap px-4 py-3 font-semibold text-[color:var(--color-primary)]">{row.tag}</td>
                <td className="whitespace-nowrap px-4 py-3 font-semibold text-[color:var(--color-text)]">{row.registered}</td>
                <td className="px-4 py-3 text-slate-500">{row.attended}</td>
                <td className="whitespace-nowrap px-4 py-3 font-semibold text-[color:var(--color-text)]">{row.notAttended}</td>
                <td className="px-4 py-3 text-slate-500">{row.pct}</td>
              </>
            )}
          />
        </div>
      </Panel>

      {/* Environmental Impact */}
      <Panel title="Environmental Impact" className="!shadow-sm">
        <p className="text-sm">
          <span className="inline-block h-3 w-3 rounded-sm mr-1 align-middle" style={{ background: 'var(--color-secondary)' }} />
          Paper Saved: <strong>0.00 g</strong>
        </p>
        <p className="text-sm mt-1">
          <span className="inline-block h-3 w-3 rounded-sm mr-1 align-middle" style={{ background: 'var(--color-primary)' }} />
          Ink: <strong>0.00 ml</strong>
        </p>
      </Panel>

      {/* Attendee Breakdown */}
      <Panel title="Attendee Breakdown" className="!shadow-sm">
        <div className="space-y-6">

          <div>
            <p className="mb-3 text-base font-bold" style={{ color: 'var(--color-text)' }}>Attended (With Badge) : 0</p>
            <EmptyState message="No attendees attended (with badge) at this event." />
          </div>

          <div>
            <p className="mb-3 text-base font-bold" style={{ color: 'var(--color-text)' }}>Walk-ups : 0</p>
            <EmptyState message="No attendees walk-ups at this event." />
          </div>

          <div>
            <p className="mb-3 text-base font-bold" style={{ color: 'var(--color-text)' }}>Not Arrived : {NOT_ARRIVED.length}</p>
            <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--border-standard)' }}>
              <DataTable
                columns={['First Name', 'Last Name', 'Position', 'Company', 'User Tag']}
                rows={NOT_ARRIVED}
                getRowKey={(row) => row.firstName + row.lastName}
                renderRow={(row) => (
                  <>
                    <td className="whitespace-nowrap px-4 py-3 font-semibold text-[color:var(--color-primary)]">{row.firstName}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-[color:var(--color-text)]">{row.lastName}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-[color:var(--color-text)]">{row.position}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-semibold text-[color:var(--color-text)]">{row.company}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-500">{row.userTag}</td>
                  </>
                )}
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-base font-bold" style={{ color: 'var(--color-text)' }}>Unreturned Badges : 0</p>
            <EmptyState message="No attendees unreturned badges at this event." />
          </div>
        </div>
      </Panel>
    </div>
  )
}
