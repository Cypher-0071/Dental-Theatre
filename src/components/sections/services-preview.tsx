"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { siteConfig } from "@/lib/data/site-data";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <FadeIn direction="up">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Specialised Treatments
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              From routine check-ups to advanced cosmetic procedures — all performed with the latest technology and a gentle, patient-first approach.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.services.map((service, index) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Activity;
            return (
              <FadeIn key={service.slug} direction="up" delay={index * 0.08}>
                <Card className="h-full group cursor-pointer overflow-hidden relative bg-background border border-border/60 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 rounded-xl">
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-primary scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300" />
                  <CardHeader className="pb-3 pt-6 px-6">
                    <div className="size-11 rounded-xl bg-primary/8 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 border border-primary/10 group-hover:border-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors leading-snug">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground mt-1.5">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <div className="h-px bg-border/50 mb-4" />
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group/link"
                    >
                      Learn more
                      <ArrowRight className="size-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <FadeIn direction="up">
            <Button
              nativeButton={false}
              variant="outline"
              className="h-11 px-8 text-sm rounded-xl border-border/70 hover:border-primary/50 hover:bg-muted/60"
              render={<Link href="/services" />}
            >
              View All Services
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
