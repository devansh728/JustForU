"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowRight, Gift } from "lucide-react";
import { FadeIn, FloatingElement } from "@/components/animations/AnimatedText";

export function CTASection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-white/10 to-transparent rounded-full"
        />
      </div>

      {/* Floating Decorations */}
      <FloatingElement className="absolute top-20 left-10" duration={4}>
        <span className="text-5xl opacity-40">💕</span>
      </FloatingElement>
      <FloatingElement className="absolute top-1/3 right-20" duration={5} delay={1}>
        <span className="text-4xl opacity-30">✨</span>
      </FloatingElement>
      <FloatingElement className="absolute bottom-20 left-1/4" duration={6} delay={2}>
        <span className="text-3xl opacity-40">🌸</span>
      </FloatingElement>
      <FloatingElement className="absolute bottom-1/3 right-10" duration={4.5} delay={0.5}>
        <span className="text-4xl opacity-30">💝</span>
      </FloatingElement>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <FadeIn>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-8"
          >
            <Gift className="w-4 h-4" />
            Limited Time Offer
          </motion.div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Create 
            <span className="block font-script text-4xl md:text-6xl lg:text-7xl mt-2">
              Something Magical?
            </span>
          </h2>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join 50,000+ couples who have created unforgettable moments. 
            Your love story deserves to be told beautifully. 💖
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <Sparkles className="w-5 h-5" />
              Start Creating Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-colors"
            >
              View Templates
            </motion.button>
          </div>
        </FadeIn>

        {/* Trust Elements */}
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 fill-white" />
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 fill-white" />
              <span className="text-sm">Free preview</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 fill-white" />
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </FadeIn>

        {/* Animated Hearts at Bottom */}
        <div className="mt-12 flex justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [-10, 10, -10],
                rotate: [-5, 5, -5],
              }}
              transition={{ 
                duration: 2 + i * 0.5, 
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="text-3xl"
            >
              💕
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
