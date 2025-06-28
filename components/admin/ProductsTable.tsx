import { mockProducts } from "@/lib/api"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductsTable() {
  return (
    <div className="rounded-lg border bg-card p-6 overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="border-b">
          <tr>
            <th className="py-2 text-left">Name</th>
            <th className="py-2 text-left">Price</th>
            <th className="py-2 text-left">Stock</th>
            <th className="py-2" />
          </tr>
        </thead>
        <tbody>
          {mockProducts.map((p) => (
            <tr key={p.id} className="border-b last:border-0">
              <td className="py-2">{p.name}</td>
              <td className="py-2">${p.price.toFixed(2)}</td>
              <td className="py-2">{p.stock}</td>
              <td className="py-2 text-right">
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/admin/products/${p.id}`}>Edit</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
