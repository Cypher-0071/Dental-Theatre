"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/lib/data/site-data";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui-custom/animations";
import { Marquee } from "@/components/ui-custom/marquee";

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden py-20 lg:py-24">
      <div className="container mx-auto mb-12 max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn direction="up">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.3em] text-primary uppercase">
              Patient Stories
            </p>
            <h2 className="mb-4 font-heading text-4xl leading-none md:text-5xl">
              What Our Patients Say
            </h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Credibility matters even more in healthcare, so the testimonial rail now feels
              brighter, softer, and more aligned with the rest of the premium clinic experience.
            </p>
          </FadeIn>
        </div>
      </div>

      <FadeIn direction="up" delay={0.2}>
        <Marquee speed={45} className="py-3">
          {testimonials.concat(testimonials).map((testimonial, index) => {
            const initials = testimonial.name
              .split(" ")
              .map((name: string) => name[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <div
                key={index}
                className="mx-3 flex w-[320px] shrink-0 flex-col gap-4 rounded-[24px] border border-white/70 bg-white/82 p-6 shadow-[0_20px_60px_-42px_rgba(8,36,78,0.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_26px_80px_-46px_rgba(8,36,78,0.62)]"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "size-3.5",
                        i < testimonial.rating
                          ? "fill-yellow-500 text-yellow-500"
                          : "text-muted-foreground/30"
                      )}
                    />
                  ))}
                </div>

                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 border-t border-border/40 pt-2">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight">{testimonial.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </FadeIn>
    </section>
  );
}
