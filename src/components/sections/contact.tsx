"use client";

import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Heart } from "lucide-react";
import { SectionContainer } from "@/shared/components/section-container";
import { SectionHeader } from "@/shared/components/section-header";
import { THEME_GRADIENT } from "@/config/constants";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmed0elseginy@gmail.com",
      href: "mailto:ahmed0elseginy@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+02) 01000 432 923",
      href: "tel:+201000432923"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
      href: "#"
    }
  ];

  return (
    <SectionContainer id="contact" spacing="mobile">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Get In"
          subtitle="Touch"
          description="Ready to collaborate on your next project? Let's connect and discuss how we can work together to bring your ideas to life."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative group">
              {/* Animated glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${THEME_GRADIENT} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500`} />
              
              <div className="relative bg-gradient-to-br from-[#0d0d0d] via-[#111111] to-[#0a0a0a] rounded-2xl border border-white/[0.08] overflow-hidden">
                {/* Top gradient accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${THEME_GRADIENT}`} />
                
                <div className="p-6 space-y-5">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-white">Contact Information</h3>
                    <p className="text-sm text-gray-500">
                      Reach out through any of these channels
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <motion.a
                          key={index}
                          href={info.href}
                          className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group/item"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${THEME_GRADIENT} p-[1px]`}>
                            <div className="w-full h-full bg-[#0d0d0d] rounded-[11px] flex items-center justify-center">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{info.label}</p>
                            <p className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-400 transition-all duration-300 font-medium">
                              {info.value}
                            </p>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="relative group">
              {/* Animated glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${THEME_GRADIENT} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500`} />
              
              <div className="relative bg-gradient-to-br from-[#0d0d0d] via-[#111111] to-[#0a0a0a] rounded-2xl border border-white/[0.08] overflow-hidden">
                {/* Top gradient accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${THEME_GRADIENT}`} />
                
                <div className="p-6">
                  <div className="text-center space-y-4">
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${THEME_GRADIENT} p-[1px] mx-auto`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-full h-full bg-[#0d0d0d] rounded-[11px] flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                    <h3 className="text-lg font-bold text-white">Let's Connect</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      I'm always excited to discuss new opportunities and collaborate on interesting projects.
                    </p>
                    <motion.a
                      href="mailto:ahmed0elseginy@gmail.com"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm font-medium text-gray-400 hover:bg-white/[0.08] hover:border-white/[0.15] hover:text-white transition-all duration-200"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Email</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Animated glow effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${THEME_GRADIENT} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500`} />
            
            <div className="relative bg-gradient-to-br from-[#0d0d0d] via-[#111111] to-[#0a0a0a] rounded-2xl border border-white/[0.08] overflow-hidden">
              {/* Top gradient accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${THEME_GRADIENT}`} />
              
              <div className="p-6 space-y-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${THEME_GRADIENT} p-[1px]`}>
                      <div className="w-full h-full bg-[#0d0d0d] rounded-[11px] flex items-center justify-center">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Send a Message</h3>
                      <p className="text-sm text-gray-500">
                        Fill out the form and I'll get back to you
                      </p>
                    </div>
                  </div>
                </div>
                
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Message */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-lg italic max-w-xl mx-auto mb-4">
            "Great things in business are never done by one person. They're done by a team of people."
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] via-[#4ecdc4] to-[#45b7d1] font-medium">
            Let's build something amazing together ✨
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
