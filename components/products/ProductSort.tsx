"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductSort() {
  return (
    <Select defaultValue="latest">
      <SelectTrigger className="w-40">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="latest">Latest</SelectItem>
        <SelectItem value="price-asc">Price ↑</SelectItem>
        <SelectItem value="price-desc">Price ↓</SelectItem>
      </SelectContent>
    </Select>
  )
}
