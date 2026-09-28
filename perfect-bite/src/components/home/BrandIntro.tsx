"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const principles = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: "Curiosity",
    description: "Willing to explore combinations others haven't tried.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Flavour",
    description: "Making taste central to every product we create.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Experimentation",
    description: "Testing ideas to create something truly distinctive.",
  },
];

export default function BrandIntro() {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
            Our Philosophy
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-cream mt-4 mb-6">
            Not your everyday sausage.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-16">
            We believe a great sausage is more than just a meal. It&apos;s an
            opportunity to explore flavour, experiment with ingredients and
            create something memorable.
          </p>
        </ScrollReveal>

        {/* Principles */}
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
          {principles.map((p, i) => (
            <ScrollReveal key={p.title} delay={200 + i * 100}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-surface-raised border border-border flex items-center justify-center text-orange mb-5 group-hover:border-orange/40 transition-colors">
                  {p.icon}
                </div>
                <h3 className="font-heading font-semibold text-cream text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
