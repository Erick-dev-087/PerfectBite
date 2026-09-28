"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/formatting";
import { DELIVERY_FEE } from "@/data/products";
import { getWhatsAppOrderUrl } from "@/lib/whatsapp";
import { CheckoutFormData } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutForm() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: "",
    phone: "",
    area: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Partial<CheckoutFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const total = subtotal + (items.length > 0 ? DELIVERY_FEE : 0);

  const validate = (): boolean => {
    const newErrors: Partial<CheckoutFormData> = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^(?:0|\+?254)\d{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid Kenyan phone number";
    }
    if (!formData.area.trim())
      newErrors.area = "Please enter your area or estate";
    if (!formData.address.trim())
      newErrors.address = "Please enter your house/apartment details";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof CheckoutFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const url = getWhatsAppOrderUrl(items, formData);
    window.open(url, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  };

  // Empty cart
  if (items.length === 0 && !isSubmitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-surface-raised flex items-center justify-center mx-auto mb-6">
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
        <h2 className="font-heading font-bold text-2xl text-cream mb-3">
          Your cart is empty
        </h2>
        <p className="text-text-muted mb-8">
          Add some sausages before checking out.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-ink font-semibold px-8 py-3 rounded-full transition-all group"
        >
          Browse Products
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="transition-transform group-hover:translate-x-1"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    );
  }

  // Success state
  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-6">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="font-heading font-bold text-2xl text-cream mb-3">
          Order details prepared!
        </h2>
        <p className="text-text-muted max-w-md mx-auto mb-3">
          We&apos;ve prepared your order details and opened WhatsApp. Send the
          message to confirm your order with Perfect Bite.
        </p>
        <p className="text-cream/60 text-sm mb-8">
          If WhatsApp didn&apos;t open, tap the button below to try again.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppOrderUrl(items, formData)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Open WhatsApp
          </a>
          <Link
            href="/products"
            className="text-text-muted hover:text-cream transition-colors"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Order Summary (left/top) */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <div className="bg-surface rounded-2xl border border-border p-6 sticky top-24">
            <h2 className="font-heading font-semibold text-cream text-lg mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3"
                >
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-cream text-sm font-medium truncate">
                      {item.product.name}
                    </p>
                    <p className="text-text-muted text-xs">
                      {item.product.packSize} × {item.quantity}
                    </p>
                  </div>
                  <p className="text-cream text-sm font-medium">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2 pt-4 border-t border-border">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Subtotal</span>
                <span className="text-cream">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">
                  Delivery <span className="text-xs">(Nairobi)</span>
                </span>
                <span className="text-cream">
                  {formatPrice(DELIVERY_FEE)}
                </span>
              </div>
              <div className="h-px bg-border my-2" />
              <div className="flex justify-between">
                <span className="text-cream font-heading font-semibold">
                  Total
                </span>
                <span className="text-orange font-heading font-bold text-xl">
                  {formatPrice(total)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Form (right/bottom) */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8">
            <h2 className="font-heading font-semibold text-cream text-lg mb-6">
              Delivery Details
            </h2>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-cream text-sm font-medium mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`w-full bg-bg border ${
                    errors.name ? "border-red-500" : "border-border"
                  } rounded-xl px-4 py-3 text-cream placeholder-text-muted/50 focus:outline-none focus:border-orange transition-colors`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-cream text-sm font-medium mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 0712 345 678"
                  className={`w-full bg-bg border ${
                    errors.phone ? "border-red-500" : "border-border"
                  } rounded-xl px-4 py-3 text-cream placeholder-text-muted/50 focus:outline-none focus:border-orange transition-colors`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Area */}
              <div>
                <label
                  htmlFor="area"
                  className="block text-cream text-sm font-medium mb-2"
                >
                  Area / Estate *
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="e.g. Kilimani, Nairobi"
                  className={`w-full bg-bg border ${
                    errors.area ? "border-red-500" : "border-border"
                  } rounded-xl px-4 py-3 text-cream placeholder-text-muted/50 focus:outline-none focus:border-orange transition-colors`}
                />
                {errors.area && (
                  <p className="text-red-400 text-xs mt-1">{errors.area}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-cream text-sm font-medium mb-2"
                >
                  Apartment / House Number *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="e.g. Apt 4B, Rose Avenue"
                  className={`w-full bg-bg border ${
                    errors.address ? "border-red-500" : "border-border"
                  } rounded-xl px-4 py-3 text-cream placeholder-text-muted/50 focus:outline-none focus:border-orange transition-colors`}
                />
                {errors.address && (
                  <p className="text-red-400 text-xs mt-1">{errors.address}</p>
                )}
              </div>

              {/* Notes */}
              <div>
                <label
                  htmlFor="notes"
                  className="block text-cream text-sm font-medium mb-2"
                >
                  Order Notes{" "}
                  <span className="text-text-muted font-normal">
                    (optional)
                  </span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any special requests or delivery instructions..."
                  className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-cream placeholder-text-muted/50 focus:outline-none focus:border-orange transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-orange hover:bg-orange-hover text-ink font-bold text-base py-4 rounded-full transition-all duration-200 group shadow-glow-orange hover:shadow-glow-orange-hover"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Complete Order via WhatsApp — {formatPrice(total)}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <p className="text-text-muted/60 text-xs text-center mt-4">
                Your order details will be sent to Perfect Bite via WhatsApp.
                <br />
                Delivery: KSh 200 within Nairobi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
