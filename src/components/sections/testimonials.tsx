"use client";

import { Marquee } from "@/components/ui-custom/marquee";
import { FadeIn } from "@/components/ui-custom/animations";
import { testimonials } from "@/lib/data/site-data";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-24 overflow-hidden bg-muted/10">
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn direction="up">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
              Patient Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What Our Patients Say
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              We take pride in delivering exceptional dental care. Here are some experiences shared by our wonderful patients.
            </p>
          </FadeIn>
        </div>
      </div>

      <FadeIn direction="up" delay={0.2}>
        <Marquee speed={45} className="py-3">
          {testimonials.concat(testimonials).map((testimonial, index) => {
            const initials = testimonial.name
              .split(" ")
              .map((n: string) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();
            return (
              <div
                key={index}
                className="w-[320px] shrink-0 mx-3 bg-background border border-border/60 rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 p-6 flex flex-col gap-4"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "size-3.5",
                        i < testimonial.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-muted-foreground/30"
                      )}
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                  <div className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{testimonial.location}</p>
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
