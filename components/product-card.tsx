'use client'

import { Button } from '@/components/ui/button'
import { Star, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

interface Product {
  id: number
  name: string
  category: string
  price: string
  description: string
  image: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="group flex flex-col h-full rounded-2xl overflow-hidden bg-background border border-muted hover:border-primary transition-all duration-300">
      {/* Image */}
      <div
        className="relative h-48 bg-gradient-to-br from-secondary to-muted overflow-hidden flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`text-6xl transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          {product.image === 'serum' && '🧴'}
          {product.image === 'mask' && '💆'}
          {product.image === 'moisturizer' && '🧴'}
          {product.image === 'hairserum' && '✨'}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 gap-3">
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wider">
            {product.category}
          </p>
          <h3 className="font-serif text-lg font-semibold text-foreground mt-2">
            {product.name}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex gap-1 items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className="fill-primary text-primary"
            />
          ))}
          <span className="text-xs text-muted-foreground ml-2">(48)</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-4 border-t border-muted">
          <p className="font-serif text-2xl font-semibold text-foreground">
            {product.price}
          </p>
          <Button
            size="sm"
            className="bg-primary hover:bg-accent text-background"
          >
            <ShoppingCart size={16} />
          </Button>
        </div>
      </div>
    </div>
  )
}
