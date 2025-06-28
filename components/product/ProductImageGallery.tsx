"use client"

import Image from "next/image"
import { useState } from "react"

export default function ProductImageGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0)
  return (
    <div>
      <Image src={images[active] || "/placeholder.svg"} alt="" width={600} height={600} className="rounded-lg" />
      <div className="mt-4 flex gap-2">
        {images.map((img, i) => (
          <button key={i} onClick={() => setActive(i)} className={i === active ? "ring-2 ring-primary rounded" : ""}>
            <Image src={img || "/placeholder.svg"} alt="" width={80} height={80} className="rounded-md" />
          </button>
        ))}
      </div>
    </div>
  )
}
