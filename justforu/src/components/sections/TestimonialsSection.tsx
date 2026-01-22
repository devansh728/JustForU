"use client";

import { motion } from "framer-motion";
import { Quote, Star, Heart } from "lucide-react";
import { testimonials } from "@/data/mockData";
import { FadeIn } from "@/components/animations/AnimatedText";

export function TestimonialsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-pink-50/20 to-white" />

      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 text-5xl opacity-20"
      >
        💬
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-4xl opacity-20"
      >
        💕
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-pink-600 mb-4">
              <Heart className="w-4 h-4" />
              Love Stories
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our <span className="gradient-text font-script text-4xl md:text-6xl">Couples</span> Say
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the hearts we&apos;ve helped connect 💖
            </p>
          </FadeIn>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="glass-card-strong rounded-3xl p-8 h-full relative overflow-hidden">
                {/* Quote Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mb-6 shadow-lg"
                >
                  <Quote className="w-5 h-5 text-white" />
                </motion.div>

                {/* Message */}
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  &quot;{testimonial.message}&quot;
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-pink-200"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-1 -right-1 text-sm"
                    >
                      💕
                    </motion.div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-pink-500">Used: {testimonial.template}</p>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 md:gap-16 p-8 glass-card rounded-3xl">
            {[
              { value: "50,000+", label: "Happy Couples" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "99%", label: "Would Recommend" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
