"use client"

import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CartSummary() {
  const { total } = useCart()

  return (
    <div className="rounded-lg border bg-card p-6 space-y-4">
      <h2 className="font-semibold">Summary</h2>
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <Button className="w-full" asChild>
        <Link href="/checkout">Proceed to Checkout</Link>
      </Button>
    </div>
  )
}
