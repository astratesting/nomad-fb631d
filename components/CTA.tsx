"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      {/* Harbor motif */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 64L48 80C96 96 192 128 288 138.7C384 149 480 139 576 128C672 117 768 107 864 117.3C960 128 1056 160 1152 170.7C1248 181 1344 171 1392 165.3L1440 160V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V64Z"
            fill="currentColor"
            className="text-mutedGold"
          />
        </svg>
      </div>

      <div className="relative z-10 container-narrow">
        {/* Pricing Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-mutedGold font-medium tracking-widest uppercase text-sm text-center mb-4">
            Simple Pricing
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ivory text-center mb-12">
            Start free, scale as you grow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Starter",
                price: "0",
                description: "For makers getting started",
                features: ["1 store", "10 products", "Nomad branding", "Community support"],
              },
              {
                name: "Professional",
                price: "29",
                description: "For growing brands",
                features: [
                  "5 stores",
                  "Unlimited products",
                  "Custom domain",
                  "Priority support",
                ],
                featured: true,
              },
              {
                name: "Enterprise",
                price: "99",
                description: "For established businesses",
                features: [
                  "Unlimited stores",
                  "White-label option",
                  "API access",
                  "Dedicated support",
                ],
              },
            ].map((plan) => (
              <motion.div
                key={plan.name}
                whileHover={{ y: -4 }}
                className={`relative p-8 rounded-sm border transition-all duration-300 ${
                  plan.featured
                    ? "border-mutedGold bg-mutedGold/5"
                    : "border-ivory/10 bg-ivory/5"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mutedGold text-charcoal text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Popular
                  </div>
                )}
                <h3 className="font-serif text-xl text-ivory mb-2">{plan.name}</h3>
                <p className="text-ivory/60 text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-serif font-medium text-ivory">
                    ${plan.price}
                  </span>
                  <span className="text-ivory/60 ml-1">/mo</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-ivory/80 text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-mutedGold flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Waitlist CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ivory mb-6">
            Be the first to
            <span className="block font-medium italic text-mutedGold">
              experience Nomad
            </span>
          </h2>
          <p className="text-ivory/70 text-lg mb-10 leading-relaxed">
            Join our exclusive waitlist and get early access, plus a special
            founding-member discount when we launch.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 bg-ivory/10 border border-ivory/20 rounded-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-mutedGold transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-60"
                >
                  {loading ? "Joining..." : "Join Waitlist"}
                  {!loading && <ArrowRightIcon className="w-4 h-4" />}
                </button>
              </div>
              {error && (
                <p className="text-red-400 text-sm mt-3">{error}</p>
              )}
              <p className="text-ivory/40 text-xs mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-mutedGold/10 border border-mutedGold/30 rounded-sm p-8"
            >
              <div className="w-12 h-12 bg-mutedGold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-mutedGold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-ivory mb-2">
                You&apos;re on the list!
              </h3>
              <p className="text-ivory/70">
                We&apos;ll notify you when Nomad is ready. Get ready for
                something beautiful.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
