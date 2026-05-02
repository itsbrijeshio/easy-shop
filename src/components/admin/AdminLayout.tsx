/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation, Outlet } from "react-router-dom";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  ChevronLeft
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { name: "Products", icon: Package, path: "/admin/products" },
    { name: "Orders", icon: ShoppingBag, path: "/admin/orders" },
    { name: "Customers", icon: Users, path: "/admin/customers" },
    { name: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  const Sidebar = () => (
    <div className="flex flex-col h-full bg-zinc-900 text-zinc-100 p-6">
      <div className="flex items-center justify-between mb-10">
        <Link to="/" className="font-heading text-2xl font-bold tracking-tighter">
          EasyShop <span className="text-[10px] uppercase text-primary ml-2 border border-primary px-1">Admin</span>
        </Link>
      </div>

      <nav className="flex-grow space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              location.pathname === item.path 
                ? "bg-primary text-white" 
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="pt-6 border-t border-zinc-800">
        <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-zinc-800 gap-3 px-4">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Log Out</span>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-zinc-50">
      {/* Desktop Sidebar */}
      <aside className={`hidden lg:block fixed inset-y-0 left-0 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-20"}`}>
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <main className={`flex-grow transition-all duration-300 ${isSidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}>
        {/* Top Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:flex hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <ChevronLeft className={`w-5 h-5 transition-transform ${!isSidebarOpen ? "rotate-180" : ""}`} />
            </Button>
            
            {/* Mobile Nav */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 border-none w-64 bg-zinc-900">
                  <Sidebar />
                </SheetContent>
              </Sheet>
            </div>

            <h2 className="font-heading text-xl font-bold">
              {menuItems.find(item => item.path === location.pathname)?.name || "Admin"}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold">Admin User</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Super Admin</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              AU
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="p-6 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
