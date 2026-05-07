import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
