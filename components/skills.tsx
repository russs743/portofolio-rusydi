"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Server, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

interface Skill {
  name: string
  level: number
  description: string
}

const skillsData = {
  frontend: [
    {
      name: "HTML",
      level: 90,
      description: "Experienced with semantic HTML and accessibility best practices",
    },
    {
      name: "CSS",
      level: 85,
      description: "Proficient in CSS, including Flexbox, Grid, and responsive design",
    },
    {
      name: "JavaScript",
      level: 80,
      description: "Strong knowledge of JavaScript for interactive web applications",
    },
  ],
  backend: [
    {
      name: "PHP",
      level: 85,
      description: "Experienced with PHP for server-side development",
    },
    {
      name: "MySQL",
      level: 80,
      description: "Proficient in database design and SQL queries",
    },
    {
      name: "Database Design",
      level: 75,
      description: "Skilled in designing efficient database schemas",
    },
  ],
  other: [
    {
      name: "Data Visualization",
      level: 70,
      description: "Experience with data visualization using JavaScript libraries",
    },
    {
      name: "Project Management",
      level: 75,
      description: "Capable of managing projects and coordinating team efforts",
    },
    {
      name: "Problem Solving",
      level: 85,
      description: "Strong analytical and problem-solving skills",
    },
  ],
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"frontend" | "backend" | "other">("frontend")

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-10">
            <div className="flex gap-4">
              <SkillTab
                icon={<Code className="h-5 w-5" />}
                title="Frontend Developer"
                isActive={activeCategory === "frontend"}
                onClick={() => setActiveCategory("frontend")}
                description="saya telah berpengalaman di bidang frontend developer dan bahasa yang saya pakai itu html, css dan javascript"
              />
              <SkillTab
                icon={<Server className="h-5 w-5" />}
                title="Backend Developer"
                isActive={activeCategory === "backend"}
                onClick={() => setActiveCategory("backend")}
                description="saya telah berpengalaman untuk berperan sebagai backend developer, dan bahasa yang saya pakai itu php dengan database mySQL"
              />
              <SkillTab
                icon={<Cpu className="h-5 w-5" />}
                title="Other Skills"
                isActive={activeCategory === "other"}
                onClick={() => setActiveCategory("other")}
                description="Berbagai keterampilan lain yang saya miliki dalam bidang teknologi dan manajemen"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {skillsData[activeCategory].map((skill, index) => (
                <SkillItem key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>

            <motion.div
              key={`${activeCategory}-description`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-none bg-gradient-to-br from-blue-500/5 to-purple-500/5">
                <CardContent className="p-6 h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-4">
                    {activeCategory === "frontend"
                      ? "Frontend Developer"
                      : activeCategory === "backend"
                        ? "Backend Developer"
                        : "Other Skills"}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {activeCategory === "frontend"
                      ? "saya telah berpengalaman di bidang frontend developer dan bahasa yang saya pakai itu html, css dan javascript"
                      : activeCategory === "backend"
                        ? "saya telah berpengalaman untuk berperan sebagai backend developer, dan bahasa yang saya pakai itu php dengan database mySQL"
                        : "Berbagai keterampilan lain yang saya miliki dalam bidang teknologi dan manajemen"}
                  </p>

                  <div className="mt-auto">
                    <div className="text-sm text-muted-foreground">
                      {activeCategory === "frontend"
                        ? "Saya memiliki pengalaman membuat antarmuka pengguna yang responsif dan interaktif."
                        : activeCategory === "backend"
                          ? "Saya mampu membangun sistem backend yang handal dengan PHP dan MySQL."
                          : "Keterampilan tambahan yang melengkapi kemampuan teknis saya."}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface SkillTabProps {
  icon: React.ReactNode
  title: string
  isActive: boolean
  onClick: () => void
  description: string
}

function SkillTab({ icon, title, isActive, onClick, description }: SkillTabProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ y: 0 }}
      className={cn(
        "cursor-pointer rounded-xl p-4 transition-all duration-300",
        isActive ? "bg-primary text-primary-foreground shadow-lg" : "bg-card hover:bg-accent/50",
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-medium">{title}</span>
      </div>
    </motion.div>
  )
}

interface SkillItemProps {
  skill: Skill
  index: number
}

function SkillItem({ skill, index }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="font-medium">{skill.name}</div>
        <div className="text-sm text-muted-foreground">{skill.level}%</div>
      </div>
      <Progress value={skill.level} className="h-2 mb-1" />
      <p className="text-sm text-muted-foreground">{skill.description}</p>
    </motion.div>
  )
}
