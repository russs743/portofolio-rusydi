import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Bachelor of Computer Science</CardTitle>
                  <p className="text-muted-foreground">IPB University (Institut Pertanian Bogor)</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Computer Science</p>
                    <p className="text-muted-foreground">Currently pursuing degree</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">2022 - Present</p>
                    <p className="text-muted-foreground">Expected 2026</p>
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
