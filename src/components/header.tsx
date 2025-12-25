"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, navIcons } from "@/data/navigation";
import { getIconComponent } from "@/shared/utils/icon-resolver";
import { useScrollHeader } from "@/shared/hooks/use-scroll-header";
import { THEME_GRADIENT } from "@/config/constants";


export function Header() {
  const scrolled = useScrollHeader(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Detect active section based on scroll position
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.replace("#", ""));
    
    const handleScroll = () => {
      let current = "";
      let maxVisibility = 0;

      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, -rect.top);
        const visibleBottom = Math.max(0, rect.bottom - viewportHeight);
        const visibleHeight = rect.height - visibleTop - visibleBottom;
        const visibility = Math.max(0, visibleHeight / rect.height);

        // Prioritize sections near the top of viewport
        if (rect.top < viewportHeight * 0.5 && visibility > maxVisibility) {
          maxVisibility = visibility;
          current = sectionId;
        }
      });

      // Fallback: if at top, set to home
      if (window.scrollY < 100) {
        current = "home";
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-br from-[#0d0d0d]/95 via-[#111111]/95 to-[#0a0a0a]/95 backdrop-blur-md border-b border-white/[0.08] shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      {/* Gradient accent bar at bottom when scrolled */}
      {scrolled && (
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${THEME_GRADIENT} opacity-50`} />
      )}
      
      <nav className="container mx-auto px-4 py-3 flex justify-end lg:justify-center items-center relative">
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
                  className={`transition-all duration-200 relative rounded-lg px-4 py-2 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <Link href={link.href} className="flex items-center gap-2 relative group">
                    <IconComponent className="w-4 h-4" />
                    <span>{link.label}</span>
                    {activeSection === link.href.replace("#", "") && (
                      <motion.div 
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${THEME_GRADIENT} rounded-full`}
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
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
                className="text-gray-400 hover:text-white hover:bg-white/[0.05] z-50 h-11 w-11 min-h-[44px] min-w-[44px] rounded-lg transition-all duration-200"
                aria-label="Open navigation menu"
              >
                <Menu className="w-7 h-7" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[55vw] max-w-[260px] sm:w-[260px] bg-gradient-to-br from-[#0d0d0d] via-[#111111] to-[#0a0a0a] backdrop-blur-md border-white/[0.08] p-6">
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${THEME_GRADIENT}`} />
              
              <SheetHeader className="pt-4">
                <SheetTitle className="text-white text-left text-xl">Navigation</SheetTitle>
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
                      className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all duration-200 h-auto min-h-[48px] rounded-lg"
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
