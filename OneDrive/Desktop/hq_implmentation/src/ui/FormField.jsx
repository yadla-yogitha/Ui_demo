export function TextField({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  defaultValue,
  required = false,
  hint,
  readOnly = false,
  className = '',
  inputClassName = '',
}) {
  return (
    <label className={`flex w-full flex-col gap-2 ${className}`}>
      <span className="text-sm font-semibold text-[color:var(--color-text)]">
        {label}
        {required && <span className="text-[color:var(--color-primary)]"> *</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`h-11 rounded-xl border border-[color:var(--border-standard)] bg-white px-3 text-sm text-[color:var(--color-text)] placeholder:text-slate-400 focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--focus-ring)] ${inputClassName}`}
      />
      {hint && <p className="text-xs text-[color:var(--color-primary)]">{hint}</p>}
    </label>
  )
}

export function SelectField({
  label,
  value,
  onChange,
  options,
  defaultValue,
  required = false,
  hint,
  className = '',
  selectClassName = '',
}) {
  return (
    <label className={`flex w-full flex-col gap-2 ${className}`}>
      <span className="text-sm font-semibold text-[color:var(--color-text)]">
        {label}
        {required && <span className="text-[color:var(--color-primary)]"> *</span>}
      </span>
      <select
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        className={`h-11 rounded-xl border border-[color:var(--border-standard)] bg-white px-3 text-sm text-[color:var(--color-text)] focus:border-[color:var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--focus-ring)] ${selectClassName}`}
      >
        {options.map((option) => {
          if (typeof option === 'string') {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            )
          }

          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
      {hint && <p className="text-xs text-[color:var(--color-primary)]">{hint}</p>}
    </label>
  )
}
