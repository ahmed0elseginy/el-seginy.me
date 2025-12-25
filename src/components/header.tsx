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
    
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
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
          
          ticking = false;
        });
        
        ticking = true;
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
          ? 'lg:bg-gradient-to-br lg:from-[#0d0d0d]/95 lg:via-[#111111]/95 lg:to-[#0a0a0a]/95 lg:backdrop-blur-md lg:border-b lg:border-white/[0.08] lg:shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      {/* Gradient accent bar at bottom when scrolled (desktop only) */}
      {scrolled && (
        <div className={`hidden lg:block absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${THEME_GRADIENT} opacity-50`} />
      )}
      
      <nav className={`container mx-auto flex justify-end lg:justify-center items-center relative transition-all duration-300 ${
        scrolled 
          ? 'lg:px-4 lg:py-3 px-3 py-2.5' 
          : 'px-4 py-3'
      }`}>
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
                className={`text-gray-400 hover:text-white z-50 rounded-lg transition-all duration-300 ${
                  scrolled
                    ? 'h-12 w-12 min-h-[48px] min-w-[48px] bg-gradient-to-br from-[#0d0d0d]/95 via-[#111111]/95 to-[#0a0a0a]/95 backdrop-blur-md border border-white/[0.1] shadow-lg hover:bg-white/[0.1]'
                    : 'h-11 w-11 min-h-[44px] min-w-[44px] hover:bg-white/[0.05]'
                }`}
                aria-label="Open navigation menu"
              >
                <Menu className={`transition-all duration-300 ${scrolled ? 'w-6 h-6' : 'w-7 h-7'}`} />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[70vw] max-w-[280px] sm:w-[280px] bg-gradient-to-br from-[#0d0d0d] via-[#111111] to-[#0a0a0a] backdrop-blur-xl border-l border-white/[0.08] p-0 shadow-2xl"
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${THEME_GRADIENT}`} />
              
              <div className="flex flex-col h-full">
                <SheetHeader className="px-6 pt-6 pb-4 border-b border-white/[0.08]">
                  <SheetTitle className="text-white text-left text-xl font-semibold">Menu</SheetTitle>
                </SheetHeader>
                
                <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
                  {/* Navigation Links */}
                  {navLinks.map((link, index) => {
                    const IconComponent = getIconComponent(link.icon, navIcons);
                    if (!IconComponent) return null;
                    
                    const isActive = activeSection === link.href.replace("#", "");
                    
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Button
                          asChild
                          variant="ghost"
                          className={`w-full justify-start relative rounded-lg transition-all duration-200 h-auto min-h-[52px] group ${
                            isActive
                              ? 'bg-white/[0.08] text-white'
                              : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Link href={link.href} className="flex items-center gap-4 py-3 px-4 text-base font-medium relative">
                            <div className={`p-2 rounded-lg transition-all duration-200 ${
                              isActive 
                                ? `bg-gradient-to-br ${THEME_GRADIENT} bg-opacity-20` 
                                : 'bg-white/[0.05] group-hover:bg-white/[0.1]'
                            }`}>
                              <IconComponent className={`w-5 h-5 flex-shrink-0 transition-colors ${
                                isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                              }`} />
                            </div>
                            <span className="flex-1">{link.label}</span>
                            {isActive && (
                              <motion.div 
                                className={`absolute right-4 w-1.5 h-6 bg-gradient-to-b ${THEME_GRADIENT} rounded-full`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                              />
                            )}
                          </Link>
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
