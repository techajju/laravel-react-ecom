"use client"

import { PanelLeft } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background/95 px-4">
      <SidebarTrigger className="lg:hidden">
        <PanelLeft className="h-5 w-5" />
      </SidebarTrigger>
      <h1 className="font-semibold">Admin Panel</h1>
    </header>
  )
}
