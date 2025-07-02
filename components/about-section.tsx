import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Hello, I'm Rusydi!</h3>
                  <p className="text-muted-foreground mb-4">
                    I'm a Computer Science student at IPB University with a passion for fullstack development. I enjoy
                    creating web applications that solve real-world problems and provide great user experiences.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    My journey in programming started with curiosity about how websites work, and it has evolved into a
                    deep appreciation for clean code, user-centered design, and continuous learning.
                  </p>
                  <p className="text-muted-foreground">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or sharing knowledge with fellow developers.
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Quick Facts</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>🎓 Computer Science Student at IPB University</li>
                      <li>💻 Fullstack Developer</li>
                      <li>🌱 Always learning new technologies</li>
                      <li>🚀 Passionate about innovation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
