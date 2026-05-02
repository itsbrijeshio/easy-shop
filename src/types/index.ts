/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Category = "men" | "women" | "kids";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  category: Category;
  sizes: string[];
  colors: string[];
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
  description: string;
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  date: string;
  amount: number;
  status: "Pending" | "Shipped" | "Delivered";
  items: CartItem[];
}
