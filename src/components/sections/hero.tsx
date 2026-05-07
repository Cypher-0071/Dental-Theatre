"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui-custom/animations";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site-data";
import { MessageSquare, ArrowRight, ShieldCheck, Star, Users, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
      {/* Soft ambient glow backgrounds */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/8 text-primary text-[11px] font-semibold tracking-widest uppercase border border-primary/15 w-fit">
                <ShieldCheck className="size-3" />
                <span>Most Trusted Dental Clinic in Panipat</span>
              </div>
              <h1 className="mt-5 text-4xl md:text-[2.75rem] lg:text-5xl font-bold tracking-tight leading-[1.15] text-foreground">
                Where Science Meets<br className="hidden md:block" /> the{" "}
                <span className="text-primary underline decoration-primary/30 decoration-wavy underline-offset-4">
                  Art of Smiles.
                </span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[480px]">
                Experience world-class dental care at Dental Theatre. Led by Dr. Parul Jangra, we combine advanced technology with a gentle touch to give you the smile you deserve.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  nativeButton={false}
                  size="lg"
                  className="h-12 px-7 text-sm font-semibold shadow-md shadow-primary/20 rounded-xl"
                  render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
                >
                  <MessageSquare className="mr-2 size-4" />
                  Book Appointment
                </Button>
                <Button
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="h-12 px-7 text-sm rounded-xl hover:bg-muted/60"
                  render={<Link href="/services" />}
                >
                  Explore Services
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.45}>
              <div className="flex items-start gap-6 pt-6 border-t border-border/50 mt-2">
                <div>
                  <p className="text-2xl font-bold tracking-tight">10k+</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Happy Patients</p>
                </div>
                <div className="w-px h-10 bg-border self-center" />
                <div>
                  <p className="text-2xl font-bold tracking-tight">12+</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Years Experience</p>
                </div>
                <div className="w-px h-10 bg-border self-center" />
                <div>
                  <p className="text-2xl font-bold tracking-tight">3</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Clinic Locations</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Image placeholder */}
          <FadeIn direction="left" delay={0.2} className="relative hidden lg:block">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 ring-1 ring-border/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-sky-300/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="size-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                  <Users className="size-8 text-white/80" />
                </div>
                <p className="text-white/60 text-xs tracking-widest uppercase mt-2">Photo Coming Soon</p>
              </div>
              {/* Bottom overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-6 py-5">
                <p className="text-white font-semibold text-lg leading-tight">Dr. Parul Jangra</p>
                <p className="text-white/65 text-xs mt-1 font-light">BDS, MDS · Oral & Dental Surgeon</p>
              </div>
            </div>

            {/* Top-right floating badge */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white dark:bg-card px-4 py-3 rounded-2xl shadow-xl border border-border flex items-center gap-3"
            >
              <div className="bg-yellow-50 p-2 rounded-xl">
                <Star className="size-4 text-yellow-500 fill-yellow-500" />
              </div>
              <div>
                <p className="font-bold text-sm leading-none">4.9 / 5.0</p>
                <p className="text-[11px] text-muted-foreground mt-1">Google Reviews</p>
              </div>
            </motion.div>

            {/* Bottom-left floating badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <PhoneCall className="size-4 shrink-0" />
              <div>
                <p className="text-[10px] opacity-75 leading-none">Available</p>
                <p className="font-semibold text-sm mt-0.5">7 Days a Week</p>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
