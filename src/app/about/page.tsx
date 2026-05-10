"use client";

import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Activity,
  Hospital,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { title: "1L+", description: "Happy Patients Treated", icon: Users },
    { title: "12K+", description: "Complex Surgeries Completed", icon: Activity },
    { title: "2", description: "Premium Clinic Locations", icon: Hospital },
    { title: "19+", description: "Years Combined Experience", icon: Sparkles },
  ];

  const founders = [
    {
      name: "Dr. Parul Jangra",
      credentials: "BDS, M.I.D.A · Diploma in Oral Surgery",
      speciality: "Implantologist & Aligner Specialist",
      exp: "7+ Years Experience",
      href: "/dr-parul-jangra",
      bio: "Dr. Parul specialises in aesthetic transformations, dental implants, and clear aligner therapy. Her approach blends clinical precision with an eye for natural beauty — creating smiles that feel as good as they look.",
      accentColor: "from-sky-50 to-blue-50/40",
    },
    {
      name: "Dr. Bijender Duhan",
      credentials: "BDS, M.I.D.A · Diploma in Ortho & Oral Surgery",
      speciality: "Oral Surgeon & Implantologist",
      exp: "12+ Years Experience",
      href: "/dr-bijender-duhan",
      bio: "Dr. Bijender brings over a decade of expertise in oral and maxillofacial surgery, fracture management, and complex implantology. His surgical depth is the backbone of Dental Theatre's advanced care capability.",
      accentColor: "from-slate-50 to-zinc-50/40",
    },
  ];

  const values = [
    {
      icon: HeartHandshake,
      title: "Patient-First, Always",
      description:
        "Every treatment plan is built around your unique needs, comfort, and long-term oral health — not a generic checklist.",
    },
    {
      icon: Microscope,
      title: "Evidence-Based Precision",
      description:
        "From digital oral scans to Zirconia crowns, we employ the latest technology to deliver accurate, lasting results.",
    },
    {
      icon: ShieldCheck,
      title: "Transparent & Ethical Care",
      description:
        "No hidden costs, no unnecessary procedures. We believe in honest consultations and treatment plans you can trust.",
    },
    {
      icon: Sparkles,
      title: "Premium Aesthetic Standards",
      description:
        "We merge clinical precision with an aesthetic sensibility — so every smile we craft is as beautiful as it is functional.",
    },
  ];

  const highlights = [
    "Advanced Implant, Aligner & Smile Design Solutions",
    "State-of-the-Art Surgical & Digital Imaging Facilities",
    "Single-Sitting RCT & Laser Dental Procedures",
    "Zirconia, Emax & DMLS Crown Technology",
    "Facial Fracture & Oral Surgery Expertise",
    "Oral Cancer Screening & Preventive Dentistry",
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* ─── Page Hero ─── */}
      <section className="relative border-b border-border/40 bg-muted/20 py-16 sm:py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(213,239,255,0.85),transparent)]" />

        <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <FadeIn direction="up">
              <Badge className="w-fit px-3 py-1 text-[11px] tracking-wider uppercase font-semibold mb-5">
                About The Clinic
              </Badge>
              <h1 className="text-[2.5rem] font-bold leading-tight tracking-tight md:text-[3.25rem]">
                Welcome to{" "}
                <span className="text-primary">Dental Theatre</span>
              </h1>
              <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground sm:text-lg max-w-2xl mx-auto">
                More than just a dental clinic — Dental Theatre is a destination
                for premium, comprehensive oral care in Panipat. We combine
                advanced surgical expertise with a calm, modern environment so
                that every visit feels reassuring, not routine.
              </p>
              <div className="mt-8">
                <div className="h-px w-16 bg-primary/30 rounded-full mx-auto mb-7" />
                <p className="text-sm text-muted-foreground leading-relaxed sm:text-[15px] max-w-2xl">
                  Founded by two specialist clinicians with a shared vision,
                  Dental Theatre was built on the belief that every patient
                  deserves top-tier, specialized oral care — without having to
                  travel to a metro city. Together, our founders bring over{" "}
                  <strong className="text-foreground font-semibold">
                    19 years of combined expertise
                  </strong>{" "}
                  spanning Oral Surgery, Implantology, Orthodontics, Aligners,
                  and Advanced Aesthetics — all under one roof.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Meet Our Doctors ─── */}
      <section className="relative py-16 sm:py-24 border-b border-border/30">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        <div className="absolute top-0 left-1/4 h-[400px] w-[500px] rounded-full bg-sky-100/50 blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-12 text-center sm:mb-16">
            <FadeIn direction="up">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
                The Specialists
              </p>
              <h2 className="text-[1.85rem] font-bold tracking-tight md:text-[2.25rem]">
                Meet Our Doctors
              </h2>
              <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto sm:text-base">
                Two specialists. One shared commitment to clinical excellence
                and exceptional patient care.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-7 max-w-4xl mx-auto">
            {founders.map((founder, i) => (
              <FadeIn key={founder.name} direction="up" delay={i * 0.12}>
                <Link href={founder.href} className="block h-full group">
                  <div className={`relative flex flex-col h-full rounded-2xl border border-border/60 bg-gradient-to-br ${founder.accentColor} overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1`}>
                    {/* Top: photo placeholder */}
                    <div className="relative aspect-[16/9] w-full bg-muted/30 border-b border-border/40 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(68,107,158,0.05),transparent_60%)]" />
                      <span className="text-muted-foreground/30 font-medium text-xs uppercase tracking-widest z-10">
                        Photo Placeholder
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-6 sm:p-8">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                          {founder.name}
                        </h3>
                        <p className="text-primary font-semibold text-xs mt-1.5 leading-snug">
                          {founder.credentials}
                        </p>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          {founder.speciality} · {founder.exp}
                        </p>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {founder.bio}
                      </p>

                      <div className="mt-6 pt-5 border-t border-border/40 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground/60 font-medium">
                          Click to view full profile
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                          Read Profile <ArrowRight className="size-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        <div className="absolute -right-64 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-sky-100/60 blur-[90px] pointer-events-none" />
        <div className="absolute -left-64 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-[90px] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-12 text-center sm:mb-16">
            <FadeIn direction="up">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
                Our Impact
              </p>
              <h2 className="text-[1.85rem] font-bold tracking-tight md:text-[2.25rem]">
                A Legacy of Smiles
              </h2>
              <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto sm:text-base">
                Years of dedication to clinical excellence, reflected in the
                lives we have transformed — one smile at a time.
              </p>
            </FadeIn>
          </div>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.08}>
                <Card className="rounded-2xl border border-border/60 text-center shadow-sm transition-all hover:border-primary/25 hover:shadow-md">
                  <CardContent className="px-5 pt-8 pb-8">
                    <div className="size-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                      <stat.icon className="size-5" />
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      {stat.title}
                    </h3>
                    <p className="text-xs font-semibold text-muted-foreground mt-2 leading-snug">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Our Values ─── */}
      <section className="relative py-16 sm:py-24 bg-muted/20 border-y border-border/30">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="absolute top-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-50/80 blur-[80px] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="mb-12 text-center sm:mb-16">
            <FadeIn direction="up">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
                Our Principles
              </p>
              <h2 className="text-[1.85rem] font-bold tracking-tight md:text-[2.25rem]">
                What Drives Us Every Day
              </h2>
              <p className="mt-4 text-sm text-muted-foreground max-w-xl mx-auto sm:text-base">
                Our clinical philosophy is guided by values that put your
                wellbeing, trust, and long-term health at the centre of
                everything we do.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} direction="up" delay={i * 0.1}>
                <Card className="h-full rounded-2xl border border-border/60 shadow-sm hover:border-primary/25 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 sm:p-8 flex gap-5">
                    <div className="size-11 shrink-0 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center text-primary">
                      <v.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-foreground mb-2">
                        {v.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="bg-primary py-16 text-primary-foreground sm:py-24">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
            <FadeIn direction="right">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-white/50 mb-4">
                The Theatre Experience
              </p>
              <h2 className="mb-7 text-[2rem] font-bold leading-tight tracking-tight md:mb-10 md:text-4xl">
                Why Choose Dental Theatre?
              </h2>
              <div className="flex flex-col gap-5">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="size-5 text-white/80 shrink-0 mt-0.5" />
                    <span className="text-[15px] leading-snug opacity-90 sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-10 sm:mt-12">
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="font-semibold text-primary hover:bg-white/90 px-8 inline-flex items-center gap-2"
                  >
                    Book an Appointment
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/15 bg-white/5 shadow-2xl backdrop-blur-sm flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_50%)]" />
                <span className="text-white/40 text-sm font-medium tracking-widest uppercase relative z-10">
                  Clinic Interior · Coming Soon
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
