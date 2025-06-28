import { getProducts } from "@/lib/api"
import ProductCard from "@/components/products/ProductCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function FeaturedProducts() {
  const products = await getProducts({ featured: true, limit: 8 })

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-xl text-muted-foreground">Discover our most popular items</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
