import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import CodeAnimation from "./code-animation"
import { SiGithub as Github, SiX as Twitter } from '@icons-pack/react-simple-icons'
import CareerTitle from "./careerTitle"
// import ThreeAnimation from './three-animation'

export default function Hero() {
  const careerTitles = ["Platform Engineer", "Software Engineer", "Cloud Engineer", "Full Stack Developer", "DevSecOps Engineer", "AI Engineer"]


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <p className="text-primary">Robert Connell</p>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              <CareerTitle texts={careerTitles} delay={100} />
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              I build exceptional digital experiences with clean code and modern technologies. Turning complex problems
              into elegant solutions is what I do best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="group" onClick={() => scrollToSection("projects")}>
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://github.com/connellrobert" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://www.linkedin.com/in/robert-connell-5700ba201/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://x.com/connellrobert1" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <CodeAnimation />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <button onClick={() => scrollToSection("about")} className="animate-bounce">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </button>
      </div>
    </section>
  )
}
