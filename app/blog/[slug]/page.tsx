import { Suspense } from "react"
import { notFound } from "next/navigation"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import BlogPost from "@/components/blog/BlogPost"
import BlogComments from "@/components/blog/BlogComments"
import BlogSidebar from "@/components/blog/BlogSidebar"
import { getBlogPost } from "@/lib/api"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} - ModernShop Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <BlogPost post={post} />
            <div className="mt-12">
              <Suspense fallback={<div>Loading comments...</div>}>
                <BlogComments postId={post.id} />
              </Suspense>
            </div>
          </article>
          <aside className="lg:col-span-1">
            <BlogSidebar />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
