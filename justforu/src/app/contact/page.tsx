"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  MessageCircle,
  Heart,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@justforu.love",
    subtext: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 98765 43210",
    subtext: "Mon-Sat, 10AM-7PM IST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Mumbai, India",
    subtext: "By appointment only",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "10:00 AM - 7:00 PM",
    subtext: "Monday to Saturday",
  },
];

const faqs = [
  {
    question: "How long does it take to receive my invitation?",
    answer: "Standard delivery takes 24-48 hours. Priority delivery is available for 12-hour turnaround.",
  },
  {
    question: "Can I make changes after receiving my invitation?",
    answer: "Yes! You get 2 free revisions with every order. Additional revisions are available at a small fee.",
  },
  {
    question: "What file formats do you provide?",
    answer: "We provide a shareable link, video file (MP4), and image versions optimized for different platforms.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer full refunds before work begins, and partial refunds within the first 24 hours of delivery.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occasion: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-800 mb-4">
              CONTACT
            </h1>
            <p className="text-5xl md:text-7xl font-script text-pink-500 mb-6">
              Us
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Have questions? We&apos;d love to hear from you. Send us a message 
              and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl p-6 text-center shadow-lg border border-pink-100 ${
                  index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="font-display font-bold text-gray-800 mb-1">
                  {info.title}
                </h3>
                <p className="text-pink-500 font-medium mb-1">{info.content}</p>
                <p className="text-gray-400 text-sm">{info.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-pink-500" />
                  <h2 className="text-2xl font-display font-bold text-gray-800">
                    Send Us a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Occasion
                      </label>
                      <select
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 transition-colors bg-white"
                      >
                        <option value="">Select occasion</option>
                        <option value="wedding">Wedding</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="birthday">Birthday</option>
                        <option value="valentines">Valentine&apos;s Day</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 transition-colors resize-none"
                      placeholder="Tell us about your celebration..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Side Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100">
                <h3 className="text-xl font-display font-bold text-gray-800 mb-6">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, color: "from-pink-500 to-purple-500", label: "Instagram" },
                    { icon: Facebook, color: "from-blue-500 to-blue-600", label: "Facebook" },
                    { icon: Twitter, color: "from-sky-400 to-sky-500", label: "Twitter" },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href="#"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100">
                <h3 className="text-xl font-display font-bold text-gray-800 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-pink-100 pb-4 last:border-0"
                    >
                      <h4 className="font-medium text-gray-800 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-3xl p-8 text-white">
                <Heart className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-display font-bold mb-2">
                  Need Urgent Help?
                </h3>
                <p className="text-pink-100 mb-4">
                  For urgent requests, reach out via WhatsApp for instant support.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-pink-500 px-6 py-3 rounded-full font-semibold shadow-lg"
                >
                  WhatsApp Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
