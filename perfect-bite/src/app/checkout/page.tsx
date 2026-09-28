import type { Metadata } from "next";
import CheckoutForm from "@/components/checkout/CheckoutForm";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Complete your Perfect Bite order. Enter your delivery details and submit your order via WhatsApp.",
};

export default function CheckoutPage() {
  return (
    <section className="pt-24 sm:pt-32 pb-20 sm:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
            Checkout
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-cream mt-4 mb-2">
            Almost there.
          </h1>
          <p className="text-text-muted text-lg">
            Review your order and tell us where to deliver.
          </p>
        </div>

        <CheckoutForm />
      </div>
    </section>
  );
}
