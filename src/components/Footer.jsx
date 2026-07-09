import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, GraduationCap, Share2, Video, Camera, ExternalLink } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const programs = [
  'Nursery & KG',
  'Primary (I–V)',
  'Middle (VI–VIII)',
  'Secondary (IX–X)',
  'Sr. Secondary (XI–XII)',
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2447] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-gradient-to-br from-[#e8a000] to-[#ffb800] rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-base leading-tight">Bhartiya Sr. Sec. School</p>
                <p className="text-blue-300 text-xs">Nangal Mundi, Rewari</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Shaping tomorrow's leaders since 1988. Affiliated to CBSE, we offer quality education from Nursery to Class XII in a safe, nurturing environment.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#e8a000] rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <Share2 size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#e8a000] rounded-lg flex items-center justify-center transition-colors" aria-label="YouTube">
                <Video size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-[#e8a000] rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <Camera size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-base mb-5 pb-2 border-b border-white/20">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-[#e8a000] text-sm flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink size={11} /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-white text-base mb-5 pb-2 border-b border-white/20">Our Programs</h3>
            <ul className="space-y-2.5">
              {programs.map((p) => (
                <li key={p} className="text-blue-200 text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e8a000] flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-5 p-3 bg-white/10 rounded-xl">
              <p className="text-yellow-400 text-xs font-semibold mb-1">CBSE Affiliation</p>
              <p className="text-white text-sm font-bold">Code: 531268</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-base mb-5 pb-2 border-b border-white/20">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="text-[#e8a000] flex-shrink-0 mt-0.5" />
                <p className="text-blue-200 text-sm">Village Nangal, P.O. Mundi, District Rewari, Haryana – 123411</p>
              </div>
              <div className="flex gap-3">
                <Phone size={16} className="text-[#e8a000] flex-shrink-0" />
                <div>
                  <a href="tel:09416981786" className="text-blue-200 hover:text-white text-sm block transition-colors">09416981786</a>
                  <a href="tel:9728861849" className="text-blue-200 hover:text-white text-sm block transition-colors">9728861849</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={16} className="text-[#e8a000] flex-shrink-0" />
                <a href="mailto:bhartiyaschool@yahoo.com" className="text-blue-200 hover:text-white text-sm transition-colors break-all">
                  bhartiyaschool@yahoo.com
                </a>
              </div>
            </div>
            <Link
              to="/admissions"
              className="mt-5 block w-full text-center py-3 bg-gradient-to-r from-[#e8a000] to-[#ffb800] text-white font-semibold rounded-xl text-sm hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Bhartiya Sr. Sec. School, Nangal Mundi. All rights reserved.</p>
          <p>Managed by Deepak Shiksha Samiti · CBSE Code: 531268</p>
        </div>
      </div>
    </footer>
  );
}
