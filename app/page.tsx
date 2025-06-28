import { Suspense } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/home/HeroSection"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import CategoryGrid from "@/components/home/CategoryGrid"
import NewsletterSignup from "@/components/home/newsletter-signup"
import { ProductCardSkeleton } from "@/components/ui/skeletons"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <Suspense fallback={<ProductCardSkeleton count={8} />}>
          <FeaturedProducts />
        </Suspense>
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  )
}
