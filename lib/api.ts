const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

// Generic API function
async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  }

  // Add auth token if available
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("auth_token")
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      }
    }
  }

  const response = await fetch(url, config)

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`)
  }

  return response.json()
}

// Products API ─ now resilient in the preview sandbox
export async function getProducts(params?: {
  category?: string
  search?: string
  sort?: string
  page?: number
  limit?: number
  featured?: boolean
}) {
  const searchParams = new URLSearchParams()

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.append(key, value.toString())
      }
    })
  }

  try {
    // Try the real backend first
    return await apiRequest(`/products?${searchParams.toString()}`)
  } catch (err) {
    // Fallback for local / preview environments
    console.warn("⚠️  Product API request failed — serving mock data instead.", err)

    let products = mockProducts

    // basic filtering on the mock data
    if (params?.featured) {
      products = products.filter((p) => p.isFeatured)
    }
    if (params?.category) {
      products = products.filter((p) => p.category.slug === params.category)
    }
    if (params?.search) {
      const q = params.search.toLowerCase()
      products = products.filter((p) => p.name.toLowerCase().includes(q))
    }
    if (params?.limit) {
      products = products.slice(0, params.limit)
    }

    return products
  }
}

export async function getProduct(slug: string) {
  return apiRequest(`/products/${slug}`)
}

// Categories API ─ now resilient in the preview sandbox
export async function getCategories(params?: { limit?: number }) {
  const searchParams = new URLSearchParams()
  if (params?.limit) {
    searchParams.append("limit", params.limit.toString())
  }

  try {
    return await apiRequest(`/categories?${searchParams.toString()}`)
  } catch (err) {
    // Fallback for local / preview environments where the Laravel API isn't running
    console.warn("⚠️  Category API request failed — serving mock data instead.", err)
    const categories = mockCategories
    return params?.limit ? categories.slice(0, params.limit) : categories
  }
}

// Blog API ─ now resilient in the preview sandbox
export async function getBlogPosts(params?: {
  category?: string
  tag?: string
  page?: number
  limit?: number
}) {
  const searchParams = new URLSearchParams()

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.append(key, value.toString())
      }
    })
  }

  try {
    return await apiRequest(`/blog?${searchParams.toString()}`)
  } catch (err) {
    console.warn("⚠️  Blog API request failed — serving mock data instead.", err)
    let posts = mockBlogPosts

    if (params?.limit) posts = posts.slice(0, params.limit)
    if (params?.category) posts = posts.filter((p) => p.categories?.includes(params.category))
    if (params?.tag) posts = posts.filter((p) => p.tags?.includes(params.tag))

    return posts
  }
}

export async function getBlogPost(slug: string) {
  try {
    return await apiRequest(`/blog/${slug}`)
  } catch (err) {
    console.warn("⚠️  Blog API request failed — serving mock data instead.", err)
    return mockBlogPosts.find((p) => p.slug === slug) ?? null
  }
}

// Orders API
export async function createOrder(orderData: any) {
  return apiRequest("/orders", {
    method: "POST",
    body: JSON.stringify(orderData),
  })
}

export async function getOrders() {
  return apiRequest("/orders")
}

// Mock data for development
export const mockProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    slug: "premium-wireless-headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 299.99,
    salePrice: 249.99,
    images: ["/placeholder.svg?height=400&width=400"],
    categoryId: "1",
    category: { id: "1", name: "Electronics", slug: "electronics" },
    isOnSale: true,
    isFeatured: true,
    rating: 4.5,
    reviewCount: 128,
    stock: 50,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
  },
  // Add more mock products...
]

export const mockCategories = [
  {
    id: "1",
    name: "Electronics",
    slug: "electronics",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    name: "Clothing",
    slug: "clothing",
    image: "/placeholder.svg?height=300&width=300",
  },
  // Add more mock categories...
]

export const mockBlogPosts = [
  {
    id: "1",
    title: "Welcome to ModernShop",
    slug: "welcome-to-modernshop",
    excerpt: "A quick overview of our brand-new store and what you can expect.",
    content:
      "<p>Thanks for stopping by! We’re excited to bring you a curated selection of premium products and unbeatable service.</p>",
    featuredImage: "/placeholder.svg?height=400&width=800",
    author: { id: "u1", name: "Admin" },
    publishedAt: "2024-01-01",
  },
  {
    id: "2",
    title: "Top 5 Gadgets of 2024",
    slug: "top-5-gadgets-2024",
    excerpt: "Our picks for the must-have tech releases this year.",
    content:
      "<p>From noise-cancelling headphones to AI-powered home assistants, here are the devices we’re most excited about.</p>",
    featuredImage: "/placeholder.svg?height=400&width=800",
    author: { id: "u1", name: "Admin" },
    publishedAt: "2024-02-15",
  },
]
