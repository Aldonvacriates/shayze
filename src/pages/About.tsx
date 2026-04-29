import { Link } from 'react-router-dom';
import { Compass, Heart, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Sparkles,
    title: 'Uncompromising Standards',
    desc: 'Every vehicle is detailed before each ride. Every chauffeur is hand-selected. Every detail is intentional.',
  },
  {
    icon: Heart,
    title: 'Aloha at the Core',
    desc: 'We grew up here. Our service reflects the warmth, hospitality, and respect that define the islands.',
  },
  {
    icon: Compass,
    title: 'Local Expertise',
    desc: 'From hidden beaches to private estates, our chauffeurs know the islands the way only locals can.',
  },
];

export default function About() {
  return (
    <>
      {/* Intro */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            About Shayze
          </h1>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-8" />
          <p className="text-lg md:text-xl text-[#F5F0E8]/80 leading-relaxed">
            Shayze was born from a simple idea: the journey across Hawaii should feel as extraordinary as the destination.
            We blend the discretion of world-class chauffeured service with the warmth and local knowledge that only true Hawaiians can offer.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 md:px-8 bg-[#0A0A0A]/50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="h-80 bg-cover bg-center border border-[#C9A84C]/20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1080&q=80')`,
            }}
            role="img"
            aria-label="Coastal Hawaii at golden hour"
          />
          <div>
            <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
              Our Story
            </h2>
            <p className="text-[#F5F0E8]/80 leading-relaxed mb-4">
              After years of seeing visitors miss the soul of the islands behind rental car windshields and rideshare apps,
              we built Shayze to give every guest a private, considered, deeply Hawaiian experience.
            </p>
            <p className="text-[#F5F0E8]/80 leading-relaxed">
              Today, our fleet of meticulously kept luxury vehicles serves wedding parties, executive travelers, families,
              and anyone who believes the way you arrive matters as much as where you're going.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            What We Stand For
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-[#0A0A0A] border border-[#C9A84C]/20 p-8 text-center">
                <value.icon className="w-12 h-12 text-[#C9A84C] mx-auto mb-4" />
                <h3 className="text-xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{value.title}</h3>
                <p className="text-[#F5F0E8]/70 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 md:px-8 bg-[#0A0A0A]/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '6', label: 'Hawaiian Islands Served' },
              { value: '24/7', label: 'Concierge Availability' },
              { value: '100%', label: 'Licensed & Insured' },
              { value: '5★', label: 'Average Client Rating' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl md:text-5xl text-[#C9A84C] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </p>
                <p className="text-[#F5F0E8]/70 text-sm tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Experience the Shayze difference.
          </h2>
          <p className="text-[#F5F0E8]/80 mb-8 leading-relaxed">
            Whether it's a once-in-a-lifetime wedding day, a corporate retreat, or your family's first trip to the islands —
            we'll make sure every mile feels effortless.
          </p>
          <Link
            to="/book"
            className="inline-block bg-[#C9A84C] text-[#0A0A0A] px-10 py-4 text-lg font-semibold hover:bg-[#d4b55e] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]"
          >
            Reserve Your Ride
          </Link>
        </div>
      </section>
    </>
  );
}
