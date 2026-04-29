import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/fleet', label: 'Fleet' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-[#0A0A0A]/95 backdrop-blur border-b border-[#C9A84C]/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl text-[#C9A84C]" style={{ fontFamily: 'Playfair Display, serif' }}>
          Shayze
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive ? 'text-[#C9A84C]' : 'text-[#F5F0E8]/80 hover:text-[#C9A84C]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/book"
            className="bg-[#C9A84C] text-[#0A0A0A] px-5 py-2 text-sm font-semibold hover:bg-[#d4b55e] transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
          >
            Book Your Ride
          </Link>
        </nav>

        <button
          className="md:hidden text-[#C9A84C] p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#C9A84C]/20 bg-[#0A0A0A]/95 backdrop-blur">
          <nav className="px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-base transition-colors ${
                    isActive ? 'text-[#C9A84C]' : 'text-[#F5F0E8]/80'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/book"
              className="bg-[#C9A84C] text-[#0A0A0A] px-5 py-3 text-base font-semibold text-center mt-2"
            >
              Book Your Ride
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
