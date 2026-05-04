import { useEffect, useState } from 'react';
import { 
  Menu, 
  X,
  Download,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from './data/portfolio';
import { Hero } from './components/Hero';
import { About, Experience } from './components/AboutAndExperience';
import { Projects } from './components/Projects';
import { Skills, GitHubWork } from './components/SkillsAndGitHub';
import { EducationCertPub, ResumeAndContact, Footer } from './components/AcademicAndContact';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { identity, seo } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "GitHub Work", href: "#github-work" },
    { label: "Education", href: "#academic" },
    { label: "Certifications", href: "#academic" },
    { label: "Publication", href: "#academic" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-blue/10 overflow-x-hidden">
      {/* Dynamic SEO (Visual Only for Preview) */}
      <head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </head>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'nav-blur py-3 px-6' : 'bg-transparent py-6 px-12'
        }`}
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center bg-white/50 backdrop-blur-sm rounded-3xl md:bg-transparent md:backdrop-blur-none">
          <a href="#home" className="text-xl md:text-2xl font-sans font-black tracking-tighter text-brand-dark group flex items-center px-4 py-2">
            SHAHZAD<span className="text-brand-blue group-hover:scale-150 transition-transform origin-left">.</span>ABBAS
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 5).map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-brand-blue hover:bg-slate-50 px-4 py-2 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="h-4 w-[1px] bg-slate-200 mx-2"></div>
            {navLinks.slice(5, 7).map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-blue hover:bg-slate-50 px-4 py-2 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
            <a 
              href={identity.resumeUrl} 
              target="_blank" 
              rel="noreferrer"
              className="ml-4 bg-brand-dark text-white text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-2xl hover:bg-brand-blue hover:shadow-xl hover:shadow-brand-blue/20 transition-all flex items-center gap-2"
            >
              Resume
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button className="lg:hidden p-4 text-brand-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col h-full pt-32 px-12 gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-3xl font-sans font-black text-brand-dark hover:text-brand-blue transition-colors flex items-center justify-between group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label} <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
              <div className="mt-auto mb-12 flex flex-col gap-4">
                <a 
                  href={identity.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-blue text-white py-6 rounded-[2rem] font-black uppercase tracking-widest shadow-xl shadow-brand-blue/20"
                >
                  <Download className="w-5 h-5" /> Download CV
                </a>
                <div className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mt-4">
                  Birmingham, UK
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <GitHubWork />
        <EducationCertPub />
        <ResumeAndContact />
      </main>

      <Footer />
    </div>
  );
}
