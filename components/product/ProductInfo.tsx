"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/CartContext"

export default function ProductInfo({ product }: { product: any }) {
  const { addItem } = useCart()

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-muted-foreground">{product.description}</p>
      <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
      <Button onClick={() => addItem({ ...product, quantity: 1 })}>Add to Cart</Button>
    </div>
  )
}
