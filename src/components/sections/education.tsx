"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education, educationIcons } from "@/data/education";
import { SectionContainer } from "@/shared/components/section-container";
import { SectionHeader } from "@/shared/components/section-header";
import { getIconComponent } from "@/shared/utils/icon-resolver";

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
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
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
                            variant={status === "Current" ? "default" : "secondary"}
                            className={`text-xs ${
                              status === "Current" 
                                ? "bg-primary text-black" 
                                : "bg-secondary/10 text-secondary border-secondary/20"
                            }`}
                          >
                            {status}
                          </Badge>
                          <p className="text-sm text-gray-400 mt-1">{edu.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">{grade}</p>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-primary font-medium text-base">
                      {edu.institution}
                    </CardDescription>
                    <p className="text-sm text-gray-400 mt-1">
                      {edu.location}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span className="text-sm text-secondary font-medium">Key Achievements</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
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
            "Continuous learning is the key to staying relevant in the ever-evolving world of technology."
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
