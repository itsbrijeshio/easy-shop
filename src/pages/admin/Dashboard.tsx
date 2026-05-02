/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { TrendingUp, ShoppingCart, Users, Package, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Jan", sales: 4000, orders: 240 },
  { name: "Feb", sales: 3000, orders: 198 },
  { name: "Mar", sales: 2000, orders: 150 },
  { name: "Apr", sales: 2780, orders: 190 },
  { name: "May", sales: 1890, orders: 120 },
  { name: "Jun", sales: 2390, orders: 165 },
  { name: "Jul", sales: 3490, orders: 210 },
];

const StatCard = ({ title, value, icon: Icon, trend, trendValue }: any) => (
  <Card className="rounded-none border-none shadow-sm">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
        {title}
      </CardTitle>
      <Icon className="w-5 h-5 text-primary" />
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-black font-heading">{value}</div>
      <div className="flex items-center gap-1 mt-2">
        <span className={`text-xs font-bold flex items-center ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          <ArrowUpRight className={`w-3 h-3 ${trend === 'down' ? 'rotate-90' : ''}`} /> {trendValue}%
        </span>
        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest ml-1">vs last month</span>
      </div>
    </CardContent>
  </Card>
);

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="₹245,690" icon={TrendingUp} trend="up" trendValue="12.5" />
        <StatCard title="Total Orders" value="1,240" icon={ShoppingCart} trend="up" trendValue="8.2" />
        <StatCard title="New Customers" value="842" icon={Users} trend="up" trendValue="15.1" />
        <StatCard title="Products Listed" value="124" icon={Package} trend="up" trendValue="4.3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sales Chart */}
        <Card className="lg:col-span-2 rounded-none border-none shadow-sm">
          <CardHeader>
            <CardTitle className="font-heading text-xl">Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2D5016" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#2D5016" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E5" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#666' }} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#666' }}
                    tickFormatter={(value) => `₹${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '0px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                    itemStyle={{ fontSize: 12, fontWeight: 700 }}
                  />
                  <Area type="monotone" dataKey="sales" stroke="#2D5016" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card className="rounded-none border-none shadow-sm">
          <CardHeader>
            <CardTitle className="font-heading text-xl text-primary">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4 border-b border-zinc-100 pb-4 last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-xs">
                    JD
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold">John Doe</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">2 mins ago</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black">+₹4,599</p>
                    <p className="text-[10px] text-green-600 uppercase font-black tracking-widest">Paid</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
