'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const galleryImages = [
  { id: 'oasis', src: 'https://images.unsplash.com/photo-1457834356955-5967d5f65a36?auto=format&fit=crop&w=1200&q=80', alt: 'Calming wellness lounge' },
  { id: 'radiance', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80', alt: 'Skin therapy suite with natural light' },
  { id: 'serum-lab', src: 'https://images.unsplash.com/photo-1525289607049-cb2c182c5e16?auto=format&fit=crop&w=1200&q=80', alt: 'Advanced serum laboratory setup' },
  { id: 'scalp-studio', src: 'https://images.unsplash.com/photo-1503951458640-75b6be2c0f25?auto=format&fit=crop&w=1200&q=80', alt: 'Premium scalp treatment studio' },
  { id: 'laser-lounge', src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80', alt: 'Laser treatment technology room' },
  { id: 'ritual-bay', src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80', alt: 'Minimalist ritual bay' },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);

  return (
    <section className="py-6 xs:py-8 sm:py-10 md:py-12 bg-white px-2 xs:px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A3D45] text-center mb-4 xs:mb-6 sm:mb-8">
          Gallery
        </h2>
        <h3 className="text-center text-xs xs:text-sm sm:text-base md:text-lg text-[#2A3D45]/70 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          Explore our state-of-the-art facilities and treatments.
        </h3>

        <div
          className="relative mx-auto w-full"
          style={{
            height: 'clamp(280px, 60vw, 480px)',
            perspective: '1400px',
          }}
        >
          <div className="relative w-full h-full">
            {galleryImages.map((img, index) => {
              const offset = (index - activeIndex + galleryImages.length) % galleryImages.length;
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

              let translateX = 0;
              let rotateY = 0;
              let scale = 1;
              let zIndex = 10;
              let opacity = 1;

              const baseTranslate = isMobile ? 120 : 260;

              if (offset === 0) {
                translateX = 0;
                rotateY = 0;
                scale = 1.1;
                zIndex = 50;
              } else if (offset === 1) {
                translateX = baseTranslate;
                rotateY = -40;
                scale = 0.8;
                zIndex = 20;
                opacity = 0.6;
              } else if (offset === galleryImages.length - 1) {
                translateX = -baseTranslate;
                rotateY = 40;
                scale = 0.8;
                zIndex = 20;
                opacity = 0.6;
              } else {
                opacity = 0;
                zIndex = 0;
                scale = 0.5;
              }

              return (
                <div
                  key={img.id}
                  className="absolute top-1/2 left-1/2 rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transition-all duration-[900ms]"
                  style={{
                    width: 'clamp(200px, 50vw, 320px)',
                    height: 'clamp(260px, 65vw, 400px)',
                    transformStyle: 'preserve-3d',
                    transform: `translate(-50%, -50%) translateX(${translateX}px)
                              rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-1 xs:left-2 sm:left-4 top-1/2 -translate-y-1/2 text-xl xs:text-2xl sm:text-3xl md:text-4xl bg-white shadow-xl px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 rounded-full transition hover:bg-[#83C5BE] hover:text-white z-40 flex-shrink-0"
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 xs:right-2 sm:right-4 top-1/2 -translate-y-1/2 text-xl xs:text-2xl sm:text-3xl md:text-4xl bg-white shadow-xl px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 rounded-full transition hover:bg-[#83C5BE] hover:text-white z-40 flex-shrink-0"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
