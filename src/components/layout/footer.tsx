"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data/site-data";
import * as LucideIcons from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const { Facebook, Instagram, Youtube, Mail, Phone, MapPin } = LucideIcons;

  return (
    <footer className="w-full bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
        <div className="pt-14 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-lg font-bold tracking-tight text-primary">
                Dental <span className="text-foreground/75">Theatre</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-[240px]">
              Premium dental care in Panipat, led by Dr. Parul Jangra — where every visit feels like a confidence-restoring performance.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <Link
                href={siteConfig.links.instagram}
                className="size-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="size-3.5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href={siteConfig.links.facebook}
                className="size-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Facebook className="size-3.5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href={siteConfig.links.youtube}
                className="size-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Youtube className="size-3.5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-foreground/60">
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
                  className="text-xs text-muted-foreground hover:text-primary transition-colors py-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-foreground/60">
              Services
            </h3>
            <nav className="flex flex-col gap-2">
              {siteConfig.services.slice(0, 5).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors py-0.5"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-foreground/60">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-3.5 text-primary shrink-0 mt-0.5" />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  {siteConfig.locations[0].address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="size-3.5 text-primary shrink-0" />
                <span className="text-xs text-muted-foreground">
                  {siteConfig.locations[0].phone}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="size-3.5 text-primary shrink-0" />
                <span className="text-xs text-muted-foreground">
                  contact@dentaltheatre.in
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-muted-foreground/70">
            © {new Date().getFullYear()} Dental Theatre. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[11px] text-muted-foreground/70 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[11px] text-muted-foreground/70 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
