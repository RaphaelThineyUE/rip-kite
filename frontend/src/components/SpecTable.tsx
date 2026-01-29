interface SpecTableProps {
  columns: string[]
  rows: (string | number)[][]
  title?: string
}

export const SpecTable: React.FC<SpecTableProps> = ({ columns, rows, title }) => {
  return (
    <div className="overflow-x-auto">
      {title && <h3 className="heading-md mb-4">{title}</h3>}
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-fujin-orange">
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-4 py-3 text-left font-semibold text-fujin-orange"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={`border-b border-slate/20 ${
                rowIdx % 2 === 0 ? 'bg-charcoal/50' : 'bg-midnight/50'
              }`}
            >
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 text-slate">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
