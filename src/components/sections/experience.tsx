"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences, experienceIcons } from "@/data/experience";
import { SectionContainer } from "@/shared/components/section-container";
import { SectionHeader } from "@/shared/components/section-header";
import { getIconComponent } from "@/shared/utils/icon-resolver";

export function ExperienceSection() {
  return (
    <SectionContainer id="experience" spacing="mobile">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Professional Experience"
          description="My professional journey in software development, showcasing growth through internships, mentorship, and hands-on learning experiences."
          className="mb-12"
        />

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = getIconComponent(exp.icon, experienceIcons);
            if (!IconComponent) return null;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-black/50 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <Badge 
                            variant={exp.status === "Current" ? "default" : "secondary"}
                            className={`text-xs ${
                              exp.status === "Current" 
                                ? "bg-primary text-black" 
                                : "bg-secondary/10 text-secondary border-secondary/20"
                            }`}
                          >
                            {exp.status}
                          </Badge>
                          <p className="text-sm text-gray-400 mt-1">{exp.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs bg-black/30 border-primary/20 text-gray-300">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium text-base">
                      {exp.company}
                    </CardDescription>
                    <p className="text-sm text-gray-400 mt-1">
                      {exp.location}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span className="text-sm text-secondary font-medium">Key Achievements</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <Badge 
                            key={i}
                            variant="outline" 
                            className="text-xs bg-black/30 border-primary/20 text-gray-300 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg italic max-w-2xl mx-auto">
            "Every experience is a stepping stone towards becoming a better developer and building meaningful solutions."
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}