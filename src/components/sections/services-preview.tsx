"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { siteConfig } from "@/lib/data/site-data";
import { FadeIn } from "@/components/ui-custom/animations";
import { Button } from "@/components/ui/button";

type Service = (typeof siteConfig.services)[number];

const ServiceCard = ({ service }: { service: Service }) => {
  const iconMap = LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>;
  const Icon = (iconMap[service.icon] as LucideIcons.LucideIcon) || LucideIcons.Activity;

  return (
    <div className="mx-2 flex-[0_0_82%] min-w-0 sm:mx-4 sm:flex-[0_0_350px] md:flex-[0_0_380px]">
      <Link href={`/services#${service.slug}`} className="block h-full outline-none">
        <div className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[24px] border border-white/60 bg-white/70 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/95 hover:shadow-[0_20px_60px_-15px_rgba(11,56,102,0.15)] sm:rounded-[28px] sm:p-6">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(238,246,252,0.5)_0%,rgba(255,255,255,0)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
            <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/10 bg-primary/5 text-primary shadow-sm transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
              <Icon className="size-5" />
            </div>
            <div className="flex max-w-[9rem] items-center gap-1.5 truncate rounded-full border border-primary/10 bg-primary/5 px-2.5 py-1 text-[10px] font-bold tracking-wider text-primary/80 uppercase">
              {service.category}
            </div>
          </div>

          <h3 className="mb-2 text-[1.05rem] font-bold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-lg">
            {service.title}
          </h3>
          
          <p className="line-clamp-3 flex-grow text-[13px] leading-relaxed text-muted-foreground/90 sm:line-clamp-2">
            {service.description}
          </p>

          <div className="mt-5 flex items-center text-xs font-semibold text-primary/80 transition-colors group-hover:text-primary sm:mt-6">
            Explore treatment
            <ArrowRight className="ml-1.5 size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export function ServicesPreview() {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
      }),
    ]
  );

  const [emblaRefReverse] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        direction: "backward",
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
      }),
    ]
  );

  const firstRow = siteConfig.services.slice(0, Math.ceil(siteConfig.services.length / 2));
  const secondRow = siteConfig.services.slice(Math.ceil(siteConfig.services.length / 2));

  return (
    <section className="relative overflow-hidden py-1 sm:py-2 lg:py-3">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[#f8fbff]" />
      <div className="absolute -top-[20%] left-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,152,212,0.08)_0%,transparent_70%)] blur-[80px]" />
      <div className="absolute -bottom-[20%] right-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(20,72,128,0.06)_0%,transparent_70%)] blur-[80px]" />

      <div className="container mx-auto mb-9 max-w-7xl px-5 text-center sm:mb-12 sm:px-6 lg:mb-16 lg:px-10">
        <FadeIn direction="up">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/60 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.2em] text-primary shadow-sm backdrop-blur-md uppercase sm:mb-5 sm:px-4 sm:text-[11px] sm:tracking-[0.25em]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
            </span>
            Comprehensive Care
          </div>
          <h2 className="mb-4 font-heading text-[2rem] font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:mb-6 lg:text-6xl">
            A Symphony of <span className="text-primary">Services</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[14px] leading-[1.75] text-muted-foreground sm:text-[15px] md:text-base">
            From precision implants to theatrical smile makeovers, our clinic offers a full spectrum of advanced dental treatments designed around your comfort and aesthetic goals.
          </p>
        </FadeIn>
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        {/* Left/Right Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#f8fbff] to-transparent sm:w-24 md:w-48"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#f8fbff] to-transparent sm:w-24 md:w-48"></div>

        {/* Embla Carousel - Row 1 */}
        <div className="w-full max-w-[100vw] overflow-hidden pb-3 pt-1 outline-none sm:pb-4 sm:pt-2" ref={emblaRef}>
          <div className="flex touch-pan-y [backface-visibility:hidden]">
            {firstRow.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>

        {/* Embla Carousel - Row 2 */}
        <div className="w-full max-w-[100vw] overflow-hidden pb-5 pt-3 outline-none sm:pb-6 sm:pt-4" ref={emblaRefReverse}>
          <div className="flex touch-pan-y [backface-visibility:hidden]">
            {secondRow.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 flex max-w-7xl justify-center px-5 sm:mt-10 sm:px-6 lg:mt-12 lg:px-10">
        <FadeIn direction="up">
          <Button
            nativeButton={false}
            size="lg"
            className="group h-12 w-full rounded-xl px-7 text-sm font-semibold shadow-md shadow-primary/20 sm:h-14 sm:w-auto sm:px-8 sm:text-[15px]"
            render={<Link href="/services" />}
          >
            View Full Treatment Menu
            <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
