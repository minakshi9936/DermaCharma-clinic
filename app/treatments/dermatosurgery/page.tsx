'use client';

import Link from 'next/link';

const dermatosurgeryTreatments = [
  {
    name: 'Mole & Lesion Removal',
    description: 'Safe removal of benign moles, warts, and skin lesions using advanced surgical and laser techniques.',
    benefits: ['Precise removal', 'Minimal scarring', 'Pathology analysis', 'Cosmetic results'],
  },
  {
    name: 'Acne Scar Revision',
    description: 'Surgical and non-surgical techniques to minimize the appearance of acne scars and pitting.',
    benefits: ['Scar reduction', 'Skin texture improvement', 'Multiple technique options', 'Progressive improvement'],
  },
  {
    name: 'Cyst & Lipoma Removal',
    description: 'Minimally invasive surgical removal of cysts, lipomas, and other benign subcutaneous lesions.',
    benefits: ['Complete removal', 'Minimal scarring', 'Quick recovery', 'Pathology confirmation'],
  },
  {
    name: 'Tattoo Removal Surgery',
    description: 'Surgical excision and closure techniques for complete tattoo removal with optimal cosmetic outcome.',
    benefits: ['Complete removal', 'Precise technique', 'Predictable results', 'Single session option'],
  },
  {
    name: 'Skin Tag Removal',
    description: 'Precise removal of skin tags using cauterization, ligation, or surgical excision.',
    benefits: ['Quick procedure', 'Minimal discomfort', 'No scarring', 'Permanent results'],
  },
  {
    name: 'Scar Revision Surgery',
    description: 'Surgical repositioning and refinement of scars to make them less noticeable and more cosmetically appealing.',
    benefits: ['Scar improvement', 'Surgical artistry', 'Blending techniques', 'Long-lasting results'],
  },
];

export default function DermatosurgeryPage() {
  return (
    <section className="w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-6xl space-y-10 xs:space-y-12 sm:space-y-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#83C5BE]">Dermatosurgery</p>
          <h1 className="mt-2 xs:mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A3D45]">
            Precision surgical dermatology
          </h1>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#2A3D45]/70 mx-auto max-w-3xl leading-relaxed">
            Expert surgical removal and revision of skin lesions, scars, and other dermatological conditions with cosmetic precision.
          </p>
        </div>

        <div className="grid gap-6 xs:gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {dermatosurgeryTreatments.map((treatment) => (
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
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#83C5BE]">Ready for Your Procedure</p>
          <h2 className="mt-2 xs:mt-3 sm:mt-4 text-xl xs:text-2xl sm:text-3xl font-bold text-[#2A3D45]">Trust expert surgical precision</h2>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-[#2A3D45]/70 mx-auto max-w-2xl mb-6 xs:mb-8 sm:mb-10">
            Schedule a consultation with our board-certified dermatologic surgeons to discuss your procedure options.
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
