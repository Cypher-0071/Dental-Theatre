"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Maximize2, ArrowRight } from "lucide-react";

const categories = ["All", "Clinic", "Doctor at Work", "Procedures", "Patient Setups"];

const galleryImages = [
  { id: 1, category: "Clinic", title: "Modern Reception", placeholder: "Reception Area" },
  { id: 2, category: "Clinic", title: "Operation Theatre", placeholder: "Theatre Room" },
  { id: 3, category: "Doctor at Work", title: "Dr. Parul Consulting", placeholder: "Consultation" },
  { id: 4, category: "Procedures", title: "Advanced Laser Treatment", placeholder: "Laser Procedure" },
  { id: 5, category: "Patient Setups", title: "Comfortable Dental Chair", placeholder: "Patient Comfort" },
  { id: 6, category: "Procedures", title: "Digital X-Ray", placeholder: "Diagnostics" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Page hero */}
      <section className="py-14 lg:py-16 bg-muted/20 border-b border-border/40">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl text-center">
          <FadeIn direction="up">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
              Inside Dental Theatre
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Smile Gallery</h1>
            <p className="text-[15px] text-muted-foreground max-w-xl mx-auto leading-relaxed">
              A glimpse into our world of precision and care. Explore our facilities, procedures, and transformations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          {/* Category filters */}
          <FadeIn direction="up" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredImages.map((image, i) => (
              <FadeIn key={image.id} direction="up" delay={i * 0.06}>
                <Dialog>
                  <DialogTrigger
                    nativeButton={false}
                    render={
                      <div className="group relative overflow-hidden rounded-xl cursor-pointer bg-muted/30 border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 aspect-square transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-semibold uppercase tracking-widest text-xs text-center p-4">
                          {image.placeholder}
                        </div>
                        <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                          <Maximize2 className="size-8 mb-3 scale-75 group-hover:scale-100 transition-transform duration-300" />
                          <h3 className="text-base font-semibold text-center leading-snug">{image.title}</h3>
                          <p className="text-xs opacity-75 mt-1">{image.category}</p>
                        </div>
                      </div>
                    }
                  />
                  <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-transparent shadow-none">
                    <DialogTitle className="sr-only">{image.title}</DialogTitle>
                    <div className="aspect-video w-full bg-muted rounded-xl flex items-center justify-center relative overflow-hidden">
                      <div className="text-muted-foreground/30 font-semibold text-lg">{image.placeholder} · Full View</div>
                      <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-black/70 to-transparent text-white">
                        <h3 className="text-lg font-semibold">{image.title}</h3>
                        <p className="text-xs opacity-70 mt-0.5">{image.category}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 border-t border-border/40 bg-muted/10">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <FadeIn direction="right" className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                See the Theatre in Action
              </h2>
              <p className="text-[15px] text-muted-foreground max-w-md leading-relaxed">
                Follow us on Instagram for daily updates, patient transformations, and a peek behind the scenes.
              </p>
            </FadeIn>
            <FadeIn direction="left">
              <Button
                nativeButton={false}
                size="lg"
                variant="outline"
                className="h-11 px-8 text-sm font-semibold rounded-xl hover:border-primary/50"
                render={<a href="https://instagram.com/dentaltheatre" target="_blank" />}
              >
                Follow @dentaltheatre
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
