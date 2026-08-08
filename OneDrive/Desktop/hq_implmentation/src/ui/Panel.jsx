export default function Panel({ title, right, children, className = '', ...props }) {
  return (
    <section
      className={`rounded-2xl border border-[color:var(--border-standard)] bg-white shadow-[0_4px_16px_rgba(26,43,65,0.05)] ${className}`}
      {...props}
    >
      {(title || right) && (
        <header className="flex items-center justify-between border-b border-[color:var(--border-standard)] px-6 py-4">
          <h2 className="text-xl font-extrabold tracking-tight text-[color:var(--color-text)]">{title}</h2>
          {right}
        </header>
      )}
      <div className="p-6">{children}</div>
    </section>
  )
}
