/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const customers = [
  { id: "1", name: "Amara Singh", email: "amara@example.com", phone: "+91 98765 43210", orders: 12, spent: 45600, joined: "Jan 12, 2025" },
  { id: "2", name: "Rahul Verma", email: "rahul.v@example.com", phone: "+91 87654 32109", orders: 5, spent: 18200, joined: "Feb 05, 2025" },
  { id: "3", name: "Priya Das", email: "p.das@example.com", phone: "+91 76543 21098", orders: 8, spent: 24500, joined: "Mar 20, 2025" },
  { id: "4", name: "Sanjay Gupta", email: "gupta.s@example.com", phone: "+91 65432 10987", orders: 3, spent: 12100, joined: "Apr 15, 2025" },
  { id: "5", name: "Neha Kapur", email: "neha.k@example.com", phone: "+91 54321 09876", orders: 15, spent: 62000, joined: "May 01, 2025" },
];

export default function AdminCustomers() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 shadow-sm">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search customers..." className="pl-10 rounded-none border-zinc-200" />
        </div>
        <Button variant="outline" className="rounded-none gap-2 uppercase tracking-widest text-[10px] font-black h-12 px-8">
          Export List
        </Button>
      </div>

      <div className="bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-50">
            <TableRow className="border-zinc-100 hover:bg-transparent">
              <TableHead className="text-[10px] uppercase tracking-widest font-black">Customer</TableHead>
              <TableHead className="text-[10px] uppercase tracking-widest font-black">Contact</TableHead>
              <TableHead className="text-[10px] uppercase tracking-widest font-black text-center">Orders</TableHead>
              <TableHead className="text-[10px] uppercase tracking-widest font-black">Total Spent</TableHead>
              <TableHead className="text-[10px] uppercase tracking-widest font-black">Joined</TableHead>
              <TableHead className="text-right text-[10px] uppercase tracking-widest font-black">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id} className="border-zinc-50 hover:bg-zinc-50/50">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                      {customer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold">{customer.name}</div>
                      <div className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">ID: {customer.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Mail className="w-3 h-3" /> {customer.email}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Phone className="w-3 h-3" /> {customer.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center font-bold">{customer.orders}</TableCell>
                <TableCell className="font-bold">₹{customer.spent.toLocaleString()}</TableCell>
                <TableCell className="text-sm font-medium text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {customer.joined}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" className="text-[10px] font-black tracking-widest uppercase hover:bg-zinc-100">
                    Details
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
