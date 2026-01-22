"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Instagram, Twitter, Mail, Sparkles } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Templates", href: "/templates" },
      { name: "Pricing", href: "#pricing" },
      { name: "Features", href: "#features" },
      { name: "Add-ons", href: "#addons" },
    ],
    occasions: [
      { name: "Valentine's Day", href: "/templates/valentine" },
      { name: "Anniversary", href: "/templates/anniversary" },
      { name: "Birthday", href: "/templates/birthday" },
      { name: "Wedding", href: "/templates/wedding" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-pink-50/50" />
      
      <div className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 pt-20 pb-10">
        {/* Floating decorations */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 left-10 text-4xl opacity-30"
        >
          💕
        </motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 right-20 text-3xl opacity-20"
        >
          ✨
        </motion.div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <span className="text-2xl font-bold gradient-text font-script">
                  JustforU
                </span>
              </Link>
              <p className="text-gray-600 mb-6 max-w-sm">
                Create magical digital invitations that tell your love story. 
                Not just cards — unforgettable experiences. 💝
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Mail, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Occasions</h4>
              <ul className="space-y-3">
                {footerLinks.occasions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 p-8 glass-card rounded-3xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-pink-500" />
                <div>
                  <h4 className="font-semibold text-gray-800">Get Early Access</h4>
                  <p className="text-gray-600 text-sm">Be the first to know about new templates</p>
                </div>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 md:w-64 px-4 py-3 rounded-full border border-pink-200 focus:outline-none focus:border-pink-400 bg-white/80"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary py-3 px-6"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-pink-200/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} JustforU. Made with 💖 in India
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Spreading love, one invitation at a time <span className="animate-heartbeat inline-block">❤️</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
