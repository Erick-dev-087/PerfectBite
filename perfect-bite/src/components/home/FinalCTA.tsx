"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28 bg-bg overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
            Ready?
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-cream mt-4 mb-6">
            Your next favourite flavour is waiting.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-text-muted text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Explore our sausages, choose your favourites and get your order
            started.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-ink font-bold text-lg px-10 py-4 rounded-full transition-all duration-200 group shadow-glow-orange hover:shadow-glow-orange-hover"
          >
            Order your favourites
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
