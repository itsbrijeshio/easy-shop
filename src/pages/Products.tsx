/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, ChevronDown, SlidersHorizontal, Search } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Products() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  
  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", "men", "women", "kids"];
  const sizes = ["XS", "S", "M", "L", "XL", "30", "32", "34"];
  const colors = [
    { name: "White", value: "#FFFFFF" },
    { name: "Black", value: "#000000" },
    { name: "Beige", value: "#F5F5DC" },
    { name: "Grey", value: "#808080" },
    { name: "Blue", value: "#0000FF" },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category
    if (categoryFilter !== "all") {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Search
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortOrder === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "popular") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [categoryFilter, searchQuery, sortOrder]);

  return (
    <div className="container mx-auto px-4 pt-32 pb-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h1 className="font-heading text-5xl font-bold tracking-tight mb-4">All Collections</h1>
          <p className="text-muted-foreground tracking-wide">Showing {filteredProducts.length} results</p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-muted border-none pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
            />
          </div>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Latest Arrivals</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Filters */}
        <aside className="hidden lg:block space-y-10">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 flex items-center gap-2">
              <Filter className="w-3 h-3" /> CATEGORY
            </h4>
            <div className="flex flex-col gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`text-sm text-left uppercase tracking-widest font-medium transition-colors ${
                    categoryFilter === cat ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">SIZE</h4>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  className="border border-muted p-2 text-[10px] font-bold hover:border-primary transition-all text-center"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">COLORS</h4>
            <div className="flex flex-wrap gap-3">
              {colors.map(color => (
                <button
                  key={color.name}
                  title={color.name}
                  className="w-8 h-8 rounded-full border border-muted hover:scale-110 transition-transform p-0.5"
                >
                  <div className="w-full h-full rounded-full" style={{ backgroundColor: color.value }} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">PRICE RANGE</h4>
            <div className="space-y-4">
              <input type="range" className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary" />
              <div className="flex justify-between text-xs text-muted-foreground font-bold">
                <span>₹0</span>
                <span>₹20,000+</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-24 pt-12 border-t flex items-center justify-between">
                <Button variant="ghost" className="uppercase tracking-widest text-[10px] font-bold" disabled>Previous</Button>
                <div className="flex gap-4">
                  <span className="w-8 h-8 flex items-center justify-center font-bold text-sm bg-primary text-primary-foreground">1</span>
                  <span className="w-8 h-8 flex items-center justify-center font-bold text-sm hover:bg-muted cursor-pointer transition-colors">2</span>
                  <span className="w-8 h-8 flex items-center justify-center font-bold text-sm hover:bg-muted cursor-pointer transition-colors">3</span>
                </div>
                <Button variant="ghost" className="uppercase tracking-widest text-[10px] font-bold">Next</Button>
              </div>
            </>
          ) : (
            <div className="py-24 text-center">
              <SlidersHorizontal className="w-12 h-12 text-muted-foreground mx-auto mb-6" />
              <h3 className="font-heading text-2xl font-bold mb-4">No products found</h3>
              <p className="text-muted-foreground mb-8">Try adjusting your search or filters to find what you're looking for.</p>
              <Button onClick={() => { setCategoryFilter("all"); setSearchQuery(""); }} variant="outline">Clear All Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
