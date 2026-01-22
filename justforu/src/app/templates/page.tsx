"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, Eye, Filter, Grid, LayoutGrid, Search, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { templates, categories } from "@/data/mockData";

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);

  const filteredTemplates = templates.filter((t) => {
    const matchesCategory = activeCategory === "all" || t.category === activeCategory;
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 stripe-pattern-subtle opacity-50" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-800 mb-2">
              SHOP ALL
            </h1>
            <p className="text-5xl md:text-7xl font-script text-pink-500 mb-6">
              Templates
            </p>
            <p className="text-lg text-gray-600">
              Browse our collection of 200+ beautifully crafted digital invitations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-6 bg-white border-b border-pink-100 sticky top-[120px] z-40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-pink-200 focus:outline-none focus:border-pink-400"
              />
            </div>

            {/* Categories - Scrollable */}
            <div className="flex gap-2 overflow-x-auto hide-scrollbar w-full lg:w-auto py-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-5 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeCategory === "all"
                    ? "bg-pink-500 text-white"
                    : "bg-pink-50 text-gray-600 hover:bg-pink-100"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-pink-500 text-white"
                      : "bg-pink-50 text-gray-600 hover:bg-pink-100"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Sort & Filter */}
            <div className="flex gap-3">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-4 py-2 pr-10 rounded-full border border-pink-200 text-gray-600 bg-white focus:outline-none"
                >
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 rounded-full border border-pink-200 hover:bg-pink-50"
              >
                <SlidersHorizontal className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-12 section-pink">
        <div className="container-custom">
          {/* Results count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-pink-500">{filteredTemplates.length}</span> templates
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  layout
                >
                  <TemplateCard template={template} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-pink-200 mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-gray-800 mb-2">
                No templates found
              </h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}

          {/* Load More */}
          {filteredTemplates.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                Load More Templates
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
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
    category: string;
  };
  index: number;
}

function TemplateCard({ template, index }: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      className={`group ${index % 3 === 0 ? 'rotate-1' : index % 3 === 1 ? '-rotate-1' : 'rotate-0'}`}
    >
      <div className="stamp-border bg-white rounded-xl overflow-hidden">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-gradient-to-br from-pink-50 to-pink-100 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4">
              <Heart className="w-12 h-12 text-pink-300 mx-auto mb-3" />
              <p className="font-script text-xl text-pink-400">{template.name}</p>
            </div>
          </div>

          {template.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-pink-500 text-white text-xs font-bold rounded-full">
              {template.badge}
            </span>
          )}

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-pink-500/80 flex flex-col items-center justify-center gap-3"
              >
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg"
                >
                  <Eye className="w-6 h-6 text-pink-500" />
                </motion.button>
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="px-6 py-2 bg-white text-pink-500 rounded-full font-medium text-sm"
                >
                  Quick View
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display font-semibold text-gray-800 mb-2 truncate">
            {template.name}
          </h3>

          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(template.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-200"
                }`}
              />
            ))}
            <span className="text-xs text-gray-400 ml-1">({template.reviews})</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-pink-600">₹{template.price}</span>
              {template.originalPrice && (
                <span className="text-sm text-gray-400 line-through">₹{template.originalPrice}</span>
              )}
            </div>
            <button className="p-2 rounded-full hover:bg-pink-50 transition-colors">
              <Heart className="w-5 h-5 text-gray-400 hover:text-pink-500" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
