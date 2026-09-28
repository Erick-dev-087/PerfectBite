import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import CartDrawer from "@/components/cart/CartDrawer";

export const metadata: Metadata = {
  title: {
    default: "Perfect Bite — Bold Sausages, Unforgettable Flavour",
    template: "%s | Perfect Bite",
  },
  description:
    "Bold flavours, unexpected combinations and sausages made for those who love a little adventure. Order handcrafted sausages in Nairobi — Classic, Chilli Honey Heat, and Cheese varieties.",
  keywords: [
    "Perfect Bite",
    "sausages",
    "Nairobi",
    "artisan sausages",
    "chilli honey",
    "cheese sausage",
    "food delivery Nairobi",
    "Kenyan food brand",
  ],
  openGraph: {
    title: "Perfect Bite — Bold Sausages, Unforgettable Flavour",
    description:
      "Bold flavours, unexpected combinations and sausages made for those who love a little adventure.",
    type: "website",
    locale: "en_KE",
    siteName: "Perfect Bite",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-bg text-cream font-body">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppFAB />
        </CartProvider>
      </body>
    </html>
  );
}
