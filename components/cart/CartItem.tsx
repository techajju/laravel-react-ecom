"use client"

import Image from "next/image"
import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"

export default function CartItem({ item }: { item: any }) {
  const { removeItem, updateQuantity } = useCart()

  return (
    <div className="flex gap-4 border-b py-4">
      <Image src={item.image || "/placeholder.svg"} alt={item.name} width={80} height={80} className="rounded-md" />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
        <div className="mt-2 flex items-center gap-2">
          <Button size="icon" variant="outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            –
          </Button>
          <span>{item.quantity}</span>
          <Button size="icon" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </Button>
        </div>
      </div>
      <Button variant="ghost" onClick={() => removeItem(`${item.id}-${item.size}-${item.color}`)}>
        Remove
      </Button>
    </div>
  )
}
