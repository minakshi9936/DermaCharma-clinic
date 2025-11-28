const navGroups = [
  {
    title: 'Clinic',
    items: ['About', 'Treatments', 'Careers'],
  },
  {
    title: 'Support',
    items: ['FAQs', 'Patient Stories', 'Contact'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2A3D45] text-[#E9F5F3]">
      <div className="w-full px-2 xs:px-3 sm:px-4">
        <div className="max-w-7xl mx-auto py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20">
          <div className="grid gap-6 xs:gap-8 sm:gap-10 grid-cols-1 xs:grid-cols-2 md:grid-cols-3">
            <div className="col-span-1 xs:col-span-1">
              <p className="text-lg xs:text-xl sm:text-2xl font-semibold text-white">Dermacharm</p>
              <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm text-[#CDBBA7] leading-relaxed">
                Boutique dermatology and aesthetic care rooted in science, artistry, and human connection.
              </p>
            </div>
            {navGroups.map((group) => (
              <div key={group.title} className="col-span-1">
                <p className="text-xs xs:text-sm font-semibold uppercase tracking-[0.3em] text-[#83C5BE]">{group.title}</p>
                <ul className="mt-2 xs:mt-3 sm:mt-4 space-y-1 xs:space-y-1.5 sm:space-y-2 text-xs xs:text-sm text-[#E9F5F3]/70">
                  {group.items.map((item) => (
                    <li key={item} className="hover:text-[#83C5BE] transition cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#83C5BE]/30 py-3 xs:py-4 sm:py-5 text-center text-xs xs:text-xs text-[#E9F5F3]/60 px-2 xs:px-3 sm:px-4 mb-20 sm:mb-0">
        © {new Date().getFullYear()} Dermacharm Aesthetics. All rights reserved.
      </div>
    </footer>
  );
}
