"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Github, Calendar, User, Users } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Playfair Cipher - Aplikasi Enkripsi Dekripsi",
      description:
        "Desain Aplikasi Enkripsi Dekripsi Playfair menggunakan bahasa pemrograman C++ dengan FrontEnd React.js. Aplikasi ini menggunakan metode playfair untuk mengamankan pesan.",
      image: "/images/playfair-cipher.png",
      technologies: ["C++", "React.js", "JavaScript", "HTML", "CSS"],
      category: "Desktop App",
      role: "Fullstack Developer",
      period: "2025",
      team: "1 person",
      keyFeatures: [
        "Implementasi algoritma Playfair Cipher klasik",
        "Interface enkripsi dan dekripsi yang user-friendly",
        "Visualisasi Playfair Matrix 5x5",
        "Input cipher key yang dapat disesuaikan",
        "Penjelasan cara kerja algoritma Playfair",
        "Backend C++ untuk processing enkripsi/dekripsi",
      ],
    },
    {
      id: 2,
      title: "E-Lung - Website Barang Hilang",
      description:
        "Website untuk menginformasikan barang yang hilang dan ditemukan. Platform ini membantu masyarakat untuk melaporkan dan mencari barang yang hilang.",
      image: "/images/e-lung.png",
      technologies: ["HTML", "CSS", "PHP", "PostgreSQL"],
      category: "Web App",
      role: "Frontend Developer & Project Manager",
      period: "09/2023 – 11/2023",
      team: "3 people",
      keyFeatures: [
        "Posting barang hilang dengan detail lengkap",
        "Posting berita kehilangan untuk penyebaran informasi",
        "Section daftar barang hilang yang mudah dicari",
        "Section daftar barang ditemukan untuk membantu pemilik",
        "Sistem pencarian berdasarkan kategori dan lokasi",
        "Interface yang user-friendly dan responsive",
      ],
    },
    {
      id: 3,
      title: "SnapTask - Aplikasi Manajemen Proyek",
      description:
        "Aplikasi berbasis website yang digunakan untuk manajemen proyek. Di SnapTask ini kita bisa menyimpan lebih dari 1 proyek dan di tiap proyeknya kita bisa membuat beberapa task.",
      image: "/images/snaptask.png",
      technologies: ["HTML", "CSS", "PHP", "PostgreSQL"],
      category: "Web App",
      role: "Backend Developer",
      period: "02/2024 – 05/2024",
      team: "4 people",
      keyFeatures: [
        "Multi-project management system",
        "Task creation and management per project",
        "Project progress tracking and monitoring",
        "Team collaboration features",
        "Task assignment and deadline management",
        "Responsive web interface",
      ],
    },
    {
      id: 4,
      title: "Catatan Harian - Daily Notes App",
      description:
        "Saya telah membuat aplikasi sederhana untuk menulis catatan harian, disini saya bertanggung jawab penuh sebagai fullstack dev yang bekerja langsung di bagian backend dengan node js, frontend dengan react.js dan juga database menggunakan postgresql.",
      image: "/images/catatan-harian.png",
      technologies: ["Node.js", "React.js", "PostgreSQL", "JavaScript", "HTML", "CSS"],
      category: "Web App",
      role: "Fullstack Developer",
      period: "06/2025",
      team: "1 person",
      keyFeatures: [
        "Daily note creation and editing",
        "Tag system for organization",
        "Search functionality",
        "Date-based filtering",
        "Pin and delete notes",
        "Dark mode support",
      ],
    },
    {
      id: 5,
      title: "Design Fitur Jadwal dan Presensi IPB Mobile",
      description:
        "Saya telah membuat dan memberikan ide design fitur baru dari IPB Mobile, fitur yang saya berikan yaitu penandaan status presensi dan juga mendesain ulang jadwal keseluruhan telah menyelesaikan berbagai masalah yang sebelumnya kami dapatkan dari hasil survey mahasiswa IPB",
      image: "/images/Screenshot 2025-07-10 192615.png",
      technologies: ["Figma", "Wireframe", "UI", "UX"],
      category: "UI App",
      role: "UI/UX Designer",
      period: "02/2024 - 06/2024",
      team: "3 person",
      keyFeatures: [
        "Transparansi presensi",
        "Status Presensi berdasarkan warna",
        "Perubahan Desain Keseluruhan dari Jadwal",
        "Notifikasi Kelas Baru",
      ],
    },
    {
      id: 6,
      title: "Design Fitur Mahasiswa tingkat akhir IPB Mobile",
      description:
        "Saya telah membuat dan memberikan ide design fitur baru dari IPB Mobile, fitur yang saya berikan yaitu Perlengkapan fitur fitur yang diperlukan oleh mahasiswa tingkat akhir seperti bantuan pada skripsi, magang, upskilling dan juga riset",
      image: "/images/Screenshot 2025-07-10 195037.png",
      technologies: ["Figma", "Wireframe", "UI", "UX"],
      category: "UI App",
      role: "UI/UX Designer",
      period: "02/2025 - 06/2025",
      team: "3 person",
      keyFeatures: [
        "Fitur QnA Skripsi",
        "List Magang dan penjelasan detail",
        "Bantuan riset dan juga pusat survey riset",
        "Pusat pendaftaran Upskilling",
      ]
    },
     {
      id: 7,
      title: "SPARRING, Aplikasi Jadwal Olahraga",
      description:
        "Saya telah membuat desain aplikasi full dan prototype dari SPARRING. SPARRING adalah aplikasi berbasis mobile yang menyediakan berbagai fitur untuk orang orang yang susah mencari teman olahraga, disana kita bisa mencari event olahraga dari berbagai komunitas dan kita bisa join, selain itu aplikasi ini juga menyediakan beberapa komunitas berdasarkan minat yang sama.",
      image: "/images/Screenshot 2025-07-17 081331.png",
      technologies: ["Figma", "Wireframe", "UI", "UX", "Prototype"],
      category: "UI App",
      role: "UI/UX Designer",
      period: "17/07/2025",
      team: "1 person",
      keyFeatures: [
        "List Event Tederkat",
        "Community berdasarkan minat",
        "Beginner Friendly",
        "Room Chat Komunitas",
      ]
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Web App", "Desktop App", "UI App"]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>

          {/* Category Filter */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" size="sm">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                      </DialogHeader>

                      <div className="space-y-6">
                        <div className="aspect-video relative overflow-hidden rounded-lg">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>

                            <h4 className="font-semibold mb-2">Key Features</h4>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              {project.keyFeatures.map((feature, index) => (
                                <li key={index}>• {feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-3">Project Details</h3>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Role: {project.role}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Period: {project.period}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Users className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm">Team: {project.team}</span>
                              </div>
                            </div>

                            <h4 className="font-semibold mt-4 mb-2">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <Badge key={index} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="border-t pt-4">
                          <div className="flex space-x-4">
                            <Button asChild>
                              <a href="https://linktr.ee/NamikZ?utm_source=linktree_admin_share" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                            <Button variant="outline" asChild>
                              <a href="https://github.com/russs743" target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Source Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
