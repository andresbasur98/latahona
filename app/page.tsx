import type { Metadata } from "next";
import { ContactSection } from "@/app/components/home/contact-section";
import { HomeHero } from "@/app/components/home/home-hero";
import { IntroSection } from "@/app/components/home/intro-section";
import { ProductsSection } from "@/app/components/home/products-section";
import { ProfessionalsSection } from "@/app/components/home/professionals-section";
import { StorySection } from "@/app/components/home/story-section";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Panadería en El Escorial",
  description: "Conoce La Tahona de El Escorial: panes y bollería, una historia familiar desde 1982, suministro profesional y cómo llegar.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <HomeHero />
      <IntroSection />
      <ProductsSection />
      <StorySection />
      <ProfessionalsSection />
      <ContactSection />
    </main>
  );
}
