"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeIn, StaggerContainer } from "@/components/ui-custom/animations";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Maximize2, ArrowRight } from "lucide-react";

const categories = ["All", "Smile Gallery", "Doctor at Work", "Before & After"];

const galleryImages = [
  // Doctor at Work (Prioritized)
  { id: 27, category: "Doctor at Work", title: "Clinical Excellence", src: "/img_7.jpeg" },
  { id: 22, category: "Doctor at Work", title: "Clinical Excellence", src: "/img_1.jpeg" },
  { id: 23, category: "Doctor at Work", title: "Clinical Excellence", src: "/img_2.jpeg" },
  { id: 24, category: "Doctor at Work", title: "Clinical Excellence", src: "/img-3.jpeg" },
  { id: 25, category: "Doctor at Work", title: "Clinical Excellence", src: "/img_4.jpeg" },
  { id: 26, category: "Doctor at Work", title: "Clinical Excellence", src: "/img_6.jpeg" },
  { id: 28, category: "Doctor at Work", title: "Clinical Excellence", src: "/img_8.jpeg" },

  // Smile Gallery
  { id: 1, category: "Smile Gallery", title: "Smile Transformation", src: "/smile_1.jpeg" },
  { id: 2, category: "Smile Gallery", title: "Smile Transformation", src: "/smile_2.jpeg" },
  { id: 3, category: "Smile Gallery", title: "Smile Transformation", src: "/smile_3.jpeg" },
  { id: 4, category: "Smile Gallery", title: "Smile Transformation", src: "/smile_4.jpeg" },
  { id: 5, category: "Smile Gallery", title: "Smile Transformation", src: "/smile_5.jpeg" },
  { id: 6, category: "Smile Gallery", title: "Smile Transformation", src: "/smile_6.jpeg" },
  { id: 7, category: "Smile Gallery", title: "Smile Transformation", src: "/smile_7.jpeg" },
  { id: 8, category: "Smile Gallery", title: "Smile Transformation", src: "/smile_8.jpeg" },
  { id: 9, category: "Smile Gallery", title: "Smile Transformation", src: "/smile_9.jpeg" },
  { id: 10, category: "Smile Gallery", title: "Smile Transformation", src: "/smile_10.jpeg" },
  { id: 11, category: "Smile Gallery", title: "Smile Transformation", src: "/smile_11.jpeg" },
  { id: 12, category: "Smile Gallery", title: "Smile Transformation", src: "/smile_12.jpeg" },
  
  // Before & After
  { id: 13, category: "Before & After", title: "Treatment Result", src: "/b&a_1.jpeg" },
  { id: 14, category: "Before & After", title: "Treatment Result", src: "/b&a_2.jpeg" },
  { id: 15, category: "Before & After", title: "Treatment Result", src: "/b&a_3.jpeg" },
  { id: 16, category: "Before & After", title: "Treatment Result", src: "/b&a_4.jpeg" },
  { id: 17, category: "Before & After", title: "Treatment Result", src: "/b&a_5.jpeg" },
  { id: 18, category: "Before & After", title: "Treatment Result", src: "/b&a_6.jpeg" },
  { id: 19, category: "Before & After", title: "Treatment Result", src: "/b&a_7.jpeg" },
  { id: 20, category: "Before & After", title: "Treatment Result", src: "/b&a_8.png" },
  { id: 21, category: "Before & After", title: "Treatment Result", src: "/b&a_9.jpeg" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="flex w-full flex-col">
      {/* Page hero */}
      <section className="border-b border-border/40 bg-muted/20 pt-10 pb-5 sm:py-14 lg:py-16">
        <div className="container mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-10">
          <FadeIn direction="up">
            <p className="text-[11px] font-semibold tracking-widest uppercase text-primary mb-3">
              Inside Dental Theatre
            </p>
            <h1 className="mb-4 text-[2rem] font-bold tracking-tight md:text-5xl">Gallery</h1>
            <p className="mx-auto max-w-xl text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
              A glimpse into our world of precision and care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="pt-2 pb-12 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          {/* Category filters */}
          <FadeIn direction="up" delay={0.1}>
            <div 
              className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-2.5 sm:mx-0 sm:mb-10 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* For Webkit browsers (Chrome, Safari, Edge) */}
              <style dangerouslySetInnerHTML={{ __html: `
                .overflow-x-auto::-webkit-scrollbar {
                  display: none;
                }
              ` }} />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
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

          <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {filteredImages.map((image, i) => (
              <FadeIn key={image.id} direction="up" delay={i * 0.04}>
                <Dialog>
                  <DialogTrigger
                    nativeButton={false}
                    render={
                      <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-[20px] border border-border/50 bg-muted/30 shadow-sm transition-all duration-500 hover:border-primary/20 hover:shadow-xl sm:rounded-xl">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                          <Maximize2 className="size-6 text-white mb-2" />
                          <h3 className="text-white text-sm font-semibold text-center">{image.title}</h3>
                          <p className="text-white/70 text-xs mt-1">{image.category}</p>
                        </div>
                      </div>
                    }
                  />
                  <DialogContent className="max-w-[95vw] md:max-w-7xl p-0 overflow-hidden border-none bg-black/95 shadow-2xl">
                    <DialogTitle className="sr-only">{image.title}</DialogTitle>
                    <div className="relative h-[80vh] w-full flex items-center justify-center">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-contain"
                        priority
                      />
                      <div className="absolute bottom-0 left-0 right-0 px-6 py-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
                        <div className="container mx-auto max-w-4xl">
                          <h3 className="text-xl md:text-2xl font-bold tracking-tight">{image.title}</h3>
                          <p className="text-sm md:text-base font-medium opacity-80 mt-1">{image.category}</p>
                        </div>
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
      <section className="border-t border-border/40 bg-muted/10 py-12 sm:py-14">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-8">
            <FadeIn direction="right" className="text-center lg:text-left">
              <h2 className="mb-3 text-[1.65rem] font-bold tracking-tight md:text-3xl">
                See the Theatre in Action
              </h2>
              <p className="max-w-md text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                Follow us on Instagram for daily updates, patient transformations, and a peek behind the scenes.
              </p>
            </FadeIn>
            <FadeIn direction="left">
              <Button
                nativeButton={false}
                size="lg"
                variant="outline"
                className="h-11 w-full rounded-xl px-8 text-sm font-semibold hover:border-primary/50 sm:w-auto"
                render={<a href="https://www.instagram.com/dentaltheatrepanipat?igsh=MWYxY3p3Y2dobTNzaA%3D%3D&utm_source=qr" target="_blank" />}
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
