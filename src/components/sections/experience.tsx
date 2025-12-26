"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { experiences, experienceIcons } from "@/data/experience";
import { SectionContainer } from "@/shared/components/section-container";
import { SectionHeader } from "@/shared/components/section-header";
import { getIconComponent } from "@/shared/utils/icon-resolver";
import { THEME_GRADIENT } from "@/config/constants";
import { MapPin, Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <SectionContainer id="experience" spacing="mobile">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Experience"
          description="My journey in software development"
          className="mb-12"
        />

        {/* Career Path Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff6b35] via-[#4ecdc4] to-[#45b7d1] opacity-20" />

          <div className="space-y-0">
            {experiences.map((exp, index) => {
              const IconComponent = getIconComponent(exp.icon, experienceIcons);
              const isLast = index === experiences.length - 1;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative pl-16 pb-8"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-1">
                    <motion.div 
                      className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${THEME_GRADIENT} p-[2px]`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                        {exp.logo ? (
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        ) : IconComponent ? (
                          <IconComponent className="w-5 h-5 text-white" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </motion.div>
                    
                    {/* Connecting Line to Next */}
                    {!isLast && (
                      <div className="absolute left-1/2 top-12 w-px h-[calc(100%-12px)] -translate-x-1/2 bg-gradient-to-b from-white/20 to-transparent" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="group">
                    <div className="relative bg-[#0d0d0d]/80 rounded-xl border border-white/[0.06] p-5 hover:border-white/[0.12] transition-all duration-300 hover:bg-[#111111]/80">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold text-white">
                              {exp.title}
                            </h3>
                            {exp.status === "Current" && (
                              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            )}
                          </div>
                          {exp.companyLogo ? (
                            <div className="h-6 mt-0.5">
                              <Image
                                src={exp.companyLogo}
                                alt={exp.company}
                                width={120}
                                height={24}
                                className="object-contain object-left h-6 w-auto"
                              />
                            </div>
                          ) : (
                            <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#4ecdc4]">
                              {exp.company}
                            </p>
                          )}
                        </div>
                        <Badge 
                          className={`text-[10px] font-medium px-2 py-0.5 ${
                            exp.status === "Current" 
                              ? "bg-gradient-to-r from-[#ff6b35]/20 to-[#f7931e]/20 text-[#ff6b35] border border-[#ff6b35]/30" 
                              : "bg-white/[0.03] border border-white/[0.08] text-gray-500"
                          }`}
                        >
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span>{exp.date}</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Project Image */}
                      {exp.image && (
                        <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 border border-white/[0.06]">
                          <Image
                            src={exp.image}
                            alt={`${exp.title} work`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      {/* Skills/Achievements */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-[10px] font-medium text-gray-400 bg-white/[0.02] border border-white/[0.05] rounded-md"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Path End Indicator */}
          <div className="absolute left-6 bottom-0 -translate-x-1/2">
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${THEME_GRADIENT} opacity-50`} />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
