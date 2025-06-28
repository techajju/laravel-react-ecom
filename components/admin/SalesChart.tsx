"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Card, CardContent } from "@/components/ui/card"

const data = Array.from({ length: 12 }).map((_, i) => ({
  month: new Date(0, i).toLocaleString("en", { month: "short" }),
  sales: Math.floor(Math.random() * 5000) + 1000,
}))

export default function SalesChart() {
  return (
    <Card>
      <CardContent className="h-64 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="hsl(var(--primary))" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
