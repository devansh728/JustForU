"use client";

import { motion } from "framer-motion";
import { Heart, Calendar } from "lucide-react";
import { valentineWeekDays } from "@/data/mockData";

export function ValentineWeekSection() {
  return (
    <section id="valentines" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
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
            <Calendar className="w-4 h-4 inline mr-2" />
            7th - 14th February
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-2">
            VALENTINE&apos;S WEEK
          </h2>
          <p className="text-4xl md:text-5xl font-script text-pink-500">
            Celebration
          </p>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Make every day of the Valentine&apos;s Week special with our themed digital invitations
          </p>
        </motion.div>

        {/* Valentine Week Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valentineWeekDays.slice(0, 8).map((day, index) => (
            <motion.div
              key={day.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                {/* Date Badge */}
                <div className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-pink-500 text-white flex flex-col items-center justify-center shadow-lg">
                  <span className="text-xs font-medium">Feb</span>
                  <span className="text-lg font-bold leading-none">{day.date}</span>
                </div>

                {/* Icon Section */}
                <div className="h-40 bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center relative">
                  <span className="text-6xl">{day.icon}</span>
                  {/* Decorative sparkles */}
                  <div className="absolute top-4 left-4 w-4 h-4 sparkle animate-sparkle" style={{ animationDelay: `${index * 0.2}s` }} />
                  <div className="absolute bottom-4 right-8 w-3 h-3 sparkle animate-sparkle" style={{ animationDelay: `${index * 0.3}s` }} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-gray-800 mb-2">
                    {day.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {day.description}
                  </p>
                  
                  {/* Templates count */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-pink-500">
                      <Heart className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{day.templates} Templates</span>
                    </div>
                    <span className="text-pink-500 font-medium text-sm group-hover:underline">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
