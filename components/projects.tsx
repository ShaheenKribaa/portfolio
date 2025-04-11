import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Learning Web App",
      description:
        "Built a modern web application that allows students to reserve 1-on-1 sessions with teachers. Used Next.js for the frontend and Supabase for backend and authentication. Integrated modern UI/UX principles using Figma and responsive design practices.",
      image: "/E_learning.png",
      tags: ["Next.js", "Supabase", "Figma", "UI/UX", "Responsive Design"],
      demoUrl: "#",
      githubUrl: "#",
      date: "November 2024 - February 2025",
    },
    {
      id: 2,
      title: "Team Orienteering Problem with Time Windows (TOPTW)",
      description:
        "Developed a new solution for the Team Orienteering Problem with Time Windows using Iterated Local Search (ILS) in Python with various optimization techniques.",
      image: "/toptw.png",
      tags: ["Python", "Optimization", "Algorithms", "Data Analysis"],
      demoUrl: "#",
      githubUrl: "#",
      date: "January 2024 - August 2024",
    },
    {
      id: 3,
      title: "Chat Room Application",
      description:
        "Created a chat room application using Java with a client-server architecture. Designed and developed features for user management and message handling with robust connection stability.",
      image: "/chatroom.png",
      tags: ["Java", "Client-Server", "Networking", "UI Design"],
      demoUrl: "#",
      githubUrl: "#",
      date: "January 2021 - June 2021",
    },
    {
      id: 4,
      title: "Genetic Algorithms Implementation",
      description:
        "Applied genetic algorithms to solve complex optimization problems using Python. Developed and tested over 5 different genetic algorithm strategies to optimize performance.",
      image: "/genetic_algo.png",
      tags: ["Python", "Genetic Algorithms", "Optimization"],
      demoUrl: "#",
      githubUrl: "#",
      date: "2022",
    },
    {
      id: 5,
      title: "Warehouse Management System",
      description:
        "Developed a warehouse management system using SQL Developer and Java, optimizing inventory management and order processing. Designed and implemented database structures and user interfaces.",
      image: "/warehouse_manag.png",
      tags: ["Java", "SQL", "Database Design", "UI/UX"],
      demoUrl: "#",
      githubUrl: "#",
      date: "2021-2023",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{project.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="gap-2" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
