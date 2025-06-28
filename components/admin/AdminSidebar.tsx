"use client"

import Link from "next/link"
import { PanelLeft } from "lucide-react"
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"

export default function AdminSidebar() {
  return (
    <Sidebar className="w-64 border-r bg-muted/50">
      <SidebarContent>
        <SidebarMenu>
          {[
            { href: "/admin", label: "Dashboard" },
            { href: "/admin/products", label: "Products" },
            { href: "/admin/orders", label: "Orders" },
          ].map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>{item.label}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <span className="absolute bottom-4 left-4 flex items-center gap-1 text-muted-foreground text-xs">
        <PanelLeft className="h-3 w-3" /> Admin
      </span>
    </Sidebar>
  )
}
