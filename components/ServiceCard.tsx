interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#83C5BE]/30 bg-white/90 p-6 shadow-lg shadow-[#E9F5F3] transition duration-300 hover:-translate-y-1 hover:border-[#83C5BE] animate-slide-up">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9F5F3] text-2xl text-[#2A3D45]">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-[#2A3D45]">{title}</h3>
      <p className="mt-3 text-sm text-[#2A3D45]/70">{description}</p>
      <div className="mt-6 flex items-center text-sm font-medium text-[#83C5BE]">
        Learn more
        <svg
          className="ml-2 h-4 w-4 transition duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#83C5BE] via-[#E9F5F3] to-[#CDBBA7]" />
      </div>
    </div>
  );
}
