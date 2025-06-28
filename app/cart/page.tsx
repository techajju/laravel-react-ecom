"use client"

import { useCart } from "@/contexts/CartContext"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CartItem from "@/components/cart/CartItem"
import CartSummary from "@/components/cart/CartSummary"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { items, total } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Add some products to get started</p>
            <Button asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem key={`${item.id}-${item.size}-${item.color}`} item={item} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
