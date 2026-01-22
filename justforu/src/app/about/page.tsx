"use client";

import { motion } from "framer-motion";
import { Heart, Star, Users, Award, Target, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const team = [
  { name: "Priya Sharma", role: "Founder & Creative Director", initial: "P" },
  { name: "Arjun Patel", role: "Lead Designer", initial: "A" },
  { name: "Neha Gupta", role: "Customer Success", initial: "N" },
  { name: "Rahul Kumar", role: "Technical Lead", initial: "R" },
];

const values = [
  {
    icon: Heart,
    title: "Love in Every Detail",
    description: "We pour our hearts into every design, ensuring each invitation tells your unique love story.",
  },
  {
    icon: Sparkles,
    title: "Magic & Creativity",
    description: "We believe celebrations should feel magical, with animations and effects that wow your guests.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your happiness is our priority. We're here to support you every step of the way.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Premium designs, smooth animations, and attention to detail in everything we create.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 stripe-pattern-subtle opacity-50" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-800 mb-4">
              ABOUT
            </h1>
            <p className="text-5xl md:text-7xl font-script text-pink-500 mb-6">
              JustforU
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We started with a simple belief — that every love story deserves to be celebrated 
              in the most beautiful way possible. Today, we&apos;ve helped over 50,000 couples 
              create magical moments with our digital invitations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="stamp-border bg-white p-3 rounded-lg rotate-2">
                    <div className="aspect-square bg-gradient-to-br from-pink-100 to-pink-200 rounded flex items-center justify-center">
                      <Heart className="w-16 h-16 text-pink-400" />
                    </div>
                  </div>
                  <div className="stamp-border bg-white p-3 rounded-lg -rotate-2">
                    <div className="aspect-[4/3] bg-gradient-to-br from-pink-50 to-pink-100 rounded flex items-center justify-center">
                      <Star className="w-12 h-12 text-pink-300" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="stamp-border bg-white p-3 rounded-lg -rotate-1">
                    <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 to-pink-200 rounded flex items-center justify-center">
                      <Sparkles className="w-12 h-12 text-pink-400" />
                    </div>
                  </div>
                  <div className="stamp-border bg-white p-3 rounded-lg rotate-3">
                    <div className="aspect-square bg-gradient-to-br from-pink-50 to-pink-100 rounded flex items-center justify-center">
                      <Users className="w-14 h-14 text-pink-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
                Since 2020
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
                OUR JOURNEY OF
              </h2>
              <p className="text-3xl md:text-4xl font-script text-pink-500 mb-6">
                Spreading Love
              </p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  JustforU was born from a simple observation — traditional paper invitations 
                  were becoming outdated, yet digital alternatives lacked the warmth and 
                  personalization that special occasions deserve.
                </p>
                <p>
                  Our founder, Priya, created her first digital invitation for her best 
                  friend&apos;s wedding. The response was overwhelming — guests loved the 
                  animations, the music, and the ability to RSVP instantly.
                </p>
                <p>
                  That single invitation sparked a mission: to make beautiful, animated 
                  digital invitations accessible to everyone, for every celebration of love.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { value: "50K+", label: "Happy Couples" },
                  { value: "200+", label: "Templates" },
                  { value: "4.9", label: "Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-display font-bold text-pink-500">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 section-pink">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white text-pink-600 rounded-full text-sm font-medium mb-4">
              What We Believe
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-2">
              OUR VALUES
            </h2>
            <p className="text-3xl md:text-4xl font-script text-pink-500">
              & Mission
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 text-center shadow-lg border border-pink-100"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-pink-500" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
              The People Behind
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-2">
              MEET OUR
            </h2>
            <p className="text-3xl md:text-4xl font-script text-pink-500">
              Team
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`text-center ${index % 2 === 0 ? 'card-tilted' : 'card-tilted-right'}`}
              >
                <div className="stamp-border bg-white p-4 rounded-xl">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center mx-auto mb-4 text-4xl font-display font-bold text-pink-600">
                    {member.initial}
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-pink-500 text-sm">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 section-pink">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Target className="w-16 h-16 text-pink-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed italic">
              &ldquo;To make every celebration of love memorable and magical through 
              beautifully crafted digital experiences that bring hearts together, 
              one invitation at a time.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
