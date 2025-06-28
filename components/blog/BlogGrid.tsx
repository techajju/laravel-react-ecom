import { getBlogPosts } from "@/lib/api"

export default async function BlogGrid() {
  const posts = await getBlogPosts({ limit: 6 })

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post: any) => (
        <article key={post.id} className="rounded-lg border bg-card overflow-hidden">
          <img src={post.featuredImage || "/placeholder.svg"} alt="" className="h-40 w-full object-cover" />
          <div className="p-4 space-y-2">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
