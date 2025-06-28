import { Suspense } from "react"
import ProductsTable from "@/components/admin/ProductsTable"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600">Manage your product catalog</p>
        </div>
        <Button asChild>
          <Link href="/admin/products/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Link>
        </Button>
      </div>

      <Suspense fallback={<div>Loading products...</div>}>
        <ProductsTable />
      </Suspense>
    </div>
  )
}
