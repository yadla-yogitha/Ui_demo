import { useRef, useState } from 'react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import Panel from '../ui/Panel'

function BadgePreview() {
  return (

    <div className="mx-auto w-70 max-w-[420px] rounded-xl border border-[color:var(--border-standard)] bg-white p-3 shadow-md">
      <img src="/preview.png" alt="Live badge preview" className="w-full rounded-md object-contain" />
    
    <p className="mt-4 text-center text-[10px]" style={{ color: 'var(--color-primary)' }}>
        Last updated: 3rd August 2026, 3:47:57 PM
      </p>

      <Button className="mt-3 w-full gap-1 text-xs">
        <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm4.293-5.293a1 1 0 001.414 0L10 9.414V3a1 1 0 112 0v6.414l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        Download Badge Template
      </Button>
      </div>
  )
}

export default function BadgeTemplatePage() {
  const inputRef = useRef(null)
  const [dragOver, setDragOver] = useState(false)
  const [uploadedFile, setUploadedFile] = useState(null)

  function handleDrop(e) {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    if (file) setUploadedFile(file.name)
  }

  function handleFileChange(e) {
    const file = e.target.files[0]
    if (file) setUploadedFile(file.name)
  }

  return (
    <div className="space-y-6">

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Live preview */}
        <Panel title="Live Preview" className="!shadow-sm">
          <BadgePreview />
        </Panel>

        {/* Upload zone */}
        <div className="space-y-4">
          <Panel title="Upload Badge Template" className="!shadow-sm">
            <div
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors"
              style={{
                borderColor: dragOver ? 'var(--color-primary)' : 'var(--border-standard)',
                background: dragOver ? 'color-mix(in srgb, var(--color-primary) 6%, white)' : 'var(--bg-soft)',
              }}
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--color-text)', opacity: 0.4 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              {uploadedFile
                ? <p className="text-sm font-semibold" style={{ color: 'var(--color-tertiary)' }}>{uploadedFile}</p>
                : <>
                    <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>Click to select file or drag &amp; drop it here</p>
                    <p className="text-xs" style={{ color: 'var(--color-text)', opacity: 0.5 }}>Supported file formats &quot;folder&quot;</p>
                  </>
              }
            </div>
            <input ref={inputRef} type="file" className="hidden" onChange={handleFileChange} />

            <p className="mt-3 text-sm" style={{ color: 'var(--color-text)', opacity: 0.6 }}>
              Use your own folder or download our{' '}
              <Button variant="ghost" className="h-auto border-0 bg-transparent p-0 font-semibold underline hover:bg-transparent">
                Badge template
              </Button>
            </p>
          </Panel>

          <Panel className="!shadow-sm">
            <img
              src="/badge.png"
              alt="Badge template mapping"
              className="w-full rounded-lg border border-[color:var(--border-standard)] object-contain"
            />
          </Panel>
        </div>
      </div>
    </div>
  )
}
