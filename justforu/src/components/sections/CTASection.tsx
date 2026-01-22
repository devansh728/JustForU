"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with stripe pattern */}
      <div className="absolute inset-0 stripe-pattern opacity-30" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Decorative frame */}
          <div className="relative bg-white rounded-3xl p-8 md:p-16 shadow-2xl border-2 border-pink-200 overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-pink-300 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-pink-300 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-pink-300 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-pink-300 rounded-br-lg" />

            {/* Floating hearts */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 left-10 text-3xl"
            >
              💕
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-10 right-10 text-3xl"
            >
              💖
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 right-8 text-2xl"
            >
              ✨
            </motion.div>

            {/* Content */}
            <div className="text-center relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 mb-8 shadow-lg"
              >
                <Heart className="w-10 h-10 text-white fill-white" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-2">
                READY TO CREATE
              </h2>
              <p className="text-4xl md:text-5xl font-script text-pink-500 mb-6">
                Something Beautiful?
              </p>
              
              <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Join thousands of happy couples who made their celebrations unforgettable 
                with our magical digital invitations.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/templates">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2 text-lg"
                  >
                    <Sparkles className="w-5 h-5" />
                    Start Creating Now
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline flex items-center gap-2"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
