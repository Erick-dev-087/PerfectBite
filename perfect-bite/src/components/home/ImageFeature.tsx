"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ImageFeature() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/media/hero/sausages-hero.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/50 to-bg/80" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <ScrollReveal>
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
            Crafted with care
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-cream mt-4 mb-6">
            The art is in the flavour.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-cream/80 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
            From familiar favourites to bold flavour combinations, every variety
            brings its own character to the table.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
