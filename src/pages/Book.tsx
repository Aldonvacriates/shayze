import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type BookingState = { vehicleType?: string };

export default function Book() {
  const location = useLocation();
  const presetVehicle = (location.state as BookingState | null)?.vehicleType ?? '';

  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    vehicleType: presetVehicle,
    passengers: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (presetVehicle) setFormData((d) => ({ ...d, vehicleType: presetVehicle }));
  }, [presetVehicle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section className="pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            Reserve Your Experience
          </h1>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-6" />
          <p className="text-lg text-[#F5F0E8]/80 max-w-2xl mx-auto">
            Tell us where, when, and how — we'll handle the rest.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#0A0A0A] border border-[#C9A84C]/30 p-12 text-center">
            <h2 className="text-3xl mb-4 text-[#C9A84C]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Reservation Received
            </h2>
            <p className="text-[#F5F0E8]/80 mb-6">
              Thank you. A Shayze concierge will contact you shortly to confirm the details.
            </p>
            <button
              type="button"
              onClick={() => { setSubmitted(false); setFormData({ pickup: '', dropoff: '', date: '', time: '', vehicleType: '', passengers: '' }); }}
              className="border border-[#C9A84C] text-[#C9A84C] px-8 py-3 hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300"
            >
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#0A0A0A] border border-[#C9A84C]/30 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-[#C9A84C]">Pickup Location</label>
                <input
                  type="text"
                  required
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
                  required
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
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-[#C9A84C]/30 px-4 py-3 text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block mb-2 text-[#C9A84C]">Time</label>
                <input
                  type="time"
                  required
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
                  required
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
                  required
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
        )}
      </div>
    </section>
  );
}
