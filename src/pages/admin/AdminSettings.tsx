/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Save, Bell, Shield, User, Globe, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AdminSettings() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h2 className="font-heading text-3xl font-bold">Settings</h2>
        <p className="text-muted-foreground text-sm">Configure your store preferences and account details.</p>
      </div>

      <div className="grid gap-8">
        <Card className="rounded-none border-none shadow-sm">
          <CardHeader className="border-b border-zinc-50">
            <div className="flex items-center gap-3">
              <Store className="w-5 h-5 text-primary" />
              <div>
                <CardTitle className="text-lg">Store Information</CardTitle>
                <CardDescription>Visible to your customers across the store.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest">Store Name</label>
                <Input defaultValue="EasyShop" className="rounded-none" />
              </div>
              <div className="grid gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest">Support Email</label>
                <Input defaultValue="support@easyshop.com" className="rounded-none" />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest">Store Address</label>
              <textarea 
                className="w-full min-h-[100px] border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                defaultValue="123 Luxury Avenue, Fashion District, Mumbai, MH - 400001"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-none border-none shadow-sm">
          <CardHeader className="border-b border-zinc-50">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-primary" />
              <div>
                <CardTitle className="text-lg">Regional Settings</CardTitle>
                <CardDescription>Configure currency, units, and timezone.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="grid gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest">Currency</label>
                <Input defaultValue="INR (₹)" disabled className="rounded-none grayscale" />
              </div>
              <div className="grid gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest">Weight Unit</label>
                <Input defaultValue="Grams (g)" className="rounded-none" />
              </div>
              <div className="grid gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest">Language</label>
                <Input defaultValue="English (UK)" className="rounded-none" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end pt-4">
          <Button className="rounded-none px-12 h-12 font-black tracking-widest text-[10px] uppercase shadow-lg shadow-primary/10">
            <Save className="w-4 h-4 mr-2" /> Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
