export const TABLE_CLASS = 'min-w-full text-left text-sm'

export const TABLE_HEADER_ROW_CLASS =
  'bg-[color:var(--color-primary)] text-[color:var(--color-on-dark)]'

export const TABLE_HEADER_CELL_CLASS =
  'whitespace-nowrap px-4 py-3 text-left text-xs font-bold uppercase tracking-wide'

export const TABLE_ROW_BASE_CLASS =
  'border-t border-[color:var(--border-standard)] transition-colors hover:bg-[color:var(--bg-soft)]'

export function getStripedRowClass(index) {
  return `${TABLE_ROW_BASE_CLASS} ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`
}
