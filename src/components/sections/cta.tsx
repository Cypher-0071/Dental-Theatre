"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui-custom/animations";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site-data";
import { MessageSquare, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
        <FadeIn direction="up">
          <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 md:px-16 md:py-20 text-primary-foreground shadow-2xl shadow-primary/20">
            {/* Decorative background shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/8 blur-xl" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/6 blur-xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-white/4 blur-2xl" />
              {/* Subtle grid pattern */}
              <svg className="absolute inset-0 h-full w-full opacity-5" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left max-w-xl">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-white/60 mb-4">
                  Start Today
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
                  Ready for Your Theatrical Transformation?
                </h2>
                <p className="text-primary-foreground/70 text-[15px] leading-relaxed">
                  Book your appointment and take the first step towards the perfect smile. Our team is ready to provide you with world-class dental care.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
                <Button
                  nativeButton={false}
                  size="lg"
                  variant="secondary"
                  className="h-12 px-8 text-sm font-semibold rounded-xl bg-white text-primary hover:bg-white/90 shadow-md"
                  render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
                >
                  <MessageSquare className="mr-2 size-4" />
                  Book via WhatsApp
                </Button>
                <Button
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-sm font-semibold rounded-xl bg-transparent text-white border-white/40 hover:bg-white/10 hover:border-white/70"
                  render={<Link href="/contact" />}
                >
                  Find Nearest Clinic
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
