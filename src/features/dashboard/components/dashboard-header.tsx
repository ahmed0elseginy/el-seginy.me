"use client";

import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DashboardSidebar } from "./dashboard-sidebar";

export function DashboardHeader() {
  return (
    <header className="h-16 bg-black/50 border-b border-white/[0.08] backdrop-blur-sm flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1">
        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-black/95 border-white/[0.08] p-0">
            <DashboardSidebar />
          </SheetContent>
        </Sheet>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 bg-white/[0.03] border-white/[0.08] text-white placeholder:text-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#ff6b35] rounded-full" />
        </Button>
        
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#4ecdc4] p-[1px]">
          <div className="w-full h-full bg-black rounded-full" />
        </div>
      </div>
    </header>
  );
}

