"use client"

import { Input } from "@/components/ui/input"

export default function ProductFilters() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Filters</h3>
      <Input placeholder="Search…" />
    </div>
  )
}
