"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, X, Sparkles, Search, ShoppingBag, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "/" },
    { 
      name: "SHOP BY", 
      href: "/templates",
      hasDropdown: true,
      dropdown: [
        { name: "All Templates", href: "/templates" },
        { name: "Valentine's Week", href: "/templates?category=valentines" },
        { name: "Anniversaries", href: "/templates?category=anniversary" },
        { name: "Birthdays", href: "/templates?category=birthday" },
      ]
    },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "top-0" : "top-10"
      }`}
    >
      <div className="container-custom">
        <div className={`flex items-center justify-between py-4 px-6 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg rounded-none" 
            : "bg-white/80 backdrop-blur-sm rounded-full mt-4 shadow-md"
        }`}>
          {/* Left - Search */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-pink-50 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Center - Logo */}
          <Link href="/" className="flex items-center gap-2 group absolute left-1/2 -translate-x-1/2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <span className="text-2xl md:text-3xl font-script text-pink-500">
                JustforU
              </span>
              <div className="flex items-center justify-center gap-1">
                <span className="w-4 h-px bg-pink-300" />
                <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
                <span className="w-4 h-px bg-pink-300" />
              </div>
            </motion.div>
          </Link>

          {/* Right - Cart & Menu */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-pink-50 rounded-full transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-pink-50 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-6 h-6 text-pink-500" /> : <Menu className="w-6 h-6 text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation - Below Logo */}
        <div className="hidden md:flex items-center justify-center gap-8 py-4 bg-white/90 backdrop-blur-sm">
          {navItems.map((item) => (
            <div 
              key={item.name}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setShopDropdown(true)}
              onMouseLeave={() => item.hasDropdown && setShopDropdown(false)}
            >
              <Link
                href={item.href}
                className={`nav-link flex items-center gap-1 text-sm tracking-wide ${
                  pathname === item.href ? "active" : ""
                }`}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </Link>

              {/* Dropdown */}
              {item.hasDropdown && (
                <AnimatePresence>
                  {shopDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-pink-100 overflow-hidden"
                    >
                      {item.dropdown?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-3xl mt-2 shadow-xl overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 font-medium transition-colors ${
                        pathname === item.href ? "text-pink-500" : "text-gray-600 hover:text-pink-500"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 space-y-2 mt-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-1 text-sm text-gray-500 hover:text-pink-500"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full mt-4 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Create Magic
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
