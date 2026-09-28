"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FounderStory() {
  return (
    <section id="story" className="py-20 sm:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <ScrollReveal>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/media/story/founder.png"
                  alt="Perfect Bite founder presenting handcrafted sausage varieties"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating behind-the-scenes card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 w-32 sm:w-40 aspect-square rounded-2xl overflow-hidden border-4 border-bg shadow-xl">
                <Image
                  src="/media/story/sausage-making.png"
                  alt="Behind the scenes of sausage production at Perfect Bite"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Text Side */}
          <div>
            <ScrollReveal>
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
                The Perfect Bite Story
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-cream mt-4 mb-6">
                It started with a love for flavour.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                A passion for business, a love for experimenting with meat and
                spices, and a desire to create something different. That&apos;s
                where Perfect Bite began.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                Every sausage we make is a result of curiosity — asking
                &quot;what if?&quot; and being bold enough to try. From the
                Classic that started it all, to the Chilli Honey Heat that
                surprises with every bite, we&apos;re here to show that sausages
                can be exciting.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="flex items-center gap-6">
                <a
                  href="https://www.tiktok.com/@perfectbite00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream/80 hover:text-orange transition-colors text-sm font-medium group"
                >
                  Follow our journey
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
