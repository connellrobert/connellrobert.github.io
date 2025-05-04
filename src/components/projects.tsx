"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, ChevronDown } from "lucide-react"
import { SiGithub } from '@icons-pack/react-simple-icons'

type Project = {
  id: number
  title: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  features: string[]
  demoLink: string
  githubLink: string
  fullDescription: string
}
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Automation Pipeline",
      shortDescription: "A data pipeline to automate product publishing to Etsy.",
      description:
        "A data pipeline to automate product publishing to Etsy. This supplied an automated process to submit artwork to a discord bot and utilized OpenAI for detail generation and photoshop automation to create thumbnails and resolution enhancements. It provided a modular system to publish products to a multitude of shops and included printify integration.",
      image: "/tekton.svg?height=400&width=600",
      tags: ["Go", "Tekton", "OpenAI", "Photoshop", "Discord", "Printify"],
      features: [
        "Discord bot to submit artwork from midjourney",
        "OpenAI for detail generation",
        "Photoshop automation to create thumbnails and resolution enhancements",
        "Kubernetes & helm charts to automate deployment and configuration",
        "Printify integration for physical product fulfillment",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This project began as an automation pipeline to simplify the process of publishing artwork to Etsy as digital artwork or as physical products. It provided a modular system to publish products to a multitude of shops and included printify integration.",
    },
    {
      id: 2,
      title: "PixelArt API",
      shortDescription: "A Serverless RESTful API for a AI image generation service.",
      description: "A RESTful API for a AI image generation service. This provided a way to generate images from text prompts.",
      image: "/pixelart-arch.png?height=400&width=600",
      tags: ["Go", "AWS", "Terraform", "Earthly"],
      features: [
        "AWS Lambda for serverless compute",
        "AWS API Gateway for RESTful API",
        "AWS CloudWatch for monitoring, logging, and tracing",
        "Earthly for monorepo build automation",
        "Go for lambda function logic",
        "AWS State Machine for workflow orchestration",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This project was created as a backend for a potential mobild application. The inspiration came shortly after OpenAI began its ascent to being the leading company for Artificial Intelligence and imgae generation was still in its infancy. I wanted to create a simple API that would allow me to generate images from text prompts without relying on running infrastructure.",
    },
    {
      id: 3,
      title: "Gratitude Serverless API",
      shortDescription: "A Serverless API for a for storing and retrieving gratitude entries from a database.",
      description: "A Serverless API for a gratitude journal. This provided a way to store and retrieve gratitude entries.",
      image: "/gratitude-arch.png?height=400&width=600",
      tags: ["JavaScript", "AWS", "AWS SAM", "PostgreSQL"],
      features: [
        "AWS Lambda for serverless compute",
        "AWS API Gateway for RESTful API",
        "AWS CloudWatch for monitoring, logging, and tracing",
        "PostgreSQL for database",
        "AWS SAM for deployment",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "This project was created as a backend for a potential mobile application. Mental Health was declining during the pandemic and I wanted to provide a service to assist in that with gratuitous sayings.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <SiGithub className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <SiGithub className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
