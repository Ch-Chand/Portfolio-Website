import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { 
  Terminal, Shield, Search, Zap, BrainCircuit, FileSearch, Cpu, 
  MessageSquare, Layers, Code2, Globe, Bot, Database, Activity, Eye, History,
  ArrowUpRight
} from 'lucide-react';

const iconMap: Record<string, any> = {
  "Cybersecurity AI": <Shield className="w-6 h-6" />,
  "Generative AI and Agents": <Bot className="w-6 h-6" />,
  "Machine Learning": <Zap className="w-6 h-6" />,
  "NLP": <MessageSquare className="w-6 h-6" />,
  "Computer Vision": <Eye className="w-6 h-6" />,
  "Engineering & Deployment": <Terminal className="w-6 h-6" />
};

export const Skills = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="section-padding bg-brand-dark text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
        <div className="grid grid-cols-4 gap-4">
          {Array.from({length: 16}).map((_, i) => (
            <div key={i} className="w-12 h-12 border border-white rounded-lg"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-blue mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-sans font-black">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {skills.map((category, i) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-800/50 border border-slate-700/50 rounded-3xl hover:bg-slate-800 transition-all group"
            >
              <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all">
                {iconMap[category.category] || <Cpu className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-sans font-bold mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-700/30 text-slate-300 rounded-lg text-xs font-semibold border border-slate-700/50 hover:border-brand-blue transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const GitHubWork = () => {
  const { githubWork } = PORTFOLIO_DATA;

  return (
    <section id="github-work" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-blue mb-4 block">Public Contributions</span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark">Selected GitHub Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {githubWork.map((project, i) => (
            <motion.div 
              key={project.title}
              className="glass-card p-8 flex flex-col items-start hover:scale-[1.02] transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="w-5 h-5 text-slate-500" />
              </div>
              <h3 className="text-xl font-sans font-bold text-brand-dark mb-4">{project.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
              
              <div className="w-full pt-6 border-t border-slate-100 mt-auto">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-4 italic leading-relaxed">
                  {project.positioning}
                </div>
                {project.repository && (
                  <a href={project.repository} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm group">
                    View Repository <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
