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
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-2xl font-semibold text-white">Dermacharm</p>
            <p className="mt-4 text-sm text-[#CDBBA7]">
              Boutique dermatology and aesthetic care rooted in science, artistry, and human connection.
            </p>
          </div>
          {navGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#83C5BE]">{group.title}</p>
              <ul className="mt-4 space-y-2 text-[#E9F5F3]/70">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#83C5BE]/30 py-4 text-center text-xs text-[#E9F5F3]/60">
        © {new Date().getFullYear()} Dermacharm Aesthetics. All rights reserved.
      </div>
    </footer>
  );
}
