export default function AdminStats() {
  const stats = [
    { label: "Revenue", value: "$12 430" },
    { label: "Orders", value: "276" },
    { label: "Customers", value: "1 052" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-lg border bg-card p-6 text-center">
          <p className="text-sm text-muted-foreground">{s.label}</p>
          <p className="text-2xl font-bold">{s.value}</p>
        </div>
      ))}
    </div>
  )
}
