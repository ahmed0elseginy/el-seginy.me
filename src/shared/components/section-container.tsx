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
      className={`${SECTION_SPACING[spacing]} px-6 lg:px-8 relative ${className}`}
    >
      {/* Clean, seamless background - body background provides consistent styling across all sections */}
      <div className="max-w-7xl mx-auto relative">
        {children}
      </div>
    </section>
  );
}

