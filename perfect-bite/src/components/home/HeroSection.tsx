"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg to-surface-raised" />

      {/* Sparkle decorations */}
      <div className="absolute top-1/4 left-[15%] w-2 h-2 bg-gold rounded-full animate-sparkle" />
      <div className="absolute top-1/3 right-[20%] w-1.5 h-1.5 bg-gold rounded-full animate-sparkle delay-300" />
      <div className="absolute bottom-1/3 left-[10%] w-1 h-1 bg-orange rounded-full animate-sparkle delay-200" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-up">
            {/* Eyebrow */}
            <span className="inline-block text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              A journey of flavour
            </span>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream leading-[1.1] mb-6">
              Your cravings called.{" "}
              <span className="text-orange">We made something different.</span>
            </h1>

            {/* Supporting copy */}
            <p className="text-text-muted text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Bold flavours, unexpected combinations and sausages made for those
              who love a little adventure.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/products"
                className="flex items-center gap-2 bg-orange hover:bg-orange-hover text-ink font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-200 group shadow-glow-orange hover:shadow-glow-orange-hover"
              >
                Discover the flavours
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="#story"
                className="text-cream/80 hover:text-cream font-medium text-base transition-all bg-surface-raised border border-border hover:border-orange px-6 py-3 rounded-full shadow-glow-charcoal hover:shadow-glow-orange"
              >
                Our story
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange/20 via-transparent to-transparent rounded-3xl blur-3xl" />

              <Image
                src="/media/hero/sausages-hero.jpg"
                alt="Perfect Bite handcrafted sausages on a skewer against a dark background"
                fill
                priority
                className="object-cover rounded-3xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Floating price badge */}
              <div className="absolute bottom-6 left-6 bg-surface/90 backdrop-blur-md rounded-2xl px-4 py-3 border border-border">
                <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                  From
                </p>
                <p className="text-cream font-heading font-bold text-2xl">
                  KSh 1,000
                </p>
                <p className="text-text-muted text-xs">per 800g pack</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-400">
          <span className="text-text-muted/50 text-xs uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-text-muted/30 flex justify-center pt-1.5">
            <div className="w-1 h-2.5 bg-text-muted/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
