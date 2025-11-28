'use client';

import Image from 'next/image';
import { useState } from 'react';

const treatments = [
  {
    id: 'laser-atrium',
    name: 'Laser Atrium Resurfacing',
    image: '/treatment-laser.svg',
    shortDescription: 'Hybrid fractional resurfacing calibrates energy delivery to sculpt tone refinement and glass-skin clarity.',
    description:
      'Our laser atrium pairs dual-wavelength resurfacing with lymphatic cooling to soften etched lines, fade stubborn hyperpigmentation, and rebuild collagen density without disrupting barrier resilience.',
    benefits: ['Precise pigment balancing', 'Collagen renewal boost', 'Minimal social downtime'],
  },
  {
    id: 'cellular-studio',
    name: 'Cellular Revival Studio',
    image: '/treatment-cellular.svg',
    shortDescription: 'PRF concentrates woven with LED photobiomodulation awaken dermal stem cells for resilient radiance.',
    description:
      'The revival studio sequence layers platelet-rich fibrin with oxygenated serums and multi-spectrum LED to energize cellular turnover, recalibrate hydration memory, and cushion stressed skin matrices.',
    benefits: ['Amplified cellular turnover', 'Inflammation control', 'Deep hydration lock'],
  },
  {
    id: 'scalp-lounge',
    name: 'Scalp Renewal Lounge',
    image: '/treatment-scalp.svg',
    shortDescription: 'Detox exfoliation merges with growth-factor infusions reviving thinning roots and soothing imbalanced scalps.',
    description:
      'Micromist exfoliation, red-light modulation, and targeted mesotherapy wake dormant follicles while recalibrating microbiome harmony for fuller, denser strands.',
    benefits: ['Enhanced follicle vitality', 'Balanced scalp microbiome', 'Stronger strand anchoring'],
  },
  {
    id: 'derma-ritual',
    name: 'Dermal Ritual Sculpt',
    image: '/derma.png',
    shortDescription: 'Skin mapping diagnostics choreograph contouring massage, gua sha lymphatics, and peptide infusion sequences.',
    description:
      'A multi-sensory ritual aligning fascia release, gua sha precision, and biomimetic peptides to detox stagnation, lift contours, and illuminate tone harmonies.',
    benefits: ['Immediate sculpted lift', 'Improved lymphatic flow', 'Radiance amplification'],
  },
  {
    id: 'aqua-firm',
    name: 'Aqua Firm Infusion',
    image: '/hero-slide-2.svg',
    shortDescription: 'Ultrasonic cleansing merges with oxygen domes and peptide chambers saturating dermal layers with active hydration.',
    description:
      'A cascade of ultrasonic extractions, oxygen therapy, and cryo-infusions locks hyaluronic micro-reservoirs into deeper layers to smooth texture and restore luminous bounce.',
    benefits: ['Pore refinement', 'Hydration reservoirs filled', 'Smooth glassy finish'],
  },
  {
    id: 'lumi-lift',
    name: 'LumiLift Contour Lab',
    image: '/hero-slide-3.svg',
    shortDescription: 'Microcurrent waveforms paired with buccal sculpting synchronize neuromuscular lift and fascia release.',
    description:
      'Alternating microcurrent frequencies and buccal massage activate muscle memory, release jaw tension, and refine cheek architecture for editorial-grade definition.',
    benefits: ['Defined jawline', 'Relaxed facial tension', 'Longer-lasting lift'],
  },
];

const truncateCopy = (text: string) => (text.length > 120 ? `${text.slice(0, 118).trim()} (....)` : text);

export default function TreatmentsSection() {
  const [selectedTreatment, setSelectedTreatment] = useState<(typeof treatments)[number] | null>(null);

  return (
    <section className="min-h-screen bg-[#F5FCFA] w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-6xl space-y-8 xs:space-y-10 sm:space-y-12 text-center">
        <div className="space-y-2 xs:space-y-3 sm:space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#83C5BE]">Curated Protocol Index</p>
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A3D45]">List Of Treatments At Derms</h1>
          <p className="mx-auto max-w-3xl text-xs xs:text-sm sm:text-base md:text-lg text-[#2A3D45]/80">
            Immerse in multi-sensory dermatology that fuses clinical precision with deeply restorative rituals for skin,
            scalp, and total complexion health.
          </p>
        </div>
        <div className="grid gap-4 xs:gap-6 sm:gap-8 text-left grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {treatments.map((treatment) => (
            <div key={treatment.id} className="group w-full" style={{ perspective: '1600px' }}>
              <div className="relative h-64 xs:h-72 sm:h-80 w-full rounded-2xl sm:rounded-3xl border border-[#83C5BE]/30 bg-white shadow-xl shadow-[#DDEEEB]/70 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] touch-none cursor-pointer">
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-white/95 p-3 xs:p-4 sm:p-6 [backface-visibility:hidden] flex flex-col">
                  <div className="relative mb-3 xs:mb-4 sm:mb-6 h-20 xs:h-24 sm:h-32 w-full flex-shrink-0">
                    <Image src={treatment.image} alt={treatment.name} fill sizes="(min-width: 768px) 280px, 100vw" className="object-contain" />
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-[#2A3D45]">{treatment.name}</h3>
                  <p className="mt-1 xs:mt-2 text-[0.7rem] xs:text-xs sm:text-sm text-[#2A3D45]/70">Tap to preview ritual notes</p>
                </div>
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-[#2A3D45] px-3 xs:px-4 sm:px-6 py-4 xs:py-6 sm:py-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between">
                  <p className="text-xs xs:text-sm sm:text-base font-medium leading-relaxed text-white/90">{truncateCopy(treatment.shortDescription)}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedTreatment(treatment)}
                    className="mt-3 xs:mt-4 sm:mt-6 inline-flex items-center justify-center rounded-full bg-white px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-2 text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#2A3D45] transition hover:bg-[#F5FCFA]"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedTreatment && (
        <div
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-[#0B1516]/70 px-2 xs:px-3 sm:px-4 py-4 xs:py-6 sm:py-10 overflow-y-auto pt-20 sm:pt-0"
          onClick={() => setSelectedTreatment(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl sm:rounded-[32px] border border-white/20 bg-white p-4 xs:p-6 sm:p-8 text-left shadow-2xl shadow-[#0B1516]/40"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute right-3 xs:right-4 sm:right-6 top-3 xs:top-4 sm:top-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#2A3D45] hover:text-[#83C5BE] transition"
              onClick={() => setSelectedTreatment(null)}
            >
              ✕
            </button>
            <div className="grid gap-4 xs:gap-6 sm:gap-8 md:grid-cols-[1fr_1.2fr]">
              <div className="relative h-48 xs:h-56 sm:h-64 w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-[#F5FCFA]">
                <Image src={selectedTreatment.image} alt={selectedTreatment.name} fill sizes="(min-width: 768px) 280px, 100vw" className="object-contain" />
              </div>
              <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#83C5BE]">Treatment Blueprint</p>
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold text-[#2A3D45]">{selectedTreatment.name}</h2>
                <p className="text-xs xs:text-sm sm:text-base text-[#2A3D45]/80">{selectedTreatment.description}</p>
                <ul className="space-y-1.5 xs:space-y-2 sm:space-y-2 text-xs xs:text-sm sm:text-base text-[#2A3D45]">
                  {selectedTreatment.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 xs:gap-2 sm:gap-3">
                      <span className="mt-1 xs:mt-1.5 h-1.5 xs:h-2 w-1.5 xs:w-2 rounded-full bg-[#83C5BE] flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-3 xs:mt-4 sm:mt-6 w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#2A3D45] px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#1A2A2F]"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
