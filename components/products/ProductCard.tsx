"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingCart, Star } from "lucide-react"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    })
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
  }

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.images[0] || "/placeholder.svg?height=300&width=300"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {product.isOnSale && <Badge className="absolute top-2 left-2 bg-red-500">Sale</Badge>}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-2 right-2 bg-white/80 hover:bg-white ${
              isWishlisted ? "text-red-500" : "text-gray-600"
            }`}
            onClick={handleWishlist}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
          </Button>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">{product.name}</h3>
        </Link>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">({product.reviewCount})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold">${product.salePrice || product.price}</span>
            {product.salePrice && <span className="text-sm text-muted-foreground line-through">${product.price}</span>}
          </div>

          <Button size="sm" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
