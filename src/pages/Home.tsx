import { Link } from 'react-router-dom';
import { Award, Clock, Shield, Star, ArrowRight } from 'lucide-react';

const trustPoints = [
  { icon: Award, title: 'Professional Chauffeurs', desc: 'Licensed, insured, and trained professionals dedicated to your safety and comfort' },
  { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock service with real-time flight tracking and on-time guarantee' },
  { icon: Shield, title: 'Licensed & Insured', desc: 'Fully compliant with all Hawaiian transportation regulations and insurance requirements' },
];

const testimonials = [
  { name: 'Sarah Mitchell', rating: 5, text: 'Absolutely exceptional service! Our chauffeur was punctual, professional, and the vehicle was immaculate. Made our wedding day stress-free.' },
  { name: 'James Chen', rating: 5, text: 'Used Shayze for corporate events throughout our Hawaii retreat. Flawless execution, luxurious vehicles, and outstanding attention to detail.' },
  { name: 'Emma Rodriguez', rating: 5, text: 'From airport pickup to our resort tours, every interaction was first-class. This is how VIP transportation should be done. Highly recommend!' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.5), rgba(10, 10, 10, 0.6)), url('https://images.unsplash.com/photo-1770701560760-2be69abb85ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGFjayUyMFNVViUyMEhhd2FpaSUyMHN1bnNldCUyMGNvYXN0YWx8ZW58MXx8fHwxNzc3NDE4NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: '1.1' }}>
            Arrive in Style.<br />Experience Hawaii in Luxury.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#F5F0E8]/90">Premium VIP transportation across the Hawaiian Islands</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="bg-[#C9A84C] text-[#0A0A0A] px-10 py-4 text-lg font-semibold hover:bg-[#d4b55e] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] hover:scale-105"
            >
              Book Your Ride
            </Link>
            <Link
              to="/fleet"
              className="border border-[#C9A84C] text-[#C9A84C] px-10 py-4 text-lg font-semibold hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300"
            >
              View Our Fleet
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </section>

      {/* Why Choose Shayze */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Why Choose Shayze
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {trustPoints.map((feature, idx) => (
              <div key={idx} className="text-center">
                <feature.icon className="w-16 h-16 text-[#C9A84C] mx-auto mb-4" />
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{feature.title}</h3>
                <p className="text-[#F5F0E8]/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-xl mb-4 text-[#C9A84C]" style={{ fontFamily: 'Playfair Display, serif' }}>Complimentary Amenities</h3>
            <p className="text-[#F5F0E8]/70 max-w-3xl mx-auto">
              Enjoy bottled water, phone chargers, climate control, and complimentary Wi-Fi in all vehicles.
              Special requests including child seats, accessibility accommodations, and refreshments available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8 bg-[#0A0A0A]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-[#0A0A0A] border border-[#C9A84C]/20 p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C9A84C] fill-[#C9A84C]" />
                  ))}
                </div>
                <p className="text-[#F5F0E8]/80 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <p className="text-[#C9A84C]" style={{ fontFamily: 'Playfair Display, serif' }}>— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Ready to elevate your Hawaiian experience?
          </h2>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] px-10 py-4 text-lg font-semibold hover:bg-[#d4b55e] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]"
          >
            Reserve Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
