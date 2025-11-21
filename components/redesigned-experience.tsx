"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionContainer, SectionHeader } from "@/components/ui/section-container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { ErrorBoundary } from "@/components/error-boundary"
import {
  Calendar,
  MapPin,
  Building,
  ChevronRight,
  ChevronDown,
  Award,
  GraduationCap,
  Users,
  Target,
  Briefcase,
} from "lucide-react"

// Experience data
const experiences = [
  {
    id: "bri-internship",
    title: "Data Analyst Intern",
    company: "PT Bank Rakyat Indonesia Persero Tbk",
    location: "Central Jakarta, Indonesia",
    period: "Oct 2025 - Dec 2025",
    type: "work",
    description:
      "Leveraging fundamental analytical skills to support business intelligence initiatives within the banking sector. Focusing on data collection, cleaning, and preliminary analysis to provide basic reports and support operational monitoring using common data tools.",
    responsibilities: [
      "Assisting in the collection and pre-processing (cleaning and structuring) of raw data to ensure accuracy and completeness for analysis",
      "Conducting fundamental data analysis to identify basic trends and patterns in business and financial datasets",
      "Creating and maintaining simple data dashboards and reports using Excel for operational monitoring and basic performance tracking",
      "Assisting in documenting data sources, definitions, and basic analytical procedures",
    ],
    skills: [
      "Data Analysis",
      "Data Cleaning",
      "Data Pre-processing",
      "Microsoft Excel",
      "Pivot Tables",
      "Basic Statistics",
      "Report Generation",
    ],
    metrics: [
      { value: "Oct 2025", label: "Start Date" },
      { value: "Dec 2025", label: "End Date" },
      { value: "BRI", label: "Organization" },
    ],
    color: "from-orange-600 to-red-600",
  },
  {
    id: "computer-science",
    title: "Computer Science Student",
    company: "IPB University",
    location: "Bogor, Indonesia",
    period: "2022 - Present",
    type: "education",
    description:
      "Currently pursuing Bachelor's degree in Computer Science at IPB University. Focusing on software development, algorithms, and data structures while working on practical projects.",
    responsibilities: [
      "Learning fundamental computer science concepts and programming principles",
      "Developing web applications using various technologies and frameworks",
      "Working on individual and team projects to apply theoretical knowledge",
      "Participating in coding competitions and programming communities",
    ],
    skills: ["C", "C++", "Python", "JavaScript", "Web Development", "Data Structures", "Algorithms"],
    metrics: [
      { value: "2022", label: "Started" },
      { value: "2026", label: "Expected Graduation" },
      { value: "3+", label: "Years of Study" },
    ],
    color: "from-blue-600 to-cyan-600",
  },
]

export default function RedesignedExperience() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)
  const [experienceType, setExperienceType] = useState<"all" | "work" | "education">("all")

  const toggleExpand = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id)
  }

  // Filter experiences based on type
  const filteredExperiences =
    experienceType === "all" ? experiences : experiences.filter((exp) => exp.type === experienceType)

  return (
    <SectionContainer id="experience" className="bg-gradient-to-b from-background/95 to-background">
      <SectionHeader
        title="Professional Journey"
        subtitle="My educational background and development journey in computer science and web development."
      />

      <ScrollReveal>
        <Tabs
          defaultValue="all"
          onValueChange={(value) => setExperienceType(value as "all" | "work" | "education")}
          className="w-full"
        >
          <div className="overflow-x-auto pb-2 no-scrollbar">
            <TabsList className="flex justify-center gap-2 mb-8 bg-transparent w-fit mx-auto">
              <TabsTrigger
                value="all"
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all data-[state=active]:shadow-lg",
                  experienceType === "all" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80",
                )}
              >
                <div className="flex items-center gap-2">
                  <span>All Experience</span>
                </div>
              </TabsTrigger>

              <TabsTrigger
                value="work"
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all data-[state=active]:shadow-lg",
                  experienceType === "work" ? "bg-orange-600 text-white" : "bg-muted hover:bg-muted/80",
                )}
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>Work</span>
                </div>
              </TabsTrigger>

              <TabsTrigger
                value="education"
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all data-[state=active]:shadow-lg",
                  experienceType === "education" ? "bg-blue-600 text-white" : "bg-muted hover:bg-muted/80",
                )}
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Education</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="space-y-6">
            {filteredExperiences.map((experience, index) => (
              <ErrorBoundary key={experience.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={cn("overflow-hidden border-none shadow-lg", `bg-gradient-to-br ${experience.color}/10`)}
                  >
                    <CardContent className="p-0">
                      <div
                        className={cn(
                          "p-4 sm:p-6 cursor-pointer transition-all duration-300",
                          expandedExperience === experience.id ? "pb-3" : "",
                        )}
                        onClick={() => toggleExpand(experience.id)}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div>
                            <Badge
                              className={cn(
                                "mb-2 px-3 py-1",
                                experience.type === "work"
                                  ? "bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-500/30"
                                  : "bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30",
                              )}
                            >
                              {experience.type === "work" ? (
                                <>
                                  <Briefcase className="h-3 w-3 mr-1" />
                                  Internship
                                </>
                              ) : (
                                <>
                                  <GraduationCap className="h-3 w-3 mr-1" />
                                  Education
                                </>
                              )}
                            </Badge>
                            <h3 className="text-xl font-semibold flex items-center gap-2">
                              {experience.title}
                              <motion.div
                                animate={{ rotate: expandedExperience === experience.id ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {expandedExperience === experience.id ? (
                                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                )}
                              </motion.div>
                            </h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Building className="h-4 w-4" />
                                <span>{experience.company}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{experience.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{experience.period}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground">{experience.description}</p>
                      </div>

                      <AnimatePresence>
                        {expandedExperience === experience.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-6 pb-6">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t">
                                <div>
                                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <Award className="h-5 w-5 text-primary" />
                                    Key Activities
                                  </h4>
                                  <ul className="space-y-2">
                                    {experience.responsibilities.map((responsibility, i) => (
                                      <li key={i} className="flex items-start gap-2">
                                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                          <span className="text-xs text-primary">✓</span>
                                        </div>
                                        <span className="text-sm sm:text-base">{responsibility}</span>
                                      </li>
                                    ))}
                                  </ul>

                                  <div className="mt-6">
                                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                      <Users className="h-5 w-5 text-primary" />
                                      Skills Developed
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {experience.skills.map((skill, i) => (
                                        <Badge key={i} variant="secondary">
                                          {skill}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <Target className="h-5 w-5 text-primary" />
                                    Key Information
                                  </h4>

                                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                                    {experience.metrics.map((metric, i) => (
                                      <div key={i} className="bg-primary/10 rounded-lg p-3 text-center">
                                        <div className="text-xl sm:text-2xl font-bold">{metric.value}</div>
                                        <div className="text-xs sm:text-sm text-muted-foreground">{metric.label}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              </ErrorBoundary>
            ))}
          </div>
        </Tabs>
      </ScrollReveal>
    </SectionContainer>
  )
}
