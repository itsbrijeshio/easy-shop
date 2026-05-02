/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { motion } from "motion/react";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-muted mb-4">
        {/* Product Image */}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discount > 0 && (
            <Badge variant="destructive" className="rounded-none font-sans text-[10px] tracking-widest px-2 py-0.5">
              -{product.discount}%
            </Badge>
          )}
          {product.tags.includes("New Arrival") && (
            <Badge variant="secondary" className="rounded-none font-sans text-[10px] tracking-widest px-2 py-0.5 bg-background border-none">
              NEW
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300">
          <Heart className="w-4 h-4 text-foreground/70" />
        </button>

        {/* Action Button - Quick Add */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <Button
            onClick={() => addToCart(product, product.sizes[0], product.colors[0], 1)}
            className="w-full rounded-none tracking-widest font-sans text-[10px] bg-primary/90 hover:bg-primary backdrop-blur-md border-none"
          >
            <ShoppingBag className="w-3.5 h-3.5 mr-2" />
            QUICK ADD
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 px-1">
        <div className="flex justify-between items-start">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            {product.brand}
          </span>
          <div className="flex items-center gap-1 text-[10px] text-yellow-600 font-bold">
            <Star className="w-2.5 h-2.5 fill-current" />
            {product.rating}
          </div>
        </div>
        <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors">
          <h3 className="font-heading text-lg font-medium leading-tight">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-bold">₹{product.price.toLocaleString()}</span>
          {product.discount > 0 && (
            <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
