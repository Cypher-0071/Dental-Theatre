"use client";

import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { siteConfig } from "@/lib/data/site-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, ExternalLink, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page hero */}
      <section className="py-14 lg:py-16 bg-muted/20 border-b border-border/40">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl text-center">
          <FadeIn direction="up">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
              Three Locations · Panipat
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
            <p className="text-[15px] text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Visit any of our three modern clinics. We're here to provide you with the best dental care at your convenience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Location cards */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {siteConfig.locations.map((loc, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <Card className="h-full border border-border/60 shadow-sm hover:shadow-md hover:border-primary/20 transition-all rounded-xl overflow-hidden">
                  <CardHeader className="bg-primary text-primary-foreground px-6 py-5 rounded-t-xl">
                    <CardTitle className="text-base font-semibold">{loc.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 py-6 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="size-8 rounded-lg bg-primary/8 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MapPin className="size-3.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Address</p>
                        <p className="text-sm leading-relaxed text-foreground">{loc.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="size-8 rounded-lg bg-primary/8 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Phone className="size-3.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Phone</p>
                        <p className="text-sm text-foreground">{loc.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="size-8 rounded-lg bg-primary/8 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Clock className="size-3.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Hours</p>
                        <p className="text-sm text-foreground">{loc.hours}</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-border/50 flex flex-col gap-2 mt-1">
                      <Button
                        nativeButton={false}
                        className="w-full h-10 text-sm rounded-lg"
                        render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
                      >
                        <MessageSquare className="mr-2 size-3.5" />
                        Book at this Location
                      </Button>
                      <Button
                        nativeButton={false}
                        variant="outline"
                        className="w-full h-10 text-sm rounded-lg hover:border-primary/40"
                        render={<a href={loc.mapUrl} target="_blank" />}
                      >
                        <ExternalLink className="mr-2 size-3.5" />
                        Get Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-6 pb-16">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          <FadeIn direction="up">
            <div className="w-full aspect-[21/7] bg-muted/30 rounded-2xl border border-border/50 overflow-hidden relative flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-muted-foreground/40">
                <MapPin className="size-12" />
                <span className="text-sm tracking-widest uppercase font-medium">Interactive Map · Coming Soon</span>
              </div>
              <div className="absolute top-1/3 left-1/3 size-4 bg-primary rounded-full animate-ping opacity-60" />
              <div className="absolute top-1/2 left-1/2 size-4 bg-primary rounded-full animate-ping opacity-60" style={{ animationDelay: "0.7s" }} />
              <div className="absolute top-1/4 left-2/3 size-4 bg-primary rounded-full animate-ping opacity-60" style={{ animationDelay: "1.4s" }} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* General inquiry */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="right">
              <p className="text-[11px] font-semibold tracking-widest uppercase text-white/55 mb-4">
                General Inquiries
              </p>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-5 leading-tight">
                Have a Question?
              </h2>
              <p className="text-[15px] opacity-75 mb-7 leading-relaxed max-w-md">
                Feel free to reach out via email or phone. Our team will get back to you as soon as possible.
              </p>
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-3">
                  <Mail className="size-4 opacity-70" />
                  <span className="text-[15px] opacity-85">contact@dentaltheatre.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="size-4 opacity-70" />
                  <span className="text-[15px] opacity-85">+91 98765 43210</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="bg-white/8 backdrop-blur-sm rounded-2xl border border-white/15 p-8">
                <h3 className="text-lg font-semibold mb-3">Quick Connect</h3>
                <p className="text-sm opacity-75 mb-6 leading-relaxed">
                  The fastest way to reach us is via WhatsApp. Click below to start a chat with our reception team.
                </p>
                <Button
                  nativeButton={false}
                  size="lg"
                  variant="secondary"
                  className="h-12 w-full text-sm font-semibold rounded-xl bg-white text-primary hover:bg-white/90"
                  render={<Link href={siteConfig.links.whatsapp} target="_blank" />}
                >
                  <MessageSquare className="mr-2 size-4" />
                  Chat with Us on WhatsApp
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
