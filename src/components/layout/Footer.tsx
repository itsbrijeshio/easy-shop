/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-[#FAF9F6] py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="font-heading text-3xl font-bold tracking-tighter">
            EasyShop
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Refined luxury fashion for the modern individual. Quality materials meets timeless design.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading text-lg mb-6">Collections</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li><Link to="/products?category=men" className="hover:text-white transition-colors">Men's Wear</Link></li>
            <li><Link to="/products?category=women" className="hover:text-white transition-colors">Women's Wear</Link></li>
            <li><Link to="/products?category=kids" className="hover:text-white transition-colors">Kids & Toddlers</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Assistance */}
        <div>
          <h4 className="font-heading text-lg mb-6">Help</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-heading text-lg mb-6">Stay Inspired</h4>
          <p className="text-sm text-gray-400 mb-4">Join our newsletter for exclusive collections and news.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-zinc-800 border-none px-4 py-2 text-sm w-full focus:ring-1 focus:ring-primary transition-all"
            />
            <button className="bg-[#FAF9F6] text-[#1A1A1A] p-2 hover:bg-primary hover:text-white transition-all">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
        <p>© {currentYear} EasyShop Fashion. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
