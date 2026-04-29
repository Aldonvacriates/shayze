import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8 min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[#C9A84C] tracking-[0.3em] mb-4">404</p>
        <h1 className="mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          This route is off the map.
        </h1>
        <p className="text-[#F5F0E8]/70 mb-8">
          The page you're looking for doesn't exist — but your next ride does.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#C9A84C] text-[#0A0A0A] px-10 py-4 text-lg font-semibold hover:bg-[#d4b55e] transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
