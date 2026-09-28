"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/formatting";
import { DELIVERY_FEE } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    itemCount,
    subtotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCartOpen(false);
    };
    if (isCartOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isCartOpen, setIsCartOpen]);

  const total = subtotal + (items.length > 0 ? DELIVERY_FEE : 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isCartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-surface z-50 flex flex-col transition-transform duration-300 ease-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-heading font-bold text-xl text-cream">
            Your Cart{" "}
            {itemCount > 0 && (
              <span className="text-orange">({itemCount})</span>
            )}
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-text-muted hover:text-cream transition-colors rounded-lg hover:bg-surface-raised"
            aria-label="Close cart"
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
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <div className="w-20 h-20 rounded-full bg-surface-raised flex items-center justify-center mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-text-muted"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <p className="text-cream font-heading font-semibold text-lg mb-2">
                Your cart is empty
              </p>
              <p className="text-text-muted text-sm mb-6">
                Explore our flavours and add your favourites.
              </p>
              <Link
                href="/products"
                onClick={() => setIsCartOpen(false)}
                className="flex items-center gap-2 bg-orange hover:bg-orange-hover text-ink font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 group shadow-glow-orange hover:shadow-glow-orange-hover"
              >
                Browse Products
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
              </Link>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-surface-raised rounded-xl"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-cream text-sm truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-text-muted text-xs mt-0.5">
                      {item.product.packSize}
                    </p>
                    <p className="text-orange font-semibold text-sm mt-1">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="w-7 h-7 rounded-md bg-bg border border-border text-cream flex items-center justify-center hover:border-orange transition-colors text-sm"
                          aria-label={`Decrease ${item.product.name} quantity`}
                        >
                          −
                        </button>
                        <span className="text-cream text-sm font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          className="w-7 h-7 rounded-md bg-bg border border-border text-cream flex items-center justify-center hover:border-orange transition-colors text-sm"
                          aria-label={`Increase ${item.product.name} quantity`}
                        >
                          +
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-text-muted hover:text-red-400 transition-colors text-xs"
                        aria-label={`Remove ${item.product.name} from cart`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with totals */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Subtotal</span>
              <span className="text-cream font-medium">
                {formatPrice(subtotal)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">
                Delivery{" "}
                <span className="text-xs">(within Nairobi)</span>
              </span>
              <span className="text-cream font-medium">
                {formatPrice(DELIVERY_FEE)}
              </span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex justify-between">
              <span className="text-cream font-heading font-semibold">
                Estimated Total
              </span>
              <span className="text-orange font-heading font-bold text-lg">
                {formatPrice(total)}
              </span>
            </div>

            <div className="space-y-2 pt-2">
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-ink font-semibold py-3 rounded-full transition-all duration-200 group shadow-glow-orange hover:shadow-glow-orange-hover"
              >
                Checkout
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
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-text-muted hover:text-cream text-sm py-2 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
