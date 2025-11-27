import { Facebook, Instagram, MessageCircleMore } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="bg-[#2A3D45] text-[#E9F5F3] text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#83C5BE]" />
            Open at 9am – 8pm
          </span>
          <span className="inline-flex items-center gap-2 text-[#E9F5F3]/80">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.14 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            +91 8000 222 111
          </span>
        </div>
        <div className="flex items-center gap-4 text-[#E9F5F3]/80">
          <a href="mailto:hello@dermacharm.in" className="transition hover:text-[#83C5BE]">
            hello@dermacharm.in
          </a>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com/dermacharm" aria-label="Instagram" className="transition hover:text-[#83C5BE]">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://wa.me/918000222111" aria-label="WhatsApp" className="transition hover:text-[#83C5BE]">
              <MessageCircleMore className="h-4 w-4" />
            </a>
            <a href="https://facebook.com/dermacharm" aria-label="Facebook" className="transition hover:text-[#83C5BE]">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
