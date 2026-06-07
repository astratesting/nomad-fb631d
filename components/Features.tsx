"use client";

import { motion } from "framer-motion";
import {
  SparklesIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  BoltIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: SparklesIcon,
    title: "Refined Storefronts",
    description:
      "Create stunning, conversion-optimized storefronts with our premium templates. Every pixel crafted for elegance.",
    color: "from-mutedGold/20 to-mutedGold/5",
  },
  {
    icon: ShoppingBagIcon,
    title: "Seamless Commerce",
    description:
      "From inventory to checkout, every interaction flows naturally. Built for scale, designed for delight.",
    color: "from-burgundy/20 to-burgundy/5",
  },
  {
    icon: ChartBarIcon,
    title: "Insightful Analytics",
    description:
      "Understand your customers with beautiful, actionable dashboards. Growth at a glance.",
    color: "from-charcoal/20 to-charcoal/5",
  },
  {
    icon: ShieldCheckIcon,
    title: "Enterprise Security",
    description:
      "Bank-grade security with effortless compliance. Your business and customers stay protected.",
    color: "from-mutedGold/20 to-mutedGold/5",
  },
  {
    icon: BoltIcon,
    title: "Lightning Performance",
    description:
      "Optimized for speed with global CDN. Your store loads instantly, everywhere.",
    color: "from-burgundy/20 to-burgundy/5",
  },
  {
    icon: TruckIcon,
    title: "Flexible Fulfillment",
    description:
      "Integrate with any logistics provider. From print-on-demand to warehousing, we adapt to you.",
    color: "from-charcoal/20 to-charcoal/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Features() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-mutedGold font-medium tracking-widest uppercase text-sm mb-4">
            Why Choose Nomad
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6 leading-tight">
            Everything you need,
            <span className="block font-medium italic">nothing you don&apos;t</span>
          </h2>
          <p className="text-charcoal/70 text-lg max-w-2xl mx-auto leading-relaxed">
            A complete e-commerce solution designed for premium brands who value
            aesthetics as much as performance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative bg-white p-8 rounded-sm border border-charcoal/5 hover:border-mutedGold/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm`}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 flex items-center justify-center bg-charcoal/5 rounded-sm group-hover:bg-mutedGold/10 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-charcoal group-hover:text-burgundy transition-colors duration-300" />
                </div>

                <h3 className="font-serif text-xl font-medium text-charcoal mb-3">
                  {feature.title}
                </h3>

                <p className="text-charcoal/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-16 border-t border-charcoal/10"
        >
          <p className="text-center text-charcoal/50 text-sm font-medium tracking-widest uppercase mb-8">
            Trusted by Premium Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
            {["Maison", "Aurum", "Vela", "Noir", "Luma"].map((brand) => (
              <div
                key={brand}
                className="font-serif text-2xl font-medium text-charcoal"
              >
                {brand}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
