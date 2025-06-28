import { Suspense } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ProductGrid from "@/components/products/product-grid"
import ProductFilters from "@/components/products/ProductFilters"
import ProductSort from "@/components/products/ProductSort"
import { ProductCardSkeleton } from "@/components/ui/skeletons"

interface SearchParams {
  category?: string
  search?: string
  sort?: string
  page?: string
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64">
            <ProductFilters />
          </aside>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Products</h1>
              <ProductSort />
            </div>
            <Suspense fallback={<ProductCardSkeleton count={12} />}>
              <ProductGrid searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
