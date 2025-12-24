"use client";

import { useState, useCallback } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from 'lucide-react';
import { aboutSkills, aboutIcons } from "@/data/about";
import { SectionContainer } from "@/shared/components/section-container";
import { SectionHeader } from "@/shared/components/section-header";
import { getIconComponent } from "@/shared/utils/icon-resolver";

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
            <Card className="bg-black/50 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Speech Bubble */}
                  <div className="relative">
                    <div className="absolute -left-4 top-4 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary/20"></div>
                    <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed italic">
                      "I'm a passionate Java backend developer with 3+ years of experience building 
                      scalable enterprise applications. I love crafting clean, efficient code that 
                      solves real-world problems."
                    </blockquote>
                  </div>

                  {/* Key Points */}
                  <div className="space-y-6 mt-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-primary">My Approach</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          Test-driven development
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          Clean architecture principles
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          Agile methodology
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          Continuous learning
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                  className="bg-black/50 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02, duration: 0.25, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                    <button
                      onClick={() => toggleSkill(index)}
                      className="w-full p-4 md:p-6 flex items-center justify-between text-left group hover:bg-primary/5 transition-colors"
                    >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                      </div>
                      <h4 className="text-lg md:text-xl font-semibold text-white group-hover:text-primary transition-colors">
                        {skill.title}
                      </h4>
                    </div>
                    <motion.div
                      animate={{ rotate: openSkill === index ? 180 : 0 }}
                      transition={{ duration: 0.15, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-primary transition-colors" />
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
                    <div className="p-4 md:p-6 pt-0 space-y-2 md:space-y-3">
                      {skill.description.map((desc, descIndex) => (
                        <div key={descIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 text-sm md:text-base leading-relaxed">{desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}