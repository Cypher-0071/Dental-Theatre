import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { PhotoGridSection } from "@/components/sections/photo-grid";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <ServicesPreview />
      <PhotoGridSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
