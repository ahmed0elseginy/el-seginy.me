"use client";

import { ReactNode } from "react";
import { SECTION_SPACING } from "@/config/constants";

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
  spacing?: "mobile" | "desktop";
}

export function SectionContainer({
  id,
  children,
  className = "",
  spacing = "desktop",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`${SECTION_SPACING[spacing]} px-6 lg:px-8 relative overflow-hidden ${className}`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#ff6b35]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#4ecdc4]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {children}
      </div>
    </section>
  );
}

