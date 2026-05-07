"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/data/site-data";
import { FadeIn } from "@/components/ui-custom/animations";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(180deg,rgba(14,46,91,0.08),transparent)]" />
        <div className="absolute -top-32 right-[-7rem] h-[600px] w-[600px] rounded-full bg-primary/12 blur-[120px]" />
        <div className="absolute bottom-0 left-[-6rem] h-[420px] w-[420px] rounded-full bg-sky-200/40 blur-[120px]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(19,74,123,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(19,74,123,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <FadeIn direction="up">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.28em] text-primary uppercase shadow-sm backdrop-blur-sm">
                <ShieldCheck className="size-3" />
                <span>Most Trusted Dental Clinic in Panipat</span>
              </div>
              <h1 className="mt-6 max-w-[11ch] font-heading text-5xl leading-[0.95] text-foreground md:text-[4.5rem] lg:text-[5.35rem]">
                A more refined smile starts here.
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {["Smile Design", "Implants", "Invisible Aligners"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/70 bg-white/75 px-3 py-1 text-xs text-foreground/70 shadow-sm backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.18}>
              <p className="max-w-[560px] text-[15px] leading-relaxed text-muted-foreground md:text-base">
                Dental Theatre combines advanced clinical care with a calmer, more polished
                patient experience, so every consultation, treatment plan, and smile makeover
                feels precise, personal, and confidence-building.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.28}>
              <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[28px] border border-white/70 bg-white/78 p-5 shadow-[0_20px_60px_-40px_rgba(7,33,77,0.55)] backdrop-blur-md">
                  <p className="text-[11px] font-semibold tracking-[0.28em] text-primary/80 uppercase">
                    Patient Promise
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Detailed consultations, aesthetic precision, and a treatment environment
                    that feels premium without becoming intimidating.
                  </p>
                </div>
                <div className="rounded-[28px] border border-primary/10 bg-[linear-gradient(160deg,rgba(17,53,98,0.96),rgba(40,111,158,0.92))] p-5 text-primary-foreground shadow-[0_22px_70px_-38px_rgba(13,48,101,0.8)]">
                  <p className="text-[11px] font-semibold tracking-[0.28em] text-white/60 uppercase">
                    Reputation
                  </p>
                  <p className="mt-3 text-3xl font-semibold leading-none">4.9/5</p>
                  <p className="mt-2 text-sm text-white/72">
                    Trusted for gentle care, modern treatment planning, and premium results.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.34}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  nativeButton={false}
                  size="lg"
                  className="h-12 rounded-xl px-7 text-sm font-semibold shadow-md shadow-primary/20"
                  render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
                >
                  <MessageSquare className="mr-2 size-4" />
                  Book Appointment
                </Button>
                <Button
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-xl border-border/70 bg-white/65 px-7 text-sm backdrop-blur-sm hover:bg-white"
                  render={<Link href="/services" />}
                >
                  Explore Services
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.45}>
              <div className="mt-2 flex items-start gap-6 border-t border-border/50 pt-6">
                <div>
                  <p className="text-2xl font-bold tracking-tight">10k+</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Happy Patients</p>
                </div>
                <div className="h-10 w-px self-center bg-border" />
                <div>
                  <p className="text-2xl font-bold tracking-tight">12+</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div className="h-10 w-px self-center bg-border" />
                <div>
                  <p className="text-2xl font-bold tracking-tight">3</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Clinic Locations</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={0.2} className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-[linear-gradient(150deg,#f5fbff_0%,#dff1fa_26%,#2a6f9a_100%)] shadow-[0_35px_120px_-55px_rgba(8,37,88,0.65)] ring-1 ring-primary/8">
              <div className="grid min-h-[620px] grid-cols-[1.1fr_0.9fr]">
                <div className="relative p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.75),transparent_35%)]" />
                  <div className="relative flex h-full flex-col justify-between rounded-[28px] border border-white/50 bg-white/40 p-6 backdrop-blur-sm">
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.3em] text-primary uppercase">
                        Signature Care
                      </p>
                      <div className="mt-5 space-y-3">
                        {[
                          "Smile consultation and treatment mapping",
                          "Cosmetic and restorative dentistry",
                          "Modern sterilization and patient comfort",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/70 bg-white/75 px-4 py-3 text-sm text-foreground/80 shadow-sm"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[24px] bg-[#0d2b52] px-5 py-5 text-white shadow-lg">
                      <p className="text-[11px] font-semibold tracking-[0.28em] text-white/55 uppercase">
                        Designed For Confidence
                      </p>
                      <p className="mt-3 text-xl font-semibold leading-tight">
                        A cleaner, brighter visual language for a premium clinic brand.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden border-l border-white/35">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,22,48,0.05),rgba(6,22,48,0.75))]" />
                  <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:28px_28px]" />
                  <div className="absolute left-6 right-6 top-6 rounded-[26px] border border-white/20 bg-white/12 p-5 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold tracking-[0.28em] text-white/60 uppercase">
                      Dr. Parul Jangra
                    </p>
                    <p className="mt-3 font-heading text-3xl leading-none text-white">
                      Clinical precision with a gentler touch.
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="rounded-[28px] border border-white/20 bg-black/28 p-6 backdrop-blur-md">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex size-11 items-center justify-center rounded-2xl bg-white/12">
                          <Users className="size-5 text-white" />
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-white">Dental Theatre</p>
                          <p className="text-xs text-white/65">Smile design, implants, aligners</p>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-white/72">
                        Placeholder art now carries a more premium editorial feel until real clinic
                        photography is added.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-5 right-6 rounded-[24px] border border-white/70 bg-white/92 px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-amber-50 p-2">
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-none">4.9 / 5.0</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">Google Reviews</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-[24px] bg-primary px-4 py-3 text-primary-foreground shadow-xl"
              >
                <PhoneCall className="size-4 shrink-0" />
                <div>
                  <p className="text-[10px] leading-none opacity-75">Available</p>
                  <p className="mt-0.5 text-sm font-semibold">7 Days a Week</p>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
