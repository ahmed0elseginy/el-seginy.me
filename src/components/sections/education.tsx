"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { education, educationIcons } from "@/data/education";
import { SectionContainer } from "@/shared/components/section-container";
import { SectionHeader } from "@/shared/components/section-header";
import { getIconComponent } from "@/shared/utils/icon-resolver";
import { THEME_GRADIENT } from "@/config/constants";

export function EducationSection() {
  return (
    <SectionContainer id="education" spacing="mobile">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Education"
          description="My educational journey in technology and software development, building a strong foundation for my career."
          className="mb-12"
        />

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((edu, index) => {
            // Use first icon for now, can be extended later
            const IconComponent = educationIcons.GraduationCap;
            const status = index === 0 ? "Current" : "Completed";
            const grade = index === 0 ? "In Progress" : "95.67%";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group"
              >
                {/* Animated glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${THEME_GRADIENT} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500`} />
                
                <div className="relative bg-gradient-to-br from-[#0d0d0d] via-[#111111] to-[#0a0a0a] rounded-2xl border border-white/[0.08] overflow-hidden">
                  {/* Top gradient accent bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${THEME_GRADIENT}`} />
                  
                  <div className="p-6 space-y-5">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${THEME_GRADIENT} p-[1px] shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className="w-full h-full bg-[#0d0d0d] rounded-[11px] flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                        </motion.div>
                        <div>
                          <Badge 
                            className={`text-xs font-semibold tracking-wide uppercase px-2.5 py-1 ${
                              status === "Current" 
                                ? "bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white border-0" 
                                : "bg-white/[0.03] border border-white/[0.08] text-gray-400"
                            }`}
                          >
                            {status}
                          </Badge>
                          <p className="text-sm text-gray-500 mt-1.5">{edu.date}</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] via-[#4ecdc4] to-[#45b7d1]">{grade}</p>
                    </div>
                    
                    <div className="space-y-1.5">
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] via-[#4ecdc4] to-[#45b7d1]">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-500">
                        {edu.location}
                      </p>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${THEME_GRADIENT}`} />
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Key Achievements</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.achievements.map((achievement, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            viewport={{ once: true }}
                            className="px-2.5 py-1 text-[10px] font-medium text-gray-400 bg-white/[0.03] border border-white/[0.06] rounded-md hover:bg-white/[0.08] hover:border-white/[0.12] hover:text-gray-300 transition-all duration-200 cursor-default"
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-lg italic max-w-xl mx-auto">
            "Continuous learning is the key to staying relevant in the ever-evolving world of technology."
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

