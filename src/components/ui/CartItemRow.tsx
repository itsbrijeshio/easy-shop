/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Trash2, Plus, Minus } from "lucide-react";
import { CartItem } from "@/types";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

interface CartItemRowProps {
  item: CartItem;
  key?: string | number;
}

export default function CartItemRow({ item }: CartItemRowProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 md:gap-6 py-6 border-b border-muted last:border-0 group">
      <div className="w-24 h-32 flex-shrink-0 bg-muted overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col flex-grow justify-between py-1">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{item.brand}</span>
            <h3 className="font-heading text-xl mt-1">{item.name}</h3>
            <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 uppercase font-medium">
                Size: <span className="text-foreground">{item.selectedSize}</span>
              </span>
              <span className="flex items-center gap-1.5 uppercase font-medium">
                Color: <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: item.selectedColor }} />
              </span>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
            className="text-muted-foreground hover:text-destructive transition-colors p-1"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-between items-end mt-4">
          <div className="flex items-center border border-muted-foreground/20 rounded-sm">
            <button
              onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
              className="p-2 hover:bg-muted transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="px-4 text-sm font-medium w-10 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
              className="p-2 hover:bg-muted transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">₹{(item.price * item.quantity).toLocaleString()}</p>
            {item.quantity > 1 && (
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">₹{item.price.toLocaleString()} each</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
