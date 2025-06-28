export default function ProductReviews({ productId }: { productId: string }) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">Reviews</h3>
      <p className="text-muted-foreground text-sm">No reviews yet.</p>
    </div>
  )
}
