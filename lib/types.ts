export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  salePrice?: number
  images: string[]
  categoryId: string
  category: Category
  isOnSale: boolean
  isFeatured: boolean
  rating: number
  reviewCount: number
  stock: number
  variants?: ProductVariant[]
  createdAt: string
  updatedAt: string
}

export interface ProductVariant {
  id: string
  name: string
  value: string
  type: "color" | "size" | "material"
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
  parentId?: string
  children?: Category[]
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  author: User
  categories: BlogCategory[]
  tags: string[]
  publishedAt: string
  createdAt: string
  updatedAt: string
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description?: string
}

export interface User {
  id: string
  name: string
  email: string
  role: "user" | "admin"
  avatar?: string
  createdAt: string
}

export interface Order {
  id: string
  userId: string
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  items: OrderItem[]
  total: number
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: string
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  id: string
  productId: string
  product: Product
  quantity: number
  price: number
  variants?: ProductVariant[]
}

export interface Address {
  firstName: string
  lastName: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  zipCode: string
  country: string
  phone?: string
}
