import { Suspense } from "react"
import { notFound } from "next/navigation"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ProductImageGallery from "@/components/product/ProductImageGallery"
import ProductInfo from "@/components/product/ProductInfo"
import ProductReviews from "@/components/product/ProductReviews"
import RelatedProducts from "@/components/product/RelatedProducts"
import { getProduct } from "@/lib/api"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} - ModernShop`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ProductImageGallery images={product.images} />
          <ProductInfo product={product} />
        </div>

        <div className="mb-12">
          <ProductReviews productId={product.id} />
        </div>

        <Suspense fallback={<div>Loading related products...</div>}>
          <RelatedProducts categoryId={product.categoryId} currentProductId={product.id} />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
