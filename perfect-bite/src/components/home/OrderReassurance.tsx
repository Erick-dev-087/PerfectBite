"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const infoBlocks = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    title: "800g Packs",
    description: "Generous pack sizes for every occasion.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "From KSh 1,000",
    description: "Affordable flavour starting at just a thousand.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "KSh 200 Delivery",
    description: "Delivered within Nairobi. Fast and reliable.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "WhatsApp Confirmation",
    description: "Order via WhatsApp and get a direct response.",
  },
];

export default function OrderReassurance() {
  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ScrollReveal>
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
              How it works
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-cream mt-4 mb-4">
              Ordering made simple.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Choose your flavours, tell us where, and we&apos;ll bring the bite
              to you.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoBlocks.map((block, i) => (
            <ScrollReveal key={block.title} delay={200 + i * 100}>
              <div className="bg-surface-raised rounded-2xl p-6 border border-border text-center hover:border-orange/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-bg flex items-center justify-center text-orange mx-auto mb-4">
                  {block.icon}
                </div>
                <h3 className="font-heading font-semibold text-cream mb-2">
                  {block.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {block.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
