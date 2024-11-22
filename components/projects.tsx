import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://project1.com"
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: "https://project2.com"
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    technologies: ["Angular", "Django", "MySQL"],
    link: "https://project3.com"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={project.link} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  View Project
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

