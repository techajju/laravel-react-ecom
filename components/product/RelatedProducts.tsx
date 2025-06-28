import { getProducts } from "@/lib/api"
import ProductCard from "@/components/products/ProductCard"

export default async function RelatedProducts({
  categoryId,
  currentProductId,
}: {
  categoryId: string
  currentProductId: string
}) {
  const products = await getProducts({ category: categoryId, limit: 4 })
  const filtered = products.filter((p: any) => p.id !== currentProductId)

  if (!filtered.length) return null

  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Related Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
