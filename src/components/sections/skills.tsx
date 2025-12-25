"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillCategories } from "@/data/skills";
import { SectionContainer } from "@/shared/components/section-container";
import { SectionHeader } from "@/shared/components/section-header";
import { THEME_GRADIENT } from "@/config/constants";

export function SkillsSection() {
  return (
    <SectionContainer id="skills" spacing="mobile">
      <SectionHeader
        title="Technical Skills"
        className="mb-12"
      />

        {/* Skills Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue={skillCategories[0]?.id || "frontend"} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white/[0.03] border border-white/[0.08] mb-8 p-1 rounded-xl">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-gray-400 font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ff6b35] data-[state=active]:via-[#4ecdc4] data-[state=active]:to-[#45b7d1] data-[state=active]:text-white data-[state=active]:shadow-lg hover:text-white hover:bg-white/[0.05] transition-all duration-300 rounded-lg"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.skills.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="relative group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Glow effect */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${THEME_GRADIENT} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                      
                      <div className="relative bg-gradient-to-br from-[#0d0d0d] via-[#111111] to-[#0a0a0a] rounded-xl border border-white/[0.08] p-4 flex flex-col items-center gap-2 hover:border-white/[0.15] transition-all duration-300">
                        <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                          <Image src={tech.icon} alt={`${tech.name} icon`} fill sizes="40px" className="object-contain" />
                        </div>
                        <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300 text-center">{tech.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
    </SectionContainer>
  );
}