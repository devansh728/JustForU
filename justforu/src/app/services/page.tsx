"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  Music, 
  Image, 
  Share2, 
  Calendar, 
  Users, 
  Clock, 
  Sparkles,
  Gift,
  Heart,
  Zap,
  Crown
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const services = [
  {
    icon: Palette,
    title: "Custom Design",
    description: "Unique, handcrafted designs tailored to your love story and celebration theme.",
    features: ["Personalized color schemes", "Custom illustrations", "Branded elements"],
    price: "From ₹1,499",
  },
  {
    icon: Music,
    title: "Music Integration",
    description: "Add romantic soundtracks that play automatically when your invitation opens.",
    features: ["Curated music library", "Custom audio upload", "Volume controls"],
    price: "Included in Premium",
  },
  {
    icon: Image,
    title: "Photo Gallery",
    description: "Showcase your beautiful memories with animated photo galleries and slideshows.",
    features: ["Multiple layouts", "Smooth transitions", "Caption support"],
    price: "Included",
  },
  {
    icon: Share2,
    title: "Multi-Platform Sharing",
    description: "Share your invitation easily across WhatsApp, Instagram, Facebook, and email.",
    features: ["One-click sharing", "Preview optimization", "Tracking analytics"],
    price: "Included",
  },
  {
    icon: Calendar,
    title: "RSVP Management",
    description: "Collect guest responses and manage your event attendance seamlessly.",
    features: ["Real-time tracking", "Guest list export", "Reminder notifications"],
    price: "From ₹499",
  },
  {
    icon: Users,
    title: "Guest Book",
    description: "Let your loved ones leave heartfelt messages and wishes for your special day.",
    features: ["Unlimited messages", "Photo attachments", "Moderation tools"],
    price: "From ₹299",
  },
];

const addons = [
  {
    icon: Clock,
    title: "Countdown Timer",
    description: "Build excitement with a beautiful countdown to your special day.",
    price: "₹199",
  },
  {
    icon: Gift,
    title: "Gift Registry Link",
    description: "Include links to your gift registry for easy access.",
    price: "₹149",
  },
  {
    icon: Zap,
    title: "Priority Delivery",
    description: "Get your invitation ready within 12 hours.",
    price: "₹299",
  },
  {
    icon: Crown,
    title: "VIP Support",
    description: "Dedicated support representative for your project.",
    price: "₹499",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-800 mb-4">
              OUR SERVICES
            </h1>
            <p className="text-5xl md:text-7xl font-script text-pink-500 mb-6">
              & Pricing
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From simple invitations to complete celebration experiences, 
              we have services to match every need and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-2">
              CORE SERVICES
            </h2>
            <p className="text-3xl font-script text-pink-500">
              Everything You Need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-pink-500" />
                </div>
                
                <h3 className="font-display font-bold text-xl text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-pink-100">
                  <span className="font-display font-bold text-pink-600">
                    {service.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 section-pink">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white text-pink-600 rounded-full text-sm font-medium mb-4">
              Extras
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-2">
              POPULAR ADD-ONS
            </h2>
            <p className="text-3xl font-script text-pink-500">
              Make It Extra Special
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-white rounded-2xl p-6 text-center shadow-lg border border-pink-100 ${
                  index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                  <addon.icon className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="font-display font-bold text-lg text-gray-800 mb-2">
                  {addon.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {addon.description}
                </p>
                <span className="font-bold text-pink-600">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-2">
              HOW WE WORK
            </h2>
            <p className="text-3xl font-script text-pink-500">
              Simple 4-Step Process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Choose", desc: "Select your template and plan" },
              { step: "02", title: "Customize", desc: "Add your photos and details" },
              { step: "03", title: "Review", desc: "Preview and request changes" },
              { step: "04", title: "Share", desc: "Send to your guests" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-pink-200" />
                )}
                <div className="w-16 h-16 rounded-full bg-pink-500 text-white flex items-center justify-center mx-auto mb-4 font-display font-bold text-xl relative z-10">
                  {item.step}
                </div>
                <h3 className="font-display font-bold text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 stripe-pattern">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 text-center shadow-2xl max-w-3xl mx-auto"
          >
            <Sparkles className="w-12 h-12 text-pink-400 mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Let&apos;s create something beautiful together for your special day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/templates">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Browse Templates
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
