"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: "All Templates", href: "/templates" },
      { name: "Best Sellers", href: "/templates?category=best" },
      { name: "New Arrivals", href: "/templates?category=new" },
      { name: "On Sale", href: "/templates?category=sale" },
    ],
    occasions: [
      { name: "Valentine's Day", href: "/templates?category=valentines" },
      { name: "Wedding", href: "/templates?category=wedding" },
      { name: "Anniversary", href: "/templates?category=anniversary" },
      { name: "Birthday", href: "/templates?category=birthday" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "FAQs", href: "/faqs" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-4 bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200" />
      
      <div className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <span className="text-3xl font-script text-pink-500">JustforU</span>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="w-6 h-px bg-pink-300" />
                    <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
                    <span className="w-6 h-px bg-pink-300" />
                  </div>
                </motion.div>
              </Link>
              
              <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
                Creating magical digital invitations that celebrate love and special moments. 
                Every celebration deserves to be unforgettable.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="mailto:hello@justforu.love" className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors">
                  <Mail className="w-4 h-4" />
                  hello@justforu.love
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 98765 43210
                </a>
                <span className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  Mumbai, India
                </span>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="font-display font-bold text-gray-800 mb-4">Shop</h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-pink-500 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-gray-800 mb-4">Occasions</h4>
              <ul className="space-y-3">
                {footerLinks.occasions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-pink-500 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-gray-800 mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-pink-500 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-gray-800 mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-pink-500 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-pink-50 py-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-xl text-gray-800 mb-1">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-600 text-sm">
                Get the latest templates, tips, and exclusive offers.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-full border border-pink-200 focus:outline-none focus:border-pink-400 bg-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-pink-100 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p className="flex items-center gap-1">
              © {currentYear} JustforU. Made with 
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> 
              in India
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-pink-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-pink-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
