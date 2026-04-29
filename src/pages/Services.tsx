import { Link } from 'react-router-dom';
import { Car, Plane, MapPin, Users, Clock, Star } from 'lucide-react';

const services = [
  { icon: Plane, title: 'Airport Transfers', desc: 'Seamless pickup and drop-off service to all Hawaiian airports with flight tracking' },
  { icon: MapPin, title: 'Private Island Tours', desc: 'Curated luxury tours showcasing Hawaii\'s hidden gems and iconic destinations' },
  { icon: Users, title: 'Corporate Travel', desc: 'Professional transportation solutions for business meetings and executive events' },
  { icon: Star, title: 'Special Events & Weddings', desc: 'Make your special day unforgettable with our premium wedding transportation' },
  { icon: Car, title: 'Yacht & Resort Transfers', desc: 'Exclusive service connecting luxury resorts, marinas, and private estates' },
  { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock service to accommodate your schedule, anytime, anywhere' },
];

export default function Services() {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            Our Services
          </h1>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-6" />
          <p className="text-lg text-[#F5F0E8]/80 max-w-2xl mx-auto">
            From airport pickups to private island tours, every Shayze experience is crafted around your comfort, schedule, and standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#0A0A0A] border border-[#C9A84C]/20 p-8 hover:border-[#C9A84C] hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-300 hover:-translate-y-2 group"
            >
              <service.icon className="w-12 h-12 text-[#C9A84C] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{service.title}</h3>
              <p className="text-[#F5F0E8]/70 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/book"
            className="inline-block bg-[#C9A84C] text-[#0A0A0A] px-10 py-4 text-lg font-semibold hover:bg-[#d4b55e] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]"
          >
            Reserve a Service
          </Link>
        </div>
      </div>
    </section>
  );
}
