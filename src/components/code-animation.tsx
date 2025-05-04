"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const CodeAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      } else {
        canvas.width = 400
        canvas.height = 400
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Code rain animation
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height)
    }

    // Characters to display
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]()<>?/\\|;:,.+-*=&^%$#@!~`"

    // Code snippets to display
    const codeSnippets = [
      "function solve() {",
      "  const memory = [];",
      "  return optimize(memory);",
      "}",
      "",
      "class MemoryLeaked {",
      "  constructor() {",
      "    this.skills = [];",
      "  }",
      "  addSkill(skill) {",
      "    this.skills.push(skill);",
      "  }",
      "}",
      "",
      "const developer = new Dev();",
      "developer.code(24/7);",
      "",
      "// Building the future",
      "// One line at a time",
      "",
      "export default function() {",
      "  return <Component />;",
      "}",
    ]

    // Animation frame
    let animationId: number
    let frameCount = 0

    const draw = () => {
      // Semi-transparent background to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Text color - using primary color from the theme
      ctx.fillStyle = "hsl(262.1, 83.3%, 57.8%)"
      ctx.font = `${fontSize}px monospace`

      // Draw code snippets
      if (frameCount % 100 === 0) {
        const startY = Math.floor(Math.random() * (canvas.height / 3))
        const startX = Math.floor(Math.random() * (canvas.width - 300))

        codeSnippets.forEach((line, index) => {
          ctx.fillText(line, startX, startY + index * fontSize * 1.2)
        })
      }

      // Draw falling characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)]

        // x = i * fontSize, y = drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Sending the drop back to the top randomly after it has crossed the screen
        // Adding randomness to the reset to make the drops scattered
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Incrementing Y coordinate
        drops[i]++
      }

      frameCount++
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"></div>
      <motion.div
        className="absolute inset-4 bg-black rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <canvas ref={canvasRef} className="w-full h-full" />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="text-4xl font-bold text-primary/80 mix-blend-overlay">
          <span className="text-primary">Memory</span>
          <span className="text-destructive">Leaked</span>
        </div>
      </motion.div>
    </div>
  )
}

export default CodeAnimation
