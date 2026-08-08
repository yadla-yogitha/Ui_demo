import { useState } from 'react'
import Button from '../ui/Button'
import Panel from '../ui/Panel'
import { SelectField, TextField } from '../ui/FormField'

export default function PlaceholderPage({ title, description }) {
  const [guestGroup, setGuestGroup] = useState('all')
  const [search, setSearch] = useState('')

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight text-[color:var(--color-text)]">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">{description}</p>
      </header>

      <Panel title="Quick Action">
        <div className="grid gap-4 md:grid-cols-2">
          <TextField
            label="Search guests"
            placeholder="Type name or email"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <SelectField
            label="Guest group"
            value={guestGroup}
            onChange={(event) => setGuestGroup(event.target.value)}
            options={[
              { value: 'all', label: 'All guests' },
              { value: 'vip', label: 'VIP guests' },
              { value: 'staff', label: 'Staff' },
            ]}
          />
        </div>

        <div className="mt-5 flex gap-3">
          <Button>Apply Filter</Button>
          <Button variant="ghost">Reset</Button>
        </div>
      </Panel>
    </div>
  )
}
