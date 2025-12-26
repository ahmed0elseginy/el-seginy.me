"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { SectionContainer } from "@/shared/components/section-container";
import { SectionHeader } from "@/shared/components/section-header";
import { THEME_GRADIENT } from "@/config/constants";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  Users, 
  ChevronDown,
  ExternalLink,
  ImageIcon
} from "lucide-react";

export function EducationSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <SectionContainer id="education" spacing="mobile">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Education"
          description="Academic foundation and community involvement"
          className="mb-12"
        />

        <div className="space-y-4">
          {education.map((edu, index) => {
            const isExpanded = expandedIndex === index;
            const hasExtras = (edu.photos && edu.photos.length > 0) || 
                             (edu.certificates && edu.certificates.length > 0) || 
                             (edu.volunteering && edu.volunteering.length > 0);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Main Card */}
                <div 
                  className={`relative bg-[#0d0d0d]/80 rounded-xl border transition-all duration-300 overflow-hidden ${
                    isExpanded ? "border-white/[0.12]" : "border-white/[0.06] hover:border-white/[0.1]"
                  }`}
                >
                  {/* Header - Always Visible */}
                  <div 
                    className="p-5 cursor-pointer"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  >
                    <div className="flex items-start gap-4">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        {edu.logo ? (
                          <div className="w-14 h-14 rounded-lg overflow-hidden bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                            <Image
                              src={edu.logo}
                              alt={edu.institution}
                              width={56}
                              height={56}
                              className="object-contain p-1.5"
                            />
                          </div>
                        ) : (
                          <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${THEME_GRADIENT} flex items-center justify-center`}>
                            <GraduationCap className="w-6 h-6 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-base font-semibold text-white">
                                {edu.degree}
                              </h3>
                              {edu.status === "Current" && (
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                              )}
                            </div>
                            <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#4ecdc4] mb-2">
                              {edu.institution}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{edu.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{edu.location}</span>
                              </div>
                              {edu.grade && (
                                <Badge className="text-[10px] font-medium bg-white/[0.03] border border-white/[0.08] text-gray-400 px-1.5 py-0">
                                  {edu.grade}
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Expand Button */}
                          {hasExtras && (
                            <motion.button
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-500 hover:text-white hover:border-white/[0.12] transition-colors"
                            >
                              <ChevronDown className="w-4 h-4" />
                            </motion.button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Description - Always visible */}
                    {edu.description && (
                      <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        {edu.description}
                      </p>
                    )}

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {edu.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-[10px] font-medium text-gray-400 bg-white/[0.02] border border-white/[0.05] rounded-md"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && hasExtras && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-2 space-y-5 border-t border-white/[0.04]">
                          {/* Clubs & Activities - LinkedIn Gallery Style */}
                          {edu.volunteering && edu.volunteering.length > 0 && (
                            <div className="space-y-4">
                              <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                                <Users className="w-3.5 h-3.5" />
                                <span>Clubs & Activities</span>
                              </div>
                              
                              {/* LinkedIn-style Horizontal Gallery */}
                              <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
                                {edu.volunteering.map((vol, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative flex-shrink-0 w-[280px] sm:w-[320px] rounded-xl overflow-hidden cursor-pointer"
                                  >
                                    {/* Photo Container - Horizontal 16:9 */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                      {vol.image ? (
                                        <>
                                          <Image
                                            src={vol.image}
                                            alt={`${vol.name} - ${vol.role}`}
                                            fill
                                            className="object-cover object-[center_80%] transition-transform duration-500 group-hover:scale-105"
                                          />
                                          {/* Gradient overlay for text readability */}
                                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                        </>
                                      ) : (
                                        <div className={`w-full h-full bg-gradient-to-br ${THEME_GRADIENT} flex items-center justify-center`}>
                                          <Users className="w-12 h-12 text-white/60" />
                                        </div>
                                      )}
                                      
                                      {/* Content Overlay */}
                                      <div className="absolute bottom-0 left-0 right-0 p-4">
                                        {/* Role Badge */}
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-2">
                                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                          <span className="text-[10px] font-semibold text-white uppercase tracking-wider">
                                            {vol.role}
                                          </span>
                                        </div>
                                        
                                        {/* Organization Name */}
                                        <h4 className="text-base font-bold text-white mb-1 line-clamp-1">
                                          {vol.name}
                                        </h4>
                                        
                                        {/* Date */}
                                        <div className="flex items-center gap-1.5 text-xs text-white/70">
                                          <Calendar className="w-3 h-3" />
                                          <span>{vol.date}</span>
                                        </div>
                                        
                                        {/* Description on hover */}
                                        {vol.description && (
                                          <motion.p 
                                            initial={{ opacity: 0, height: 0 }}
                                            whileHover={{ opacity: 1, height: "auto" }}
                                            className="text-xs text-white/60 mt-2 line-clamp-2 hidden group-hover:block"
                                          >
                                            {vol.description}
                                          </motion.p>
                                        )}
                                      </div>
                                      
                                      {/* Hover border effect */}
                                      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-300" />
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Certificates */}
                          {edu.certificates && edu.certificates.length > 0 && (
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                                <Award className="w-3.5 h-3.5" />
                                <span>Certificates</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {edu.certificates.map((cert, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors"
                                  >
                                    <Award className="w-4 h-4 text-[#ff6b35]" />
                                    <div>
                                      <p className="text-xs font-medium text-white">{cert.name}</p>
                                      <p className="text-[10px] text-gray-500">{cert.issuer} • {cert.date}</p>
                                    </div>
                                    {cert.credentialUrl && (
                                      <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-auto text-gray-500 hover:text-white transition-colors"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <ExternalLink className="w-3 h-3" />
                                      </a>
                                    )}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Photos Gallery */}
                          {edu.photos && edu.photos.length > 0 && (
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                                <ImageIcon className="w-3.5 h-3.5" />
                                <span>Memories</span>
                              </div>
                              <div className="grid grid-cols-3 gap-2">
                                {edu.photos.map((photo, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="relative aspect-video rounded-lg overflow-hidden bg-white/[0.03] border border-white/[0.04] cursor-pointer hover:border-white/[0.1] transition-colors"
                                  >
                                    <Image
                                      src={photo}
                                      alt={`${edu.institution} photo ${i + 1}`}
                                      fill
                                      className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
