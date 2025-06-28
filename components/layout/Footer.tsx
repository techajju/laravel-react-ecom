import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MS</span>
              </div>
              <span className="font-bold text-xl">ModernShop</span>
            </div>
            <p className="text-muted-foreground">
              Your trusted partner for premium products and exceptional shopping experience.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/products" className="block text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <Link href="/categories" className="block text-muted-foreground hover:text-foreground transition-colors">
                Categories
              </Link>
              <Link href="/blog" className="block text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold">Customer Service</h3>
            <div className="space-y-2">
              <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
              <Link href="/shipping" className="block text-muted-foreground hover:text-foreground transition-colors">
                Shipping Info
              </Link>
              <Link href="/returns" className="block text-muted-foreground hover:text-foreground transition-colors">
                Returns
              </Link>
              <Link href="/faq" className="block text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get updates on new products and exclusive offers.
            </p>
            <div className="space-y-2">
              <Input type="email" placeholder="Enter your email" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 ModernShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
