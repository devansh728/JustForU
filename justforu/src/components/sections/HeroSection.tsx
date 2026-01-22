"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Play, Gift, Star } from "lucide-react";
import { FloatingElement } from "@/components/animations/AnimatedText";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-pink-200/40 to-purple-200/40 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-purple-200/40 to-blue-200/40 blur-3xl"
        />

        {/* Floating Decorations */}
        <FloatingElement className="absolute top-1/4 left-10" duration={4} delay={0}>
          <span className="text-5xl opacity-60">💕</span>
        </FloatingElement>
        <FloatingElement className="absolute top-1/3 right-16" duration={5} delay={1}>
          <span className="text-4xl opacity-50">✨</span>
        </FloatingElement>
        <FloatingElement className="absolute bottom-1/4 left-1/4" duration={6} delay={2}>
          <span className="text-3xl opacity-40">🌸</span>
        </FloatingElement>
        <FloatingElement className="absolute top-1/2 right-1/4" duration={4.5} delay={0.5}>
          <span className="text-4xl opacity-50">💝</span>
        </FloatingElement>
        <FloatingElement className="absolute bottom-1/3 right-10" duration={5.5} delay={1.5}>
          <span className="text-3xl opacity-40">🦋</span>
        </FloatingElement>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-200 mb-8"
        >
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium text-gray-700">
            Valentine&apos;s Week Special - 20% Off 💝
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-gray-800">Make Every </span>
          <span className="gradient-text font-script text-5xl md:text-7xl lg:text-8xl">
            Celebration
          </span>
          <br />
          <span className="text-gray-800">Unforgettable</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Not just invitations — <span className="text-pink-500 font-semibold">magical experiences</span>. 
          Create beautiful, animated digital invitations that tell your love story 
          with music, photos, and heart-melting animations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(236, 64, 122, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2 text-lg"
          >
            <Sparkles className="w-5 h-5" />
            Create Your Magic
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Preview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Left Card */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="hidden md:block w-48 h-64 glass-card-strong rounded-3xl p-4 -rotate-6 transform-gpu"
              style={{ transformOrigin: "bottom center" }}
            >
              <div className="w-full h-36 rounded-2xl bg-gradient-to-br from-pink-200 to-purple-200 mb-3 flex items-center justify-center">
                <Heart className="w-12 h-12 text-pink-500 animate-heartbeat" />
              </div>
              <p className="text-sm font-medium text-gray-700 text-center font-script text-lg">Anniversary</p>
              <p className="text-xs text-gray-500 text-center">Eternal Love</p>
            </motion.div>

            {/* Center Card - Main */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-72 md:w-80 glass-card-strong rounded-3xl p-5 shadow-2xl relative z-10"
            >
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Most Popular ✨
              </div>
              <div className="w-full h-44 md:h-52 rounded-2xl bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 mb-4 flex items-center justify-center overflow-hidden relative">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl"
                >
                  💝
                </motion.div>
                <motion.div
                  animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 left-4 text-2xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-4 right-4 text-2xl"
                >
                  🌸
                </motion.div>
              </div>
              <p className="text-center font-script text-2xl text-gray-800 mb-1">Valentine&apos;s Special</p>
              <p className="text-center text-gray-500 text-sm">Interactive Love Story</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">Music</span>
                <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">Photos</span>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">Animation</span>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="hidden md:block w-48 h-64 glass-card-strong rounded-3xl p-4 rotate-6 transform-gpu"
              style={{ transformOrigin: "bottom center" }}
            >
              <div className="w-full h-36 rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-200 mb-3 flex items-center justify-center">
                <Gift className="w-12 h-12 text-orange-500" />
              </div>
              <p className="text-sm font-medium text-gray-700 text-center font-script text-lg">Birthday</p>
              <p className="text-xs text-gray-500 text-center">Sweet Memories</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16"
        >
          {[
            { value: "50K+", label: "Happy Couples" },
            { value: "100+", label: "Templates" },
            { value: "4.9★", label: "Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
