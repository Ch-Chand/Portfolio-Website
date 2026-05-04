import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { Shield, Mail, Search, Zap, BrainCircuit, FileSearch, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  const { hero, identity } = PORTFOLIO_DATA;

  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/5 text-brand-blue rounded-full text-xs font-bold mb-6 border border-brand-blue/10">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
              Available for New Opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-sans font-extrabold tracking-tight text-brand-dark mb-4 leading-tight">
              {identity.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-sans font-semibold text-slate-500 mb-6 italic">
              {hero.subtitle}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-10">
              {hero.description} <br className="hidden md:block" />
              <span className="text-slate-400 text-sm mt-2 block font-medium">
                {hero.supportingLine}
              </span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-brand-blue text-white rounded-xl font-bold hover:shadow-xl hover:shadow-brand-blue/20 transition-all">
                View Projects
              </a>
              <a href="#experience" className="px-8 py-4 bg-white border border-slate-200 text-brand-dark rounded-xl font-bold hover:bg-slate-50 transition-all">
                View Experience
              </a>
              <div className="w-full sm:w-auto flex gap-4 mt-2 sm:mt-0">
                <a href={identity.resumeUrl} target="_blank" rel="noreferrer" className="flex-1 sm:flex-none px-6 py-4 bg-slate-100 text-brand-dark rounded-xl font-bold hover:bg-brand-dark hover:text-white transition-all text-center">
                  Download CV
                </a>
                <a href="#contact" className="flex-1 sm:flex-none px-6 py-4 border border-brand-blue/20 text-brand-blue rounded-xl font-bold hover:bg-brand-blue/5 transition-all text-center">
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-[500px] ml-auto">
              {/* Abstract Visual Elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent rounded-[3rem] -z-10 rotate-3 animate-pulse"></div>
              
              <div className="glass-card p-8 h-full flex flex-col justify-center gap-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                {/* Node 1: Email Threat */}
                <motion.div 
                  className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-3xl shadow-sm z-10"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Incoming Signal</div>
                    <div className="text-sm font-bold text-brand-dark">Suspicious Email Pattern Detected</div>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-red-500/10 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold">HIGH RISK</div>
                  </div>
                </motion.div>

                {/* Node 2: URL Classification */}
                <motion.div 
                  className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-3xl shadow-sm z-10"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-12 h-12 bg-brand-blue text-white rounded-2xl flex items-center justify-center">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Web Analysis</div>
                    <div className="text-sm font-bold text-brand-dark">URL Structure Intelligence</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <Zap className="w-3 h-3 text-brand-blue" />
                    <span className="text-[10px] text-slate-400 font-bold tracking-tight">Active</span>
                  </div>
                </motion.div>

                {/* Node 3: Agent Workflow */}
                <motion.div 
                  className="flex items-center gap-4 p-5 bg-brand-dark text-white rounded-3xl shadow-xl z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-brand-blue text-white rounded-2xl flex items-center justify-center">
                    <BrainCircuit className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">Agentic Workflow</div>
                    <div className="text-sm font-bold">Secure AI Pipeline</div>
                  </div>
                  <div className="ml-auto">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                </motion.div>

                {/* Connection lines (decorative) */}
                <div className="absolute left-[34px] top-1/4 bottom-1/4 w-[2px] bg-slate-50 -z-10"></div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 glass-card p-4 flex items-center gap-3 animate-bounce duration-[3000ms]">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs font-bold text-brand-dark">BEC Detection: 99.8%</span>
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 flex items-center gap-3">
                <FileSearch className="w-5 h-5 text-brand-blue" />
                <span className="text-xs font-bold text-brand-dark">RAG Powered Search</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
