import { mockProducts } from "@/lib/api"

export default function RecentOrders() {
  return (
    <div className="rounded-lg border bg-card p-6 overflow-x-auto">
      <h2 className="mb-4 font-semibold">Recent Orders</h2>
      <table className="w-full text-sm">
        <thead className="border-b">
          <tr>
            <th className="py-2 text-left">Order #</th>
            <th className="py-2 text-left">Customer</th>
            <th className="py-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {mockProducts.slice(0, 5).map((p, i) => (
            <tr key={i} className="border-b last:border-0">
              <td className="py-2">#{1000 + i}</td>
              <td className="py-2">John Doe</td>
              <td className="py-2">${p.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
