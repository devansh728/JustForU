"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 499,
    description: "Perfect for simple celebrations",
    features: [
      "1 Premium Template",
      "Basic Animations",
      "5 Photos Upload",
      "Background Music",
      "WhatsApp Sharing",
      "24 Hours Delivery",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: 999,
    originalPrice: 1499,
    description: "Most loved by our customers",
    features: [
      "3 Premium Templates",
      "Advanced Animations",
      "20 Photos Upload",
      "Custom Music",
      "All Platform Sharing",
      "Priority Delivery",
      "Countdown Timer",
      "RSVP Collection",
    ],
    popular: true,
  },
  {
    name: "Luxury",
    price: 1999,
    description: "For the most special occasions",
    features: [
      "Unlimited Templates",
      "Exclusive Animations",
      "Unlimited Photos",
      "Personal Music Upload",
      "All Platform Sharing",
      "Same Day Delivery",
      "Video Integration",
      "Guest Book Feature",
      "Dedicated Support",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 section-pink relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute right-0 top-0 w-80 h-80 blob-pink opacity-20" />
      <div className="absolute left-0 bottom-0 w-96 h-96 blob-pink opacity-15" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white text-pink-600 rounded-full text-sm font-medium mb-4 shadow-sm">
            Simple Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-2">
            CHOOSE YOUR
          </h2>
          <p className="text-5xl md:text-6xl font-script text-pink-500">
            Perfect Plan
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 bg-pink-500 text-white text-sm font-bold rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              <motion.div
                whileHover={{ y: -8 }}
                className={`h-full bg-white rounded-3xl p-8 shadow-lg border-2 transition-all ${
                  plan.popular
                    ? 'border-pink-400 shadow-xl'
                    : 'border-pink-100 hover:border-pink-200'
                }`}
              >
                {/* Plan Name */}
                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-2xl text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-display font-bold text-pink-600">
                      ₹{plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ₹{plan.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mt-1">one-time payment</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-pink-600" />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-pink-500 text-white shadow-lg hover:bg-pink-600'
                      : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                  }`}
                >
                  {plan.popular && <Zap className="w-4 h-4" />}
                  Get Started
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
