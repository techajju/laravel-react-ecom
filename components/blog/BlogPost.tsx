import type { BlogPost } from "@/lib/types"

export default function BlogPostComponent({ post }: { post: BlogPost }) {
  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      <img src={post.featuredImage || "/placeholder.svg"} alt="" />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
