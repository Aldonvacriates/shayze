import { useState } from 'react';
import { Car, Plane, MapPin, Users, Clock, Award, Shield, Star, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    vehicleType: '',
    passengers: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Reservation request received. We will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F0E8]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.5), rgba(10, 10, 10, 0.6)), url('https://images.unsplash.com/photo-1770701560760-2be69abb85ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGFjayUyMFNVViUyMEhhd2FpaSUyMHN1bnNldCUyMGNvYXN0YWx8ZW58MXx8fHwxNzc3NDE4NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: '1.1' }}>
            Arrive in Style.<br />Experience Hawaii in Luxury.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#F5F0E8]/90">Premium VIP transportation across the Hawaiian Islands</p>
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#C9A84C] text-[#0A0A0A] px-10 py-4 text-lg font-semibold hover:bg-[#d4b55e] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] hover:scale-105"
          >
            Book Your Ride
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Plane, title: 'Airport Transfers', desc: 'Seamless pickup and drop-off service to all Hawaiian airports with flight tracking' },
              { icon: MapPin, title: 'Private Island Tours', desc: 'Curated luxury tours showcasing Hawaii\'s hidden gems and iconic destinations' },
              { icon: Users, title: 'Corporate Travel', desc: 'Professional transportation solutions for business meetings and executive events' },
              { icon: Star, title: 'Special Events & Weddings', desc: 'Make your special day unforgettable with our premium wedding transportation' },
              { icon: Car, title: 'Yacht & Resort Transfers', desc: 'Exclusive service connecting luxury resorts, marinas, and private estates' },
              { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock service to accommodate your schedule, anytime, anywhere' }
            ].map((service, idx) => (
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
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4 md:px-8 bg-[#0A0A0A]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Reserve Your Experience
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-12" />

          <form onSubmit={handleSubmit} className="bg-[#0A0A0A] border border-[#C9A84C]/30 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-[#C9A84C]">Pickup Location</label>
                <input
                  type="text"
                  value={formData.pickup}
                  onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-[#C9A84C]/30 px-4 py-3 text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                  placeholder="Enter pickup address"
                />
              </div>
              <div>
                <label className="block mb-2 text-[#C9A84C]">Drop-off Location</label>
                <input
                  type="text"
                  value={formData.dropoff}
                  onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-[#C9A84C]/30 px-4 py-3 text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                  placeholder="Enter destination"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-[#C9A84C]">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-[#C9A84C]/30 px-4 py-3 text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block mb-2 text-[#C9A84C]">Time</label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-[#C9A84C]/30 px-4 py-3 text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block mb-2 text-[#C9A84C]">Vehicle Type</label>
                <select
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-[#C9A84C]/30 px-4 py-3 text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                >
                  <option value="">Select vehicle</option>
                  <option value="sedan">Luxury Sedan (1-3 passengers)</option>
                  <option value="suv">Premium SUV (1-6 passengers)</option>
                  <option value="sprinter">Sprinter Van (1-12 passengers)</option>
                  <option value="limo">Limousine (1-8 passengers)</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-[#C9A84C]">Number of Passengers</label>
                <input
                  type="number"
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                  min="1"
                  max="12"
                  className="w-full bg-[#0A0A0A] border border-[#C9A84C]/30 px-4 py-3 text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                  placeholder="1"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C9A84C] text-[#0A0A0A] py-4 text-lg font-semibold hover:bg-[#d4b55e] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]"
            >
              Reserve Now
            </button>

            <div className="mt-6 text-center">
              <p className="text-[#F5F0E8]/70 mb-2">Or call us directly</p>
              <a href="tel:+18085551234" className="text-[#C9A84C] text-xl hover:text-[#d4b55e] transition-colors">
                +1 (808) 555-1234
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Our Fleet
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Luxury Sedan', capacity: '1-3', img: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=400' },
              { name: 'Premium SUV', capacity: '1-6', img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400' },
              { name: 'Sprinter Van', capacity: '1-12', img: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=400' },
              { name: 'Limousine', capacity: '1-8', img: 'https://images.unsplash.com/photo-1556189761-c6e2970d0dea?w=400' }
            ].map((vehicle, idx) => (
              <div key={idx} className="bg-[#0A0A0A] border border-[#C9A84C]/20 overflow-hidden hover:border-[#C9A84C] transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={vehicle.img}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{vehicle.name}</h3>
                  <p className="text-[#F5F0E8]/70 mb-4">Capacity: {vehicle.capacity} passengers</p>
                  <button
                    type="button"
                    onClick={() => {
                      const map: Record<string, string> = { 'Luxury Sedan': 'sedan', 'Premium SUV': 'suv', 'Sprinter Van': 'sprinter', 'Limousine': 'limo' };
                      setFormData({ ...formData, vehicleType: map[vehicle.name] ?? '' });
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full border border-[#C9A84C] text-[#C9A84C] py-2 hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Shayze */}
      <section className="py-20 px-4 md:px-8 bg-[#0A0A0A]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Why Choose Shayze
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Award, title: 'Professional Chauffeurs', desc: 'Licensed, insured, and trained professionals dedicated to your safety and comfort' },
              { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock service with real-time flight tracking and on-time guarantee' },
              { icon: Shield, title: 'Licensed & Insured', desc: 'Fully compliant with all Hawaiian transportation regulations and insurance requirements' }
            ].map((feature, idx) => (
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
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Mitchell', rating: 5, text: 'Absolutely exceptional service! Our chauffeur was punctual, professional, and the vehicle was immaculate. Made our wedding day stress-free.' },
              { name: 'James Chen', rating: 5, text: 'Used Shayze for corporate events throughout our Hawaii retreat. Flawless execution, luxurious vehicles, and outstanding attention to detail.' },
              { name: 'Emma Rodriguez', rating: 5, text: 'From airport pickup to our resort tours, every interaction was first-class. This is how VIP transportation should be done. Highly recommend!' }
            ].map((testimonial, idx) => (
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

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#C9A84C]/20 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-3xl mb-4 text-[#C9A84C]" style={{ fontFamily: 'Playfair Display, serif' }}>Shayze</h3>
              <p className="text-[#F5F0E8]/70 mb-4">Premium VIP transportation across the Hawaiian Islands</p>
              <div className="flex gap-4">
                <a href="#" className="text-[#C9A84C] hover:text-[#d4b55e] transition-colors" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#C9A84C] hover:text-[#d4b55e] transition-colors" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#C9A84C] hover:text-[#d4b55e] transition-colors" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4 text-[#C9A84C]" style={{ fontFamily: 'Playfair Display, serif' }}>Services</h4>
              <ul className="space-y-2 text-[#F5F0E8]/70">
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">Airport Transfers</a></li>
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">Island Tours</a></li>
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">Corporate Travel</a></li>
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">Special Events</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-4 text-[#C9A84C]" style={{ fontFamily: 'Playfair Display, serif' }}>Company</h4>
              <ul className="space-y-2 text-[#F5F0E8]/70">
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">Our Fleet</a></li>
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-4 text-[#C9A84C]" style={{ fontFamily: 'Playfair Display, serif' }}>Contact</h4>
              <ul className="space-y-3 text-[#F5F0E8]/70">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C9A84C]" />
                  <a href="tel:+18085551234" className="hover:text-[#C9A84C] transition-colors">+1 (808) 555-1234</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C9A84C]" />
                  <a href="mailto:info@shayze.com" className="hover:text-[#C9A84C] transition-colors">info@shayze.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#C9A84C]/20 pt-8 text-center">
            <p className="text-[#F5F0E8]/70">
              Licensed & Insured | Serving All Hawaiian Islands
            </p>
            <p className="text-[#F5F0E8]/50 mt-2">
              © 2026 Shayze. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
