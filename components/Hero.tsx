"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Harbor motif background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-mutedGold/30 to-transparent" />
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 256L48 240C96 224 192 192 288 181.3C384 171 480 181 576 192C672 203 768 213 864 202.7C960 192 1056 160 1152 149.3C1248 139 1344 149 1392 154.7L1440 160V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0V256Z"
            fill="currentColor"
            className="text-mutedGold/40"
          />
        </svg>
      </div>

      <div className="relative z-10 container-narrow text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-ivory leading-tight mb-6">
            Sell with
            <span className="block font-medium italic text-mutedGold mt-2">
              effortless grace
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-ivory/80 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The premium e-commerce platform that makes it beautifully simple to
          build, manage, and grow your online store.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="btn-primary inline-flex items-center gap-2 group">
            Join the Waitlist
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary text-ivory border-ivory/30">
            See Pricing
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 text-ivory/60 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>Early access open</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-ivory/20" />
          <span>Join 2,400+ merchants</span>
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-mutedGold/40" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-mutedGold/40" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-mutedGold/40" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-mutedGold/40" />
    </section>
  );
}
