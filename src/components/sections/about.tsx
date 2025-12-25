"use client";

import { useState, useCallback } from 'react';
import { motion } from "framer-motion";
import { ChevronDown } from 'lucide-react';
import { aboutSkills, aboutIcons } from "@/data/about";
import { SectionContainer } from "@/shared/components/section-container";
import { SectionHeader } from "@/shared/components/section-header";
import { getIconComponent } from "@/shared/utils/icon-resolver";
import { THEME_GRADIENT } from "@/config/constants";

export function AboutSection() {
  const [openSkill, setOpenSkill] = useState<number | null>(null);
  
  const toggleSkill = useCallback((index: number) => {
    setOpenSkill(prevOpen => prevOpen === index ? null : index);
  }, []);

  return (
    <SectionContainer id="about" spacing="mobile">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="About Me"
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* About Me Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Main Speech Card */}
            <div className="relative group">
              {/* Animated glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${THEME_GRADIENT} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500`} />
              
              <div className="relative bg-gradient-to-br from-[#0d0d0d] via-[#111111] to-[#0a0a0a] rounded-2xl border border-white/[0.08] overflow-hidden">
                {/* Top gradient accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${THEME_GRADIENT}`} />
                
                <div className="p-8">
                  <div className="space-y-6">
                    {/* Speech Bubble */}
                    <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                      "I'm a passionate Java backend developer with 3+ years of experience building 
                      scalable enterprise applications. I love crafting clean, efficient code that 
                      solves real-world problems."
                    </blockquote>

                    {/* Key Points */}
                    <div className="space-y-6 mt-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${THEME_GRADIENT}`} />
                          <h3 className="text-lg font-semibold text-white">My Approach</h3>
                        </div>
                        <ul className="space-y-3 text-gray-400">
                          <li className="flex items-center gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${THEME_GRADIENT}`} />
                            Test-driven development
                          </li>
                          <li className="flex items-center gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${THEME_GRADIENT}`} />
                            Clean architecture principles
                          </li>
                          <li className="flex items-center gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${THEME_GRADIENT}`} />
                            Agile methodology
                          </li>
                          <li className="flex items-center gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${THEME_GRADIENT}`} />
                            Continuous learning
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What I Do Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary"></div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                What I Do
              </h3>
            </div>
            
            {aboutSkills.map((skill, index) => {
              const IconComponent = getIconComponent(skill.icon, aboutIcons);
              if (!IconComponent) return null;
              
              return (
                <motion.div
                  key={skill.title}
                  className="relative group"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02, duration: 0.25, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {/* Animated glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${THEME_GRADIENT} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500`} />
                  
                  <div className="relative bg-gradient-to-br from-[#0d0d0d] via-[#111111] to-[#0a0a0a] rounded-2xl border border-white/[0.08] overflow-hidden">
                    {/* Top gradient accent bar */}
                    <div className={`h-1 w-full bg-gradient-to-r ${THEME_GRADIENT}`} />
                    
                    <button
                      onClick={() => toggleSkill(index)}
                      className="w-full p-4 md:p-6 flex items-center justify-between text-left group"
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <motion.div 
                          className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${THEME_GRADIENT} p-[1px] shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className="w-full h-full bg-[#0d0d0d] rounded-[11px] flex items-center justify-center">
                            <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </div>
                        </motion.div>
                        <h4 className="text-lg md:text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                          {skill.title}
                        </h4>
                      </div>
                      <motion.div
                        animate={{ rotate: openSkill === index ? 180 : 0 }}
                        transition={{ duration: 0.15, ease: "easeInOut" }}
                      >
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </motion.div>
                    </button>
                    
                    <motion.div
                      id={`skill-content-${index}`}
                      initial={false}
                      animate={{ 
                        height: openSkill === index ? "auto" : 0,
                        opacity: openSkill === index ? 1 : 0
                      }}
                      transition={{ 
                        duration: 0.2, 
                        ease: "easeInOut",
                        opacity: { duration: 0.15 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 pb-4 md:pb-6 space-y-3">
                        {skill.description.map((desc, descIndex) => (
                          <div key={descIndex} className="flex items-start gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${THEME_GRADIENT} mt-2 flex-shrink-0`}></div>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">{desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}