import type React from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
