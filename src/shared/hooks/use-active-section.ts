"use client";

import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionElements: Map<string, Element> = new Map();

    // Create intersection observer for each section
    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      sectionElements.set(sectionId, element);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        {
          threshold: 0.3, // Trigger when 30% of the section is visible
          rootMargin: "-20% 0px -70% 0px", // Account for header height
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    // Fallback: If no section is intersecting, check scroll position
    const handleScroll = () => {
      let current = "";
      let maxVisibility = 0;

      sectionElements.forEach((element, sectionId) => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, -rect.top);
        const visibleBottom = Math.max(0, rect.bottom - viewportHeight);
        const visibleHeight = rect.height - visibleTop - visibleBottom;
        const visibility = Math.max(0, visibleHeight / rect.height);

        if (visibility > maxVisibility && rect.top < viewportHeight / 2) {
          maxVisibility = visibility;
          current = sectionId;
        }
      });

      if (current && maxVisibility > 0.1) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds.join(",")]); // Re-run if section IDs change

  return activeSection;
}

