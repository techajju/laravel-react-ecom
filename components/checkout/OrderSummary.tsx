import Image from "next/image"

export default function OrderSummary({ items, total }: { items: any[]; total: number }) {
  return (
    <div className="rounded-lg border bg-card p-6 space-y-4">
      <h2 className="font-semibold">Order Summary</h2>
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3">
            <Image src={item.image || "/placeholder.svg"} alt={item.name} width={50} height={50} className="rounded" />
            <div className="flex-1">
              <p className="text-sm">{item.name}</p>
              <p className="text-xs text-muted-foreground">
                {item.quantity} × ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  )
}
