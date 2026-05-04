import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ArrowUpRight, Github, ExternalLink, ShieldAlert, Cpu, Bot, Zap, Database, BrainCircuit, Globe, Mail } from 'lucide-react';

interface ProjectCardProps {
  project: any;
  index: number;
  key?: any;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card hover:border-brand-blue/30 group flex flex-col h-full overflow-hidden"
    >
      <div className="p-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech: string) => (
              <span key={tech} className="text-[9px] font-black uppercase tracking-[0.1em] text-slate-400">
                {tech}
              </span>
            ))}
          </div>
          <div className="text-brand-blue/20 group-hover:text-brand-blue transition-colors">
            {project.title.includes('Cybersecurity') || project.title.includes('Phishing') ? <ShieldAlert className="w-8 h-8" /> : 
             project.title.includes('Agentic') ? <Bot className="w-8 h-8" /> :
             project.title.includes('Visual') ? <Cpu className="w-8 h-8" /> :
             project.title.includes('Predictive') ? <Zap className="w-8 h-8" /> :
             <Database className="w-8 h-8" />}
          </div>
        </div>

        <h3 className="text-2xl font-sans font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors leading-tight">
          {project.title}
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
          {project.shortDescription}
        </p>

        <div className="space-y-4 mb-8">
           <div>
             <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Problem</div>
             <p className="text-xs text-slate-500 font-medium leading-relaxed">{project.problemSolved}</p>
           </div>
           {/* Expandable details could go here, but keeping it concise for first draft */}
        </div>

        <div className="mt-auto pt-6 border-t border-slate-50">
          <div className="bg-brand-blue/5 rounded-2xl p-4 border border-brand-blue/10 mb-6">
             <div className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-1 italic">Key Outcome</div>
             <p className="text-xs text-brand-dark font-bold leading-relaxed">"{project.impact}"</p>
          </div>

          <div className="flex items-center gap-4">
             <button className="flex-1 px-4 py-3 bg-brand-dark text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-blue transition-all">
               Case Study
             </button>
             {project.github && (
               <a href={project.github} className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-brand-dark hover:text-white transition-all">
                 <Github className="w-5 h-5" />
               </a>
             )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <>
      <section id="projects" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-blue mb-4 block">Cybersecurity AI</span>
              <h2 className="text-4xl md:text-5xl font-sans font-black text-brand-dark leading-tight">Featured Projects</h2>
            </div>
            <p className="text-slate-400 max-w-sm text-sm font-medium">
              Architecting intelligent systems that detect threats, classify sensitive data, and protect enterprise environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.featured.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="other-projects" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-blue mb-4 block">Other AI/ML Work</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-dark">Applied Intelligence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.others.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
