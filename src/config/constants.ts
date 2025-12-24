// Application-wide constants

export const THEME_GRADIENT = "from-[#ff6b35] via-[#4ecdc4] to-[#45b7d1]";

export const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Full Stack": { bg: "bg-orange-500/20", text: "text-orange-400", border: "border-orange-500/30" },
  "Backend": { bg: "bg-teal-500/20", text: "text-teal-400", border: "border-teal-500/30" },
  "Frontend": { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
  "frontend": { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
};

export const ANIMATION_DEFAULTS = {
  duration: 0.5,
  ease: "easeOut" as const,
};

export const SECTION_SPACING = {
  mobile: "py-16 md:py-24",
  desktop: "py-20 md:py-32",
};

