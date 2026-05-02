/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, ShoppingBag, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl bg-background/30 backdrop-blur-xl p-8 md:p-12 border border-white/20"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-6 block">
              Spring / Summer 2026
            </span>
            <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8 text-foreground drop-shadow-sm">
              Wear What <br />
              <span className="italic text-primary">Feels</span> Right.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 font-medium mb-10 leading-relaxed max-w-lg">
              Discover a curated collection of refined essentials and statement pieces designed for elegance and daily comfort.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button className="rounded-none px-12 py-7 text-xs tracking-widest font-bold">
                  SHOP COLLECTIONS <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/products?category=women">
                <Button variant="outline" className="rounded-none px-12 py-7 text-xs tracking-widest font-bold border-foreground/30 hover:bg-foreground hover:text-background transition-all duration-500">
                  WOMEN'S
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute bottom-10 right-10 hidden lg:block"
        >
          <span className="font-heading text-[15vw] leading-none select-none pointer-events-none text-foreground font-black uppercase">
            ELEGANCE
          </span>
        </motion.div>
      </section>

      {/* Category Strip */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 uppercase tracking-[0.2em] text-xs font-bold">
            <Link to="/products?category=men" className="hover:text-primary transition-colors relative group">
              MEN
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link to="/products?category=women" className="hover:text-primary transition-colors relative group">
              WOMEN
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link to="/products?category=kids" className="hover:text-primary transition-colors relative group">
              KIDS
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link to="/products" className="text-destructive hover:text-destructive/80 transition-colors relative group">
              SALE
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-destructive transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4 block">Essentials</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">The Season's Best-Sellers</h2>
            </div>
            <Link to="/products" className="text-sm font-bold uppercase tracking-widest flex items-center border-b-2 border-primary pb-1 group transition-all">
              View All Products <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why EasyShop */}
      <section className="py-24 bg-zinc-900 text-zinc-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Fast & Global Shipping</h3>
              <p className="text-zinc-400 max-w-xs text-sm leading-relaxed">
                Enjoy complimentary shipping on orders over ₹1,999. Delivering to over 120 countries worldwide.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
                <RotateCcw className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold">90-Day Returns</h3>
              <p className="text-zinc-400 max-w-xs text-sm leading-relaxed">
                If the fit isn't right, or you've changed your mind, our hassle-free return policy has you covered.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Secure Checkout</h3>
              <p className="text-zinc-400 max-w-xs text-sm leading-relaxed">
                Your privacy and security are our priority. Shop with confidence using encrypted payment methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-muted p-12 md:p-24 flex flex-col items-center text-center relative z-10">
            <ShoppingBag className="w-12 h-12 text-primary mb-8 animate-bounce" />
            <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tighter mb-6">Join The Club.</h2>
            <p className="text-muted-foreground max-w-md text-lg mb-12">
              Subscribe to unlock 15% off your first order and receive early access to seasonal drops and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-background border-none px-6 py-4 text-sm focus:ring-2 focus:ring-primary outline-none"
              />
              <Button className="rounded-none px-12 py-4 h-auto text-xs tracking-widest font-bold">
                SUBSCRIBE NOW
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
