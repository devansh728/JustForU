"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function DecorativeSparkles() {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generated = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 8,
      delay: Math.random() * 2,
    }));
    setSparkles(generated);
  }, []);

  if (sparkles.length === 0) return null;

  return (
    <>
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute z-30 pointer-events-none"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="#ff6b8a">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>
      ))}
    </>
  );
}

export function FloatingDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Pink Swirls */}
      <motion.div
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -left-20 top-20 w-40 h-40 opacity-30"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M20 50 Q 50 20, 80 50 Q 50 80, 20 50"
            fill="none"
            stroke="#ffb6c1"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      <motion.div
        animate={{ rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -right-10 bottom-40 w-32 h-32 opacity-30"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M30 70 Q 70 30, 70 70 Q 30 90, 30 70"
            fill="none"
            stroke="#ffb6c1"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export function StripeBanner({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 stripe-pattern opacity-50" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function ScallopFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Top scallop */}
      <div 
        className="absolute -top-2 left-0 right-0 h-4"
        style={{
          background: `radial-gradient(circle at 8px 0, transparent 8px, #ff6b8a 8px)`,
          backgroundSize: '16px 8px',
        }}
      />
      {/* Bottom scallop */}
      <div 
        className="absolute -bottom-2 left-0 right-0 h-4"
        style={{
          background: `radial-gradient(circle at 8px 8px, transparent 8px, #ff6b8a 8px)`,
          backgroundSize: '16px 8px',
        }}
      />
      <div className="bg-white py-6 px-4">{children}</div>
    </div>
  );
}
