import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageCircle } from 'lucide-react';

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

const contactInfo = [
  {
    icon: MapPin, title: 'School Address', color: 'text-blue-600', bg: 'bg-blue-50',
    content: 'Village Nangal, P.O. Mundi,\nDistrict Rewari, Haryana – 123411',
    link: 'https://maps.google.com/?q=Bhartiya+Sr+Sec+School+Nangal+Mundi+Rewari',
    linkText: 'View on Maps',
  },
  {
    icon: Phone, title: 'Phone Numbers', color: 'text-green-600', bg: 'bg-green-50',
    content: '09416981786\n9728861849',
    link: 'tel:09416981786',
    linkText: 'Call Now',
  },
  {
    icon: Mail, title: 'Email Address', color: 'text-purple-600', bg: 'bg-purple-50',
    content: 'bhartiyaschool@yahoo.com',
    link: 'mailto:bhartiyaschool@yahoo.com',
    linkText: 'Send Email',
  },
  {
    icon: Clock, title: 'Office Hours', color: 'text-amber-600', bg: 'bg-amber-50',
    content: 'Mon – Sat: 8:00 AM – 2:30 PM\nSunday: Closed',
    link: null,
    linkText: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a1c46] to-[#2a5298] py-20 md:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">We'd love to hear from you. Reach out for admission enquiries, general questions, or to schedule a campus visit.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <AnimSection key={info.title} delay={i * 80}>
                  <div className="bg-[#f8f9fc] rounded-2xl p-6 text-center card-hover h-full flex flex-col items-center">
                    <div className={`w-14 h-14 ${info.bg} rounded-2xl flex items-center justify-center mb-4`}>
                      <Icon size={24} className={info.color} />
                    </div>
                    <h3 className="font-bold text-[#1a3a6b] mb-2">{info.title}</h3>
                    <p className="text-gray-600 text-sm whitespace-pre-line mb-3">{info.content}</p>
                    {info.link && (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`mt-auto text-sm font-semibold ${info.color} hover:underline`}
                      >
                        {info.linkText} →
                      </a>
                    )}
                  </div>
                </AnimSection>
              );
            })}
          </div>

          {/* Form + Map */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <AnimSection>
              <div className="bg-[#f8f9fc] rounded-3xl p-7 shadow-md">
                <h2 className="text-2xl font-extrabold text-[#1a3a6b] mb-6 gold-underline">Send a Message</h2>
                {submitted && (
                  <div className="mb-5 bg-green-50 border border-green-300 text-green-700 rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle size={20} />
                    <p className="font-semibold text-sm">Message sent! We'll reply within 24 hours.</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wide">Your Name *</label>
                      <input
                        name="name" value={formData.name} onChange={handleChange} required
                        placeholder="Full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a6b] focus:ring-2 focus:ring-[#1a3a6b]/20 outline-none text-sm bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wide">Phone *</label>
                      <input
                        name="phone" value={formData.phone} onChange={handleChange} required type="tel"
                        placeholder="Mobile number"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a6b] focus:ring-2 focus:ring-[#1a3a6b]/20 outline-none text-sm bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wide">Email</label>
                    <input
                      name="email" value={formData.email} onChange={handleChange} type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a6b] focus:ring-2 focus:ring-[#1a3a6b]/20 outline-none text-sm bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wide">Subject *</label>
                    <select
                      name="subject" value={formData.subject} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a6b] focus:ring-2 focus:ring-[#1a3a6b]/20 outline-none text-sm bg-white transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option>Admission Enquiry</option>
                      <option>Fee Structure</option>
                      <option>Campus Visit Request</option>
                      <option>Transport Information</option>
                      <option>General Query</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-600 mb-1.5 block uppercase tracking-wide">Message *</label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange} required rows={5}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a3a6b] focus:ring-2 focus:ring-[#1a3a6b]/20 outline-none text-sm bg-white transition-all resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#1a3a6b] to-[#2a5298] text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all text-base">
                    Send Message
                  </button>
                </form>
              </div>
            </AnimSection>

            {/* Map + Quick Actions */}
            <AnimSection delay={150}>
              <div className="space-y-5 h-full flex flex-col">
                {/* Google Maps Embed */}
                <div className="flex-1 rounded-3xl overflow-hidden shadow-md min-h-64">
                  <iframe
                    title="Bhartiya School Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.439271155008!2d76.48642217552892!3d28.254694275873213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d58e6b8eb8c6d%3A0x6957ada25fe25b51!2sBhartiya%20School-%20Nangal%20Mundi!5e0!3m2!1sen!2sin!4v1783622951369!5m2!1sen!2sin"
                    width="100%" height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-64"
                  />
                </div>

                {/* Quick actions */}
                <div className="bg-[#f8f9fc] rounded-2xl p-6 shadow-md">
                  <h3 className="font-bold text-[#1a3a6b] mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:09416981786"
                      className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-gray-200 hover:border-[#1a3a6b] hover:bg-blue-50 transition-all group"
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone size={18} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-800">Call Directly</p>
                        <p className="text-gray-400 text-xs">09416981786</p>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/919416981786?text=Hello, I'm interested in admissions at Bhartiya Sr. Sec. School."
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group"
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <MessageCircle size={18} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-800">WhatsApp Us</p>
                        <p className="text-gray-400 text-xs">Quick response guaranteed</p>
                      </div>
                    </a>
                    <a
                      href="mailto:bhartiyaschool@yahoo.com"
                      className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all group"
                    >
                      <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail size={18} className="text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-800">Send Email</p>
                        <p className="text-gray-400 text-xs">bhartiyaschool@yahoo.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* WhatsApp floating */}
      <a
        href="https://wa.me/919416981786?text=Hello, I'd like to enquire about admissions."
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl whatsapp-float hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white fill-white" />
      </a>
    </div>
  );
}
