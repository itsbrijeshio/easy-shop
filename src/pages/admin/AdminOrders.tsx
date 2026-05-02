/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, Eye, Filter } from "lucide-react";
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

const orders = [
  { id: "#ORD-7721", customer: "Amara Singh", email: "amara@example.com", date: "May 02, 2026", total: 12590, status: "Delivered" },
  { id: "#ORD-7722", customer: "Rohan Varma", email: "rohan@example.com", date: "May 02, 2026", total: 4999, status: "Shipped" },
  { id: "#ORD-7723", customer: "Saira Khan", email: "saira@example.com", date: "May 01, 2026", total: 8250, status: "Pending" },
  { id: "#ORD-7724", customer: "Vikram Das", email: "vikram@example.com", date: "Apr 30, 2026", total: 2490, status: "Delivered" },
  { id: "#ORD-7725", customer: "Priya Iyer", email: "priya@example.com", date: "Apr 29, 2026", total: 15400, status: "Delivered" },
  { id: "#ORD-7726", customer: "Anand Shaw", email: "anand@example.com", date: "Apr 28, 2026", total: 3200, status: "Delivered" },
];

export default function AdminOrders() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 shadow-sm">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Filter orders..." className="pl-10 rounded-none border-zinc-200" />
        </div>
        <div className="flex gap-4 w-full sm:w-auto">
          <Button variant="outline" className="rounded-none gap-2 uppercase tracking-widest text-[10px] font-black h-12 flex-grow sm:flex-grow-0">
            <Filter className="w-4 h-4" /> Export CSV
          </Button>
          <Button variant="outline" className="rounded-none gap-2 uppercase tracking-widest text-[10px] font-black h-12 flex-grow sm:flex-grow-0">
            Last 30 Days
          </Button>
        </div>
      </div>

      <div className="bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-50">
            <TableRow className="border-zinc-100 hover:bg-transparent">
              <TableHead className="text-[10px] uppercase tracking-widest font-black">Order ID</TableHead>
              <TableHead className="text-[10px] uppercase tracking-widest font-black">Customer</TableHead>
              <TableHead className="text-[10px] uppercase tracking-widest font-black">Date</TableHead>
              <TableHead className="text-[10px] uppercase tracking-widest font-black">Total</TableHead>
              <TableHead className="text-[10px] uppercase tracking-widest font-black">Status</TableHead>
              <TableHead className="text-right text-[10px] uppercase tracking-widest font-black">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="border-zinc-50 hover:bg-zinc-50/50">
                <TableCell className="font-black text-primary">{order.id}</TableCell>
                <TableCell>
                  <div className="font-bold text-sm">{order.customer}</div>
                  <div className="text-[10px] text-muted-foreground lowercase font-medium tracking-tight">{order.email}</div>
                </TableCell>
                <TableCell className="text-sm font-medium text-muted-foreground">{order.date}</TableCell>
                <TableCell className="font-black">₹{order.total.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge 
                    className={`rounded-none text-[10px] font-black tracking-widest uppercase ${
                      order.status === "Delivered" ? "bg-green-100 text-green-800 border-none" :
                      order.status === "Shipped" ? "bg-blue-100 text-blue-800 border-none" :
                      "bg-yellow-100 text-yellow-800 border-none"
                    }`}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="w-8 h-8 rounded-none hover:bg-zinc-100">
                    <Eye className="w-3.5 h-3.5" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
