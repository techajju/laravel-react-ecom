import ProductCard from "@/components/products/ProductCard"
import { getProducts } from "@/lib/api"
import type { Product } from "@/lib/types"

interface SearchParams {
  category?: string
  search?: string
  sort?: string
  page?: string
  limit?: string
}

/**
 * Server Component that fetches products based on the URL search params
 * and renders them in a responsive grid.
 */
export default async function ProductGrid({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { category, search, sort = "latest", page = "1", limit = "12" } = searchParams

  const products: Product[] = await getProducts({
    category,
    search,
    sort,
    page: Number(page),
    limit: Number(limit),
  })

  if (products.length === 0) {
    return <p className="text-muted-foreground">No products found. Try adjusting your filters.</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
