"use client";

import { motion } from "framer-motion";
import { Wand2, Music, ImageIcon, Palette, Send, Sparkles, Heart } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/animations/AnimatedText";

const features = [
  {
    icon: Wand2,
    title: "Magical Animations",
    description: "Stunning scroll-based animations that bring your love story to life",
    color: "from-pink-400 to-rose-500",
    delay: 0,
  },
  {
    icon: Music,
    title: "Background Music",
    description: "Add your special song that plays as they read your invitation",
    color: "from-purple-400 to-indigo-500",
    delay: 0.1,
  },
  {
    icon: ImageIcon,
    title: "Photo Galleries",
    description: "Beautiful animated photo frames with your cherished memories",
    color: "from-blue-400 to-cyan-500",
    delay: 0.2,
  },
  {
    icon: Palette,
    title: "Customizable Themes",
    description: "Choose from dozens of romantic themes and color palettes",
    color: "from-green-400 to-teal-500",
    delay: 0.3,
  },
  {
    icon: Send,
    title: "Easy Sharing",
    description: "Share via link, QR code, or embed in messages",
    color: "from-orange-400 to-amber-500",
    delay: 0.4,
  },
  {
    icon: Heart,
    title: "RSVP & Wishes",
    description: "Collect responses and heartfelt messages from guests",
    color: "from-red-400 to-pink-500",
    delay: 0.5,
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden" id="features">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full opacity-5"
          style={{
            background: "conic-gradient(from 0deg, #ec407a, #ab47bc, #42a5f5, #ec407a)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-pink-600 mb-4">
              <Sparkles className="w-4 h-4" />
              Why Choose JustforU
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Not Just Cards, <span className="gradient-text font-script text-4xl md:text-6xl">Experiences</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create interactive digital invitations with stunning animations, 
              music, and personalization that touch hearts 💝
            </p>
          </FadeIn>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScaleIn key={index} delay={feature.delay}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group glass-card-strong rounded-3xl p-8 h-full cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </ScaleIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
