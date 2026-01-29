import { CheckCircle, Circle } from 'lucide-react'

interface CompareRow {
  feature: string
  fujin: boolean | string
  competitor: boolean | string
}

interface CompareTableProps {
  items: CompareRow[]
}

export const CompareTable: React.FC<CompareTableProps> = ({ items }) => {
  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckCircle className="text-fujin-orange" size={24} />
      ) : (
        <Circle className="text-slate" size={24} />
      )
    }
    return <span className="text-slate">{value}</span>
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-fujin-orange">
            <th className="px-4 py-3 text-left font-semibold text-cloud">Feature</th>
            <th className="px-4 py-3 text-center font-semibold text-fujin-orange">
              Fujin
            </th>
            <th className="px-4 py-3 text-center font-semibold text-cloud">
              Competitors
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr
              key={idx}
              className={`border-b border-slate/20 ${
                idx % 2 === 0 ? 'bg-charcoal/50' : 'bg-midnight/50'
              }`}
            >
              <td className="px-4 py-3 text-cloud font-medium">{item.feature}</td>
              <td className="px-4 py-3 text-center">{renderCell(item.fujin)}</td>
              <td className="px-4 py-3 text-center">{renderCell(item.competitor)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
