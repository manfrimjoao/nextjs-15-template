'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Slide {
  src: string;
  text: string;
}

interface ImageCarouselProps {
  slides: Slide[];
}

export default function ImageCarousel({ slides }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-64 sm:h-96 overflow-hidden rounded-xl">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={slides[index].src}
            alt="Slide"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xl sm:text-3xl font-bold p-4 text-center">
            {slides[index].text}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
