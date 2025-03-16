import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Figma } from "lucide-react";

interface ShowcaseCardProps {
  images: string[];
  figmaLink: string;
  caption: string;
  className?:string;
}

export default function ShowcaseCardGrid({
  images = [],
  figmaLink = "https://figma.com",
  caption = "Edtech Webdesign",
  className="",
}: ShowcaseCardProps) {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const displayImages = [
    ...images,
    ...Array(Math.max(0, 4 - images.length)).fill("/placeholder.svg?height=600&width=800"),
  ].slice(0, 4);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-8 relative" onMouseMove={(e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 10;
      const y = (clientY / window.innerHeight - 0.5) * 10;
      setMousePos({ x, y });
    }}>
      <motion.div
        className="w-full max-w-2xl"
        style={{ rotateX: mousePos.y, rotateY: mousePos.x }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <Card className={`relative w-full aspect-square rounded-3xl bg-[#f8f5f2] p-8 overflow-hidden ${className}`}>
          <a href={figmaLink} target="_blank" rel="noopener noreferrer">
            <motion.div
              className="absolute top-6 right-6 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm z-10 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Figma />
              <span className="text-sm font-medium">Figma</span>
            </motion.div>
          </a>

          <motion.div className="text-left mb-4">
            <h1 className="text-5xl font-medium leading-tight">{caption}</h1>
          </motion.div>

          <div className="grid grid-cols-2 gap-2 transform -rotate-[20deg] translate-x-20 -translate-y-5 w-full h-[80%]">
            {displayImages.map((img, index) => (
              <motion.div
                key={index}
                className="w-full h-full rounded-xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.45 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={img}
                  alt={`UI Screenshot ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
