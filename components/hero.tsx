"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale, y }}
      className="min-h-[90vh] flex flex-col items-center justify-center py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 -z-10" />

      <div className="container mx-auto px-4 z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-center"
            animate={{
              textShadow: "0 0 15px rgba(255,255,255,0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 inline-block">
              Rusydi Balfas
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground mb-8 flex items-center justify-center gap-2 text-center"
        >
          <Mail className="h-4 w-4" />
          <span>rusydibalfas@gmail.com</span>
          <span className="mx-2">|</span>
          <span>088809173096</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-3xl text-lg md:text-xl mb-12 leading-relaxed text-center mx-auto"
        >
          Saya memiliki pengalaman di bidang teknologi, khususnya pengalaman mengelola data dan visualisasi menggunakan
          JavaScript. Saya juga memiliki pengalaman sebagai front end developer menggunakan HTML, CSS dan JavaScript dan
          backend menggunakan database PHP dan MySQL di dua proyek website saya dan masih banyak lagi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          <Badge
            variant="outline"
            className="px-3 py-1.5 backdrop-blur-sm border-blue-500/30 hover:bg-blue-500/10 transition-colors"
          >
            Frontend Developer
          </Badge>
          <Badge
            variant="outline"
            className="px-3 py-1.5 backdrop-blur-sm border-purple-500/30 hover:bg-purple-500/10 transition-colors"
          >
            Backend Developer
          </Badge>
          <Badge
            variant="outline"
            className="px-3 py-1.5 backdrop-blur-sm border-green-500/30 hover:bg-green-500/10 transition-colors"
          >
            Computer Science Student
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden border-primary/50 gap-2"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/174YuDW7zzQyJENJXAxVr_uQxFXpVIKQc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10">Download CV</span>
              <Download className="h-4 w-4 relative z-10" />
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex gap-4 justify-center mt-8"
        >
          {[
            { icon: Github, href: "https://github.com/russs743" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/rusydi-balfas-05bb38246/" },
            { icon: Mail, href: "mailto:rusydibalfas@gmail.com" },
          ].map((social, index) => (
            <Button key={index} variant="ghost" size="icon" className="hover:bg-accent/10" asChild>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-colors"
            onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
