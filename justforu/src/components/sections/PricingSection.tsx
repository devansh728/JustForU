"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Heart, Star, Crown, Zap } from "lucide-react";
import { FadeIn } from "@/components/animations/AnimatedText";

const plans = [
  {
    name: "Sweetheart",
    price: 299,
    originalPrice: 399,
    description: "Perfect for a simple, beautiful surprise",
    icon: Heart,
    color: "from-pink-400 to-rose-500",
    features: [
      "1 Template Access",
      "Basic Customization",
      "5 Photo Uploads",
      "Standard Music Library",
      "Shareable Link",
      "7 Days Access",
    ],
    popular: false,
  },
  {
    name: "Romance",
    price: 499,
    originalPrice: 699,
    description: "Most popular for special occasions",
    icon: Star,
    color: "from-purple-400 to-indigo-500",
    features: [
      "All Templates Access",
      "Full Customization",
      "20 Photo Uploads",
      "Premium Music Library",
      "Custom Music Upload",
      "QR Code Generation",
      "Lifetime Access",
      "RSVP Feature",
    ],
    popular: true,
  },
  {
    name: "Forever",
    price: 999,
    originalPrice: 1499,
    description: "The ultimate celebration experience",
    icon: Crown,
    color: "from-amber-400 to-orange-500",
    features: [
      "Everything in Romance",
      "Priority Support",
      "Custom Domain",
      "Video Message (2 min)",
      "Guest Book",
      "View Analytics",
      "Remove Branding",
      "Multiple Languages",
      "Print-Ready Export",
    ],
    popular: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="relative py-20 overflow-hidden" id="pricing">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30" />

      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-20 text-5xl opacity-20"
      >
        💎
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 left-20 text-4xl opacity-20"
      >
        ✨
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-pink-600 mb-4">
              <Zap className="w-4 h-4" />
              Simple Pricing
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Choose Your <span className="gradient-text font-script text-4xl md:text-6xl">Magic</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              One-time payment, lifetime memories. No subscriptions, no hidden fees. 💖
            </p>
          </FadeIn>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg"
                  >
                    Most Popular 💕
                  </motion.div>
                </div>
              )}

              <div className={`glass-card-strong rounded-3xl p-8 h-full ${plan.popular ? "border-2 border-pink-300 shadow-2xl" : ""}`}>
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <plan.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold gradient-text">₹{plan.price}</span>
                    <span className="text-gray-400 line-through">₹{plan.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">One-time payment</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <Check className={`w-5 h-5 ${plan.popular ? "text-pink-500" : "text-green-500"}`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 px-6 py-3 rounded-full">
            <span className="text-2xl">🛡️</span>
            <div className="text-left">
              <p className="font-semibold text-green-800">100% Satisfaction Guarantee</p>
              <p className="text-sm text-green-600">Full refund within 24 hours if you&apos;re not happy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
