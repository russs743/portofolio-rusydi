"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SectionContainer, SectionHeader } from "@/components/ui/section-container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Code, Database, Wrench, MessageSquare } from "lucide-react"

const skillsData = {
  frontend: {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "HTML5", level: 75, category: "intermediate" },
      { name: "CSS3", level: 75, category: "intermediate" },
      { name: "JavaScript", level: 50, category: "intermediate" },
      { name: "React.js", level: 40, category: "beginner" },
      { name: "Next.js", level: 40, category: "beginner" },
    ],
  },
  backend: {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js", level: 40, category: "beginner" },
      { name: "Express.js", level: 40, category: "beginner" },
      { name: "PHP", level: 75, category: "intermediate" },
      { name: "PostgreSQL", level: 80, category: "intermediate" },
    ],
  },
  tools: {
    title: "Tools & Software",
    icon: Wrench,
    skills: [
      { name: "Figma", level: 90, category: "expert" },
      { name: "VS Code", level: 90, category: "expert" },
      { name: "Git", level: 60, category: "intermediate" },
      { name: "GitHub", level: 75, category: "intermediate" },
    ],
  },
  languages: {
    title: "Programming Languages",
    icon: MessageSquare,
    skills: [
      { name: "C", level: 90, category: "expert" },
      { name: "C++", level: 85, category: "expert" },
      { name: "Python", level: 90, category: "expert" },
      { name: "JavaScript", level: 50, category: "intermediate" },
    ],
  },
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "expert":
      return "bg-green-500"
    case "intermediate":
      return "bg-blue-500"
    case "beginner":
      return "bg-orange-500"
    default:
      return "bg-gray-500"
  }
}

const getCategoryBadgeColor = (category: string) => {
  switch (category) {
    case "expert":
      return "bg-green-500/10 text-green-500 border-green-500/20"
    case "intermediate":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20"
    case "beginner":
      return "bg-orange-500/10 text-orange-500 border-orange-500/20"
    default:
      return "bg-gray-500/10 text-gray-500 border-gray-500/20"
  }
}

export default function RedesignedSkills() {
  return (
    <SectionContainer id="skills" className="bg-gradient-to-b from-background to-muted/20">
      <SectionHeader
        title="Technical Skills"
        subtitle="My expertise across different areas of software development and design"
      />

      <ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([key, section], index) => {
            const IconComponent = section.icon
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {section.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.05 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <Badge className={getCategoryBadgeColor(skill.category)}>{skill.category}</Badge>
                        </div>
                        <div className="relative">
                          <Progress value={skill.level} className="h-2" />
                          <div
                            className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ease-out ${getCategoryColor(skill.category)}`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </ScrollReveal>

      {/* Skills Summary */}
      <ScrollReveal>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="border-none shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Skill Level Legend</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20 px-4 py-2">
                  Expert - Advanced proficiency
                </Badge>
                <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 px-4 py-2">
                  Intermediate - Good working knowledge
                </Badge>
                <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20 px-4 py-2">
                  Beginner - Learning and practicing
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </ScrollReveal>
    </SectionContainer>
  )
}
