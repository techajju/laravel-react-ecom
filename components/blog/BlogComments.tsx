"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function BlogComments({ postId }: { postId: string }) {
  const [comment, setComment] = useState("")
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setComment("")
    alert("Comment submitted (stub)")
  }

  return (
    <section className="space-y-4">
      <h4 className="font-semibold">Comments</h4>
      <form onSubmit={handleSubmit} className="space-y-2">
        <Textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment…" />
        <Button type="submit">Post</Button>
      </form>
    </section>
  )
}
