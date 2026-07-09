import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Monitor, Trophy, Bus, Shield, Utensils, Users, Music, Dumbbell, HeartPulse, ChevronRight } from 'lucide-react';

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

const facilities = [
  {
    icon: BookOpen, name: 'Library', color: 'text-blue-600', bg: 'bg-blue-100', gradient: 'from-blue-500 to-blue-700',
    details: ['4,000+ books across all subjects', 'Reference and NCERT textbooks', 'Newspapers & periodicals', 'Comfortable reading environment', 'CBSE exam study resources'],
    desc: 'Our well-stocked library is the intellectual heart of our school. With over 4,000 books covering all CBSE subjects, fiction, science, and general knowledge, students have everything they need for academic and personal enrichment.',
  },
  {
    icon: Monitor, name: 'Computer Lab', color: 'text-violet-600', bg: 'bg-violet-100', gradient: 'from-violet-500 to-purple-700',
    details: ['Modern computer workstations', 'Internet & broadband access', 'Trained IT faculty', 'Updated software for all classes', 'Digital learning resources'],
    desc: 'Our fully equipped computer lab ensures students gain essential digital literacy skills from an early age. Students from Class VI onwards receive structured computer science education aligned with CBSE.',
  },
  {
    icon: Trophy, name: 'Sports & Playground', color: 'text-amber-600', bg: 'bg-amber-100', gradient: 'from-amber-500 to-orange-600',
    details: ['Outdoor sports ground', 'Indoor games facility', 'Cricket, football, volleyball', 'Athletics & track', 'Annual sports day celebrations'],
    desc: 'Physical fitness is central to our vision. Our spacious grounds support a variety of sports. Students participate in inter-school tournaments, district competitions, and annual sports meets.',
  },
  {
    icon: Bus, name: 'Transport', color: 'text-green-600', bg: 'bg-green-100', gradient: 'from-green-500 to-emerald-700',
    details: ['Safe school bus service', 'Multiple routes covering nearby villages', 'Trained drivers & attendants', 'GPS-tracked vehicles', 'Timely pick-up & drop service'],
    desc: 'Our reliable transport service connects students from Nangal Mundi, Rewari, and surrounding villages. Safety is our top priority — all vehicles are maintained and operate under supervision.',
  },
  {
    icon: Shield, name: 'CCTV & Security', color: 'text-red-600', bg: 'bg-red-100', gradient: 'from-red-500 to-rose-700',
    details: ['CCTV cameras across campus', '24/7 surveillance system', 'Secure campus perimeter', 'Gated entry with security personnel', 'Regular safety drills'],
    desc: 'Every corner of our 8,498 sq.m. campus is under CCTV surveillance. Parents can rest assured that their children are safe within our secure, monitored environment throughout the school day.',
  },

  {
    icon: Users, name: 'NCC / Scouts & Guides', color: 'text-teal-600', bg: 'bg-teal-100', gradient: 'from-teal-500 to-cyan-700',
    details: ['NCC enrollment for eligible students', 'Scouts & Guides programs', 'Leadership & discipline training', 'Community service activities', 'National-level competitions'],
    desc: 'NCC and Scout/Guide programs build discipline, leadership, and a sense of national pride. Participants gain life skills, team spirit, and experiences that last a lifetime.',
  },
  {
    icon: Music, name: 'Arts & Music', color: 'text-pink-600', bg: 'bg-pink-100', gradient: 'from-pink-500 to-rose-600',
    details: ['Music & vocal training', 'Dance (classical & folk)', 'Drawing & painting', 'Cultural events & competitions', 'Annual day celebrations'],
    desc: 'Creative arts education ensures every student discovers and expresses their unique talents. Our annual cultural programs, inter-school competitions, and arts exhibitions showcase student creativity.',
  },
  {
    icon: Dumbbell, name: 'Yoga & Wellness', color: 'text-indigo-600', bg: 'bg-indigo-100', gradient: 'from-indigo-500 to-violet-700',
    details: ['Daily yoga sessions', 'Mindfulness & meditation', 'Physical & mental wellbeing', 'Qualified yoga instructor', 'Stress management for students'],
    desc: 'Regular yoga and wellness programs help students build physical health, mental focus, and emotional resilience — essential skills for succeeding in academics and life.',
  },
  {
    icon: HeartPulse, name: 'Medical Facility', color: 'text-rose-600', bg: 'bg-rose-100', gradient: 'from-rose-500 to-red-600',
    details: ['First aid room on campus', 'Trained medical attendant', 'Emergency response plan', 'Regular health check-ups', 'Parent notification system'],
    desc: 'The school maintains a dedicated first-aid room with a trained medical attendant. Emergency procedures and parent communication protocols are in place to ensure immediate care when needed.',
  },
];

export default function Facilities() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1c46] to-[#2a5298] py-20 md:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">Infrastructure</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Facilities</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">A modern, fully-equipped campus designed to nurture every aspect of a student's growth — academic, physical, creative, and social.</p>
        </div>
      </section>

      {/* Facilities grid */}
      <section className="bg-[#f8f9fc] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-10">
            {facilities.map((fac, i) => {
              const Icon = fac.icon;
              const isEven = i % 2 === 0;
              return (
                <AnimSection key={fac.name} delay={80}>
                  <div className={`bg-white rounded-3xl shadow-md overflow-hidden grid md:grid-cols-2 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Left / image side */}
                    <div className={`bg-gradient-to-br ${fac.gradient} p-10 flex flex-col items-center justify-center text-white text-center ${!isEven ? 'md:order-2' : ''}`}>
                      <div className={`w-20 h-20 ${fac.bg} bg-opacity-20 rounded-2xl flex items-center justify-center mb-4`}>
                        <Icon size={36} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-extrabold mb-4">{fac.name}</h3>
                      <ul className="space-y-2">
                        {fac.details.map((d) => (
                          <li key={d} className="text-white/85 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/80 flex-shrink-0" /> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Right / content side */}
                    <div className={`p-8 md:p-10 flex flex-col justify-center ${!isEven ? 'md:order-1' : ''}`}>
                      <div className={`inline-flex items-center gap-2 ${fac.bg} rounded-xl px-4 py-2 mb-5 w-fit`}>
                        <Icon size={18} className={fac.color} />
                        <span className={`${fac.color} font-bold text-sm`}>{fac.name}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-base">{fac.desc}</p>
                    </div>
                  </div>
                </AnimSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#e8a000] to-[#ffb800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimSection>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Experience Our Campus</h2>
            <p className="text-yellow-100 mb-7">Visit our school to see these facilities in person. Schedule a campus tour today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#1a3a6b] font-bold rounded-xl shadow-lg hover:scale-105 transition-all">
                Schedule a Visit <ChevronRight size={18} />
              </Link>
              <Link to="/admissions" className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1a3a6b] text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-all">
                Apply Now <ChevronRight size={18} />
              </Link>
            </div>
          </AnimSection>
        </div>
      </section>
    </div>
  );
}
