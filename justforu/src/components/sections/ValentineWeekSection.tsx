"use client";

import { motion } from "framer-motion";
import { valentineWeekDays } from "@/data/mockData";
import { FadeIn } from "@/components/animations/AnimatedText";
import { Heart, Calendar, Sparkles } from "lucide-react";

export function ValentineWeekSection() {
  return (
    <section className="relative py-20 overflow-hidden" id="valentines">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 via-white to-purple-50/50" />
      
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-40 h-40 rounded-full border-2 border-dashed border-pink-200 opacity-30"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-20 left-20 text-6xl opacity-20"
      >
        💘
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-pink-100 px-4 py-2 rounded-full text-sm font-medium text-red-600 mb-4">
              <Calendar className="w-4 h-4" />
              February 7-14
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Celebrate <span className="gradient-text font-script text-4xl md:text-6xl">Valentine&apos;s Week</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Make every day special with our themed templates for each day of love week 💝
            </p>
          </FadeIn>
        </div>

        {/* Valentine's Week Days - Horizontal Scroll */}
        <div 
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        >
          {valentineWeekDays.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotate: 0 }}
              className="flex-shrink-0 snap-center"
              style={{ transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)` }}
            >
              <div className="w-64 glass-card-strong rounded-3xl p-6 cursor-pointer group">
                {/* Day Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center text-4xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${day.color}20, ${day.color}40)`,
                  }}
                >
                  {day.emoji}
                </motion.div>

                {/* Day Name */}
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-1 group-hover:text-pink-600 transition-colors">
                  {day.day}
                </h3>
                <p className="text-center text-gray-500 text-sm mb-4">{day.date}</p>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2.5 rounded-full text-sm font-medium transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${day.color}, ${day.color}cc)`,
                    color: "white",
                  }}
                >
                  Create Invitation
                </motion.button>

                {/* Floating decoration */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute -top-2 -right-2 text-lg"
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Progress Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {valentineWeekDays.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-pink-300 hover:bg-pink-500 transition-colors cursor-pointer"
            />
          ))}
        </div>

        {/* Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div className="glass-card-strong rounded-3xl p-8 md:p-12 text-center overflow-hidden">
            {/* Background decorations */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
              >
                <Heart className="w-4 h-4 fill-white" />
                Valentine&apos;s Week Special
                <Heart className="w-4 h-4 fill-white" />
              </motion.div>

              <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                Get <span className="gradient-text">20% Off</span> on All Templates
              </h3>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Create the perfect surprise for your loved one this Valentine&apos;s Week. 
                Use code <span className="font-bold text-pink-600">LOVE2024</span> at checkout!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Claim Offer Now
                </motion.button>
                <p className="text-sm text-gray-500">
                  Offer valid till Feb 14, 2024 💕
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
