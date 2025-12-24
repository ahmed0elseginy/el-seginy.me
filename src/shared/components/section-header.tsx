"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: {
    icon?: ReactNode;
    text: string;
  };
  description?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`text-center mb-12 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full mb-6"
        >
          {badge.icon}
          <span className="text-sm font-medium text-gray-400">{badge.text}</span>
        </motion.div>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}
        {subtitle && (
          <>
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] via-[#4ecdc4] to-[#45b7d1]">
              {subtitle}
            </span>
          </>
        )}
      </h2>

      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#ff6b35]/50" />
        <div className="w-2 h-2 rounded-full bg-[#ff6b35]" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4ecdc4]/50" />
      </div>

      {description && (
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

