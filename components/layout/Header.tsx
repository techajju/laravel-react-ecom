"use client"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/contexts/CartContext"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react"

export default function Header() {
  const { items } = useCart()
  const { user, logout } = useAuth()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const cartItemsCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MS</span>
            </div>
            <span className="font-bold text-xl">ModernShop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input type="search" placeholder="Search products..." className="pl-10" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="/wishlist">
                <Heart className="h-5 w-5" />
              </Link>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/orders">Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/products" className="text-lg font-medium">
                    Products
                  </Link>
                  <Link href="/categories" className="text-lg font-medium">
                    Categories
                  </Link>
                  <Link href="/blog" className="text-lg font-medium">
                    Blog
                  </Link>
                  <Link href="/about" className="text-lg font-medium">
                    About
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
