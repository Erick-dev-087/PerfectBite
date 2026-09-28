"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/formatting";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

export default function ProductCatalogue() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

function ProductCard({
  product,
  onQuickView,
}: {
  product: Product;
  onQuickView: () => void;
}) {
  const { addItem, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setJustAdded(true);
    setQuantity(1);
    setTimeout(() => {
      setJustAdded(false);
      setIsCartOpen(true);
    }, 800);
  };

  return (
    <div className="bg-surface-raised rounded-2xl overflow-hidden border border-border hover:border-orange/30 transition-all duration-300 group">
      {/* Image */}
      <button
        onClick={onQuickView}
        className="relative aspect-[4/5] w-full overflow-hidden cursor-pointer"
        aria-label={`View details for ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-raised/80 via-transparent to-transparent" />

        {/* Quick view hint */}
        <div className="absolute inset-0 flex items-center justify-center bg-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-surface/90 backdrop-blur-md text-cream text-sm font-medium px-5 py-2 rounded-full border border-border">
            Quick view
          </span>
        </div>
      </button>

      {/* Product Info */}
      <div className="p-5 sm:p-6">
        <h2 className="font-heading font-bold text-cream text-xl mb-1">
          {product.name}
        </h2>
        <p className="text-text-muted text-sm mb-4">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between mb-5">
          <div>
            <span className="text-orange font-heading font-bold text-2xl">
              {formatPrice(product.price)}
            </span>
            <span className="text-text-muted text-xs ml-2">
              / {product.packSize}
            </span>
          </div>
        </div>

        {/* Quantity + Add to Cart */}
        <div className="flex items-center gap-3">
          {/* Quantity stepper */}
          <div className="flex items-center bg-bg border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 flex items-center justify-center text-cream hover:bg-surface transition-colors"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-10 text-center text-cream font-medium text-sm">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 flex items-center justify-center text-cream hover:bg-surface transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-2 font-semibold text-sm py-2.5 rounded-xl transition-all duration-300 ${
              justAdded
                ? "bg-green-600 text-white"
                : "bg-orange hover:bg-orange-hover text-ink"
            }`}
          >
            {justAdded ? (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Added!
              </>
            ) : (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProductQuickView({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { addItem, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(product, quantity);
    onClose();
    setTimeout(() => setIsCartOpen(true), 200);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-surface rounded-3xl border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto animate-fade-up"
          role="dialog"
          aria-label={`${product.name} details`}
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-surface-raised rounded-full text-text-muted hover:text-cream transition-colors"
            aria-label="Close quick view"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="grid sm:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-square sm:aspect-auto sm:min-h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                {product.packSize} pack
              </span>
              <h2 className="font-heading font-bold text-cream text-2xl sm:text-3xl mt-2 mb-3">
                {product.name}
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {product.longDescription}
              </p>

              <div className="mb-6">
                <span className="text-orange font-heading font-bold text-3xl">
                  {formatPrice(product.price)}
                </span>
                <span className="text-text-muted text-sm ml-2">
                  / {product.packSize}
                </span>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-cream text-sm font-medium">Quantity:</span>
                <div className="flex items-center bg-bg border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-cream hover:bg-surface transition-colors"
                  >
                    −
                  </button>
                  <span className="w-12 text-center text-cream font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-cream hover:bg-surface transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-ink font-semibold py-3.5 rounded-full transition-all duration-200 group"
              >
                Add to Cart — {formatPrice(product.price * quantity)}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
