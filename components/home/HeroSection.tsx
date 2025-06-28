import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Discover Premium
              <span className="text-primary block">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Shop the latest collection of premium products with fast shipping and excellent customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Hero Product"
              width={600}
              height={500}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
