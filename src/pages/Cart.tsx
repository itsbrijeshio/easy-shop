/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, ShieldCheck, Truck, Lock } from "lucide-react";
import { motion } from "motion/react";
import { useCart } from "@/context/CartContext";
import CartItemRow from "@/components/ui/CartItemRow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Cart() {
  const { cart, cartTotal, clearCart } = useCart();
  const shippingThreshold = 1999;
  const shippingCost = cartTotal > shippingThreshold ? 0 : 250;
  const tax = cartTotal * 0.18;
  const finalTotal = cartTotal + shippingCost + tax;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-40 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mb-8"
        >
          <ShoppingBag className="w-12 h-12 text-muted-foreground" />
        </motion.div>
        <h1 className="font-heading text-5xl font-black tracking-tight mb-4">Your bag is empty.</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-sm">
          It looks like you haven't added anything to your cart yet. Browse our collections to find something you'll love.
        </p>
        <Link to="/products">
          <Button className="rounded-none px-12 py-7 font-bold uppercase tracking-widest text-xs">
            Start Shopping <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-5xl font-black tracking-tight mb-16">Shopping Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Items List */}
          <div className="lg:col-span-2">
            <div className="border-t border-muted">
              {cart.map((item) => (
                <CartItemRow key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} item={item} />
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <Button variant="ghost" onClick={clearCart} className="uppercase tracking-widest text-[10px] font-bold text-destructive">
                Clear Cart
              </Button>
              <Link to="/products">
                <Button variant="ghost" className="uppercase tracking-widest text-[10px] font-bold">
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Continue Shopping
                </Button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-muted p-8 sticky top-32">
              <h2 className="font-heading text-2xl font-bold mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Subtotal</span>
                  <span className="font-bold">₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Estimated Shipping</span>
                  <span className="font-bold">{shippingCost === 0 ? "FREE" : `₹${shippingCost}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Estimated Tax (18% GST)</span>
                  <span className="font-bold">₹{Math.round(tax).toLocaleString()}</span>
                </div>
                {shippingCost > 0 && (
                  <p className="text-[10px] italic text-primary text-right">
                    Add ₹{(shippingThreshold - cartTotal).toLocaleString()} more for free shipping!
                  </p>
                )}
              </div>

              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-widest font-black mb-3">Promo Code</p>
                <div className="flex gap-2">
                  <Input placeholder="Enter code" className="rounded-none bg-background py-3" />
                  <Button variant="outline" className="rounded-none px-6">Apply</Button>
                </div>
              </div>

              <Separator className="bg-muted-foreground/20 mb-6" />

              <div className="flex justify-between items-end mb-10">
                <span className="font-heading text-3xl font-black">Total</span>
                <span className="font-heading text-3xl font-black">₹{Math.round(finalTotal).toLocaleString()}</span>
              </div>

              <Button className="w-full h-16 rounded-none uppercase tracking-widest font-bold text-xs mb-6">
                Proceed to Checkout
              </Button>

              <div className="space-y-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Prompt Delivery Within 5 Days</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Reliable Authentication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
