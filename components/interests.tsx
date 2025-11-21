"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Gamepad2, Plane, Heart } from "lucide-react"

export default function Interests() {
  const interests = [
    {
      id: 1,
      title: "Music",
      icon: Music,
      description:
        "Saya lumayan berbakat di bidang musik dan saya memiliki lagu yang saya buat sendiri yang bernama 'Kutipan Hati'.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: 2,
      title: "Gaming",
      icon: Gamepad2,
      description:
        "Saya sudah mengeluti dunia game sejak saya berumur 3 tahun dan sampai sekarang saya mengikuti semua perkembangan game dari mulai mobile, console, pc, nintendo dll.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: 3,
      title: "Traveling",
      icon: Plane,
      description:
        "Saya sangat senang traveling, mengunjungi dan mencoba hal hal baru, walau kadang hal hal tersebut memberikan saya sedikit rasa takut.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
    },
  ]

  return (
    <section id="interests" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Personal Interests</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Beyond coding and technology, here are some of my personal interests and hobbies that keep me inspired and
              motivated.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => {
              const IconComponent = interest.icon
              return (
                <motion.div
                  key={interest.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={`h-full hover:shadow-lg transition-all duration-300 border-none ${interest.bgColor} hover:scale-105`}
                  >
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 relative">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-r ${interest.color} flex items-center justify-center shadow-lg`}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{interest.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-center">{interest.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Special highlight for music */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-none">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Heart className="h-6 w-6 text-purple-500" />
                  <h3 className="text-2xl font-bold">Featured Creation</h3>
                  <Heart className="h-6 w-6 text-purple-500" />
                </div>
                <p className="text-lg text-muted-foreground mb-2">I'm proud to have created my own song titled</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  "Kutipan Hati"
                </p>
                <p className="text-muted-foreground mt-2">
                  This personal composition reflects my passion for music and creative expression.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
