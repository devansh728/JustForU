"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const [windowHeight, setWindowHeight] = useState(1000);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const generateHearts = () => {
      const newHearts: FloatingHeart[] = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 20 + 10,
          duration: Math.random() * 10 + 15,
          delay: Math.random() * 10,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
    
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (hearts.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-pink-300"
            style={{
              left: `${heart.x}%`,
              bottom: "-50px",
              fontSize: `${heart.size}px`,
              opacity: heart.opacity,
            }}
            animate={{
              y: [0, -windowHeight - 100],
              x: [0, Math.sin(heart.id) * 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            💕
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function Sparkles({ count = 20 }: { count?: number }) {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      delay: Math.random() * 3,
    }));
    setSparkles(newSparkles);
  }, [count]);

  if (sparkles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 24 24"
            fill="none"
            className="text-yellow-300"
          >
            <path
              d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export function FloatingBubbles() {
  const [windowHeight, setWindowHeight] = useState(1000);
  const [bubbles, setBubbles] = useState<Array<{ id: number; size: number; x: number; delay: number; duration: number }>>([]);
  
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setBubbles(Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 20,
    })));
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (bubbles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            bottom: "-100px",
            background: `radial-gradient(circle at 30% 30%, rgba(255, 182, 193, 0.3), rgba(206, 147, 216, 0.2))`,
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
          animate={{
            y: [0, -windowHeight - 200],
            x: [0, Math.sin(bubble.id) * 30, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

interface PetalProps {
  count?: number;
}

export function FallingPetals({ count = 12 }: PetalProps) {
  const [windowHeight, setWindowHeight] = useState(1000);
  const [petals, setPetals] = useState<Array<{ id: number; x: number; size: number; delay: number; duration: number; rotation: number }>>([]);
  
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setPetals(Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 15 + 10,
      delay: Math.random() * 8,
      duration: Math.random() * 8 + 12,
      rotation: Math.random() * 360,
    })));
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [count]);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: "-50px",
            fontSize: `${petal.size}px`,
          }}
          animate={{
            y: [0, windowHeight + 100],
            x: [0, Math.sin(petal.id) * 100, 0],
            rotate: [petal.rotation, petal.rotation + 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}
