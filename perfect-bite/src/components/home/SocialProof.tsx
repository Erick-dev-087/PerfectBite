"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote: "It's spicy, it's a work of art, I'm in culinary heaven.",
    source: "Customer review — Chilli Honey Heat",
    handle: "@ninas_kitchen.ke",
  },
  {
    quote:
      'These "Chilli Honey Heat" flavour are a 10/10 give them your monies.',
    source: "Customer review — Chilli Honey Heat",
    handle: "@mi.ni.ndech",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 sm:py-28 bg-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ScrollReveal>
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
              What people are saying
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-cream mt-4">
              Don&apos;t just take our word for it.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={200 + i * 100}>
              <div className="bg-surface rounded-2xl p-8 border border-border relative">
                {/* Quote mark */}
                <div className="absolute top-6 left-6 text-orange/20 font-heading text-6xl leading-none">
                  &ldquo;
                </div>
                <blockquote className="relative z-10">
                  <p className="text-cream text-lg sm:text-xl font-medium leading-relaxed mb-4 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="text-text-muted text-sm">
                    <span className="text-orange font-medium">{t.handle}</span>
                    <span className="mx-2">•</span>
                    {t.source}
                  </footer>
                </blockquote>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
