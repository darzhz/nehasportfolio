import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Figma } from "lucide-react"

interface ShowcaseCardProps {
  /**
   * Array of image URLs to display in the card
   * Ideally provide at least 3 images for the best visual effect
   */
  images: string[]
  /**
   * Link to the Figma project
   */
  figmaLink: string
  /**
   * Caption or title for the card
   */
  caption: string
}

export default function ShowcaseCard({
  images = [],
  figmaLink = "https://figma.com",
  caption = "Edtech Webdesign",
}: ShowcaseCardProps) {
  const [mounted, setMounted] = useState(false)

  // Ensure we have at least 3 images, using placeholders if needed
  const displayImages = [
    ...images,
    ...Array(Math.max(0, 3 - images.length)).fill("/placeholder.svg?height=600&width=800"),
  ].slice(0, 3)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="p-8">
      <motion.div
        className="w-full max-w-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className="relative w-full aspect-square rounded-3xl bg-[#f8f5f2] p-8 overflow-hidden">
          {/* Figma Badge */}
          <a href={figmaLink} target="_blank" rel="noopener noreferrer">
            <motion.div
              className="absolute top-6 right-6 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm z-10 cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Figma/>
              <span className="text-sm font-medium">Figma</span>
            </motion.div>
          </a>

          {/* Main Text */}
          <motion.div
            className="max-w-[50%]"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1, x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-5xl font-medium leading-tight">
              {caption.split(" ").map((word, index) => (
                <span key={index} className="block">
                  {word}
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Angled Screenshots */}
          <div className="absolute -bottom-24 -right-24 w-[80%] h-[80%] transform rotate-12">
            <div className="relative w-full h-full">
              {/* Screenshot 1 */}
              {displayImages[0] && (
                <motion.div
                  className="absolute top-[20%] right-[20%] w-full h-full transform -rotate-6 shadow-2xl rounded-xl overflow-hidden"
                  whileHover={{ rotate: -4, y: -5, x: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={displayImages[0] || "/placeholder.svg"}
                    alt="UI Screenshot 1"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}

              {/* Screenshot 2 */}
              {displayImages[1] && (
                <motion.div
                  className="absolute top-[10%] right-[10%] w-full h-full transform -rotate-3 shadow-2xl rounded-xl overflow-hidden"
                  whileHover={{ rotate: -1, y: -8, x: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={displayImages[1] || "/placeholder.svg"}
                    alt="UI Screenshot 2"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}

              {/* Screenshot 3 */}
              {displayImages[2] && (
                <motion.div
                  className="absolute top-0 right-0 w-full h-full shadow-2xl rounded-xl overflow-hidden"
                  whileHover={{ rotate: 2, y: -10, x: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={displayImages[2] || "/placeholder.svg"}
                    alt="UI Screenshot 3"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

