import {
  TABLE_CLASS,
  TABLE_HEADER_CELL_CLASS,
  TABLE_HEADER_ROW_CLASS,
  getStripedRowClass,
} from './tableStyles'

function getColumnKey(column) {
  if (typeof column === 'string') return column
  return column.key ?? column.label
}

function getColumnLabel(column) {
  if (typeof column === 'string') return column
  return column.label
}

export default function DataTable({
  columns,
  rows,
  getRowKey,
  renderRow,
  className = '',
  headerCellTextClassName = 'text-[color:var(--color-on-dark)]',
}) {
  return (
    <table className={`${TABLE_CLASS} ${className}`}>
      <thead>
        <tr className={TABLE_HEADER_ROW_CLASS}>
          {columns.map((column) => (
            <th
              key={getColumnKey(column)}
              className={`${TABLE_HEADER_CELL_CLASS} ${headerCellTextClassName}`}
            >
              {getColumnLabel(column)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={getRowKey(row, index)} className={getStripedRowClass(index)}>
            {renderRow(row, index)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
