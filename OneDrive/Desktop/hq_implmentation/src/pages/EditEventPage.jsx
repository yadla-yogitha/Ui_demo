import { useRef, useState } from 'react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import Panel from '../ui/Panel'
import { SelectField, TextField } from '../ui/FormField'

const TIMEZONES = [
  '(UTC+05:30) Asia/Kolkata',
  '(UTC+00:00) UTC',
  '(UTC-05:00) America/New_York',
  '(UTC-08:00) America/Los_Angeles',
  '(UTC+01:00) Europe/London',
]

const TIME_OPTIONS = [
  '06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM','12:00 PM',
  '01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM','07:00 PM',
  '08:00 PM','09:00 PM','10:00 PM','11:00 PM',
]

export default function EditEventPage() {
  const logoRef = useRef(null)
  const [form, setForm] = useState({
    eventName: 'Aws user group',
    uniqueName: '071AUG',
    organiserName: 'AWS',
    location: 'Hyderabad',
    startDate: '2026-08-03',
    startTime: '06:00 PM',
    endDate: '2026-08-03',
    endTime: '09:00 PM',
    timezone: '(UTC+05:30) Asia/Kolkata',
  })
  const [logoFile, setLogoFile] = useState(null)

  function set(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  function handleLogoChange(e) {
    const file = e.target.files[0]
    if (file) setLogoFile(file.name)
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Page header */}

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Main form */}
        <Panel
          title="Edit Event"
          right={<Button variant="primary">Update Event</Button>}
        >
          <div className="space-y-4">
            <TextField label="Event Name" required value={form.eventName} onChange={set('eventName')} />

            <TextField
              label="Unique Name"
              hint="URL-friendly name cannot be changed after creation."
              value={form.uniqueName}
              readOnly
              inputClassName="bg-[color:var(--bg-soft)]"
            />

            <TextField label="Organiser Name" value={form.organiserName} onChange={set('organiserName')} />
            <TextField label="Location" value={form.location} onChange={set('location')} />

            <div className="space-y-4 rounded-xl border p-4" style={{ borderColor: 'var(--border-standard)' }}>
              <p className="text-base font-bold" style={{ color: 'var(--color-text)' }}>Date &amp; time</p>

              <div className="grid gap-4 sm:grid-cols-4">
                <TextField
                  label="Start Date"
                  required
                  type="date"
                  value={form.startDate}
                  onChange={set('startDate')}
                />
                <SelectField
                  label="Start Time"
                  required
                  value={form.startTime}
                  onChange={set('startTime')}
                  options={TIME_OPTIONS}
                />
                <TextField
                  label="End Date"
                  required
                  type="date"
                  value={form.endDate}
                  onChange={set('endDate')}
                />
                <SelectField
                  label="End Time"
                  required
                  value={form.endTime}
                  onChange={set('endTime')}
                  options={TIME_OPTIONS}
                />
              </div>

              <SelectField
                label="Timezone"
                hint="Current system time zone: America/Adak"
                value={form.timezone}
                onChange={set('timezone')}
                options={TIMEZONES}
              />
            </div>
          </div>
        </Panel>

        {/* Branding panel */}
        <Panel title="Branding">
          <div className="space-y-8">

            <div className="space-y-2">
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
                Event Logo <span className="font-normal text-slate-400">(default used as shown)</span>
              </p>

              <div className="flex items-center gap-3">
                <Button variant="ghost" onClick={() => logoRef.current?.click()} className="gap-1.5">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 16.5v-13A1.5 1.5 0 014.5 2h7.379a1.5 1.5 0 011.06.44l2.621 2.62A1.5 1.5 0 0116 6.12V16.5A1.5 1.5 0 0114.5 18h-10A1.5 1.5 0 013 16.5zm8-13.379V6h2.879L11 3.121z" clipRule="evenodd" />
                  </svg>
                  Choose file
                </Button>
                <span className="text-sm text-slate-400">{logoFile ?? 'No file chosen'}</span>
                <input ref={logoRef} type="file" accept="image/png,image/jpeg,image/webp" className="hidden" onChange={handleLogoChange} />
              </div>

              <p className="text-xs text-slate-400">PNG, JPG, or WebP up to ~2MB.</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border p-6" style={{ borderColor: 'var(--border-standard)', background: 'var(--bg-soft)' }}>
              <Logo className="h-14" />
              <p className="text-xs text-slate-400">Default logo preview</p>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  )
}
