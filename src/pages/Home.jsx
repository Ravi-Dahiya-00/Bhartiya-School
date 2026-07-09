import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Monitor, Trophy, Bus, Shield, Utensils, Users, Music,
  ChevronRight, Star, Phone, ArrowRight, Award, GraduationCap, Heart
} from 'lucide-react';

// ─── Counter hook ────────────────────────────────────────────────
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Intersection Observer hook ──────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Animated section wrapper ────────────────────────────────────
function AnimSection({ children, className = '', delay = 0 }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Stats data ──────────────────────────────────────────────────
const stats = [
  { label: 'Years of Excellence', value: 37, suffix: '+', icon: Award },
  { label: 'Library Books', value: 4000, suffix: '+', icon: BookOpen },
  { label: 'Classrooms', value: 30, suffix: '+', icon: GraduationCap },
  { label: 'Activities Offered', value: 10, suffix: '+', icon: Heart },
];

// ─── Programs ────────────────────────────────────────────────────
const programs = [
  { title: 'Nursery & KG', range: 'Age 3–5', desc: 'Playful, activity-based early learning that nurtures curiosity and social skills.', color: 'from-pink-500 to-rose-400', icon: '🌱' },
  { title: 'Primary (I–V)', range: 'Age 6–10', desc: 'Strong foundational learning in core subjects with creative and physical development.', color: 'from-blue-500 to-cyan-400', icon: '📚' },
  { title: 'Middle (VI–VIII)', range: 'Age 11–13', desc: 'Conceptual learning with introduction to science, math, and social sciences.', color: 'from-violet-500 to-purple-400', icon: '🔬' },
  { title: 'Secondary (IX–X)', range: 'Age 14–15', desc: 'CBSE Board preparation with comprehensive subject expertise and practical labs.', color: 'from-amber-500 to-orange-400', icon: '✏️' },
  { title: 'Sr. Secondary (XI–XII)', range: 'Age 16–17', desc: 'Science, Commerce & Arts streams with career guidance and board excellence.', color: 'from-green-500 to-emerald-400', icon: '🎓' },
];

// ─── Facilities ──────────────────────────────────────────────────
const facilities = [
  { name: 'Library', desc: '4,000+ books', icon: BookOpen, bg: 'bg-blue-50', color: 'text-blue-600', ring: 'ring-blue-200' },
  { name: 'Computer Lab', desc: 'Modern IT facility', icon: Monitor, bg: 'bg-violet-50', color: 'text-violet-600', ring: 'ring-violet-200' },
  { name: 'Sports', desc: 'Indoor & outdoor', icon: Trophy, bg: 'bg-amber-50', color: 'text-amber-600', ring: 'ring-amber-200' },
  { name: 'Transport', desc: 'Safe school buses', icon: Bus, bg: 'bg-green-50', color: 'text-green-600', ring: 'ring-green-200' },
  { name: 'CCTV Security', desc: '24/7 surveillance', icon: Shield, bg: 'bg-red-50', color: 'text-red-600', ring: 'ring-red-200' },
  { name: 'Cafeteria', desc: 'Hygienic meals', icon: Utensils, bg: 'bg-orange-50', color: 'text-orange-600', ring: 'ring-orange-200' },
  { name: 'NCC / Scouts', desc: 'Discipline & leadership', icon: Users, bg: 'bg-teal-50', color: 'text-teal-600', ring: 'ring-teal-200' },
  { name: 'Arts & Music', desc: 'Cultural excellence', icon: Music, bg: 'bg-pink-50', color: 'text-pink-600', ring: 'ring-pink-200' },
];

// ─── Why choose us ────────────────────────────────────────────────
const pillars = [
  {
    icon: Award, title: 'CBSE Excellence',
    desc: 'Affiliated with CBSE (Code: 531268), we deliver a rigorous, nationally recognized curriculum with a focus on conceptual understanding and board results.',
    color: 'bg-blue-600',
  },
  {
    icon: Heart, title: 'Holistic Development',
    desc: 'Beyond academics — yoga, sports, NCC, music, dance, science exhibitions, and cultural activities ensure every child grows into a well-rounded individual.',
    color: 'bg-amber-500',
  },
  {
    icon: Shield, title: 'Safe Environment',
    desc: 'CCTV surveillance, trained staff, and a secure 8,498 sq.m. campus ensure every child is safe, supervised, and cared for throughout the school day.',
    color: 'bg-green-600',
  },
];

// ─── Gallery preview images ───────────────────────────────────────
const galleryPreviews = [
  { bg: 'from-blue-400 to-blue-700', label: 'Campus', img: '/images/school-photo-2.jpg' },
  { bg: 'from-green-400 to-emerald-700', label: 'Sports', img: '/images/school-photo-4.jpg' },
  { bg: 'from-purple-400 to-violet-700', label: 'Events', img: '/images/school-photo-1.jpg' },
  { bg: 'from-amber-400 to-orange-600', label: 'Cultural', img: '/images/school-photo-3.jpg' },
  { bg: 'from-pink-400 to-rose-600', label: 'Campus Life', img: '/images/school-photo-6.jpg' },
  { bg: 'from-teal-400 to-cyan-700', label: 'Classrooms', img: '/images/school-photo-7.jpg' },
];

// ─── Announcements ────────────────────────────────────────────────
const announcements = [
  '🎉 Admissions Open for 2025–26 Session',
  '📢 CBSE Affiliated School | Code: 531268',
  '🏆 Classes Nursery to XII',
  '📍 Village Nangal, P.O. Mundi, Rewari, Haryana',
  '📞 Call: 09416981786 for Admission Enquiry',
];

// ═══════════════════════════════════════════════════════════════════
export default function Home() {
  const { ref: statsRef, inView: statsVisible } = useInView(0.3);

  const c0 = useCounter(stats[0].value, 2000, statsVisible);
  const c1 = useCounter(stats[1].value, 2500, statsVisible);
  const c2 = useCounter(stats[2].value, 1500, statsVisible);
  const c3 = useCounter(stats[3].value, 1800, statsVisible);
  const counts = [c0, c1, c2, c3];

  return (
    <div className="overflow-x-hidden">

      {/* ──────── ANNOUNCEMENT TICKER ──────── */}
      <div className="bg-gradient-to-r from-[#e8a000] to-[#ffb800] py-2 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...announcements, ...announcements].map((a, i) => (
            <span key={i} className="text-white font-semibold text-sm px-8">{a}</span>
          ))}
        </div>
      </div>

      {/* ──────── HERO SECTION ──────── */}
      <section
        className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a1c46 0%, #1a3a6b 60%, #2a5298 100%)' }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url('/school-hero.png')` }}
        />
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-yellow-400/10 blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Hero text */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium text-yellow-100">CBSE Affiliated Since 1988</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Shaping<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">Tomorrow's</span><br />
              Leaders
            </h1>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Bhartiya Sr. Sec. School — nurturing young minds in Nangal Mundi, Rewari since 1988 with holistic CBSE education from Nursery to Class XII.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#e8a000] to-[#ffb800] text-white font-bold rounded-xl shadow-xl hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300 text-sm md:text-base"
              >
                Apply for Admission <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/25 transition-all duration-300 text-sm md:text-base"
              >
                Learn More <ChevronRight size={18} />
              </Link>
            </div>
            {/* Contact quick */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:09416981786" className="flex items-center gap-2 text-blue-200 hover:text-white text-sm transition-colors">
                <Phone size={15} className="text-yellow-400" /> 09416981786
              </a>
            </div>
          </div>

          {/* Hero card */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
              <img src="/school-hero.png" alt="Bhartiya School Campus" className="rounded-2xl w-full object-cover h-64 mb-5" />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Est.', value: '1988' },
                  { label: 'Affiliation', value: 'CBSE' },
                  { label: 'Classes', value: 'Nur–XII' },
                  { label: 'Code', value: '531268' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="text-yellow-400 text-xs font-semibold">{item.label}</p>
                    <p className="text-white font-bold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 40L0 60Z" fill="#f8f9fc" />
          </svg>
        </div>
      </section>

      {/* ──────── STATS ──────── */}
      <section ref={statsRef} className="bg-[#f8f9fc] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className={`bg-white rounded-2xl p-5 md:p-7 text-center shadow-md card-hover transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1a3a6b] to-[#2a5298] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon size={22} className="text-yellow-400" />
                  </div>
                  <p className="text-3xl md:text-4xl font-extrabold text-[#1a3a6b]">
                    {counts[i]}{stat.suffix}
                  </p>
                  <p className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────── ABOUT SNIPPET ──────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <AnimSection>
            <div className="relative">
              <img src="/images/school-photo-8.jpg" alt="Bhartiya School" loading="lazy" className="rounded-3xl w-full object-cover h-80 md:h-96 shadow-xl" />
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-[#e8a000] to-[#ffb800] rounded-2xl p-5 shadow-xl">
                <p className="text-white font-extrabold text-3xl">37+</p>
                <p className="text-yellow-100 text-xs font-semibold">Years of Excellence</p>
              </div>
              <div className="absolute -top-5 -left-5 bg-[#1a3a6b] rounded-2xl p-4 shadow-xl">
                <p className="text-yellow-400 text-xs font-bold">CBSE Affiliated</p>
                <p className="text-white text-sm font-semibold">Code: 531268</p>
              </div>
            </div>
          </AnimSection>
          <AnimSection delay={150}>
            <p className="text-[#e8a000] font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a6b] mb-2 gold-underline">
              Bhartiya Sr. Sec. School
            </h2>
            <p className="text-gray-500 text-sm mb-6">Nangal Mundi, Rewari, Haryana</p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Established in <strong>1988</strong> under the management of <strong>Deepak Shiksha Samiti</strong>, Bhartiya Senior Secondary School has been a pillar of quality education in the Rewari district of Haryana for over three decades.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Situated on a sprawling <strong>8,498 sq.m. campus</strong>, we offer a nurturing environment for children from Nursery through Class XII, guided by the CBSE curriculum and a commitment to holistic development.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1a3a6b] text-white font-semibold rounded-xl hover:bg-[#2a5298] transition-colors text-sm">
                Our Story <ChevronRight size={16} />
              </Link>
              <Link to="/admissions" className="inline-flex items-center gap-2 px-5 py-3 border-2 border-[#1a3a6b] text-[#1a3a6b] font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm">
                Admissions <ChevronRight size={16} />
              </Link>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ──────── PROGRAMS ──────── */}
      <section className="bg-[#f8f9fc] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <AnimSection className="text-center mb-12">
            <p className="text-[#e8a000] font-semibold text-sm uppercase tracking-widest mb-3">Curriculum</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a6b] gold-underline-center">Academic Programs</h2>
            <p className="text-gray-500 mt-6 max-w-xl mx-auto">From early childhood to senior secondary — a complete CBSE journey under one roof.</p>
          </AnimSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {programs.map((prog, i) => (
              <AnimSection key={prog.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-md card-hover h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-2xl mb-4 shadow-md`}>
                    {prog.icon}
                  </div>
                  <h3 className="font-bold text-[#1a3a6b] text-base mb-1">{prog.title}</h3>
                  <p className="text-xs text-[#e8a000] font-semibold mb-3">{prog.range}</p>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{prog.desc}</p>
                  <Link to="/academics" className="mt-4 text-[#1a3a6b] text-sm font-semibold flex items-center gap-1 hover:text-[#e8a000] transition-colors">
                    Learn more <ChevronRight size={14} />
                  </Link>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── FACILITIES ──────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <AnimSection className="text-center mb-12">
            <p className="text-[#e8a000] font-semibold text-sm uppercase tracking-widest mb-3">Infrastructure</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a6b] gold-underline-center">World-Class Facilities</h2>
            <p className="text-gray-500 mt-6 max-w-xl mx-auto">Modern infrastructure designed to support every dimension of a child's growth.</p>
          </AnimSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {facilities.map((fac, i) => {
              const Icon = fac.icon;
              return (
                <AnimSection key={fac.name} delay={i * 60}>
                  <div className={`${fac.bg} rounded-2xl p-5 text-center card-hover ring-2 ${fac.ring} ring-opacity-0 hover:ring-opacity-100 transition-all`}>
                    <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md`}>
                      <Icon size={22} className={fac.color} />
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm">{fac.name}</h3>
                    <p className="text-gray-500 text-xs mt-1">{fac.desc}</p>
                  </div>
                </AnimSection>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/facilities" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a3a6b] text-white font-semibold rounded-xl hover:bg-[#2a5298] transition-colors">
              View All Facilities <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ──────── WHY CHOOSE US ──────── */}
      <section className="bg-gradient-to-br from-[#0a1c46] to-[#1a3a6b] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4">
          <AnimSection className="text-center mb-12">
            <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">Why We're Different</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why Choose Bhartiya School?</h2>
          </AnimSection>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <AnimSection key={pillar.title} delay={i * 120}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-7 hover:bg-white/15 transition-all duration-300">
                    <div className={`w-14 h-14 ${pillar.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                      <Icon size={26} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3">{pillar.title}</h3>
                    <p className="text-blue-200 leading-relaxed text-sm">{pillar.desc}</p>
                  </div>
                </AnimSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────── PRINCIPAL'S MESSAGE ──────── */}
      <section className="bg-[#f8f9fc] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <AnimSection>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a3a6b] to-[#2a5298] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                <GraduationCap size={34} className="text-yellow-400" />
              </div>
              <div className="flex items-center justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed italic mb-6 max-w-2xl mx-auto">
                "At Bhartiya Senior Secondary School, we believe every child is unique and carries infinite potential. Our mission is not just to teach, but to inspire — to kindle the flame of curiosity, discipline, and character in every student who walks through our doors."
              </blockquote>
              <div className="w-16 h-1 bg-gradient-to-r from-[#e8a000] to-[#ffb800] mx-auto rounded mb-5" />
              <p className="font-bold text-[#1a3a6b] text-lg">Mr. Kamal Singh</p>
              <p className="text-gray-500 text-sm">Principal, Bhartiya Sr. Sec. School</p>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ──────── GALLERY PREVIEW ──────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <AnimSection className="text-center mb-12">
            <p className="text-[#e8a000] font-semibold text-sm uppercase tracking-widest mb-3">Campus Life</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a6b] gold-underline-center">Gallery</h2>
          </AnimSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreviews.map((item, i) => (
              <AnimSection key={item.label} delay={i * 80}>
                <div className={`relative rounded-2xl overflow-hidden h-40 md:h-56 bg-gradient-to-br ${item.bg} group cursor-pointer`}>
                  <img
                    src={item.img}
                    alt={item.label}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="bg-white/90 text-[#1a3a6b] font-semibold text-sm px-3 py-1 rounded-lg">
                      {item.label}
                    </span>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1a3a6b] text-[#1a3a6b] font-semibold rounded-xl hover:bg-[#1a3a6b] hover:text-white transition-all">
              View Full Gallery <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ──────── ADMISSION CTA ──────── */}
      <section className="bg-gradient-to-r from-[#e8a000] to-[#ffb800] py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimSection>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Admissions Open for 2025–26
            </h2>
            <p className="text-yellow-100 text-lg mb-8 max-w-xl mx-auto">
              Give your child the best foundation for life. Seats are limited — apply today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#1a3a6b] text-white font-bold rounded-xl shadow-lg hover:bg-[#0f2447] hover:scale-105 transition-all text-base"
              >
                Apply Now <ArrowRight size={20} />
              </Link>
              <a
                href="tel:09416981786"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#e8a000] font-bold rounded-xl shadow-lg hover:scale-105 transition-all text-base"
              >
                <Phone size={20} /> Call Us
              </a>
            </div>
          </AnimSection>
        </div>
      </section>
    </div>
  );
}
