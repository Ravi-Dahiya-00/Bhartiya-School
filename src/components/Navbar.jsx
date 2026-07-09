import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, GraduationCap } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0f2447] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="text-gray-300">Affiliated to CBSE | Code: 531268 | Est. 1988</p>
          <div className="flex items-center gap-6">
            <a href="tel:09416981786" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
              <Phone size={13} /> 09416981786
            </a>
            <a href="mailto:bhartiyaschool@yahoo.com" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
              <Mail size={13} /> bhartiyaschool@yahoo.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg shadow-blue-900/10'
          : 'bg-white shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#1a3a6b] to-[#2a5298] rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <GraduationCap size={22} className="text-yellow-400" />
              </div>
              <div>
                <p className="font-bold text-[#1a3a6b] text-sm md:text-base leading-tight">Bhartiya Sr. Sec. School</p>
                <p className="text-[10px] md:text-xs text-gray-500 leading-tight">Nangal Mundi, Rewari · CBSE</p>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-[#1a3a6b] text-white shadow-md'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-[#1a3a6b]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admissions"
                className="ml-2 px-4 py-2 bg-gradient-to-r from-[#e8a000] to-[#ffb800] text-white font-semibold rounded-lg text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1a3a6b] hover:bg-blue-50 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'}`}>
          <div className="px-4 py-3 bg-white space-y-1">
            {/* Mobile top info */}
            <div className="flex gap-4 pb-3 border-b border-gray-100 mb-2">
              <a href="tel:09416981786" className="flex items-center gap-1 text-xs text-[#1a3a6b] font-medium">
                <Phone size={12} /> 09416981786
              </a>
              <a href="mailto:bhartiyaschool@yahoo.com" className="flex items-center gap-1 text-xs text-[#1a3a6b] font-medium">
                <Mail size={12} /> Email Us
              </a>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'bg-[#1a3a6b] text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-[#1a3a6b]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="block mt-2 px-4 py-3 bg-gradient-to-r from-[#e8a000] to-[#ffb800] text-white font-semibold rounded-xl text-sm text-center shadow-md"
            >
              Apply for Admission 2025–26
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
