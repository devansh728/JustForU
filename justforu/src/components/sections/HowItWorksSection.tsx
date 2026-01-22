"use client";

import { motion } from "framer-motion";
import { Palette, Edit3, Share2, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Palette,
    title: "Choose Template",
    description: "Browse our collection of stunning designs and pick one that matches your style",
  },
  {
    number: "02",
    icon: Edit3,
    title: "Customize It",
    description: "Add your photos, names, and personalized messages with our easy editor",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Add Magic",
    description: "Select music, animations, and special effects to make it unforgettable",
  },
  {
    number: "04",
    icon: Share2,
    title: "Share Love",
    description: "Send your creation via WhatsApp, Instagram, or any platform",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 section-pink relative overflow-hidden">
      {/* Decorative stripes */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 stripe-pattern opacity-20" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white text-pink-600 rounded-full text-sm font-medium mb-4 shadow-sm">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-2">
            HOW IT
          </h2>
          <p className="text-5xl md:text-6xl font-script text-pink-500">
            Works
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-pink-200 -translate-x-1/2 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-pink-400" />
                </div>
              )}

              <motion.div
                whileHover={{ y: -8 }}
                className="relative z-10 bg-white rounded-3xl p-8 shadow-lg border border-pink-100 text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-pink-500 text-white font-bold rounded-full text-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-10 h-10 text-pink-500" />
                </div>

                <h3 className="font-display font-bold text-xl text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
