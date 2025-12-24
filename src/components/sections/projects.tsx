"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Github, Sparkles, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { projects, projectIcons } from "@/data/projects";
import { CATEGORY_COLORS, THEME_GRADIENT } from "@/config/constants";
import { SectionContainer } from "@/shared/components/section-container";
import { SectionHeader } from "@/shared/components/section-header";
import { getIconComponent } from "@/shared/utils/icon-resolver";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = getIconComponent(project.icon, projectIcons);
  const colors = CATEGORY_COLORS[project.category] || CATEGORY_COLORS["Backend"];
  
  if (!IconComponent) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Animated glow effect */}
      <div 
        className={`absolute -inset-0.5 bg-gradient-to-r ${THEME_GRADIENT} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500`}
      />
      
      {/* Card container */}
      <div className="relative h-full bg-gradient-to-br from-[#0d0d0d] via-[#111111] to-[#0a0a0a] rounded-2xl border border-white/[0.08] overflow-hidden">
        
        {/* Top gradient accent bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${THEME_GRADIENT}`} />
        
        {/* Decorative corner elements */}
        <div className="absolute top-4 right-4 w-20 h-20 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
          <IconComponent className="w-full h-full" />
        </div>
        
        {/* Content */}
        <div className="relative p-6 space-y-5">
          
          {/* Header with icon and category */}
          <div className="flex items-start justify-between">
            <motion.div 
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${THEME_GRADIENT} p-[1px] shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-full h-full bg-[#0d0d0d] rounded-[11px] flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-white" />
              </div>
            </motion.div>
            
            <Badge 
              className={`${colors.bg} ${colors.text} ${colors.border} border text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1`}
            >
              {project.category}
            </Badge>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-1.5">
            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Story Quote - appears on hover */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              height: isHovered ? "auto" : 0 
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="relative pl-4 py-2 border-l-2 border-[#ff6b35]/30">
              <p className="text-xs text-gray-500 italic leading-relaxed">
                &quot;{project.story}&quot;
              </p>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${THEME_GRADIENT}`} />
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 5).map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="px-2.5 py-1 text-[10px] font-medium text-gray-400 bg-white/[0.03] border border-white/[0.06] rounded-md hover:bg-white/[0.08] hover:border-white/[0.12] hover:text-gray-300 transition-all duration-200 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
              {project.tags.length > 5 && (
                <span className="px-2.5 py-1 text-[10px] font-medium text-gray-500 bg-white/[0.02] border border-white/[0.04] rounded-md">
                  +{project.tags.length - 5}
                </span>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-2">
            <Link 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm font-medium text-gray-400 hover:bg-white/[0.08] hover:border-white/[0.15] hover:text-white transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </motion.div>
            </Link>
            
            {project.liveUrl !== "#" && (
              <Link 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${THEME_GRADIENT} rounded-xl text-sm font-semibold text-white shadow-lg shadow-[#ff6b35]/20`}
                >
                  <span>Live</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </Link>
            )}
          </div>
        </div>

        {/* Bottom shine effect on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <SectionHeader
        title="Featured"
        subtitle="Projects"
        badge={{ icon: <Sparkles className="w-4 h-4 text-[#ff6b35]" />, text: "My Work" }}
        description="A showcase of my recent work, demonstrating expertise in backend development, full-stack solutions, and modern software architecture."
        className="mb-16"
      />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-lg italic max-w-xl mx-auto mb-8">
            &quot;Each project represents a step forward in my journey as a developer, 
            combining technical expertise with creative problem-solving.&quot;
          </p>
          
          <Link href="https://github.com/ahmed0elseginy" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] rounded-xl text-white font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-shadow duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
    </SectionContainer>
  );
}
