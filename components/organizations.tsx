"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Award } from "lucide-react"

export default function Organizations() {
  const organizations = [
    {
      id: 1,
      title: "Socio Techno",
      role: "Chairman",
      period: "06/2024 – 12/2024",
      location: "Bogor",
      description:
        "saya dipercaya untuk bertanggung jawab penuh di acara socio techno 2024. Socio Techno adalah acara seminar yang diselenggarakan oleh himalkom ipb, tetapi dalam masa kepemimpinan saya, sociotechno sudah berevolusi, karena saya berhasil menggabungkan kinerja 2 divisi yaitu divisi media branding dan juga divisi entrepreneur, acara ini menjadi acara podcast kewirausahaan dan juga desain, bisa dibilang versi upgrade dari sociotechno sebelumnya karna pembawaannya yang fun tetapi tetap edukatif.",
      type: "Leadership",
      organization: "Himalkom IPB",
    },
    {
      id: 2,
      title: "ITTODAY",
      role: "Vice Chairman (Competition Leader)",
      period: "01/2024 – 10/2024",
      location: "Bogor, Indonesia",
      description:
        "Saya telah berperan sebagai staff di ITTODAY 2023 sebagai staff kompetisi dan untuk ITTODAY 2024 saya menjabat sebagai competition leader dan saya bertanggung jawab atas keseluruhan kompetisi yang ada di ittoday 2024.",
      type: "Leadership",
      organization: "IPB University",
    },
    {
      id: 3,
      title: "Himalkom",
      role: "Staff of Entrepreneur",
      period: "01/2024 – 12/2024",
      location: "Bogor, Indonesia",
      description:
        "Saya berperan sebagai staff entrepreneur yang bertanggung jawab sebagai pengelola keuangan himalkom dan juga menaikkan pemasukan himalkom.",
      type: "Organization",
      organization: "Himalkom IPB",
    },
    {
      id: 4,
      title: "CPSC 2023",
      role: "Public Relations",
      period: "2023 – 2023",
      location: "Bogor, Indonesia",
      description:
        "Saya bertanggung jawab sebagai staff hubungan masyarakat yang akan memegang seluruh akun media sosial cpsc.",
      type: "Committee",
      organization: "IPB University",
    },
    {
      id: 5,
      title: "Eid al-Fitr 2022 Committee",
      role: "Chairman",
      period: "2022",
      location: "Bogor, Indonesia",
      description: "Saya bertanggung jawab dalam pendistribusian zakat fitrah dan mal di masjid al mardhiyyah.",
      type: "Community",
      organization: "Masjid Al Mardhiyyah",
    },
    {
      id: 6,
      title: "Agriinformatic",
      role: "Event Coordinator",
      period: "2023",
      location: "Bogor, Indonesia",
      description:
        "Saya bertanggung jawab terhadap keberlangsungan acara dari mulai rundown acara, dan sampai di hari h saya memastikan bahwa semua rangkaian acara berjalan sesuai dengan jadwal.",
      type: "Event",
      organization: "IPB University",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Leadership":
        return "bg-blue-500/20 text-blue-500 border-blue-500/30"
      case "Organization":
        return "bg-green-500/20 text-green-500 border-green-500/30"
      case "Committee":
        return "bg-purple-500/20 text-purple-500 border-purple-500/30"
      case "Community":
        return "bg-orange-500/20 text-orange-500 border-orange-500/30"
      case "Event":
        return "bg-pink-500/20 text-pink-500 border-pink-500/30"
      default:
        return "bg-gray-500/20 text-gray-500 border-gray-500/30"
    }
  }

  return (
    <section id="organizations" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Organizations & Leadership</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My involvement in various organizations, committees, and leadership roles throughout my academic journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {organizations.map((org, index) => (
              <motion.div
                key={org.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br from-background to-muted/10">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getTypeColor(org.type)}>{org.type}</Badge>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{org.period}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{org.title}</CardTitle>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Award className="h-4 w-4" />
                        <span>{org.role}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Users className="h-4 w-4" />
                        <span>{org.organization}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{org.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{org.description}</p>
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
