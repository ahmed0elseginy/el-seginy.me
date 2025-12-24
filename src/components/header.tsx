"use client";

import { useState } from 'react';
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, navIcons } from "@/data/navigation";
import { getIconComponent } from "@/shared/utils/icon-resolver";
import { useScrollHeader } from "@/shared/hooks/use-scroll-header";


export function Header() {
  const scrolled = useScrollHeader(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-primary/30 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-end lg:justify-center items-center">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link, index) => {
            const IconComponent = getIconComponent(link.icon, navIcons);
            if (!IconComponent) return null;
            
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-primary hover:bg-transparent transition-all duration-300 relative"
                >
                  <Link href={link.href} className="flex items-center gap-2 relative group">
                    <IconComponent className="w-4 h-4" />
                    {link.label}
                    {link.href === "#home" && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
                    )}
                  </Link>
                </Button>
              </motion.div>
            );
          })}
          
        </div>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-primary hover:bg-primary/10 z-50 h-11 w-11 min-h-[44px] min-w-[44px]"
                aria-label="Open navigation menu"
              >
                <Menu className="w-7 h-7" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[55vw] max-w-[260px] sm:w-[260px] bg-black/98 backdrop-blur-md border-primary/30 p-6">
              <SheetHeader>
                <SheetTitle className="text-primary text-left text-xl">Navigation</SheetTitle>
              </SheetHeader>
              
              <div className="mt-8 space-y-1">
                {/* Navigation Links */}
                {navLinks.map((link) => {
                  const IconComponent = getIconComponent(link.icon, navIcons);
                  if (!IconComponent) return null;
                  
                  return (
                    <Button
                      key={link.href}
                      asChild
                      variant="ghost"
                      className="w-full justify-start text-white hover:text-primary hover:bg-primary/10 transition-colors h-auto min-h-[48px]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Link href={link.href} className="flex items-center gap-4 py-4 px-2 text-base">
                        <IconComponent className="w-6 h-6 flex-shrink-0" />
                        <span className="font-medium">{link.label}</span>
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
