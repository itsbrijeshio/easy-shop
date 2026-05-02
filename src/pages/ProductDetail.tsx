/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShieldCheck, Truck, RotateCcw, Plus, Minus, Heart, Share2, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ui/ProductCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.image);

  useMemo(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
      setMainImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-40 text-center">
        <h2 className="font-heading text-4xl mb-6">Product not found</h2>
        <Link to="/products">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const thumbnails = [
    product.image,
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-12">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-foreground">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Photos */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-muted overflow-hidden relative">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.discount > 0 && (
                <Badge className="absolute top-6 left-6 rounded-none bg-primary px-4 py-1.5 text-xs tracking-widest">
                  {product.discount}% OFF
                </Badge>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {thumbnails.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`aspect-square overflow-hidden border-2 transition-all ${
                    mainImage === img ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="border-b pb-8 mb-8">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground block mb-4">
                {product.brand}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tight mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : ""}`} />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">{product.rating} / 5.0 ({product.reviews} Reviews)</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-black">₹{product.price.toLocaleString()}</span>
                {product.discount > 0 && (
                  <span className="text-xl text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                )}
              </div>
            </div>

            {/* Selection */}
            <div className="space-y-10 pb-8 border-b mb-8">
              {/* Color */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold">Select Color</span>
                  <span className="text-xs font-bold text-muted-foreground italic">Current: {selectedColor}</span>
                </div>
                <div className="flex gap-4">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 p-1 transition-all ${
                        selectedColor === color ? "border-primary scale-110" : "border-transparent"
                      }`}
                    >
                      <div className="w-full h-full rounded-full border" style={{ backgroundColor: color }} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] uppercase tracking-widest font-bold">Select Size</span>
                  <button className="text-[10px] uppercase tracking-widest font-bold border-b border-muted-foreground/30">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-12 w-16 border flex items-center justify-center text-sm font-bold transition-all ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold mb-4 block">Quantity</span>
                <div className="flex items-center border border-muted w-32 h-12">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex-1 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="flex-1 flex items-center justify-center font-bold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex-1 flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex gap-4">
                <Button
                  onClick={() => addToCart(product, selectedSize, selectedColor, quantity)}
                  className="flex-[2] h-14 rounded-none uppercase tracking-[0.2em] font-bold text-xs"
                >
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1 h-14 rounded-none uppercase tracking-[0.2em] font-bold text-xs border-foreground">
                  Buy Now
                </Button>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" className="flex-1 h-12 uppercase tracking-widest text-[10px] font-bold">
                  <Heart className="w-4 h-4 mr-2" /> Wishlist
                </Button>
                <Button variant="ghost" className="flex-1 h-12 uppercase tracking-widest text-[10px] font-bold">
                  <Share2 className="w-4 h-4 mr-2" /> Share
                </Button>
              </div>
            </div>

            {/* Info Accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="details">
                <AccordionTrigger className="uppercase tracking-widest text-[10px] font-bold">Product Details</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground py-4">
                  {product.description}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="uppercase tracking-widest text-[10px] font-bold">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="text-sm space-y-4 py-4">
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Standard Delivery</h4>
                      <p className="text-muted-foreground">3-5 business days. Free for orders above ₹1,999.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <RotateCcw className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Easy Returns</h4>
                      <p className="text-muted-foreground">90-day return policy for unused products in original packaging.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sustainability">
                <AccordionTrigger className="uppercase tracking-widest text-[10px] font-bold">Sustainability</AccordionTrigger>
                <AccordionContent className="text-sm py-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Eco-Conscious Materials</h4>
                      <p className="text-muted-foreground">We prioritize ethically sourced materials and low-impact production methods to reduce our carbon footprint.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-40">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-heading text-4xl font-bold">You May Also Like</h2>
            <Link to="/products" className="uppercase tracking-widest text-[10px] font-bold border-b-2 border-primary pb-1">Shop Collections</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
