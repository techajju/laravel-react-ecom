"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function CheckoutForm({
  isProcessing,
  setIsProcessing,
}: {
  isProcessing: boolean
  setIsProcessing: (v: boolean) => void
  user: any
}) {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setTimeout(() => setIsProcessing(false), 1000) // stub
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button type="submit" disabled={isProcessing} className="w-full">
        {isProcessing ? "Processing…" : "Pay"}
      </Button>
    </form>
  )
}
