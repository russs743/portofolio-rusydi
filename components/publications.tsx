"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, FileText, Users } from "lucide-react"

export default function Publications() {
  const publications = [
    {
      id: 1,
      title: "DESAIN KIT PEMBELAJARAN GERAK MENGGELINDING PADA BIDANG MIRING UNTUK SISWA SEKOLAH DASAR",
      journal: "Komunikasi Fisika Indonesia",
      date: "11/2022",
      type: "Journal Article",
      description:
        "Jurnal ini berisi desain kit pembelajaran fisika untuk anak sd dan sederajat beserta teori teori fisika yang menguatkan keberhasilan kit pembelajaran.",
      authors: ["Rusydi Balfas", "Co-authors"],
      keywords: ["Physics Education", "Learning Kit", "Elementary School", "Rolling Motion", "Inclined Plane"],
      abstract:
        "This research focuses on designing a physics learning kit specifically for elementary school students to understand rolling motion on inclined planes. The kit includes theoretical foundations and practical applications that support effective learning outcomes.",
    },
  ]

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My research contributions and published works in academic journals and conferences.
            </p>
          </motion.div>

          <div className="space-y-6">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br from-background to-muted/10">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-500 border-blue-500/30">
                        <FileText className="h-3 w-3 mr-1" />
                        {publication.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{publication.date}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight mb-2">{publication.title}</CardTitle>
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                      <span className="text-sm">{publication.journal}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Users className="h-4 w-4" />
                      <span>{publication.authors.join(", ")}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Description</h4>
                      <p className="text-muted-foreground leading-relaxed">{publication.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Abstract</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">{publication.abstract}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {publication.keywords.map((keyword, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Button href="https://kfi.ejournal.unri.ac.id/index.php/JKFI/issue/view/789" variant="outline" className="gap-2 bg-transparent">
                        <ExternalLink className="h-4 w-4" />
                        View Publication
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
