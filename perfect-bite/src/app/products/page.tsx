import type { Metadata } from "next";
import ProductCatalogue from "@/components/products/ProductCatalogue";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Perfect Bite's handcrafted sausage collection — Classic Sausage, Chilli Honey Heat, and Cheese Sausage. Order your 800g packs today with delivery in Nairobi.",
  openGraph: {
    title: "Products | Perfect Bite",
    description:
      "Three distinctive sausage varieties. Classic, Chilli Honey Heat, and Cheese. From KSh 1,000 per 800g pack.",
  },
};

export default function ProductsPage() {
  return (
    <section className="pt-24 sm:pt-32 pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Introduction */}
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
            The Perfect Bite Collection
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-cream mt-4 mb-4">
            Find your flavour.
          </h1>
          <p className="text-text-muted text-lg sm:text-xl max-w-xl mx-auto">
            Three distinctive varieties. One deliciously difficult decision.
          </p>
        </div>

        {/* Product Catalogue */}
        <ProductCatalogue />
      </div>
    </section>
  );
}
