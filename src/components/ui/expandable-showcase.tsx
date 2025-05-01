"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // updated to 'framer-motion'
import { useOutsideClick } from "@/hooks/use-ouside-hook";
import ShowcaseCardGrid from "./showcase-card-grid";

interface ShowcaseGridItem {
  images: string[];
  figmaLink: string;
  caption: string;
  description?: string;
}



interface ExpandableCardProps {
    showcaseItem: ShowcaseGridItem;
}
export const ExpandableCard: React.FC<ExpandableCardProps> =({showcaseItem}:ExpandableCardProps) => {
  const [active, setActive] = useState<boolean>(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    document.body.style.overflow = active ? "hidden" : "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  if(ref != null)
    useOutsideClick(ref, () => setActive(false));

  const [currentImage, setCurrentImage] = useState(0);
  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`close-button-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(false)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${id}`}
              ref={ref}
              className="w-full max-w-[500px] max-h-[600px] lg:max-w-[800px]  h-full md:max-h-[90%] lg:max-h-[80%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {/* <motion.div layoutId={`image-${id}`}>
                <img
                  src={showcaseItem.images[0]}
                  alt={showcaseItem.caption}
                  className="w-full h-80 object-cover object-top"
                />
                
              </motion.div> */}
              {typeof showcaseItem.images === "object"  && (
                  <motion.div layoutId={`image-${showcaseItem?.caption}-${id}`} className="relative w-full h-full overflow-hidden">
                  <motion.img
                    key={showcaseItem?.images[currentImage]}
                    src={showcaseItem?.images[currentImage]}
                    alt={`Slide ${currentImage + 1}`}
                    className="w-full h-full object-contain md:lg:object-cover object-top absolute inset-0 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  {showcaseItem?.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setCurrentImage((prev) => (prev - 1 + showcaseItem?.images.length) % showcaseItem?.images.length)
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 p-2 rounded-full shadow"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() => setCurrentImage((prev) => (prev + 1) % showcaseItem?.images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-800 p-2 rounded-full shadow"
                      >
                        ›
                      </button>
                    </>
                  )}
                </motion.div>
              )}

              <div className="p-4">
                <motion.div className="flex items-center justify-between align-middle">
                <motion.h3
                  layoutId={`title-${id}`}
                  className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                >
                  {showcaseItem.caption}
                </motion.h3>
                <motion.a
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  href={showcaseItem.figmaLink}
                  target="_blank"
                  className="inline-block mt-4 px-4 py-2 text-sm rounded-full font-bold bg-green-500 text-white"
                >
                  View Figma
                </motion.a>
                </motion.div>
                {showcaseItem.description && (
                  <motion.p
                    layoutId={`desc-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-sm mt-2"
                  >
                    {showcaseItem.description}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        layoutId={`card-${id}`}
        key={id}
        onClick={() => setActive(true)}
        className="max-w-xl mx-auto p-4 cursor-pointer rounded-xl"
      >
        <ShowcaseCardGrid {...showcaseItem} />
      </motion.div>
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);
