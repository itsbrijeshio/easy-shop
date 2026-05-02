/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plus, Search, Edit2, Trash2, ExternalLink } from "lucide-react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AdminProducts() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 shadow-sm">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search catalog..." className="pl-10 rounded-none border-zinc-200" />
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-none gap-2 uppercase tracking-widest text-[10px] font-black h-12 px-8">
              <Plus className="w-4 h-4" /> Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] rounded-none border-none">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">Add New Product</DialogTitle>
              <DialogDescription className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                Enter product details to update your catalog.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
              <div className="grid gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest">Product Name</label>
                <Input placeholder="E.g. Linen Blouse" className="rounded-none shadow-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest">Price (₹)</label>
                  <Input type="number" placeholder="2999" className="rounded-none shadow-none" />
                </div>
                <div className="grid gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest">Category</label>
                  <Input placeholder="Women" className="rounded-none shadow-none" />
                </div>
              </div>
              <div className="grid gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest">Image URL</label>
                <Input placeholder="https://..." className="rounded-none shadow-none" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full rounded-none h-12 font-black tracking-[0.2em] text-[10px] uppercase">
                Create Product
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-50">
            <TableRow className="border-zinc-100 hover:bg-transparent">
              <TableHead className="w-[100px] text-[10px] uppercase tracking-widest font-black">Image</TableHead>
              <TableHead className="text-[10px] uppercase tracking-widest font-black">Details</TableHead>
              <TableHead className="text-[10px] uppercase tracking-widest font-black">Category</TableHead>
              <TableHead className="text-[10px] uppercase tracking-widest font-black">Price</TableHead>
              <TableHead className="text-[10px] uppercase tracking-widest font-black">Status</TableHead>
              <TableHead className="text-right text-[10px] uppercase tracking-widest font-black">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="border-zinc-50 hover:bg-zinc-50/50">
                <TableCell>
                  <div className="w-16 h-20 bg-muted overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold">{product.name}</div>
                  <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">{product.brand}</div>
                </TableCell>
                <TableCell className="capitalize text-sm font-medium">{product.category}</TableCell>
                <TableCell>
                  <div className="font-bold">₹{product.price.toLocaleString()}</div>
                  <div className="text-[10px] text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</div>
                </TableCell>
                <TableCell>
                  <Badge variant={product.inStock ? "secondary" : "destructive"} className="rounded-none text-[10px] font-black tracking-widest uppercase">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" className="w-8 h-8 rounded-none hover:bg-zinc-100"><Edit2 className="w-3.5 h-3.5" /></Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8 rounded-none hover:bg-zinc-100 text-destructive"><Trash2 className="w-3.5 h-3.5" /></Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8 rounded-none hover:bg-zinc-100"><ExternalLink className="w-3.5 h-3.5" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
