import { useState, useRef, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

function AnimSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  );
}

import galleryItems from '../data/image_catalog.json';

const categories = ['All', 'Campus', 'Sports', 'Events', 'Cultural', 'News & Announcements'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);
  const [displayedCount, setDisplayedCount] = useState(20);
  const loaderRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.cat === activeCategory);

  // Reset displayed count when category changes
  useEffect(() => {
    setDisplayedCount(20);
  }, [activeCategory]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setDisplayedCount((prev) => Math.min(prev + 20, filtered.length));
      }
    }, { threshold: 0.1 });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [filtered.length]);

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setLightboxItem(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1c46] to-[#2a5298] py-20 md:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">Campus Life</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Gallery</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">Glimpses of life at Bhartiya Sr. Sec. School — where learning meets joy, culture, and sports.</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#f8f9fc] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <AnimSection className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#1a3a6b] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-[#1a3a6b] shadow-sm border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimSection>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.slice(0, displayedCount).map((item, i) => (
              <AnimSection key={item.id} delay={(i % 20) * 50}>
                <div
                  className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md"
                  onClick={() => setLightboxItem(item)}
                  style={{ aspectRatio: '4/3' }}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} group-hover:opacity-80 transition-opacity duration-300`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn size={28} className="text-white mb-2" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="bg-white/90 backdrop-blur-sm text-[#1a3a6b] text-xs font-bold px-2.5 py-1 rounded-lg">
                      {item.label}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-[#1a3a6b]/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {item.cat}
                    </span>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-semibold">No photos in this category yet.</p>
            </div>
          )}

          {/* Invisible loader element for infinite scroll */}
          {displayedCount < filtered.length && (
            <div ref={loaderRef} className="h-20 w-full flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-[#1a3a6b]/20 border-t-[#1a3a6b] rounded-full animate-spin"></div>
            </div>
          )}

          <AnimSection className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              📸 More photos from school events will be added soon. Have photos to share?{' '}
              <a href="mailto:bhartiyaschool@yahoo.com" className="text-[#1a3a6b] font-semibold hover:underline">Email us</a>
            </p>
          </AnimSection>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setLightboxItem(null)}
          >
            <X size={20} />
          </button>
          <div
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightboxItem.img} alt={lightboxItem.label} className="w-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-t ${lightboxItem.gradient} opacity-50`} />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60">
              <p className="text-white font-bold text-lg">{lightboxItem.label}</p>
              <p className="text-white/70 text-sm">{lightboxItem.cat}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
