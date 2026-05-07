"use client";

import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { siteConfig } from "@/lib/data/site-data";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const { Facebook, Instagram, Youtube, Mail, Phone, MapPin } = LucideIcons;

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#081a36] text-white">
      <div className="absolute inset-0">
        <div className="absolute left-[-6rem] top-0 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute bottom-0 right-[-5rem] h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 pt-14 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="font-heading text-3xl leading-none text-white">
                Dental <span className="text-sky-200">Theatre</span>
              </span>
            </Link>
            <p className="max-w-[240px] text-xs leading-relaxed text-white/68">
              Premium dental care in Panipat, led by Dr. Parul Jangra, where every visit feels
              like a confidence-restoring performance.
            </p>
            <div className="mt-1 flex items-center gap-3">
              <Link
                href={siteConfig.links.instagram}
                className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/8 text-white/70 transition-colors hover:bg-white/14 hover:text-white"
              >
                <Instagram className="size-3.5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href={siteConfig.links.facebook}
                className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/8 text-white/70 transition-colors hover:bg-white/14 hover:text-white"
              >
                <Facebook className="size-3.5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href={siteConfig.links.youtube}
                className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/8 text-white/70 transition-colors hover:bg-white/14 hover:text-white"
              >
                <Youtube className="size-3.5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-widest text-white/55 uppercase">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { label: "About Dr. Parul", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Smile Gallery", href: "/gallery" },
                { label: "Patient Stories", href: "/testimonials" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-0.5 text-xs text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-widest text-white/55 uppercase">
              Services
            </h3>
            <nav className="flex flex-col gap-2">
              {siteConfig.services.slice(0, 5).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="py-0.5 text-xs text-white/70 transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-widest text-white/55 uppercase">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-sky-200" />
                <span className="text-xs leading-relaxed text-white/72">
                  {siteConfig.locations[0].address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="size-3.5 shrink-0 text-sky-200" />
                <span className="text-xs text-white/72">{siteConfig.locations[0].phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="size-3.5 shrink-0 text-sky-200" />
                <span className="text-xs text-white/72">contact@dentaltheatre.in</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 py-6 md:flex-row">
          <p className="text-[11px] text-white/45">
            © {new Date().getFullYear()} Dental Theatre. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[11px] text-white/45 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[11px] text-white/45 transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
