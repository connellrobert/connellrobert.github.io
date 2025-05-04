import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"

const ThreeAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Setup
    const container = containerRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    // Create a sphere of particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000

    const posArray = new Float32Array(particlesCount * 3)

    // Create particles in a sphere shape
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create a sphere
      const radius = 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      posArray[i] = radius * Math.sin(phi) * Math.cos(theta)
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      posArray[i + 2] = radius * Math.cos(phi)
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: new THREE.Color("hsl(262.1, 83.3%, 57.8%)"),
      transparent: true,
      blending: THREE.AdditiveBlending,
    })

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Add some lines connecting random particles
    const linesMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color("hsl(262.1, 83.3%, 57.8%)"),
      transparent: true,
      opacity: 0.3,
    })

    const linesCount = 100
    for (let i = 0; i < linesCount; i++) {
      const index1 = Math.floor(Math.random() * particlesCount)
      const index2 = Math.floor(Math.random() * particlesCount)

      const x1 = posArray[index1 * 3]
      const y1 = posArray[index1 * 3 + 1]
      const z1 = posArray[index1 * 3 + 2]

      const x2 = posArray[index2 * 3]
      const y2 = posArray[index2 * 3 + 1]
      const z2 = posArray[index2 * 3 + 2]

      const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x1, y1, z1),
        new THREE.Vector3(x2, y2, z2),
      ])

      const line = new THREE.Line(lineGeometry, linesMaterial)
      scene.add(line)
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      particlesMesh.rotation.x += 0.001
      particlesMesh.rotation.y += 0.001

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()

      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"></div>
      <motion.div
        className="absolute inset-4 bg-black/90 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        ref={containerRef}
      />
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

export default ThreeAnimation
