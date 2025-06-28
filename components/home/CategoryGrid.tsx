import Link from "next/link"
import Image from "next/image"
import { getCategories } from "@/lib/api"

export default async function CategoryGrid() {
  const categories = await getCategories({ limit: 6 })

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-xl text-muted-foreground">Find exactly what you're looking for</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <Image
                src={category.image || "/placeholder.svg?height=300&width=300"}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold text-center">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
