import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image src="/profile.jpg" alt="Kribaa Chahine" fill className="object-cover" priority />
            </div>
          </div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-4">Kribaa Chahine</h3>
              <p className="text-muted-foreground mb-4">Based in AL KHROUB — Constantine, 25026, Algeria</p>
              <p className="text-muted-foreground mb-6">
              I'm a passionate Information Systems specialist and Freelance Web Developer with expertise in System
                Information and Decision Support. I excel in problem-solving, rapidly adapting to new technologies, and
                fostering positive team environments. My experience includes developing responsive web applications as well as creating AI solutions through prompt engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a href="#contact">Hire Me</a>
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="/kribaa-chahine-cv.pdf" download="Kribaa_Chahine_CV.pdf">
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
