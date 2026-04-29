import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C9A84C]/20 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="text-3xl mb-4 text-[#C9A84C] inline-block" style={{ fontFamily: 'Playfair Display, serif' }}>
              Shayze
            </Link>
            <p className="text-[#F5F0E8]/70 mb-4 mt-4">Premium VIP transportation across the Hawaiian Islands</p>
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
              <li><Link to="/services" className="hover:text-[#C9A84C] transition-colors">Airport Transfers</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A84C] transition-colors">Island Tours</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A84C] transition-colors">Corporate Travel</Link></li>
              <li><Link to="/services" className="hover:text-[#C9A84C] transition-colors">Special Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4 text-[#C9A84C]" style={{ fontFamily: 'Playfair Display, serif' }}>Company</h4>
            <ul className="space-y-2 text-[#F5F0E8]/70">
              <li><Link to="/" className="hover:text-[#C9A84C] transition-colors">About Us</Link></li>
              <li><Link to="/fleet" className="hover:text-[#C9A84C] transition-colors">Our Fleet</Link></li>
              <li><Link to="/" className="hover:text-[#C9A84C] transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-[#C9A84C] transition-colors">Contact</Link></li>
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
  );
}
