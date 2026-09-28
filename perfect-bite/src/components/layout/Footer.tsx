import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/media/logo/perfect-bite-logo.jpeg"
                alt="Perfect Bite"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-heading font-bold text-lg text-cream">
                Perfect Bite
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Bold flavours, unexpected combinations and sausages made for those
              who love a little adventure. Made in Nairobi. 🇰🇪
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-cream text-sm mb-4 uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-text-muted hover:text-orange transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#story"
                  className="text-text-muted hover:text-orange transition-colors text-sm"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-text-muted hover:text-orange transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-text-muted hover:text-orange transition-colors text-sm"
                >
                  Order Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Delivery */}
          <div>
            <h3 className="font-heading font-semibold text-cream text-sm mb-4 uppercase tracking-wider">
              Order Info
            </h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0 text-orange"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Delivery within Nairobi — KSh 200
              </li>
              <li className="flex items-start gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0 text-orange"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="https://wa.me/254113141243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange transition-colors"
                >
                  WhatsApp: 0113 141 243
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-semibold text-cream text-sm mb-4 uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.tiktok.com/@perfectbite00"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfect Bite on TikTok"
                className="w-10 h-10 rounded-full bg-surface-raised flex items-center justify-center text-cream/60 hover:text-orange hover:bg-surface-raised/80 transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.8a8.24 8.24 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.21z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kings_eatz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfect Bite on Instagram"
                className="w-10 h-10 rounded-full bg-surface-raised flex items-center justify-center text-cream/60 hover:text-orange hover:bg-surface-raised/80 transition-all"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
            <p className="text-text-muted/60 text-xs mt-6">
              © {new Date().getFullYear()} Perfect Bite. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
