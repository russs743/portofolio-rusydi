"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Calendar, Code2 } from "lucide-react"
import { SectionContainer } from "@/components/ui/section-container"

export default function RedesignedHero() {
  return (
    <SectionContainer className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center"
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Code2 className="mr-2 h-4 w-4" />
                Available for opportunities
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Web Developer & UI/UX Designer
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
                Computer Science Student at IPB University
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Saya sering mengeksplorasi di bagian web development, terutama sebagai{" "}
                <span className="text-primary font-semibold">backend developer</span>,{" "}
                <span className="text-primary font-semibold">frontend developer</span>, maupun{" "}
                <span className="text-primary font-semibold">fullstack developer</span>. Saya juga memiliki minat di
                bagian desain, khususnya <span className="text-primary font-semibold">UI/UX design</span> untuk web.
              </p>

              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
                Disclaimer, Pembuatan web ini dan beberapa project 
                <span className="text-primary font-semibold"> dibantu oleh AI </span>
              </h2>
              
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Bogor, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Available for projects</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJTNqQVRHQmCxffXTlfvXcgClhkFWTsRtDKFZvnPBnhGNfGMkwSBPvSHrWtKQlNcSxKPBrg" size="lg" className="px-8 py-3 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/russs743" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://www.linkedin.com/in/rusydi-balfas-05bb38246/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-12"
            >
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
                >
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}
