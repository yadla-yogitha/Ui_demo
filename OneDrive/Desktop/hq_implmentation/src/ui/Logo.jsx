export default function Logo({ className = 'h-10' }) {
  return (
    <img
      src="/logo.png"
      alt="AVIVA"
      className={`block h-auto w-auto max-w-full object-contain ${className}`}
    />
  )
}
