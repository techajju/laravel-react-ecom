"use client"

import { useState } from "react"
import { useCart } from "@/contexts/CartContext"
import { useAuth } from "@/contexts/AuthContext"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CheckoutForm from "@/components/checkout/CheckoutForm"
import OrderSummary from "@/components/checkout/OrderSummary"
import { redirect } from "next/navigation"

export default function CheckoutPage() {
  const { items, total } = useCart()
  const { user } = useAuth()
  const [isProcessing, setIsProcessing] = useState(false)

  if (items.length === 0) {
    redirect("/cart")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <CheckoutForm user={user} isProcessing={isProcessing} setIsProcessing={setIsProcessing} />
          </div>
          <div>
            <OrderSummary items={items} total={total} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
