import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle, Users, BookOpen, Award, Target, Eye } from 'lucide-react';

function AnimSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.15 }
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

const milestones = [
  { year: '1988', event: 'School founded under Deepak Shiksha Samiti in Village Nangal, Rewari' },
  { year: '1995', event: 'Expanded campus to accommodate growing student population' },
  { year: '2003', event: 'Received CBSE affiliation — a landmark in academic recognition' },
  { year: '2010', event: 'Inaugurated new computer lab and modern library wing' },
  { year: '2018', event: 'Celebrated 30 years of excellence in education' },
  { year: '2024', event: 'Expanded Sr. Secondary programs with updated CBSE curriculum' },
];

const values = [
  { icon: Target, label: 'Mission', text: 'To provide quality, accessible education that empowers every child with knowledge, values, and skills for a successful life.' },
  { icon: Eye, label: 'Vision', text: 'A world where every child from Nangal Mundi and beyond has the opportunity to learn, grow, and lead with confidence.' },
  { icon: Award, label: 'Values', text: 'Integrity, discipline, innovation, respect, and inclusive excellence — the pillars of our educational philosophy.' },
];

export default function About() {
  return (
    <div>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#0a1c46] to-[#2a5298] py-20 md:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">Over 37 years of shaping character, building futures, and nurturing excellence in the heart of Rewari, Haryana.</p>
        </div>
      </section>

      {/* About content */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <AnimSection>
            <img src="/images/school-photo-9.jpg" alt="School" loading="lazy" className="rounded-3xl shadow-xl w-full object-cover h-80 md:h-96" />
          </AnimSection>
          <AnimSection delay={150}>
            <p className="text-[#e8a000] font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="text-3xl font-extrabold text-[#1a3a6b] mb-5 gold-underline">A Legacy of Education</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in <strong>1988</strong> by the <strong>Kamal Singh Yadav</strong>, Bhartiya Senior Secondary School stands as a cornerstone of quality education in Village Nangal, P.O. Mundi, District Rewari, Haryana. Our school is affiliated with the Central Board of Secondary Education (CBSE) and offers classes from Nursery to Class XII.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Spread across a campus of approximately <strong>8,498 square meters</strong>, we have grown from humble beginnings into a thriving institution with 30+ classrooms, a library of over 4,000 books, computer labs, and a range of facilities that support every aspect of a child's development.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              Under the leadership of <strong>Principal Mr. Kamal Singh</strong>, our dedicated faculty of trained teachers strives to deliver the best of CBSE education while instilling strong values and a love for learning in every student.
            </p>
            <div className="flex flex-col gap-3">
              {['CBSE Affiliated — Affiliation Code: 531268', 'Classes from Nursery to Class XII', 'Managed by Deepak Shiksha Samiti', '8,498 sq.m. secure campus'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="bg-[#f8f9fc] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <AnimSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a6b] gold-underline-center">Our Core Philosophy</h2>
          </AnimSection>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimSection key={v.label} delay={i * 120}>
                  <div className="bg-white rounded-2xl p-8 shadow-md card-hover text-center h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1a3a6b] to-[#2a5298] rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <Icon size={26} className="text-yellow-400" />
                    </div>
                    <h3 className="text-[#1a3a6b] font-bold text-xl mb-3">{v.label}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
                  </div>
                </AnimSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="bg-gradient-to-br from-[#1a3a6b] to-[#2a5298] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <AnimSection>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#e8a000] to-[#ffb800] rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl">
                <Users size={32} className="text-white" />
              </div>
              <p className="text-yellow-300 font-semibold text-sm uppercase tracking-widest mb-5">Principal's Message</p>
              <blockquote className="text-white text-lg md:text-xl leading-relaxed italic mb-6">
                "Education is not merely the transfer of knowledge — it is the transformation of a young mind into a thoughtful, resilient, and compassionate individual. At Bhartiya Senior Secondary School, we have dedicated ourselves for over three decades to this transformation. Every student who enters our school carries unlimited potential, and our responsibility is to help them discover, nurture, and channel that potential toward a bright and purposeful future."
              </blockquote>
              <div className="w-16 h-1 bg-gradient-to-r from-[#e8a000] to-[#ffb800] mx-auto rounded mb-5" />
              <p className="text-white font-bold text-xl">Mr. Kamal Singh</p>
              <p className="text-blue-200 text-sm mt-1">Principal, Bhartiya Sr. Sec. School</p>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <AnimSection className="text-center mb-12">
            <p className="text-[#e8a000] font-semibold text-sm uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a6b] gold-underline-center">School Milestones</h2>
          </AnimSection>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1a3a6b] to-[#e8a000]" />
            {milestones.map((m, i) => (
              <AnimSection key={m.year} delay={i * 100}>
                <div className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 hidden md:block" />
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1a3a6b] to-[#2a5298] rounded-full flex items-center justify-center z-10 flex-shrink-0 shadow-lg">
                    <span className="text-yellow-400 text-xs font-bold">{m.year.slice(2)}</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-[#f8f9fc] rounded-2xl p-5 shadow-md">
                      <p className="text-[#e8a000] font-bold text-sm mb-1">{m.year}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f9fc] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimSection>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a3a6b] mb-4">Ready to Join Our Family?</h2>
            <p className="text-gray-500 mb-7">Admissions for 2025–26 are now open. Take the first step toward your child's bright future.</p>
            <Link to="/admissions" className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-[#e8a000] to-[#ffb800] text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-all">
              Apply for Admission <ChevronRight size={20} />
            </Link>
          </AnimSection>
        </div>
      </section>
    </div>
  );
}
