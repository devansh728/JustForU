"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/mockData";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [mounted]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!mounted) return null;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/50 to-white" />

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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-2">
            LOVED BY
          </h2>
          <p className="text-5xl md:text-6xl font-script text-pink-500">
            Thousands
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-pink-500 hover:bg-pink-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-pink-500 hover:bg-pink-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-pink-400" />
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center text-3xl font-display font-bold text-pink-600 border-4 border-white shadow-lg">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                      &ldquo;{testimonials[currentIndex].content}&rdquo;
                    </p>

                    <div>
                      <p className="font-display font-bold text-gray-800 text-lg">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-pink-500 text-sm">
                        {testimonials[currentIndex].occasion}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-pink-500 w-8"
                    : "bg-pink-200 hover:bg-pink-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
