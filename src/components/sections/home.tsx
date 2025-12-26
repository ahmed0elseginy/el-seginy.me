"use client";

import { Github, Linkedin, Twitter, Send, MessageCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionContainer } from "@/shared/components/section-container";
import { THEME_GRADIENT } from "@/config/constants";

export function HomeSection() {
  const socialLinks = [
    { href: "https://github.com/ahmed0elseginy", label: "GitHub", Icon: Github },
    { href: "https://linkedin.com/in/ahmed0elseginy", label: "LinkedIn", Icon: Linkedin },
    { href: "https://x.com/ahmed0elseginy", label: "X (Twitter)", Icon: Twitter },
    { href: "https://t.me/ahmed0elseginy", label: "Telegram", Icon: Send },
    { href: "https://wa.me/201000432923", label: "WhatsApp", Icon: MessageCircle },
  ] as const;
   
  return (
    <SectionContainer id="home" spacing="desktop">
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="mx-auto max-w-6xl w-full">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Profile Image */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${THEME_GRADIENT} rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className={`relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-r ${THEME_GRADIENT} p-1`}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#0d0d0d] via-[#111111] to-[#0a0a0a]">
                    <Image
                      src="/images/me.jpg"
                      alt="Ahmed El-Seginy - Java Software Developer"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover scale-110 group-hover:scale-115 transition-transform duration-500"
                      priority
                      quality={100}
                    />
                  </div>
                </div>
                
                {/* Floating elements around the image */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-[#4ecdc4] to-[#45b7d1] rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-[#45b7d1] to-[#4ecdc4] rounded-full"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="flex-1 text-center lg:text-right space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-gray-400 text-lg font-medium tracking-wide">Welcome!...</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                Ahmed El-Seginy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                Software Engineer <br /> Cairo, Egypt
              </p>
              <p className="text-base md:text-lg max-w-2xl mx-auto lg:mx-0 text-gray-400 leading-relaxed">
                "What makes my code so special is the time I have devoted to perfecting it.
                <br className="hidden sm:block" />
                I build scalable systems with Java & Spring Boot..."
              </p>
              <div className="pt-4 flex items-center justify-center lg:justify-end gap-4 flex-wrap">
                {socialLinks.map(({ href, label, Icon }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${THEME_GRADIENT} rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    <div className="relative w-12 h-12 inline-flex items-center justify-center bg-white/[0.03] border border-white/[0.08] rounded-full hover:bg-white/[0.08] hover:border-white/[0.15] text-gray-400 hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
