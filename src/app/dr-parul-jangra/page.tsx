import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, FileCheck, ScanLine, Smile, Sparkles, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Dr. Parul Jangra — Implantologist & Aligner Specialist | Dental Theatre, Panipat",
  description:
    "Meet Dr. Parul Jangra, BDS (M.I.D.A), Diploma in Oral Surgery. Implantologist and Aligner Specialist with 7+ years of clinical excellence at Dental Theatre, Panipat. Expert in dental implants, smile design, and clear aligners.",
};

const specializations = [
  {
    icon: ScanLine,
    title: "Dental Implants",
    description:
      "UV and Non-UV implant systems for permanent tooth replacement — engineered for longevity, designed to look completely natural.",
  },
  {
    icon: Smile,
    title: "Clear Aligners & Braces",
    description:
      "Discreet orthodontic correction using the latest aligner technology. Straighter teeth, minimal disruption to your daily life.",
  },
  {
    icon: Sparkles,
    title: "Smile Design & Veneers",
    description:
      "Composite and porcelain veneers, teeth whitening, and smile remodelling tailored to your natural facial features.",
  },
  {
    icon: ShieldCheck,
    title: "Oral Surgery",
    description:
      "Surgical extractions, apicoectomy, and gum surgery — complex procedures performed with precision and minimal discomfort.",
  },
];

export default function DrParulPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-br from-sky-50/60 via-white to-white">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#bfdbfe_1px,transparent_1px)] [background-size:28px_28px] opacity-50" />
        <div className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-sky-100/60 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 right-0 h-[500px] w-[500px] rounded-full bg-blue-50/80 blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="right">
              <Badge variant="outline" className="mb-5 text-primary bg-primary/5 border-primary/20 px-3 py-1 text-xs font-semibold tracking-widest uppercase">
                7+ Years of Clinical Excellence
              </Badge>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
                Dr. Parul<br /><span className="text-primary">Jangra</span>
              </h1>
              <p className="text-xl font-medium text-muted-foreground mb-6">
                BDS (M.I.D.A) · Implantologist · Aligner Specialist
              </p>
              <div className="h-px w-12 bg-primary/30 rounded-full mb-8" />
              <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                Dr. Parul Jangra brings a rare blend of surgical precision and an eye for natural aesthetics. Trained in oral surgery and implantology, she has spent over seven years transforming smiles across Panipat — from single-tooth implants to complete smile makeovers — always with the belief that confidence begins at the corners of your mouth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["BDS (M.I.D.A)", "Diploma in Oral Surgery", "Reg. no. 009857"].map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/70 bg-white border border-border/60 rounded-full px-3 py-1.5 shadow-sm">
                    <FileCheck className="size-3 text-primary" />
                    {c}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-primary/10 to-sky-200/40 blur-sm" />
                <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto overflow-hidden rounded-[28px] bg-white border border-border/50 shadow-2xl flex flex-col items-center justify-center gap-3">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(186,230,255,0.3),transparent_60%)]" />
                  <GraduationCap className="size-10 text-primary/20" />
                  <span className="text-muted-foreground/40 font-medium text-sm uppercase tracking-widest">Photo Placeholder</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative bg-primary py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_50%,rgba(255,255,255,0.06),transparent)]" />
        <div className="container relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-10 text-center">
          <FadeIn direction="up">
            <span className="block text-8xl text-white/10 font-serif leading-none mb-4 select-none">"</span>
            <blockquote className="text-xl sm:text-2xl font-light text-white/90 italic leading-relaxed -mt-10">
              Dentistry, at its finest, is the art of giving people the courage to smile without hesitation. Every procedure I perform is a commitment to that goal.
            </blockquote>
            <p className="mt-6 text-white/50 text-sm font-semibold tracking-widest uppercase">— Dr. Parul Jangra</p>
          </FadeIn>
        </div>
      </section>

      {/* Specializations */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        <div className="container relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <FadeIn direction="up" className="text-center mb-14">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">Areas of Focus</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What Dr. Parul Specialises In</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              Her clinical approach combines advanced techniques with a patient-centric sensibility — results that look and feel effortlessly natural.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specializations.map((s, i) => (
              <FadeIn key={s.title} direction="up" delay={i * 0.1}>
                <Card className="h-full rounded-2xl border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-7 flex gap-5 items-start">
                    <div className="shrink-0 size-12 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center text-primary">
                      <s.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-sky-50/40 to-white overflow-hidden">
        <div className="absolute -right-48 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-sky-100/60 blur-[100px] pointer-events-none" />
        <div className="container relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="right">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">Her Approach</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Precision Meets Patient-Centred Care</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
                <p>
                  Dr. Parul believes the best dental outcomes begin with listening carefully — understanding not just the clinical picture, but the patient's lifestyle, anxieties, and aspirations.
                </p>
                <p>
                  Whether it's a subtle veneer correction or a full-arch implant restoration, she approaches every case with meticulous attention. Her use of digital oral scanners ensures accurate impressions, and her preference for single-sitting RCT where appropriate means fewer visits and faster recovery.
                </p>
                <p>
                  Patients consistently describe her consultations as thorough and reassuring — she takes time to walk you through every step, every option, so you're never left with unanswered questions.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.15}>
              <div className="space-y-4">
                {[
                  { label: "Digital-First Workflows", detail: "Oral scanner impressions for higher accuracy and patient comfort." },
                  { label: "Aligner-Led Orthodontics", detail: "Advanced clear aligner protocols for predictable, aesthetic outcomes." },
                  { label: "Minimally Invasive Surgery", detail: "Conservative approach — preserving healthy tissue wherever possible." },
                  { label: "Continuous Learning", detail: "Stays current with the latest in global implantology and aesthetics." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-white border border-border/50 shadow-sm">
                    <div className="mt-1 size-2 rounded-full bg-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="border-t border-border/40 bg-muted/30 py-10">
        <div className="container mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border/50 text-center">
            {[
              { label: "Degree", value: "BDS (M.I.D.A)" },
              { label: "Post-Graduate", value: "Diploma, Oral Surgery" },
              { label: "Registration", value: "No. 009857" },
              { label: "Contact", value: "pearljangra160794@gmail.com" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1 px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                <p className="text-sm font-bold text-foreground text-center break-all">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
