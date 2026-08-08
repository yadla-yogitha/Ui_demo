export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-55'

  const variants = {
    primary:
      'bg-[color:var(--color-primary)] border-[color:var(--color-primary)] text-[color:var(--color-on-dark)] hover:brightness-95 focus-visible:ring-[color:var(--color-primary)]',
    secondary:
      'bg-[color:var(--color-secondary)] border-[color:var(--color-secondary)] text-[color:var(--color-text)] hover:brightness-95 focus-visible:ring-[color:var(--color-secondary)]',
    ghost:
      'bg-white border-[color:var(--border-standard)] text-[color:var(--color-primary)] hover:bg-[color:var(--bg-soft)] focus-visible:ring-[color:var(--color-primary)]',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
