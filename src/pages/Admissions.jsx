import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Calendar, Phone, Mail, ChevronRight, AlertCircle, Clock } from 'lucide-react';

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

const steps = [
  { step: '01', title: 'Visit or Call', desc: 'Contact the school office or visit in person to get the admission form and understand the process.', icon: Phone },
  { step: '02', title: 'Fill the Form', desc: 'Complete the admission application form with accurate student and parent information.', icon: FileText },
  { step: '03', title: 'Submit Documents', desc: 'Attach all required documents (listed below) along with the completed form.', icon: CheckCircle },
  { step: '04', title: 'Confirmation', desc: 'Receive confirmation of admission after verification. Pay the admission fee to secure the seat.', icon: Calendar },
];

const documents = [
  'Birth Certificate (original + photocopy)',
  'Aadhar Card of student and parents',
  'Previous class Transfer Certificate (TC)',
  'Previous class Mark Sheet / Report Card',
  'Passport-size photographs (4–6 copies)',
  'Residence proof (for transport registration)',
  'Medical fitness certificate (for Nursery)',
  'Caste Certificate (if applicable, for category)',
];

const ageEligibility = [
  { class: 'Nursery', age: '3 years as of April 1' },
  { class: 'Kindergarten (KG)', age: '4 years as of April 1' },
  { class: 'Class I', age: '5.5 years as of April 1' },
  { class: 'Class II', age: '6.5 years as of April 1' },
  { class: 'Class III onwards', age: 'As per previous class completion' },
  { class: 'Class IX', age: 'Class VIII pass certificate required' },
  { class: 'Class XI', age: 'Class X (Board) result required' },
];

export default function Admissions() {
  const [formData, setFormData] = useState({ name: '', guardianName: '', phone: '', email: '', class: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', guardianName: '', phone: '', email: '', class: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1c46] to-[#2a5298] py-20 md:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-300 text-sm font-semibold">Admissions Open — 2025–26 Session</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Admissions</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">Join the Bhartiya family. We welcome students for Classes Nursery through XII. Limited seats — apply early!</p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <AnimSection className="text-center mb-12">
            <p className="text-[#e8a000] font-semibold text-sm uppercase tracking-widest mb-3">How to Apply</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a3a6b] gold-underline-center">Admission Process</h2>
          </AnimSection>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <AnimSection key={s.step} delay={i * 100}>
                  <div className="relative bg-[#f8f9fc] rounded-2xl p-6 text-center card-hover h-full">
                    {i < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 right-0 w-6 h-0.5 bg-gray-200 translate-x-3" />
                    )}
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1a3a6b] to-[#2a5298] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                      <Icon size={24} className="text-yellow-400" />
                    </div>
                    <div className="absolute top-4 right-4 text-3xl font-extrabold text-gray-100">{s.step}</div>
                    <h3 className="font-bold text-[#1a3a6b] mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </AnimSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documents + Age Eligibility */}
      <section className="bg-[#f8f9fc] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <AnimSection>
            <div className="bg-white rounded-3xl p-8 shadow-md h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FileText size={22} className="text-blue-600" />
                </div>
                <h2 className="text-xl font-extrabold text-[#1a3a6b]">Documents Required</h2>
              </div>
              <ul className="space-y-3">
                {documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-700 text-xs">Original documents must be presented for verification. Photocopies will be kept on file.</p>
              </div>
            </div>
          </AnimSection>
          <AnimSection delay={150}>
            <div className="bg-white rounded-3xl p-8 shadow-md h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Calendar size={22} className="text-green-600" />
                </div>
                <h2 className="text-xl font-extrabold text-[#1a3a6b]">Age Eligibility</h2>
              </div>
              <div className="space-y-3">
                {ageEligibility.map((item, i) => (
                  <div key={i} className="flex items-center justify-between bg-[#f8f9fc] rounded-xl px-4 py-3">
                    <span className="text-[#1a3a6b] font-semibold text-sm">{item.class}</span>
                    <span className="text-gray-500 text-xs bg-white border border-gray-200 rounded-lg px-3 py-1">{item.age}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <Clock size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-blue-700 text-xs">Age is calculated as of April 1 of the academic year. Contact school for special cases.</p>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <AnimSection className="text-center mb-10">
            <p className="text-[#e8a000] font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
            <h2 className="text-3xl font-extrabold text-[#1a3a6b] gold-underline-center">Admission Enquiry</h2>
            <p className="text-gray-500 mt-6">Fill the form below and our team will call you within 24 hours.</p>
          </AnimSection>
          <AnimSection delay={100}>
            <div className="bg-[#f8f9fc] rounded-3xl p-6 md:p-10 shadow-md">
              {submitted && (
                <div className="mb-6 bg-green-50 border border-green-300 text-green-700 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle size={20} />
                  <p className="font-semibold">Thank you! We'll contact you within 24 hours.</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Student's Name *</label>
                    <input
                      name="name" value={formData.name} onChange={handleChange} required
                      placeholder="Full name of student"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a6b] focus:ring-2 focus:ring-[#1a3a6b]/20 outline-none text-sm bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Parent/Guardian Name *</label>
                    <input
                      name="guardianName" value={formData.guardianName} onChange={handleChange} required
                      placeholder="Father's / Mother's name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a6b] focus:ring-2 focus:ring-[#1a3a6b]/20 outline-none text-sm bg-white transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Phone Number *</label>
                    <input
                      name="phone" value={formData.phone} onChange={handleChange} required type="tel"
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a6b] focus:ring-2 focus:ring-[#1a3a6b]/20 outline-none text-sm bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Email Address</label>
                    <input
                      name="email" value={formData.email} onChange={handleChange} type="email"
                      placeholder="your@email.com (optional)"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a6b] focus:ring-2 focus:ring-[#1a3a6b]/20 outline-none text-sm bg-white transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Applying for Class *</label>
                  <select
                    name="class" value={formData.class} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a6b] focus:ring-2 focus:ring-[#1a3a6b]/20 outline-none text-sm bg-white transition-all"
                  >
                    <option value="">Select class</option>
                    {['Nursery', 'KG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X', 'Class XI (Science)', 'Class XI (Commerce)', 'Class XI (Arts)', 'Class XII (Science)', 'Class XII (Commerce)', 'Class XII (Arts)'].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Message / Query</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} rows={4}
                    placeholder="Any specific questions about admissions, facilities, or fees..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a6b] focus:ring-2 focus:ring-[#1a3a6b]/20 outline-none text-sm bg-white transition-all resize-none"
                  />
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#1a3a6b] to-[#2a5298] text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-base">
                  Submit Enquiry
                </button>
                <p className="text-center text-gray-400 text-xs">Or call us directly at <a href="tel:09416981786" className="text-[#1a3a6b] font-semibold">09416981786</a></p>
              </form>
            </div>
          </AnimSection>
        </div>
      </section>
    </div>
  );
}
