import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { 
  GraduationCap, Award, BookOpen, Download, Mail, MapPin, 
  Linkedin, Github, ArrowUpRight, CheckCircle2, Globe
} from 'lucide-react';

export const EducationCertPub = () => {
  const { education, certifications, publication } = PORTFOLIO_DATA;

  return (
    <section id="academic" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Education & Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-12 mb-4">
             <span className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-blue mb-4 block">Foundations</span>
             <h2 className="text-4xl md:text-5xl font-sans font-black text-brand-dark">Education & Research</h2>
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-sans font-bold flex items-center gap-3 text-slate-400">
              <GraduationCap className="w-5 h-5" /> Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="glass-card p-8 group hover:border-brand-blue/20">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-black text-brand-blue mb-2 block">{edu.year}</span>
                      <h4 className="text-xl font-sans font-bold text-brand-dark">{edu.degree}</h4>
                      <div className="text-slate-500 font-bold text-sm mt-1">{edu.university} <span className="text-slate-300 font-normal">| {edu.location}</span></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.areas.map(area => (
                      <span key={area} className="px-2 py-1 bg-slate-50 text-slate-400 rounded-md text-[10px] font-bold uppercase tracking-wider">{area}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-sans font-bold flex items-center gap-3 text-slate-400">
              <BookOpen className="w-5 h-5" /> Publication
            </h3>
            <div className="glass-card p-8 bg-brand-dark text-white border-none shadow-2xl">
              <span className="text-[10px] uppercase tracking-widest font-black text-brand-blue mb-4 block">{publication.year}</span>
              <h4 className="text-xl font-sans font-bold mb-4 italic leading-tight text-slate-100 underline decoration-brand-blue/40 underline-offset-8">
                {publication.title}
              </h4>
              <div className="text-slate-400 font-bold text-sm mb-6">{publication.journal}</div>
              <p className="text-slate-500 text-sm italic mb-8 leading-relaxed">
                "{publication.description}"
              </p>
              {publication.link && (
                <a href={publication.link} className="inline-flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-[0.2em] group">
                  Read Full Paper <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="pt-12 border-t border-slate-100">
           <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
              <h3 className="text-xl font-sans font-bold flex items-center gap-3 text-slate-400">
                <Award className="w-5 h-5" /> Certifications
              </h3>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="glass-card p-6 flex flex-col justify-between hover:scale-[1.05] transition-transform">
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark mb-2 leading-snug">{cert.name}</h4>
                    <div className="text-xs text-brand-blue font-black uppercase tracking-widest leading-relaxed">{cert.provider}</div>
                  </div>
                  <span className="text-[10px] font-black text-slate-300 mt-6 uppercase tracking-widest">{cert.year}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export const ResumeAndContact = () => {
  const { identity } = PORTFOLIO_DATA;

  return (
    <>
      <section id="publication" className="bg-slate-50 section-padding">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-white rounded-[3rem] p-12 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10">
               <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-4 block">Official Documents</span>
               <h2 className="text-4xl md:text-5xl font-sans font-black text-brand-dark mb-6">Need my Curriculum Vitae?</h2>
               <p className="text-slate-500 mb-0 text-lg font-medium max-w-xl">
                 Download my latest resume to view my professional journey, detailed technical skills, and practical project impact.
               </p>
            </div>
            <a href={identity.resumeUrl} target="_blank" rel="noreferrer" className="relative z-10 px-10 py-6 bg-brand-dark text-white rounded-2xl font-bold flex items-center gap-4 hover:bg-brand-blue transition-all group scale-110 md:scale-125">
               <Download className="w-6 h-6" /> Download PDF Resume 
            </a>
            {/* Visual fluff */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full translate-x-1/2 -translate-y-1/2 -z-0"></div>
         </div>
      </section>

      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-blue mb-4 block">Collaboration</span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-brand-dark mb-8">Let's solve <br /> real problems.</h2>
            <p className="text-slate-500 text-lg font-medium mb-12">
              Interested in discussing an AI, cybersecurity AI, GenAI, or machine learning project? Feel free to contact me.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-center group">
                <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Email Address</div>
                  <a href={`mailto:${identity.email}`} className="text-xl font-sans font-bold text-brand-dark hover:text-brand-blue transition-colors underline decoration-brand-blue/20 underline-offset-8 decoration-2">
                    {identity.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Current Location</div>
                  <div className="text-xl font-sans font-bold text-brand-dark">{identity.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href={identity.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-500 hover:bg-brand-blue hover:text-white transition-all">
                 <Linkedin className="w-5 h-5" />
              </a>
              <a href={identity.github} target="_blank" rel="noreferrer" className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-500 hover:bg-brand-dark hover:text-white transition-all">
                 <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/50">
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest ml-1">Full Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue transition-all" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest ml-1">Email Address</label>
                    <input type="email" className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue transition-all" placeholder="Enter your email" />
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest ml-1">Subject</label>
                  <input type="text" className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue transition-all" placeholder="Project collaboration" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest ml-1">Your Message</label>
                  <textarea rows={6} className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-brand-blue/5 focus:border-brand-blue transition-all resize-none" placeholder="Tell me more about your requirements..."></textarea>
               </div>
               <button className="w-full py-5 bg-brand-dark text-white rounded-2xl font-bold hover:bg-brand-blue transition-all shadow-xl hover:shadow-brand-blue/20 flex items-center justify-center gap-3 group">
                 Submit Message <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export const Footer = () => {
  const { identity } = PORTFOLIO_DATA;

  return (
    <footer className="py-12 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-xl font-sans font-black text-brand-dark mb-4">
            Shahzad Abbas<span className="text-brand-blue">.</span>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © 2026 Shahzad Abbas. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
           {['LinkedIn', 'GitHub', 'Email', 'Resume'].map(item => (
             <a 
               key={item} 
               href={
                 item === 'LinkedIn' ? identity.linkedin : 
                 item === 'GitHub' ? identity.github : 
                 item === 'Email' ? `mailto:${identity.email}` : 
                 identity.resumeUrl
               }
               target="_blank"
               rel="noreferrer"
               className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-brand-blue transition-colors"
             >
               {item}
             </a>
           ))}
        </div>

        <div className="text-[10px] font-black uppercase tracking-widest text-slate-300">
          Last Updated: 2026
        </div>
      </div>
    </footer>
  );
};
