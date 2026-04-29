import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            Contact Shayze
          </h1>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-6" />
          <p className="text-lg text-[#F5F0E8]/80 max-w-2xl mx-auto">
            Concierge available around the clock — reach us anytime to plan your next ride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="tel:+18085551234"
            className="bg-[#0A0A0A] border border-[#C9A84C]/20 p-8 hover:border-[#C9A84C] hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-300 group"
          >
            <Phone className="w-10 h-10 text-[#C9A84C] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Call Us</h3>
            <p className="text-[#C9A84C] text-lg">+1 (808) 555-1234</p>
            <p className="text-[#F5F0E8]/60 mt-2 text-sm">Available 24/7</p>
          </a>

          <a
            href="mailto:info@shayze.com"
            className="bg-[#0A0A0A] border border-[#C9A84C]/20 p-8 hover:border-[#C9A84C] hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] transition-all duration-300 group"
          >
            <Mail className="w-10 h-10 text-[#C9A84C] mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Email Us</h3>
            <p className="text-[#C9A84C] text-lg">info@shayze.com</p>
            <p className="text-[#F5F0E8]/60 mt-2 text-sm">Replies within an hour</p>
          </a>

          <div className="bg-[#0A0A0A] border border-[#C9A84C]/20 p-8">
            <MapPin className="w-10 h-10 text-[#C9A84C] mb-4" />
            <h3 className="text-xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Service Area</h3>
            <p className="text-[#F5F0E8]/80">Serving all Hawaiian Islands</p>
            <p className="text-[#F5F0E8]/60 mt-2 text-sm">Oahu · Maui · Kauai · Big Island · Lanai · Molokai</p>
          </div>

          <div className="bg-[#0A0A0A] border border-[#C9A84C]/20 p-8">
            <Clock className="w-10 h-10 text-[#C9A84C] mb-4" />
            <h3 className="text-xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Hours</h3>
            <p className="text-[#F5F0E8]/80">Open 24 hours, 7 days a week</p>
            <p className="text-[#F5F0E8]/60 mt-2 text-sm">Including holidays — we're always on call</p>
          </div>
        </div>

        <div className="mt-16 text-center text-[#F5F0E8]/60">
          <p>Licensed & Insured | Serving All Hawaiian Islands</p>
        </div>
      </div>
    </section>
  );
}
