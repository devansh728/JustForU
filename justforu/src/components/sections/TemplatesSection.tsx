"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ChevronRight, Star } from "lucide-react";
import { templates, categories } from "@/data/mockData";
import { FadeIn } from "@/components/animations/AnimatedText";

export function TemplatesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTemplates = activeCategory === "all" 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  return (
    <section className="relative py-20 overflow-hidden" id="templates">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-10 left-10 text-6xl opacity-20"
        >
          📸
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-20 right-10 text-5xl opacity-20"
        >
          💌
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-pink-600 mb-4">
              <Heart className="w-4 h-4" />
              Handcrafted with Love
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Beautiful <span className="gradient-text font-script text-4xl md:text-6xl">Templates</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of romantic, animated templates 
              designed for every special occasion 💕
            </p>
          </FadeIn>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`category-tag ${activeCategory === category.id ? "active" : ""}`}
            >
              <span>{category.emoji}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div 
                className="polaroid cursor-pointer"
                style={{ 
                  transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                }}
              >
                {/* Template Image */}
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4">
                  <img
                    src={template.thumbnail}
                    alt={template.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        className="w-full py-2 bg-white/90 backdrop-blur-sm rounded-full text-pink-600 font-medium text-sm"
                      >
                        Preview Template
                      </motion.button>
                    </div>
                  </div>

                  {/* Popular Badge */}
                  {template.popular && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" />
                      Popular
                    </div>
                  )}

                  {/* Floating Hearts Animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl pointer-events-none"
                  >
                    💕
                  </motion.div>
                </div>

                {/* Template Info */}
                <div className="text-center">
                  <h3 className="font-script text-xl text-gray-800 mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{categories.find(c => c.id === template.category)?.name}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-pink-600 font-bold">₹{template.price}</span>
                    {template.popular && (
                      <span className="text-xs text-gray-400 line-through">₹{template.price + 100}</span>
                    )}
                  </div>
                </div>

                {/* Color Dots */}
                <div className="flex items-center justify-center gap-2 mt-3">
                  {template.colors.map((color, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.3 }}
                      className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors"
          >
            View All Templates
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
