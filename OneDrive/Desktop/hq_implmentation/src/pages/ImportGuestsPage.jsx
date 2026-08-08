import { useRef, useState } from 'react'
import * as XLSX from 'xlsx'
import Button from '../ui/Button'
import DataTable from '../ui/DataTable'

const COLUMNS = [
  { key: 'firstName',     label: 'First Name'    },
  { key: 'lastName',      label: 'Last Name'     },
  { key: 'email',         label: 'Email'         },
  { key: 'reference',     label: 'Reference'     },
  { key: 'company',       label: 'Company'       },
  { key: 'jobTitle',      label: 'Job Title'     },
  { key: 'comment',       label: 'Comment'       },
  { key: 'userTag',       label: 'User Tag'      },
  { key: 'groupTag',      label: 'Group Tag'     },
  { key: 'tagColour',     label: 'Tag Colour'    },
  { key: 'lanyardColour', label: 'Lanyard Colour'},
  { key: 'pronoun',       label: 'Pronoun'       },
  { key: 'typeDate',      label: 'Type Date'     },
]

const SAMPLE_GUESTS = [
  { firstName: 'John',    lastName: 'Smith',   email: 'john.smith@example.com',    reference: 'REF001', company: 'Blendology', jobTitle: 'Software Engineer', comment: 'VIP attendee',                userTag: 'VIP',      groupTag: 'Engineering', tagColour: 'Blue',   lanyardColour: 'Black',  pronoun: 'He/Him',  typeDate: '2026-08-03' },
  { firstName: 'Emma',    lastName: 'Johnson', email: 'emma.johnson@example.com',  reference: 'REF002', company: 'Aviva',      jobTitle: 'Product Manager',   comment: 'Speaker',                     userTag: 'Speaker',  groupTag: 'Management',  tagColour: 'Green',  lanyardColour: 'Blue',   pronoun: 'She/Her', typeDate: '2026-08-03' },
  { firstName: 'Michael', lastName: 'Brown',   email: 'michael.brown@example.com', reference: 'REF003', company: 'TechNova',   jobTitle: 'QA Engineer',       comment: '',                            userTag: 'Guest',    groupTag: 'Testing',     tagColour: 'Red',    lanyardColour: 'White',  pronoun: 'He/Him',  typeDate: '2026-08-04' },
  { firstName: 'Sophia',  lastName: 'Davis',   email: 'sophia.davis@example.com',  reference: 'REF004', company: 'InnovateX',  jobTitle: 'UX Designer',       comment: 'Needs accessibility support', userTag: 'Attendee', groupTag: 'Design',      tagColour: 'Purple', lanyardColour: 'Green',  pronoun: 'She/Her', typeDate: '2026-08-04' },
  { firstName: 'Liam',    lastName: 'Wilson',   email: 'liam.wilson@example.com',   reference: 'REF005', company: 'CloudOps',   jobTitle: 'DevOps Engineer',   comment: '',                            userTag: 'Staff',    groupTag: 'Operations',  tagColour: 'Orange', lanyardColour: 'Yellow', pronoun: 'He/Him',  typeDate: '2026-08-05' },
]

function formatNow() {
  return new Date().toLocaleString('en-GB', {
    day: '2-digit', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
  })
}

export default function ImportGuestsPage() {
  const fileRef = useRef(null)
  const [lastUpdated, setLastUpdated] = useState(formatNow)
  const [guests, setGuests] = useState([])
  const [dragOver, setDragOver] = useState(false)

  // Refresh loads sample data to simulate a real fetch
  function handleRefresh() {
    setGuests(SAMPLE_GUESTS)
    setLastUpdated(formatNow())
  }

  function handleDownload() {
    const rows = guests.length > 0
      ? [COLUMNS.map((c) => c.label), ...guests.map((g) => COLUMNS.map((c) => g[c.key] ?? ''))]
      : [COLUMNS.map((c) => c.label)]
    const ws = XLSX.utils.aoa_to_sheet(rows)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Guests')
    XLSX.writeFile(wb, 'guest-list.xlsx')
  }

  function handleFile(file) {
    if (!file) return
    setGuests(SAMPLE_GUESTS)
    setLastUpdated(formatNow())
  }

  function onDrop(e) {
    e.preventDefault()
    setDragOver(false)
    handleFile(e.dataTransfer.files[0])
  }

  const hasGuests = guests.length > 0

  return (
    <div className="space-y-6">
      {/* Page header — always visible */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[color:var(--color-text)]">Guest List</h1>
          <p className="mt-1 text-sm text-slate-500">Last Updated: {lastUpdated}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={handleDownload} className="gap-2">
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm4.293-5.293a1 1 0 001.414 0L10 9.414V3a1 1 0 112 0v6.414l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Excel
          </Button>
          <Button variant="ghost" onClick={handleRefresh} title="Refresh" className="h-11 w-11 !px-0 !py-0 text-slate-500">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
      </div>

      {hasGuests ? (
        /* ── Guest table ── */
        <div className="overflow-hidden rounded-2xl border shadow-sm" style={{ borderColor: 'var(--border-standard)' }}>
          <div className="overflow-x-auto">
            <DataTable
              columns={COLUMNS}
              rows={guests}
              getRowKey={(g, i) => g.reference || i}
              renderRow={(g) => (
                <>
                  <td className="cursor-pointer whitespace-nowrap px-4 py-3 font-semibold text-[color:var(--color-primary)] hover:underline">{g.firstName}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-[color:var(--color-text)]">{g.lastName}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-500">{g.email}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-[color:var(--color-text)]">{g.reference}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-[color:var(--color-text)]">{g.company}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-[color:var(--color-text)]">{g.jobTitle}</td>
                  <td className="px-4 py-3 text-slate-500">{g.comment}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-[color:var(--color-text)]">{g.userTag}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-[color:var(--color-text)]">{g.groupTag}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-[color:var(--color-text)]">{g.tagColour}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-[color:var(--color-text)]">{g.lanyardColour}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-[color:var(--color-text)]">{g.pronoun}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-[color:var(--color-text)]">{g.typeDate}</td>
                </>
              )}
            />
          </div>
        </div>
      ) : (
        /* ── Empty / import view ── */
        <div className="rounded-2xl border bg-white shadow-sm" style={{ borderColor: 'var(--border-standard)' }}>
          {/* Card header */}
          <div className="border-b px-6 py-5" style={{ borderColor: 'var(--border-standard)' }}>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: 'var(--bg-soft)', color: 'var(--color-primary)' }}>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
              </span>
              <div>
                <p className="text-base font-bold" style={{ color: 'var(--color-text)' }}>Import Guest List</p>
                <p className="text-xs text-slate-400">No guests have been added to this event yet</p>
              </div>
            </div>
          </div>

          {/* Drop zone */}
          <div className="flex flex-col items-center gap-6 px-6 py-12">
            <div
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
              onDragLeave={() => setDragOver(false)}
              onDrop={onDrop}
              className="flex w-full max-w-md cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-dashed px-8 py-10 transition-colors select-none"
              style={{
                borderColor: dragOver ? 'var(--color-primary)' : '#c8d0dc',
                background: dragOver ? 'var(--bg-soft)' : '#fafbfc',
              }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: 'var(--bg-soft)', color: 'var(--color-primary)' }}>
                <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <div className="text-center">
                <p className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
                  Click to select file or drag &amp; drop it here
                </p>
                <p className="mt-0.5 text-xs text-slate-400">Supported file formats: Excel XLS and XLSX</p>
              </div>
              <input ref={fileRef} type="file" accept=".xls,.xlsx" className="hidden" onChange={(e) => handleFile(e.target.files[0])} />
            </div>

            <p className="text-sm text-slate-500">
              This will replace all existing guests{' '}
              <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>in this event</span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

