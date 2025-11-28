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
    <section className="py-10 bg-white">
      <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A3D45] text-center mb-8">
       Gallery
      </h2>
      <h3 className="text-center text-lg md:text-xl text-gray-600 mb-8">
        Explore our state-of-the-art facilities and treatments.
      </h3>

      <div
        className="relative mx-auto"
        style={{
          width: '100%',
          height: '420px',
          perspective: '1400px',
        }}
      >
        <div className="relative w-full h-full">
          {galleryImages.map((img, index) => {
            const offset = (index - activeIndex + galleryImages.length) % galleryImages.length;

            let translateX = 0;
            let rotateY = 0;
            let scale = 1;
            let zIndex = 10;
            let opacity = 1;

            if (offset === 0) {
              translateX = 0;
              rotateY = 0;
              scale = 1.1;
              zIndex = 50;
            } else if (offset === 1) {
              translateX = 260;
              rotateY = -40;
              scale = 0.8;
              zIndex = 20;
              opacity = 0.6;
            } else if (offset === galleryImages.length - 1) {
              translateX = -260;
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
                className="absolute top-1/2 left-1/2 rounded-2xl overflow-hidden shadow-xl transition-all duration-[900ms]"
                style={{
                  width: '300px',
                  height: '380px',
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

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-4xl bg-white shadow-xl px-3 py-1 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-4xl bg-white shadow-xl px-3 py-1 rounded-full"
        >
          ›
        </button>
      </div>
    </section>
  );
}
