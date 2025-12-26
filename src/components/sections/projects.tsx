"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Github, Sparkles, ArrowUpRight, ExternalLink } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { projects, projectIcons } from "@/data/projects";
import { CATEGORY_COLORS, THEME_GRADIENT } from "@/config/constants";
import { SectionContainer } from "@/shared/components/section-container";
import { SectionHeader } from "@/shared/components/section-header";
import { getIconComponent } from "@/shared/utils/icon-resolver";
import type { Project } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = getIconComponent(project.icon, projectIcons);
  const colors = CATEGORY_COLORS[project.category] || CATEGORY_COLORS["Backend"];
  const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";
  
  // Auto-play video when it comes into view
  useEffect(() => {
    if (project.preview?.type === "video" && videoRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoRef.current?.play().catch(() => {
                // Autoplay was prevented, ignore
              });
            } else {
              videoRef.current?.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }
  }, [project.preview]);
  
  if (!IconComponent) return null;

  return (
    <motion.div
      ref={cardRef}
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
        
        {/* Preview Section - Video or Image */}
        {project.preview && (
          <div 
            className={`relative w-full h-48 overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] ${hasLiveUrl ? 'cursor-pointer' : ''}`}
            onClick={() => hasLiveUrl && setIsPreviewOpen(true)}
          >
            {project.preview.type === "video" ? (
              <video
                ref={videoRef}
                src={project.preview.url}
                poster={project.preview.thumbnail}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                autoPlay
                preload="auto"
                onMouseEnter={async () => {
                  if (videoRef.current) {
                    try {
                      await videoRef.current.play();
                    } catch (error) {
                      // Autoplay was prevented, ignore
                    }
                  }
                }}
                onMouseLeave={() => {
                  // Keep playing on mouse leave, don't pause
                }}
              />
            ) : (
              <img
                src={project.preview.url}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60 pointer-events-none" />
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Click to preview overlay */}
            {hasLiveUrl && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#0d0d0d]/90 border border-white/20 rounded-lg backdrop-blur-sm">
                  <ExternalLink className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">View Website</span>
                </div>
              </div>
            )}
          </div>
        )}
        
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
            {project.subtitleLogo ? (
              <div className="h-5">
                <Image
                  src={project.subtitleLogo}
                  alt={project.subtitle}
                  width={100}
                  height={20}
                  className="object-contain object-left h-5 w-auto"
                />
              </div>
            ) : (
              <p className="text-sm text-gray-500 font-medium">
                {project.subtitle}
              </p>
            )}
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

      {/* Website Preview Dialog */}
      {hasLiveUrl && (
        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogContent className="max-w-[95vw] lg:max-w-6xl h-[90vh] p-0 flex flex-col">
            <DialogHeader className="px-6 pt-6 pb-4 flex-shrink-0">
              <DialogTitle className="text-xl font-bold text-white">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                {project.subtitle}
              </DialogDescription>
            </DialogHeader>
            <div className="relative flex-1 px-6 pb-6 min-h-0">
              <iframe
                src={project.liveUrl}
                className="w-full h-full rounded-lg border border-white/10 bg-white"
                title={`${project.title} preview`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute bottom-10 right-10">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-shadow"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Open in New Tab</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
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
