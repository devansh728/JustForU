"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Sparkles, ArrowRight, Star, Gift, Calendar, Zap } from "lucide-react";
import { DecorativeSparkles } from "@/components/ui/DecorativeElements";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Top Banner */}
      <div className="banner-bar text-center">
        <span className="flex items-center justify-center gap-2">
          <Star className="w-4 h-4" />
          VALENTINE&apos;S WEEK SPECIAL — 20% OFF ALL PREMIUM TEMPLATES
          <Star className="w-4 h-4" />
        </span>
      </div>

      {/* Main Hero Content */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Decorative swirl */}
              <div className="absolute -left-20 top-0 w-32 h-32 opacity-40">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M20 80 Q 50 20, 80 50 Q 90 70, 60 80 Q 30 90, 20 80"
                    fill="none"
                    stroke="#ffb6c1"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-pink-200 mb-6"
              >
                <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                <span className="text-sm font-medium text-gray-600">Premium Digital Invitations</span>
              </motion.div>

              <h1 className="mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-800 leading-tight"
                >
                  CELEBRATE
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block text-5xl md:text-6xl lg:text-8xl font-script text-pink-500 -mt-2"
                >
                  Every Love
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="block text-5xl md:text-6xl lg:text-7xl heading-outline"
                >
                  STORY
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed"
              >
                Create stunning, animated digital invitations that capture the magic of your special moments. 
                Music, photos, and heart-melting animations included.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/templates">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    SHOP NOW
                  </motion.button>
                </Link>
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline flex items-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Decorative Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Stripe background */}
              <div className="absolute inset-0 stripe-pattern rounded-3xl -rotate-3 scale-110 opacity-50" />
              
              {/* Main featured card */}
              <div className="relative">
                {/* Floating decorative elements */}
                <DecorativeSparkles />

                {/* Main frame with stamp border */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 stamp-border bg-white p-4 rounded-lg mx-auto max-w-sm"
                  style={{ transform: "rotate(-3deg)" }}
                >
                  <div className="aspect-[4/5] bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <Heart className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                        <p className="font-script text-3xl text-pink-600 mb-2">Best</p>
                        <p className="text-2xl font-display font-bold text-gray-700">Sellers</p>
                      </div>
                    </div>
                    {/* Decorative corner */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Secondary floating card */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -left-10 top-1/4 z-20 stamp-border bg-white p-3 rounded-lg"
                  style={{ transform: "rotate(5deg)" }}
                >
                  <div className="w-32 h-40 bg-gradient-to-br from-pink-50 to-pink-100 rounded flex items-center justify-center">
                    <div className="text-center">
                      <Gift className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <p className="text-xs font-medium text-gray-600">NEW</p>
                      <p className="font-script text-pink-500">Arrivals</p>
                    </div>
                  </div>
                </motion.div>

                {/* Tertiary floating card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-5 bottom-10 z-20 stamp-border bg-white p-3 rounded-lg"
                  style={{ transform: "rotate(-5deg)" }}
                >
                  <div className="w-28 h-36 bg-gradient-to-br from-pink-100 to-pink-200 rounded flex items-center justify-center">
                    <div className="text-center">
                      <Calendar className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                      <p className="font-script text-pink-500 text-sm">Valentine&apos;s</p>
                      <p className="text-xs font-medium text-gray-600">Week</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background stripe decoration */}
        <div className="absolute right-0 top-1/3 w-96 h-96 stripe-pattern rounded-full opacity-30 -z-10" />
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-white border-t border-b border-pink-100 py-8"
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Heart, value: "50K+", label: "Happy Couples" },
              { icon: Gift, value: "200+", label: "Premium Templates" },
              { icon: Star, value: "4.9", label: "Customer Rating" },
              { icon: Zap, value: "24h", label: "Quick Delivery" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-display font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Quick Category Links */}
      <div className="py-12 section-pink">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              { label: "New arrivals", href: "/templates?category=new" },
              { label: "Now on sale", href: "/templates?category=sale" },
              { label: "Best sellers", href: "/templates?category=best" },
            ].map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors font-medium"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
