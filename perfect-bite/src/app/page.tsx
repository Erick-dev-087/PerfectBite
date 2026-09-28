import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/formatting";
import HeroSection from "@/components/home/HeroSection";
import BrandIntro from "@/components/home/BrandIntro";
import ImageFeature from "@/components/home/ImageFeature";
import FounderStory from "@/components/home/FounderStory";
import ProductPreview from "@/components/home/ProductPreview";
import SocialProof from "@/components/home/SocialProof";
import OrderReassurance from "@/components/home/OrderReassurance";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandIntro />
      <ImageFeature />
      <FounderStory />
      <ProductPreview />
      <SocialProof />
      <OrderReassurance />
      <FinalCTA />
    </>
  );
}
