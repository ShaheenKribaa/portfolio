import { Card, CardContent } from "@/components/ui/card"
import { Code, Layout, Cpu, BookOpen, Globe, Briefcase } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: "Core Competencies",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      skills: ["Problem-Solving", "Rapid Adaptability", "Strong Interpersonal Skills", "Organizational Skills"],
    },
    {
      id: 2,
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["Python", "JavaScript", "Flutter", "Java"],
    },
    {
      id: 3,
      title: "Tools & Technologies",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      skills: ["Git", "GitHub", "Firebase", "SQL"],
    },
    {
      id: 4,
      title: "Frameworks & Libraries",
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: ["React"],
    },
    {
      id: 5,
      title: "Languages",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: ["Arabic (Native)", "English (Fluent)", "French (Intermediate)"],
    },
    {
      id: 6,
      title: "Education",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      skills: ["Master's in System Information and Decision Support", "Bachelor's in Information Systems"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
