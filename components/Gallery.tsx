'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

const galleryImages = [
  { id: 'oasis', src: 'https://images.unsplash.com/photo-1457834356955-5967d5f65a36?auto=format&fit=crop&w=1200&q=80', alt: 'Calming wellness lounge' },
  { id: 'radiance', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80', alt: 'Skin therapy suite with natural light' },
  { id: 'serum-lab', src: 'https://images.unsplash.com/photo-1525289607049-cb2c182c5e16?auto=format&fit=crop&w=1200&q=80', alt: 'Advanced serum laboratory setup' },
  { id: 'scalp-studio', src: 'https://images.unsplash.com/photo-1503951458640-75b6be2c0f25?auto=format&fit=crop&w=1200&q=80', alt: 'Premium scalp treatment studio' },
  { id: 'laser-lounge', src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80', alt: 'Laser treatment technology room' },
  { id: 'ritual-bay', src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80', alt: 'Minimalist ritual bay' },
  { id: 'follicle', src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80', alt: 'Hair rejuvenation lounge' },
];

const range = 3;

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const frames = useMemo(() => {
    const items: Array<{ offset: number } & (typeof galleryImages)[number]> = [];

    for (let offset = -range; offset <= range; offset += 1) {
      const index = (activeIndex + offset + galleryImages.length) % galleryImages.length;
      items.push({ offset, ...galleryImages[index] });
    }

    return items;
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section className="bg-[#F5FCFA] px-4 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[48px] border border-[#E1F2EF] bg-white/85 px-6 py-16 text-center shadow-[0_40px_120px_rgba(131,197,190,0.25)] sm:px-12">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#83C5BE]">Signature Gallery</p>
          <h2 className="text-4xl font-bold text-[#1D2E2F] md:text-5xl">3D Ritual Showcase</h2>
          <p className="text-base text-[#1D2E2F]/80 md:text-lg">
            Discover immersive sanctuaries curated for progressive skin and hair journeys. Every chamber is tuned with tactile materials,
            tonal lighting, and precision technology.
          </p>
        </div>
        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12">
          <div className="absolute inset-x-6 top-10 -z-10 h-80 rounded-full bg-gradient-to-r from-[#D8F0EB]/70 via-white to-[#EAF8F5]/60 blur-[140px]" />
          <div className="relative h-[360px] sm:h-[420px] md:h-[500px]" style={{ perspective: '2200px' }}>
            <div className="absolute inset-x-12 top-[45%] h-52 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#E0F2EF]/70 via-white to-[#D7F3EC]/60 blur-3xl" />
            <div className="relative h-full w-full" style={{ transformStyle: 'preserve-3d' }}>
              {frames.map((frame) => {
                const isActive = frame.offset === 0;
                const scale = isActive ? 1.1 : 0.8;
                const opacity = isActive ? 1 : 0.6;
                const rotateY = frame.offset * -12;
                const translateX = frame.offset * 210;
                const translateZ = 260 - Math.abs(frame.offset) * 80;

                return (
                  <div
                    key={`${frame.id}-${frame.offset}`}
                    className="absolute left-1/2 top-1/2 w-48 -translate-x-1/2 -translate-y-1/2 rounded-[34px] bg-gradient-to-b from-white to-white/80 p-4 shadow-[0_30px_90px_rgba(18,61,57,0.2)] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] sm:w-56 md:w-64 lg:w-72"
                    style={{
                      transform: `translate3d(${translateX}px, ${frame.offset * 12}px, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity,
                      zIndex: range - Math.abs(frame.offset),
                    }}
                  >
                    <div className="relative h-64 w-full overflow-hidden rounded-[28px] bg-[#E0F2EF] shadow-inner transition-transform duration-500 hover:scale-[1.05] sm:h-72 md:h-80">
                      <Image
                        src={frame.src}
                        alt={frame.alt}
                        fill
                        sizes="(min-width: 1280px) 420px, (min-width: 1024px) 360px, (min-width: 768px) 280px, 220px"
                        className="object-cover"
                        priority={frame.offset === 0}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white via-white/80 to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-white via-white/80 to-transparent sm:block" />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Previous"
              onClick={handlePrev}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#1D2E2F]/10 bg-white text-2xl text-[#1D2E2F] shadow-lg shadow-[#9FD6CE]/50 transition hover:border-[#1D2E2F]/40 hover:bg-[#F2FBF8]"
            >
              ‹
            </button>
            <div className="flex items-center gap-2">
              {galleryImages.map((image, index) => (
                <span
                  key={image.id}
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === activeIndex ? 'w-12 bg-[#1D2E2F]' : 'w-3 bg-[#B7DCD5]'}`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next"
              onClick={handleNext}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#1D2E2F]/10 bg-white text-2xl text-[#1D2E2F] shadow-lg shadow-[#9FD6CE]/50 transition hover:border-[#1D2E2F]/40 hover:bg-[#F2FBF8]"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
