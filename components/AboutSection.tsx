'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const treatmentSlides = [
  {
    id: 'laser-artistry',
    caption: 'Laser artistry session',
    detail: 'Hybrid resurfacing mapped to facial contours',
    src: '/treatment-laser.svg',
  },
  {
    id: 'cellular-regen',
    caption: 'Cellular regeneration lab',
    detail: 'PRP boosters blended with light therapy',
    src: '/treatment-cellular.svg',
  },
  {
    id: 'scalp-ritual',
    caption: 'Scalp ritual suite',
    detail: 'Detox massage paired with growth factors',
    src: '/treatment-scalp.svg',
  },
];

const careHighlights = [
  'Board-certified trichology and aesthetic dermatology under one roof',
  'Evidence-led protocols complemented with hormonal and nutritional profiling',
  'Concierge follow-ups with digital skin journals for measurable progress',
  'Private therapy pods designed for sensory calm and post-care recovery',
];

export default function AboutSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % treatmentSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = treatmentSlides[activeSlide];

  return (
    <section className="bg-[#F5FCFA] w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12 ">
      <div className="mx-auto max-w-6xl space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#83C5BE]">About Dermacharm</p>
          <h2 className="mt-2 xs:mt-3 sm:mt-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A3D45]">Where medical precision meets sensorial calm</h2>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#2A3D45]/70 mx-auto max-w-3xl leading-relaxed">
            Led by Dr. Aanya Rishikesh, Dermacharm Aesthetics brings together regenerative dermatology, immersive spa
            design, and measurable outcomes tailored to each complexion.
          </p>
        </div>

        <div className="grid items-center gap-6 xs:gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
          <div className="space-y-3 xs:space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div>
              <p className="text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-[#83C5BE]">Medical Director</p>
              <h3 className="mt-1 xs:mt-2 sm:mt-3 text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-[#2A3D45]">Dr. Aanya Rishikesh, MD</h3>
              <p className="mt-1.5 xs:mt-2 sm:mt-2 text-xs xs:text-sm sm:text-base text-[#2A3D45]/70 leading-relaxed">
                Harvard-trained dermatologist, laser medicine fellow, and regenerative aesthetics researcher. Known for
                architecting layered treatment plans that harmonize clinical technology with holistic rituals for long-term
                cellular balance.
              </p>
            </div>
            <div className="grid gap-2 xs:gap-3 sm:gap-4 grid-cols-2">
              <div className="rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#83C5BE]/30 bg-white px-3 xs:px-4 sm:px-5 py-3 xs:py-4 sm:py-6 shadow-lg shadow-[#E9F5F3]">
                <p className="text-xl xs:text-2xl sm:text-3xl font-semibold text-[#2A3D45]">18+</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#2A3D45]/60 mt-1">Years of expertise</p>
              </div>
              <div className="rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#83C5BE]/30 bg-white px-3 xs:px-4 sm:px-5 py-3 xs:py-4 sm:py-6 shadow-lg shadow-[#E9F5F3]">
                <p className="text-xl xs:text-2xl sm:text-3xl font-semibold text-[#2A3D45]">9k+</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#2A3D45]/60 mt-1">Revived journeys</p>
              </div>
            </div>
            <p className="text-xs xs:text-sm sm:text-base text-[#2A3D45] leading-relaxed">
              &quot;Every protocol is sketched from lab diagnostics, emotional wellbeing, and biomimetic actives. We believe in
              rituals that respect physiology and truly transform the stories skin wants to tell.&quot;
            </p>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] xs:rounded-[24px] sm:rounded-[32px] border border-[#83C5BE]/30 bg-gradient-to-br from-[#E9F5F3] via-white to-[#C2E3DD] shadow-2xl shadow-[#C2E3DD]/60">
              <Image src="https://dermacharm.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-09-at-12.45.14-AM-1024x682.jpeg" alt="Dr. Anurag Agrahari" fill priority className="object-cover" />
            </div>
            <div className="absolute -bottom-2 xs:-bottom-3 sm:-bottom-6 right-2 xs:right-3 sm:right-6 rounded-lg xs:rounded-lg sm:rounded-2xl border border-white/40 bg-[#2A3D45] px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4 text-white shadow-xl">
              <p className="text-[0.65rem] xs:text-xs uppercase tracking-[0.4em] text-white/70">Credentials</p>
              <p className="text-[0.7rem] xs:text-xs sm:text-sm font-semibold mt-0.5 xs:mt-1">Fellow, American Academy of Dermatology</p>
              <p className="text-[0.7rem] xs:text-xs sm:text-sm font-semibold">Member, Global Regenerative Council</p>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#83C5BE]/30 bg-white/80 shadow-2xl shadow-[#E9F5F3]">
            <div className="relative h-64 sm:h-80 w-full">
              {treatmentSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image src={slide.src} alt={slide.caption} fill sizes="(min-width: 768px) 500px, 100vw" className="object-cover" />
                  <div className="absolute inset-x-4 sm:inset-x-6 bottom-4 sm:bottom-6 rounded-lg sm:rounded-2xl bg-white/90 px-4 sm:px-6 py-3 sm:py-4 text-[#2A3D45]">
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#83C5BE]">{slide.caption}</p>
                    <p className="text-sm sm:text-base font-medium mt-1">{slide.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-[#83C5BE]/20 bg-white/80 px-3 sm:px-6 py-3 sm:py-4 gap-2 sm:gap-4">
              <button
                type="button"
                onClick={() => setActiveSlide((prev) => (prev - 1 + treatmentSlides.length) % treatmentSlides.length)}
                className="rounded-full border border-[#83C5BE]/40 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#2A3D45] transition hover:border-[#83C5BE]"
              >
                Prev
              </button>
              <div className="flex items-center gap-1.5 sm:gap-2">
                {treatmentSlides.map((slide, index) => (
                  <span key={slide.id} className={`h-1 rounded-full transition-all ${index === activeSlide ? 'w-8 sm:w-10 bg-[#2A3D45]' : 'w-3 sm:w-4 bg-[#C2E3DD]'}`} />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActiveSlide((prev) => (prev + 1) % treatmentSlides.length)}
                className="rounded-full border border-[#83C5BE]/40 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#2A3D45] transition hover:border-[#83C5BE]"
              >
                Next
              </button>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-[#83C5BE]">Why patients choose us</p>
            <h4 className="text-2xl sm:text-3xl font-semibold text-[#2A3D45]">Treatment suites choreographed for measurable calm</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-[#2A3D45]/80">
              {careHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#83C5BE] flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
