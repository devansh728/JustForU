"use client";

import { motion } from "framer-motion";
import { Heart, Palette, Music, Share2, Sparkles, Clock } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Stunning Templates",
    description: "Choose from 200+ beautifully crafted designs for every occasion",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: Music,
    title: "Music & Sound",
    description: "Add romantic background music that plays automatically",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Heart,
    title: "Animated Hearts",
    description: "Beautiful floating animations that capture the magic of love",
    color: "from-red-400 to-pink-500",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share via WhatsApp, Instagram, or any social platform",
    color: "from-blue-400 to-purple-500",
  },
  {
    icon: Sparkles,
    title: "Customization",
    description: "Personalize every detail with your photos and messages",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Clock,
    title: "Quick Delivery",
    description: "Get your invitation ready within 24 hours",
    color: "from-green-400 to-teal-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-20 w-64 h-64 blob-pink opacity-30" />
      <div className="absolute right-0 bottom-20 w-80 h-80 blob-pink opacity-20" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            WHAT MAKES US
          </h2>
          <p className="text-4xl md:text-5xl font-script text-pink-500">Special</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`card-elegant p-8 ${index % 2 === 0 ? 'card-tilted' : 'card-tilted-right'}`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
