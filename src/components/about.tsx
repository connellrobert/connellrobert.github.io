"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">A Self Driven Engineer</h3>
            <p className="text-muted-foreground mb-6">
              I'm a software engineer with a self inspired passion for enhancing my skills,
              providing top tier product quality, and automating what most believe can't be automated.
              I've made a career out of finding the most optimal solutions to complex problems and
              tackling new challenges head on. I strive to be the best engineer I can be and
              I'm always looking for new ways to lean in to new technologies and tools.
            </p>
            <p className="text-muted-foreground mb-6">
              I was once a mechanic that loved troubleshooting complex systems and uncovering
              problems by understanding the entire system. It's through that contextual understanding
              and my love for problem solving that I've found a passion for software development.
              I went back to school and went into a bootcamp to begin my career in engineering. Throughout
              this time, I've connected with so many amazing people and learned so much from working
              with them. I now work on complex cloud systems ranging from Kubernetes to Serverless architectures
              and love enhancing DevOps processes.
            </p>
            <p className="text-muted-foreground">
              I'm a firm believer in the power of automation and the importance of a strong foundation in the basics.
              When I'm not coding, I'm out a the ballpark with my kids, continuing to teach and enjoy life to the fullest.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Contextually Aware Coding First</h4>
                      <p className="text-muted-foreground">
                        I focus on the details of how code works within the contextual system and 
                        always ensure my and others work is clean, easy to understand, and scalable.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Automation Always</h4>
                      <p className="text-muted-foreground">
                        I'm a firm believer in the power of automation and the importance of a strong foundation in the fundamentals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Adaptable</h4>
                      <p className="text-muted-foreground">
                        I quickly adapt to new technologies and environments, constantly expanding my skill set.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
