'use client';

import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';

type Slide = {
  id: string;
  badge: string;
  heading: string;
  description: string;
  highlights: string[];
  image: string;
  focus: string;
  metric: string;
};

const slides: Slide[] = [
  {
    id: 'radiance',
    badge: 'Dermacharm Aesthetics',
    heading: 'Radiance programs blending laser resurfacing with regenerative care',
    description: 'Tailored glow plans that combine pigment correction, collagen restoration, and soothing biocare to unveil balanced luminosity.',
    highlights: ['Laser resurfacing', 'Collagen induction', 'Barrier repair'],
    image: '/hero-slide-1.svg',
    focus: 'Glow Reset Series',
    metric: '92% clients notice smoother tone in 4 weeks',
  },
  {
    id: 'confidence',
    badge: 'Teal Signature Care',
    heading: 'Confidence rituals for sculpted contours and lifted profiles',
    description: 'Advanced injectables, contouring devices, and lymphatic therapies orchestrated to enhance your natural definition.',
    highlights: ['Contours & lift', 'Bio-fillers', 'Sonic lymphatic'],
    image: '/hero-slide-2.svg',
    focus: 'Contour Atelier',
    metric: 'Personalized plans with board-certified dermatologists',
  },
  {
    id: 'revive',
    badge: 'Clinically Curated',
    heading: 'Revive hair and scalp health with precision diagnostics',
    description: 'Scalp mapping, PRP boosters, and LED rejuvenation converge to strengthen follicles and restore confident volume.',
    highlights: ['PRP boost', 'LED rejuvenation', 'Nutrient infusions'],
    image: '/hero-slide-3.svg',
    focus: 'Revive Tricho Lab',
    metric: '8k+ successful hair journeys and counting',
  },
];

const formDefaults = { name: '', contact: '', message: '' };

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [formValues, setFormValues] = useState(formDefaults);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormValues(formDefaults);
  };

  return (
    <section className="relative overflow-hidden mt-0 xs:mt-0 sm:mt-0">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={`${slide.focus} visual`}
              fill
              priority={index === activeIndex}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f24]/70 via-[#0f1f24]/40 to-[#0f1f24]/20" />
          </div>
        ))}
      </div>
      <div className="relative w-full px-2 xs:px-3 sm:px-4 pb-6 xs:pb-8 sm:pb-10 pt-8 xs:pt-10 sm:pt-12 lg:pt-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 xs:gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 xs:space-y-7 sm:space-y-8">
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#83C5BE]">{activeSlide.badge}</p>
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{activeSlide.heading}</h1>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{activeSlide.description}</p>
                <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                  {activeSlide.highlights.map((item) => (
                    <span key={item} className="rounded-full border border-white/30 bg-white/10 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 text-[0.65rem] xs:text-xs sm:text-xs font-semibold uppercase tracking-widest text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col xs:flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 xs:gap-5 sm:gap-6 text-sm text-white/70">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">Signature focus</p>
                  <p className="text-lg xs:text-xl sm:text-2xl font-semibold text-white mt-1">{activeSlide.focus}</p>
                </div>
                <div className="hidden sm:block h-8 w-px bg-white/20" />
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">Result insight</p>
                  <p className="text-sm xs:text-base sm:text-lg font-medium text-white mt-1">{activeSlide.metric}</p>
                </div>
              </div>
              <div className="flex gap-1.5 sm:gap-2 flex-wrap pt-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`h-1 rounded-full transition-all ${index === activeIndex ? 'w-6 xs:w-8 sm:w-12 bg-[#83C5BE]' : 'w-3 xs:w-4 sm:w-6 bg-white/40'}`}
                    aria-label={`Show ${slide.focus}`}
                    aria-current={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-2xl xs:rounded-2xl sm:rounded-3xl border border-white/10 bg-white/90 p-4 xs:p-6 sm:p-8 text-[#2A3D45] shadow-2xl shadow-[#0f1f24]/30 backdrop-blur mt-8 lg:mt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#83C5BE]">Quick enquiry</p>
              <h2 className="mt-2 xs:mt-2.5 sm:mt-3 text-xl xs:text-2xl sm:text-3xl font-semibold">Reserve your personalised consult</h2>
              <p className="mt-2 xs:mt-2.5 text-xs xs:text-xs sm:text-sm text-[#2A3D45]/70">Share a few details and our concierge team will confirm your desired slot within one business day.</p>
              <form onSubmit={handleSubmit} className="mt-4 xs:mt-5 sm:mt-6 space-y-3 xs:space-y-4 sm:space-y-5">
                <div className="space-y-1.5 xs:space-y-2">
                  <label htmlFor="hero-name" className="text-xs xs:text-xs sm:text-sm font-medium text-[#2A3D45]">
                    Full name
                  </label>
                  <input
                    id="hero-name"
                    name="name"
                    type="text"
                    required
                    value={formValues.name}
                    onChange={(event) => setFormValues((prev) => ({ ...prev, name: event.target.value }))}
                    className="w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#83C5BE]/40 bg-white px-3 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#2A3D45] outline-none transition focus:border-[#83C5BE] focus:ring-2 focus:ring-[#83C5BE]/40"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-1.5 xs:space-y-2">
                  <label htmlFor="hero-contact" className="text-xs xs:text-xs sm:text-sm font-medium text-[#2A3D45]">
                    Contact number
                  </label>
                  <input
                    id="hero-contact"
                    name="contact"
                    type="tel"
                    required
                    value={formValues.contact}
                    onChange={(event) => setFormValues((prev) => ({ ...prev, contact: event.target.value }))}
                    className="w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#83C5BE]/40 bg-white px-3 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#2A3D45] outline-none transition focus:border-[#83C5BE] focus:ring-2 focus:ring-[#83C5BE]/40"
                    placeholder="Phone or WhatsApp"
                  />
                </div>
                <div className="space-y-1.5 xs:space-y-2">
                  <label htmlFor="hero-message" className="text-xs xs:text-xs sm:text-sm font-medium text-[#2A3D45]">
                    Message
                  </label>
                  <textarea
                    id="hero-message"
                    name="message"
                    required
                    rows={2}
                    value={formValues.message}
                    onChange={(event) => setFormValues((prev) => ({ ...prev, message: event.target.value }))}
                    className="w-full rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#83C5BE]/40 bg-white px-3 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-[#2A3D45] outline-none transition focus:border-[#83C5BE] focus:ring-2 focus:ring-[#83C5BE]/40 resize-none"
                    placeholder="Tell us about your goals"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-[#2A3D45] via-[#83C5BE] to-[#E9F5F3] px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-[#CDBBA7]/60 transition hover:-translate-y-0.5 hover:shadow-[#CDBBA7]/80"
                >
                  Request a call back
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
