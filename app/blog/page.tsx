import { Suspense } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import BlogGrid from "@/components/blog/BlogGrid"
import BlogSidebar from "@/components/blog/BlogSidebar"
import { BlogCardSkeleton } from "@/components/ui/skeletons"

export const metadata = {
  title: "Blog - ModernShop",
  description: "Latest news, tips, and insights from ModernShop",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-muted-foreground">Latest news, tips, and insights</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Suspense fallback={<BlogCardSkeleton count={6} />}>
              <BlogGrid />
            </Suspense>
          </div>
          <aside className="lg:col-span-1">
            <BlogSidebar />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
