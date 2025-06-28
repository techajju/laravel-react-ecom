export default function BlogSidebar() {
  const categories = ["Announcements", "Tips", "Guides"]
  return (
    <aside className="space-y-4">
      <h4 className="font-semibold">Categories</h4>
      <ul className="space-y-2">
        {categories.map((c) => (
          <li key={c}>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              {c}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
