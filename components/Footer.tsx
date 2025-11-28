import Link from 'next/link';
import Image from 'next/image';

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
];

const treatmentLinks = [
  { href: '/treatments/skin', label: 'Skin Treatments' },
  { href: '/treatments/hair', label: 'Hair Treatment' },
  { href: '/treatments/aesthetic', label: 'Aesthetic Treatment' },
  { href: '/treatments/laser', label: 'Laser Treatment' },
  { href: '/treatments/dermatosurgery', label: 'Dermatosurgery' },
];

const navGroups = [
  {
    title: 'Explore',
    items: primaryLinks,
  },
  {
    title: 'Treatments',
    items: treatmentLinks,
  },
  {
    title: 'Quick Links',
    items: [
      { href: '/contact', label: 'Contact' },
      { href: '/book', label: 'Book Visit' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#2A3D45] text-[#E9F5F3] ">
      <div className="w-full px-2 xs:px-3 sm:px-4">
        <div className="max-w-7xl mx-auto py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20">
          <div className="grid gap-6 xs:gap-8 sm:gap-10 grid-cols-1 xs:grid-cols-2 md:grid-cols-4">
            <div className="col-span-1 xs:col-span-1 flex items-start">
              <Link href="/" className="inline-flex items-center" aria-label="Dermacharm home">
                <Image src="/derma.png" alt="Dermacharm" width={140} height={40} priority className="h-12 xs:h-14 sm:h-16 w-auto" />
              </Link>
            </div>
            {navGroups.map((group) => (
              <div key={group.title} className="col-span-1">
                <p className="text-xs xs:text-sm font-semibold uppercase tracking-[0.3em] text-[#83C5BE]">{group.title}</p>
                <ul className="mt-2 xs:mt-3 sm:mt-4 space-y-1 xs:space-y-1.5 sm:space-y-2 text-xs xs:text-sm text-[#E9F5F3]/70">
                  {group.items.map((item) => (
                    <li key={item.href} className="hover:text-[#83C5BE] transition text-bold">
                      <Link href={item.href} className="hover:text-[#83C5BE]">
                        {item.label}
                      </Link>
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
