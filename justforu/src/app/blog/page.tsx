"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Heart, Tag } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const blogPosts = [
  {
    id: 1,
    title: "10 Creative Ways to Announce Your Engagement",
    excerpt: "From surprise reveals to social media announcements, discover unique ways to share your happy news with the world.",
    category: "Engagement",
    date: "January 20, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Valentine's Week 2026: A Day-by-Day Guide",
    excerpt: "Make the most of Valentine's Week with our complete guide to celebrating each special day.",
    category: "Valentine's Day",
    date: "January 18, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Digital vs Traditional Invitations: Which Is Right for You?",
    excerpt: "Explore the pros and cons of digital and paper invitations to make the best choice for your celebration.",
    category: "Tips",
    date: "January 15, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "How to Write the Perfect Wedding Invitation Message",
    excerpt: "Craft heartfelt and memorable invitation wording that reflects your unique love story.",
    category: "Wedding",
    date: "January 12, 2026",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Top 5 Anniversary Celebration Ideas",
    excerpt: "From intimate dinners to surprise getaways, celebrate your love in unforgettable ways.",
    category: "Anniversary",
    date: "January 10, 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Choosing the Right Music for Your Digital Invitation",
    excerpt: "Set the perfect mood with our guide to selecting the ideal background music for your invitation.",
    category: "Tips",
    date: "January 8, 2026",
    readTime: "5 min read",
    featured: false,
  },
];

const categories = ["All", "Wedding", "Engagement", "Valentine's Day", "Anniversary", "Tips"];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 stripe-pattern-subtle opacity-50" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">
              Inspiration & Ideas
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-800 mb-4">
              OUR BLOG
            </h1>
            <p className="text-5xl md:text-7xl font-script text-pink-500 mb-6">
              Love Stories
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tips, inspiration, and ideas to make your celebrations even more special.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-pink-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? "bg-pink-500 text-white"
                    : "bg-pink-50 text-gray-600 hover:bg-pink-100"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-bold text-gray-800">
              Featured Posts
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(p => p.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group ${index % 2 === 0 ? 'card-tilted' : 'card-tilted-right'}`}
              >
                <div className="stamp-border bg-white rounded-2xl overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center relative">
                    <Heart className="w-16 h-16 text-pink-300" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-pink-500 text-white text-xs font-bold rounded-full">
                      Featured
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-gray-800 mb-3 group-hover:text-pink-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-pink-500 font-medium hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* All Posts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-bold text-gray-800">
              Latest Articles
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(p => !p.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-pink-100 hover:border-pink-300 transition-all"
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-pink-200" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-pink-50 rounded-full text-pink-600">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-gray-800 mb-2 group-hover:text-pink-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-pink-500 text-sm font-medium hover:underline"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 section-pink">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 text-center shadow-xl max-w-2xl mx-auto"
          >
            <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h2 className="text-2xl font-display font-bold text-gray-800 mb-2">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest tips, inspiration, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-pink-200 focus:outline-none focus:border-pink-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
