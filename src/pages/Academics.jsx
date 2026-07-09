import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Beaker, Calculator, Globe, Palette, TrendingUp } from 'lucide-react';

function AnimSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
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

const programs = [
  {
    level: 'Nursery & Kindergarten',
    range: 'Age 3–5 Years',
    emoji: '🌱',
    color: 'from-pink-500 to-rose-400',
    bg: 'bg-pink-50',
    subjects: ['Rhymes & Stories', 'Basic Numeracy', 'Drawing & Craft', 'Games & Activity', 'Moral Values'],
    desc: 'Activity-based, play-through-learn approach designed to foster creativity, social interaction, language skills, and cognitive development in the early years.',
  },
  {
    level: 'Primary School',
    range: 'Class I – V',
    emoji: '📚',
    color: 'from-blue-500 to-cyan-400',
    bg: 'bg-blue-50',
    subjects: ['English', 'Hindi', 'Mathematics', 'EVS / Science', 'Social Studies', 'Computer Basics'],
    desc: 'A strong foundation in literacy, numeracy, and environmental awareness. Focus on conceptual understanding rather than rote learning.',
  },
  {
    level: 'Middle School',
    range: 'Class VI – VIII',
    emoji: '🔬',
    color: 'from-violet-500 to-purple-400',
    bg: 'bg-violet-50',
    subjects: ['English', 'Hindi', 'Sanskrit', 'Mathematics', 'Science', 'Social Science', 'Computer Science'],
    desc: 'Introduction to departmental teaching with specialised subject teachers. Practical labs, projects, and structured assessments prepare students for board-level learning.',
  },
  {
    level: 'Secondary School',
    range: 'Class IX – X',
    emoji: '✏️',
    color: 'from-amber-500 to-orange-400',
    bg: 'bg-amber-50',
    subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'IT/Computer'],
    desc: 'Comprehensive CBSE Board preparation. Detailed coverage of NCERT syllabus with regular tests, revision sessions, and hands-on lab work.',
  },
  {
    level: 'Senior Secondary',
    range: 'Class XI – XII',
    emoji: '🎓',
    color: 'from-green-500 to-emerald-400',
    bg: 'bg-green-50',
    streams: [
      { name: 'Science', icon: Beaker, subjects: ['Physics', 'Chemistry', 'Biology / Maths', 'English', 'Computer Science / IP'] },
      { name: 'Commerce', icon: TrendingUp, subjects: ['Accountancy', 'Business Studies', 'Economics', 'English', 'Mathematics / IP'] },
      { name: 'Arts/Humanities', icon: Palette, subjects: ['History', 'Political Science', 'Geography', 'English', 'Economics / Hindi'] },
    ],
    desc: 'Career-focused streams with dedicated faculty. Regular board-pattern tests, guidance counselling, and a structured study environment.',
  },
];

const methodology = [
  { icon: BookOpen, title: 'NCERT-Based Learning', desc: 'Complete alignment with NCERT textbooks and CBSE guidelines for all classes.' },
  { icon: Calculator, title: 'Concept-First Approach', desc: 'Teachers prioritize understanding over memorization through interactive sessions.' },
  { icon: Beaker, title: 'Practical Labs', desc: 'Science and computer labs where students apply classroom theory hands-on.' },
  { icon: Globe, title: 'Activity-Based Learning', desc: 'Projects, exhibitions, and co-curricular activities reinforce academic concepts.' },
];

export default function Academics() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1c46] to-[#2a5298] py-20 md:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">CBSE Curriculum</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Academics</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">A complete educational journey from Nursery to Class XII, built on the CBSE framework with a focus on holistic development.</p>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-[#f8f9fc] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <AnimSection className="text-center mb-12">
            <p className="text-[#e8a000] font-semibold text-sm uppercase tracking-widest mb-3">Programs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a6b] gold-underline-center">Our Academic Programs</h2>
          </AnimSection>
          <div className="space-y-8">
            {programs.map((prog, i) => (
              <AnimSection key={prog.level} delay={i * 80}>
                <div className="bg-white rounded-3xl shadow-md overflow-hidden">
                  <div className={`bg-gradient-to-r ${prog.color} p-6 flex items-center gap-4`}>
                    <span className="text-4xl">{prog.emoji}</span>
                    <div>
                      <h3 className="text-white font-extrabold text-xl">{prog.level}</h3>
                      <p className="text-white/80 text-sm">{prog.range}</p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-gray-600 leading-relaxed mb-6">{prog.desc}</p>
                    {prog.subjects && (
                      <div>
                        <p className="text-[#1a3a6b] font-bold text-sm mb-3">Subjects Offered:</p>
                        <div className="flex flex-wrap gap-2">
                          {prog.subjects.map((s) => (
                            <span key={s} className={`${prog.bg} text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full`}>{s}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {prog.streams && (
                      <div className="grid md:grid-cols-3 gap-4 mt-2">
                        {prog.streams.map((stream) => {
                          const Icon = stream.icon;
                          return (
                            <div key={stream.name} className="bg-[#f8f9fc] rounded-2xl p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <Icon size={18} className="text-[#1a3a6b]" />
                                <p className="font-bold text-[#1a3a6b] text-sm">{stream.name} Stream</p>
                              </div>
                              <div className="space-y-1.5">
                                {stream.subjects.map((s) => (
                                  <p key={s} className="text-gray-600 text-xs">• {s}</p>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <AnimSection className="text-center mb-12">
            <p className="text-[#e8a000] font-semibold text-sm uppercase tracking-widest mb-3">How We Teach</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a6b] gold-underline-center">Teaching Methodology</h2>
          </AnimSection>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {methodology.map((m, i) => {
              const Icon = m.icon;
              return (
                <AnimSection key={m.title} delay={i * 100}>
                  <div className="bg-[#f8f9fc] rounded-2xl p-6 text-center card-hover h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1a3a6b] to-[#2a5298] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-yellow-400" />
                    </div>
                    <h3 className="font-bold text-[#1a3a6b] mb-2">{m.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </AnimSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CBSE Info strip */}
      <section className="bg-gradient-to-r from-[#1a3a6b] to-[#2a5298] py-12">
        <div className="max-w-5xl mx-auto px-4">
          <AnimSection>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { label: 'Board', value: 'CBSE — New Delhi' },
                { label: 'Affiliation Code', value: '531268' },
                { label: 'Classes', value: 'Nursery to XII' },
              ].map((item) => (
                <div key={item.label} className="text-white">
                  <p className="text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-2xl font-extrabold">{item.value}</p>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f9fc] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimSection>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a3a6b] mb-4">Interested in Admissions?</h2>
            <p className="text-gray-500 mb-7">Seats filling fast for 2025–26. Secure your child's future today.</p>
            <Link to="/admissions" className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-[#e8a000] to-[#ffb800] text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-all">
              Apply Now <ChevronRight size={20} />
            </Link>
          </AnimSection>
        </div>
      </section>
    </div>
  );
}
