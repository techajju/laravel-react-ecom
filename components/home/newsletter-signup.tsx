"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function NewsletterSignup() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: replace with your API endpoint
    await new Promise((r) => setTimeout(r, 600))
    toast({
      title: "Subscribed!",
      description: "You'll now receive our best offers and product news.",
    })
    setEmail("")
  }

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 text-center space-y-6 max-w-xl">
        <h2 className="text-3xl font-bold">Join our newsletter</h2>
        <p className="text-muted-foreground">Be the first to know about new collections &amp; exclusive offers.</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
          <Input
            required
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="sm:w-40">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
