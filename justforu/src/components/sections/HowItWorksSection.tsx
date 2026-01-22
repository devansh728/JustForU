"use client";

import { motion } from "framer-motion";
import { MousePointer2, Palette, Share2, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/AnimatedText";

const steps = [
  {
    step: 1,
    icon: MousePointer2,
    title: "Choose Your Template",
    description: "Browse our collection of beautiful, animated templates for any occasion",
    color: "from-pink-400 to-rose-500",
    emoji: "✨",
  },
  {
    step: 2,
    icon: Palette,
    title: "Customize Everything",
    description: "Add photos, music, colors, and personal touches - like adding toppings!",
    color: "from-purple-400 to-indigo-500",
    emoji: "🎨",
  },
  {
    step: 3,
    icon: Share2,
    title: "Share the Magic",
    description: "Send via link, QR code, or message - watch their face light up!",
    color: "from-blue-400 to-cyan-500",
    emoji: "💝",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/30 to-white" />

      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ec407a 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-pink-600 mb-4">
              <Sparkles className="w-4 h-4" />
              Simple as 1-2-3
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              How It <span className="gradient-text font-script text-4xl md:text-6xl">Works</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create your magical invitation in just 3 simple steps — 
              no design skills needed! 🎉
            </p>
          </FadeIn>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 z-0">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-pink-300 to-purple-300 origin-left"
                    style={{ transformOrigin: "left" }}
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 0.8 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    <ArrowRight className="w-5 h-5 text-pink-400" />
                  </motion.div>
                </div>
              )}

              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card-strong rounded-3xl p-8 text-center h-full relative z-10"
              >
                {/* Step Number */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-pink-600 shadow-md">
                    {step.step}
                  </span>
                </motion.div>

                {/* Emoji decoration */}
                <motion.span
                  animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 text-2xl"
                >
                  {step.emoji}
                </motion.span>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-strong rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Why Choose <span className="gradient-text">JustforU</span>?
              </h3>
              <ul className="space-y-4">
                {[
                  "No design skills required",
                  "Ready in under 10 minutes",
                  "Works on all devices",
                  "Unlimited revisions",
                  "Lifetime access to your creation",
                  "24/7 customer support",
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative w-full max-w-sm"
              >
                {/* Mockup Card */}
                <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-6 shadow-2xl">
                  <div className="bg-white rounded-2xl p-4 mb-4">
                    <div className="h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl flex items-center justify-center">
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-5xl"
                      >
                        💝
                      </motion.span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-pink-200 rounded-full w-3/4" />
                    <div className="h-4 bg-purple-200 rounded-full w-1/2" />
                    <div className="h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mt-4" />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 text-3xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 text-3xl"
                >
                  🌸
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
