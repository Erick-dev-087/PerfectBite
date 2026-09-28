"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/formatting";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Product } from "@/types";
import { ProductQuickView } from "@/components/products/ProductCatalogue";

export default function ProductPreview() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
              Our Collection
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-cream mt-4 mb-4">
              Three flavours.{" "}
              <span className="text-orange">Which one is yours?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              From the classic to the adventurous, find the bite that suits your
              cravings.
            </p>
          </ScrollReveal>
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={200 + index * 100}>
              <button 
                onClick={() => setSelectedProduct(product)}
                className="group block w-full text-left"
                aria-label={`Quick view ${product.name}`}
              >
                <div className="bg-surface-raised rounded-2xl overflow-hidden border border-border hover:border-orange/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange/5">
                  {/* Product Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-raised via-transparent to-transparent" />
                  </div>

                  {/* Product Info */}
                  <div className="p-5 sm:p-6 -mt-8 relative">
                    <h3 className="font-heading font-bold text-cream text-xl mb-1">
                      {product.name}
                    </h3>
                    <p className="text-text-muted text-sm mb-3">
                      {product.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-orange font-heading font-bold text-xl">
                          {formatPrice(product.price)}
                        </span>
                        <span className="text-text-muted text-xs ml-2">
                          {product.packSize}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-cream/60 text-sm group-hover:text-orange transition-colors">
                        View
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-ink font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-200 group shadow-glow-orange hover:shadow-glow-orange-hover"
            >
              Explore all flavours
              <svg
                width="18"
                height="18"
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
          </div>
        </ScrollReveal>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
