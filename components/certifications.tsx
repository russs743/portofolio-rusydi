"use client"

import { motion } from "framer-motion"
import { SectionContainer, SectionHeader } from "@/components/ui/section-container"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Award } from "lucide-react"

interface Certification {
  id: string
  title: string
  issuer: string
  issuedDate: string
  skills: string[]
  credentialUrl?: string
  logo?: string
}

const certifications: Certification[] = [
  {
    id: "web-dev-nodejs",
    title: "Explore Web Development with Node.js",
    issuer: "LinkedIn",
    issuedDate: "Jun 2025",
    skills: ["Back-End Web Development", "Node.js"],
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/d20865375c05f8a74e794dbd31cc915ce3e7c1ac1a9c4f257a13a2edb5a33157",
    logo: "linkedin",
  },
  {
    id: "react-dev",
    title: "Explore React.js Development",
    issuer: "LinkedIn",
    issuedDate: "Feb 2025",
    skills: ["JavaScript", "React.js"],
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/4fdd4ad4e65dc2f68f972468106008fd04edf574b88fdc16eb7995008d063687",
    logo: "linkedin",
  },
]

export default function Certifications() {
  return (
    <SectionContainer id="certifications" className="bg-gradient-to-b from-background/95 to-background">
      <SectionHeader
        title="Licenses & Certifications"
        subtitle="Professional certifications and credentials I've earned"
      />

      <ScrollReveal>
        <div className="space-y-4 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                        <div className="text-white font-bold text-lg">in</div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
                          <p className="text-muted-foreground flex items-center gap-1">
                            <Award className="h-4 w-4" />
                            {cert.issuer}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">Issued {cert.issuedDate}</p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {cert.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-blue-500/10 text-blue-700 dark:text-blue-400"
                          >
                            <Award className="h-3 w-3 mr-1" />
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-foreground/30 hover:border-foreground/50 text-sm font-medium transition-all hover:bg-foreground/5"
                      >
                        Show credential
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </SectionContainer>
  )
}
