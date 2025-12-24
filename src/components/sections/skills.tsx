"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillCategories } from "@/data/skills";
import { SectionContainer } from "@/shared/components/section-container";
import { SectionHeader } from "@/shared/components/section-header";

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
            <TabsList className="grid w-full grid-cols-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur-sm border border-primary/30 mb-8 p-1 rounded-lg">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-gray-200 font-medium data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-primary/20 hover:text-white hover:bg-primary/10 transition-all duration-300"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.skills.map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="rounded-xl border border-primary/20 bg-black/30 p-4 flex flex-col items-center gap-2 hover:border-primary/40 hover:bg-black/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                        <Image src={tech.icon} alt={`${tech.name} icon`} fill sizes="40px" className="object-contain" />
                      </div>
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 text-center">{tech.name}</span>
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