import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TreatmentsSection from '../components/TreatmentsSection';
import Gallery from '../components/Gallery';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Skin Therapy Studio',
    description: 'Custom facials, HydraGlow rituals, and pigment-correcting programs for luminous skin.',
    icon: '✨',
  },
  {
    title: 'Hair Revive Lounge',
    description: 'Scalp detox, PRP stimulation, and strengthening boosters that restore fuller strands.',
    icon: '💆‍♀️',
  },
  {
    title: 'Laser Atelier',
    description: 'Next-gen diode and Q-switch lasers for scar revision, hair reduction, and resurfacing.',
    icon: '⚡',
  },
  {
    title: 'Aesthetic Artistry',
    description: 'Injectables, contouring, and regenerative treatments that enhance natural harmony.',
    icon: '🌸',
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TreatmentsSection />
      <Gallery />
      <section className="relative px-4">
        <div className="absolute inset-x-0 top-8 mx-auto h-full max-w-6xl rounded-3xl bg-gradient-to-r from-[#E9F5F3]/80 via-white to-[#83C5BE]/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl rounded-3xl border border-[#83C5BE]/50 bg-white/85 px-6 py-20 shadow-2xl shadow-[#E9F5F3] backdrop-blur">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#83C5BE]">Our Expertise</p>
            <h2 className="mt-4 text-3xl font-bold text-[#2A3D45] md:text-4xl">Signature Services crafted for every skin and hair journey</h2>
            <p className="mt-4 text-[#2A3D45]/70 md:mx-auto md:w-3/4">
              Explore high-touch programs led by board-certified dermatologists using clinically proven devices and
              luxurious care rituals inspired by global wellness destinations.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
