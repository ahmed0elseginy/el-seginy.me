"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";
import { motion } from "framer-motion";
import { THEME_GRADIENT } from "@/config/constants";

export function Footer() {
  const currentYear = 2025;
  
  const socialLinks = [
    {
      href: "https://github.com/ahmed0elseginy",
      label: "GitHub",
      icon: Github,
    },
    {
      href: "https://linkedin.com/in/ahmed0elseginy",
      label: "LinkedIn", 
      icon: Linkedin,
    },
    {
      href: "mailto:ahmed0elseginy@gmail.com",
      label: "Email",
      icon: Mail,
    }
  ];

  return (
    <footer className="relative w-full py-8 md:py-12 px-4 md:px-6 lg:px-8 border-t border-white/[0.08]">
      {/* Gradient accent bar at top */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${THEME_GRADIENT}`} />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          
          {/* Left section - Name and title */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <motion.div 
                className={`w-8 h-8 rounded-xl bg-gradient-to-br ${THEME_GRADIENT} p-[1px]`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-full h-full bg-[#0d0d0d] rounded-[11px] flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Ahmed El-Seginy
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-500">
              Java Backend Developer • Cairo, Egypt
            </p>
          </motion.div>

          {/* Right section - Social links and copyright */}
          <motion.div 
            className="flex flex-col items-center md:items-end gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Social Links */}
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                    aria-label={social.label}
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${THEME_GRADIENT} rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    <div className="relative w-12 h-12 inline-flex items-center justify-center bg-white/[0.03] border border-white/[0.08] rounded-full text-gray-400 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right text-xs md:text-sm text-gray-500">
              <p className="flex items-center justify-center md:justify-end gap-1 flex-wrap">
                © {currentYear} Ahmed El-Seginy.</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom decoration line */}
        <motion.div 
          className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/[0.08]"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-xs text-gray-500 italic">
              "Code is like humor. When you have to explain it, it's bad." - Cory House
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
