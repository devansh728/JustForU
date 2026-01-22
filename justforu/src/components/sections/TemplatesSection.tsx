"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";
import { templates, categories } from "@/data/mockData";

export function TemplatesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTemplates = activeCategory === "all"
    ? templates
    : templates.filter(t => t.category === activeCategory);

  return (
    <section className="py-24 section-pink relative overflow-hidden">
      {/* Decorative stripe background */}
      <div className="absolute top-0 right-0 w-1/2 h-full stripe-pattern-subtle opacity-50" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-white text-pink-600 rounded-full text-sm font-medium mb-4 shadow-sm">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-2">
            SHOP ALL
          </h2>
          <p className="text-5xl md:text-6xl font-script text-pink-500">
            Best Sellers
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === "all"
                ? "bg-pink-500 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-pink-100"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-pink-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-pink-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Templates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTemplates.slice(0, 8).map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
              >
                <TemplateCard template={template} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/templates">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline inline-flex items-center gap-2"
            >
              View All Templates
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

interface TemplateCardProps {
  template: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    badge?: string;
  };
  index: number;
}

function TemplateCard({ template, index }: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group ${index % 2 === 0 ? 'card-tilted' : 'card-tilted-right'}`}
    >
      {/* Stamp frame container */}
      <div className="stamp-border bg-white rounded-lg overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-gradient-to-br from-pink-50 to-pink-100 overflow-hidden">
          {/* Placeholder Pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4">
              <Heart className="w-12 h-12 text-pink-300 mx-auto mb-3" />
              <p className="font-script text-xl text-pink-400">{template.name}</p>
            </div>
          </div>

          {/* Badge */}
          {template.badge && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-pink-500 text-white text-xs font-bold rounded-full">
              {template.badge}
            </div>
          )}

          {/* Hover Overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-pink-500/80 flex items-center justify-center"
              >
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg"
                >
                  <Eye className="w-6 h-6 text-pink-500" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="p-4 bg-white">
          <h3 className="font-display font-semibold text-gray-800 mb-2 truncate">
            {template.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(template.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">({template.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-pink-600">₹{template.price}</span>
            {template.originalPrice && (
              <span className="text-sm text-gray-400 line-through">₹{template.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
