"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Feedback {
  name: string;
  message: string;
}

interface FeedbackCarouselProps {
  feedbacks: Feedback[];
}

export default function FeedbackCarousel({ feedbacks }: FeedbackCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [feedbacks.length]);

  return (
    <div className="relative w-full h-48 flex items-center justify-center">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--background)] p-8 rounded-xl shadow-md mx-auto max-w-md border border-[var(--border)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-lg text-center text-[var(--foreground)]">“{feedbacks[index].message}”</p>
          <span className="text-sm font-semibold text-[var(--primary)] text-center">{feedbacks[index].name}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 