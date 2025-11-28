'use client';

import Link from 'next/link';

const skinTreatments = [
  {
    name: 'Advanced Facials',
    description: 'Custom-designed facials with cutting-edge technology and premium serums tailored to your skin type and concerns.',
    benefits: ['Deep cleansing', 'Hydration boost', 'Glow enhancement', 'Barrier repair'],
  },
  {
    name: 'Laser Resurfacing',
    description: 'Fractional laser technology to address texture, tone, and pigmentation irregularities with minimal downtime.',
    benefits: ['Pigment correction', 'Texture refinement', 'Collagen stimulation', 'Minimal downtime'],
  },
  {
    name: 'Chemical Peels',
    description: 'Professional-grade peels combining multiple acids for targeted exfoliation and renewal.',
    benefits: ['Acne management', 'Fine line reduction', 'Sun damage reversal', 'Skin brightening'],
  },
  {
    name: 'Hydration Infusions',
    description: 'Multi-layered hydration treatments using hyaluronic acid and peptides for plump, radiant skin.',
    benefits: ['Deep hydration', 'Plumping effect', 'Elasticity improvement', 'Radiance restoration'],
  },
  {
    name: 'Microneedling',
    description: 'Collagen induction therapy to improve skin texture, scars, and overall quality.',
    benefits: ['Scar reduction', 'Texture improvement', 'Collagen production', 'Natural rejuvenation'],
  },
  {
    name: 'LED Light Therapy',
    description: 'Photobiomodulation using red and near-infrared wavelengths for cellular regeneration.',
    benefits: ['Anti-inflammatory', 'Collagen boost', 'Acne reduction', 'Healing acceleration'],
  },
];

export default function SkinTreatmentsPage() {
  return (
    <section className="w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-6xl space-y-10 xs:space-y-12 sm:space-y-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#83C5BE]">Skin Treatments</p>
          <h1 className="mt-2 xs:mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A3D45]">
            Clinical skin therapy programs
          </h1>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#2A3D45]/70 mx-auto max-w-3xl leading-relaxed">
            Transform your complexion with our evidence-based skin treatments combining advanced technology and premium ingredients.
          </p>
        </div>

        <div className="grid gap-6 xs:gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skinTreatments.map((treatment) => (
            <div key={treatment.name} className="group rounded-2xl xs:rounded-2xl sm:rounded-3xl border border-[#83C5BE]/30 bg-white/90 p-4 xs:p-6 sm:p-8 shadow-lg shadow-[#E9F5F3] transition hover:-translate-y-1 hover:border-[#83C5BE]">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-[#2A3D45]">{treatment.name}</h3>
              <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-[#2A3D45]/70 leading-relaxed">{treatment.description}</p>
              <ul className="mt-4 xs:mt-5 sm:mt-6 space-y-2 xs:space-y-2.5 sm:space-y-3">
                {treatment.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 xs:gap-2.5 sm:gap-3 text-xs xs:text-xs sm:text-sm text-[#2A3D45]">
                    <span className="mt-1.5 xs:mt-2 h-1.5 xs:h-2 w-1.5 xs:w-2 rounded-full bg-[#83C5BE] flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-2xl xs:rounded-2xl sm:rounded-3xl border border-[#83C5BE]/20 bg-gradient-to-br from-[#E9F5F3]/50 via-white to-[#83C5BE]/20 p-6 xs:p-8 sm:p-10 md:p-12 text-center shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#83C5BE]">Ready to Transform</p>
          <h2 className="mt-2 xs:mt-3 sm:mt-4 text-xl xs:text-2xl sm:text-3xl font-bold text-[#2A3D45]">Start your skin journey today</h2>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-[#2A3D45]/70 mx-auto max-w-2xl mb-6 xs:mb-8 sm:mb-10">
            Schedule a complimentary consultation with our dermatologists to create your personalized treatment plan.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-[#2A3D45] px-6 xs:px-8 sm:px-10 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#1A2A2F]"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
