import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { Shield, Mail, Search, Zap, BrainCircuit, FileSearch, CheckCircle2, ChevronRight, Github, Linkedin } from 'lucide-react';

export const About = () => {
  const { about, identity } = PORTFOLIO_DATA;

  return (
    <section id="about" className="section-padding bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-blue mb-4 block">About Me</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark mb-8 leading-tight">
              Engineering Practical AI <br /> for a Secure Future.
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                 <div className="text-3xl font-sans font-black text-brand-blue mb-1">2026</div>
                 <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Perspective</div>
               </div>
               <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                 <div className="text-3xl font-sans font-black text-brand-blue mb-1">UK</div>
                 <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Base</div>
               </div>
            </div>
            <div className="space-y-4">
              {about.highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-600 group">
                  <div className="w-6 h-6 rounded-lg bg-brand-blue/5 flex items-center justify-center transition-colors group-hover:bg-brand-blue/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>{about.paragraph1}</p>
              <p>{about.paragraph2}</p>
              <p>{about.paragraph3}</p>
              <p>{about.paragraph4}</p>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-slate-100 pt-8">
              <div className="flex gap-4">
                <a href={identity.github} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href={identity.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={`mailto:${identity.email}`} className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center hover:bg-brand-violet hover:text-white hover:border-brand-violet transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <div className="text-sm font-bold text-slate-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></div>
                Birmingham, UK
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Experience = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-blue mb-4 block">Trajectory</span>
          <h2 className="text-4xl md:text-5xl font-sans font-black text-brand-dark">Professional Path</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 relative before:absolute before:left-[-2px] sm:before:left-[31px] before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-100">
            {experience.map((exp, i) => (
              <motion.div 
                key={i} 
                className="relative pl-8 sm:pl-20 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-11px] sm:left-[22px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-brand-blue shadow-sm z-10 transition-transform group-hover:scale-125"></div>
                
                <div className="glass-card p-8 group-hover:border-brand-blue/20 transition-all">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <span className="text-[10px] px-2 py-0.5 bg-brand-blue/5 text-brand-blue rounded font-black uppercase tracking-widest mb-2 inline-block">
                        {exp.duration}
                      </span>
                      <h3 className="text-2xl font-sans font-bold text-brand-dark leading-tight">{exp.title}</h3>
                      <div className="text-brand-blue font-bold mt-1 flex items-center gap-2">
                        {exp.company} <span className="w-1 h-1 rounded-full bg-slate-200"></span> <span className="text-slate-400 font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-8 font-medium italic">
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {exp.bullets.map((bullet, j) => (
                      <div key={j} className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue/30 shrink-0"></div>
                        {bullet}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
                    {exp.techTags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
