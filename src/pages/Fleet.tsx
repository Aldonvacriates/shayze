import { useNavigate } from 'react-router-dom';

const fleet = [
  { name: 'Luxury Sedan', code: 'sedan', capacity: '1-3', img: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=600' },
  { name: 'Premium SUV', code: 'suv', capacity: '1-6', img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600' },
  { name: 'Sprinter Van', code: 'sprinter', capacity: '1-12', img: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=600' },
  { name: 'Limousine', code: 'limo', capacity: '1-8', img: 'https://images.unsplash.com/photo-1556189761-c6e2970d0dea?w=600' },
];

export default function Fleet() {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            Our Fleet
          </h1>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-6" />
          <p className="text-lg text-[#F5F0E8]/80 max-w-2xl mx-auto">
            Meticulously maintained, late-model luxury vehicles for every occasion — from intimate transfers to group expeditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((vehicle, idx) => (
            <div key={idx} className="bg-[#0A0A0A] border border-[#C9A84C]/20 overflow-hidden hover:border-[#C9A84C] transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <img
                  src={vehicle.img}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{vehicle.name}</h3>
                <p className="text-[#F5F0E8]/70 mb-4">Capacity: {vehicle.capacity} passengers</p>
                <button
                  type="button"
                  onClick={() => navigate('/book', { state: { vehicleType: vehicle.code } })}
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
  );
}
