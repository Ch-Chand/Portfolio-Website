import { useEffect, useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Download, 
  ExternalLink, 
  Code2, 
  BrainCircuit, 
  Cpu, 
  MessageSquare, 
  Database, 
  LineChart, 
  ChevronRight, 
  Menu, 
  X,
  FileText,
  Terminal,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Types
interface Project {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  details: string;
  github?: string;
  link?: string;
}

interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  bullets: string[];
}

// Data
const PROJECTS: Project[] = [
  {
    title: "RAG-Based Knowledge Assistant",
    description: "Built a retrieval-augmented generation assistant that searches internal documents, retrieves relevant context, and generates accurate answers using LLMs.",
    technologies: ["Python", "LangChain", "Vector Database", "Embeddings", "FastAPI", "LLMs"],
    impact: "Improved knowledge lookup speed by around 50% for 50+ engineers.",
    details: "Implemented custom document ingestion pipelines, recursive character chunking, semantic retrieval with cosine similarity, and context-aware response generation with hallucination checks.",
    github: "https://github.com/Ch-Chand"
  },
  {
    title: "Predictive Maintenance / Machine Learning",
    description: "Developed machine learning models to predict Remaining Useful Life of turbofan engines using NASA C-MAPSS FD001 data.",
    technologies: ["Python", "scikit-learn", "Random Forest", "CatBoost", "Pandas", "Feature Engineering"],
    impact: "Built interpretable models for maintenance decision support using leakage-safe unit-wise splits.",
    details: "Engineered surrogate digital-twin features, handled time-series sensor data, and achieved high R² scores using ensemble methods like CatBoost.",
    github: "https://github.com/Ch-Chand"
  },
  {
    title: "Phishing Detection System",
    description: "Architected a high-throughput system to identify malicious webpages using multi-modal signals including NLP, DOM structure, and URL patterns.",
    technologies: ["Python", "RoBERTa", "Hugging Face", "BeautifulSoup", "XGBoost", "FastAPI"],
    impact: "Scaled detection to process millions of URLs daily with sub-second latency.",
    details: "Developed a hybrid architecture that processes page text with RoBERTa while extracting structural HTML signals to achieve robust classification.",
    github: "https://github.com/Ch-Chand"
  },
  {
    title: "BEC Detection from Email",
    description: "Developed an advanced Business Email Compromise detection engine using behavioral analysis and header-text fusion models.",
    technologies: ["Python", "PyTorch", "Transformers", "Behavioral ML", "Email Headers", "Feature Store"],
    impact: "Significant reduction in false negatives for sophisticated impersonation attacks.",
    details: "Built a multi-input pipeline analyzing text semantics, sender history, and technical header metadata to detect high-value fraud.",
    github: "https://github.com/Ch-Chand"
  },
  {
    title: "Computer Vision Defect Classifier",
    description: "Built a CNN-based image classification model for detecting visual defects in industrial parts.",
    technologies: ["Python", "PyTorch", "CNN", "OpenCV", "Transfer Learning"],
    impact: "Automated visual inspection and reduced manual checking effort significantly.",
    details: "Used ResNet-based architectures with custom fine-tuning on domain-specific datasets, achieving high precision in defect detection.",
    github: "https://github.com/Ch-Chand"
  },
  {
    title: "Student Dropout Risk Classification",
    description: "Developed a machine learning workflow to identify students at risk of dropout using academic and demographic indicators.",
    technologies: ["Python", "Random Forest", "CatBoost", "scikit-learn", "Imbalanced-learn"],
    impact: "Created an early-warning style analytics approach using macro-F1 and dropout recall.",
    details: "Addressed class imbalance using SMOTE-ENC, performed exhaustive threshold tuning for high-recall 'at-risk' identification.",
    github: "https://github.com/Ch-Chand"
  }
];

const EXPERIENCES: Experience[] = [
  {
    role: "AI Engineer",
    company: "Varonis Ltd",
    location: "United Kingdom",
    duration: "2024 – Present",
    description: "Leading AI-driven security initiatives focused on anomaly detection and intelligent data governance systems.",
    bullets: [
      "Designing AI architectures for large-scale data classification and risk assessment.",
      "Implementing LLM-powered interfaces for security analysts to query complex datasets.",
      "Developing robust ML monitoring pipelines to ensure model reliability in production.",
      "Collaborated on architecture reviews for AI integration across various security products.",
      "Working with Python, PyTorch, SQL, and enterprise-scale data infrastructure."
    ]
  },
  {
    role: "AI/ML Engineer",
    company: "SlashNext",
    location: "United Kingdom / Remote",
    duration: "2022 – 2024",
    description: "Focused on developing AI detection systems for phishing, BEC, and browser-based threats.",
    bullets: [
      "Architected a Phishing Detection System processing real-time traffic using NLP and structural features.",
      "Developed a BEC detection engine utilizing semantic analysis of email content and behavioral history.",
      "Optimized inference pipelines for low-latency detection in production environments.",
      "Handled data drift and model drift monitoring for core classification models.",
      "Collaborated with teams to convert security intelligence into practical AI solutions."
    ]
  }
];

const SKILLS_LIST = [
  { name: "Programming", skills: ["Python", "R", "SQL", "Git", "Bash", "Linux"], icon: <Terminal className="w-5 h-5" /> },
  { name: "Machine Learning", skills: ["scikit-learn", "XGBoost", "CatBoost", "Data Drift Handling", "Model Drift Handling", "Feature Engineering"], icon: <LineChart className="w-5 h-5" /> },
  { name: "Deep Learning", skills: ["PyTorch", "TensorFlow", "CNNs", "Transformers", "Transfer Learning"], icon: <BrainCircuit className="w-5 h-5" /> },
  { name: "NLP & GenAI", skills: ["LLMs", "RAG", "Agentic Frameworks", "LangChain", "Vector DBs", "Hugging Face"], icon: <MessageSquare className="w-5 h-5" /> },
  { name: "Computer Vision", skills: ["CNN Classification", "OpenCV", "Image Preprocessing", "Defect Detection"], icon: <Cpu className="w-5 h-5" /> },
  { name: "Deployment & Eng.", skills: ["FastAPI", "Docker", "REST APIs", "CI/CD", "Model Serving"], icon: <Layers className="w-5 h-5" /> }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const resumeLink = "https://drive.google.com/file/d/140bpJwd5C4fe0M1tBvmsXYmN5ziKSxkg/view?usp=sharing";

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-blue/20">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-3' : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-xl font-display font-bold tracking-tight text-brand-dark group">
            Shahzad<span className="text-brand-blue group-hover:pl-0.5 transition-all">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href={resumeLink} 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-dark text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              Resume
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-2xl font-display font-medium text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href={resumeLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white py-4 rounded-xl font-bold"
              >
                <Download className="w-5 h-5" /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for new opportunities
              </div>
              <h2 className="text-xl md:text-2xl font-display font-medium text-brand-blue mb-2">
                Shahzad Abbas
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-brand-dark mb-6 leading-[1.1]">
                Designing reliable <br />
                <span className="text-slate-400">AI Architectures.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg mb-10">
                AI Architect focused on designing resilient machine learning pipelines, RAG systems, and enterprise-grade intelligent workflows.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="px-8 py-4 bg-brand-blue text-white rounded-xl font-bold hover:shadow-lg hover:shadow-brand-blue/20 transition-all">
                  View Projects
                </a>
                <a href="#contact" className="px-8 py-4 bg-slate-100 text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-all">
                  Contact Me
                </a>
                <a href={resumeLink} className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-blue transition-colors px-4 py-4 group">
                  Download CV <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Neural Network Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square glass-card p-8 flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-4 gap-4 w-full h-full opacity-20">
                   {Array.from({length: 16}).map((_, i) => (
                     <div key={i} className="border border-slate-300 rounded-lg flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                     </div>
                   ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="absolute w-[80%] h-[80%] border-2 border-dashed border-slate-100 rounded-full animate-[spin_20s_linear_infinite]"></div>
                   <div className="absolute w-[60%] h-[60%] border-2 border-dashed border-brand-blue/10 rounded-full animate-[spin_15s_linear_reverse_infinite]"></div>
                   <div className="relative z-10 p-12 bg-white rounded-3xl shadow-2xl border border-slate-100">
                     <BrainCircuit className="w-24 h-24 text-brand-blue stroke-[1.5]" />
                   </div>
                </div>
                
                {/* Floating labels */}
                <div className="absolute top-10 right-10 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg border border-slate-100 animate-bounce duration-[3000ms]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-[10px] uppercase tracking-widest font-bold">RAG Pipeline Active</span>
                  </div>
                </div>
                <div className="absolute bottom-20 left-10 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg border border-slate-100 animate-pulse duration-[4000ms]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                    <span className="text-[10px] uppercase tracking-widest font-bold">Inference Lag: 12ms</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-slate-50/50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest font-black text-brand-blue mb-4 block">About Me</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-8 leading-tight">
                Architecting the future <br /> of AI systems.
              </h2>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                   <div className="text-2xl font-display font-bold text-brand-blue">5+</div>
                   <div className="text-xs text-slate-500 font-medium">Years Experience</div>
                 </div>
                 <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                   <div className="text-2xl font-display font-bold text-brand-blue">27+</div>
                   <div className="text-xs text-slate-500 font-medium">Projects Architected</div>
                 </div>
              </div>
              <div className="mt-8 space-y-4">
                {[
                   "Based in Birmingham, UK",
                   "Expert in AI System Design",
                   "Agentic Framework Integration",
                   "Production-Ready Workflows"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-brand-blue" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I am an AI Architect and Systems Designer with 5+ years of experience specialized in building end-to-end intelligent systems. I focus on bridging the gap between cutting-edge AI models and production environments through sound architectural principles.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                My focus is on designing for reliability and scale. Whether it's architecting real-time phishing detection systems processing millions of events or building sophisticated BEC detection engines, I prioritize system integrity, model monitoring, and automated drift management.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I am deeply invested in Agentic AI and the evolution of RAG frameworks. My goal is to build autonomous, reliable, and observable AI systems that don't just solve a problem once, but continuously deliver value in a complex production landscape.
              </p>
              
              <div className="mt-10 flex items-center gap-6">
                <a href="https://github.com/Ch-Chand" target="_blank" className="p-2 border border-slate-200 rounded-full hover:bg-slate-100 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/shahzadabbas381144/" target="_blank" className="p-2 border border-slate-200 rounded-full hover:bg-slate-100 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:shahzadabbas3811@gmail.com" className="p-2 border border-slate-200 rounded-full hover:bg-slate-100 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-black text-brand-blue mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-dark">Technical Arsenal</h2>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_LIST.map((category, i) => (
              <motion.div 
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl border border-slate-100 hover:border-brand-blue/30 hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-brand-dark mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-slate-500 rounded-lg text-xs font-semibold hover:border-brand-blue/50 hover:text-brand-blue transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-black text-brand-blue mb-4 block">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-display font-black">Featured Projects</h2>
            </div>
            <p className="text-slate-400 max-w-sm text-sm font-medium">
              A selection of practical AI applications ranging from generative agents to predictive analytics pipelines.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-slate-800/50 border border-slate-700/50 rounded-[2rem] p-8 hover:bg-slate-800 transition-all duration-500 overflow-hidden relative"
              >
                <div className="mb-8">
                   <div className="flex flex-wrap gap-2 mb-6">
                     {project.technologies.slice(0, 3).map(tech => (
                       <span key={tech} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tech}</span>
                     ))}
                   </div>
                   <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-blue transition-colors tracking-tight leading-tight">{project.title}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">
                     {project.description}
                   </p>
                </div>
                
                <div className="mt-auto space-y-6">
                  <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-700 shadow-inner">
                    <div className="text-[10px] text-brand-blue font-black uppercase tracking-widest mb-1 italic">Impact</div>
                    <div className="text-sm font-medium text-slate-200 italic">"{project.impact}"</div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-brand-blue transition-colors"
                    >
                      GitHub <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <button className="flex-1 px-4 py-3 bg-white text-brand-dark rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all">
                      View Details
                    </button>
                  </div>
                </div>
                
                {/* Decorative background number */}
                <div className="absolute top-0 right-0 p-8 text-7xl font-display font-black text-slate-700/20 pointer-events-none group-hover:text-brand-blue/10 transition-colors">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-padding">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <span className="text-xs uppercase tracking-widest font-black text-brand-blue mb-4 block">Trajectory</span>
              <h2 className="text-4xl font-display font-black text-brand-dark mb-6">Experience</h2>
              <p className="text-slate-500 mb-8 max-w-sm">
                A track record of building production-ready AI solutions across different environments and use cases.
              </p>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-500 text-sm">
                "Focused on bridging the gap between research and practical implementation."
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-12 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-[1px] before:bg-slate-100">
               {EXPERIENCES.map((exp, i) => (
                 <div key={i} className="relative pl-12 group">
                   <div className="absolute left-0 top-1 w-8 h-8 rounded-full border-4 border-white bg-brand-blue shadow-sm z-10"></div>
                   <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                     <div>
                       <h3 className="text-xl font-display font-bold text-brand-dark">{exp.role}</h3>
                       <div className="text-brand-blue font-bold flex items-center gap-2">
                         {exp.company} <span className="w-1 h-1 rounded-full bg-slate-300"></span> <span className="text-slate-400 font-medium">{exp.location}</span>
                       </div>
                     </div>
                     <span className="px-4 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold whitespace-nowrap">
                       {exp.duration}
                     </span>
                   </div>
                   <p className="text-slate-600 mb-6 font-medium leading-relaxed">
                     {exp.description}
                   </p>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                     {exp.bullets.map((bullet, j) => (
                       <li key={j} className="flex gap-3 text-sm text-slate-500 group-hover:text-slate-600 transition-colors">
                         <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-blue/30 shrink-0"></div>
                         {bullet}
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
            </div>
          </div>
        </section>



        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs uppercase tracking-widest font-black text-brand-blue mb-4 block">Collaboration</span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-brand-dark mb-6">Let's build <br /> something.</h2>
                <p className="text-slate-500 mb-10 text-lg">
                  Interested in discussing Agentic AI, RAG optimization, or model deployment? Reach out.
                </p>
                
                <div className="space-y-8">
                   <div className="flex gap-6 items-center">
                      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                        <Mail className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Email</div>
                        <a href="mailto:shahzadabbas3811@gmail.com" className="text-xl font-display font-bold text-brand-dark hover:text-brand-blue transition-colors">
                          shahzadabbas3811@gmail.com
                        </a>
                      </div>
                   </div>
                   <div className="flex gap-6 items-center">
                      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                        <MapPin className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Location</div>
                        <div className="text-xl font-display font-bold text-brand-dark">
                          Birmingham, UK
                        </div>
                      </div>
                   </div>
                </div>
              </div>
              
              <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest pl-1">Full Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest pl-1">Email Address</label>
                    <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest pl-1">Subject</label>
                    <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="Potential Project Collaboration" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest pl-1">Message</label>
                    <textarea rows={5} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none" placeholder="Tell me more about your project needs..."></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button className="w-full py-5 bg-brand-dark text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-brand-dark/20 flex items-center justify-center gap-2 group">
                      Send Message <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-xl font-display font-bold tracking-tight text-brand-dark mb-2">
              Shahzad<span className="text-brand-blue">.</span>
            </div>
            <p className="text-xs text-slate-400 pr-5">© 2026 Shahzad Abbas. Built with precision and AI.</p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="https://linkedin.com/in/shahzadabbas381144/" className="text-sm font-bold text-slate-500 hover:text-brand-blue transition-colors">LinkedIn</a>
            <a href="https://github.com/Ch-Chand" className="text-sm font-bold text-slate-500 hover:text-brand-blue transition-colors">GitHub</a>
            <a href="mailto:shahzadabbas3811@gmail.com" className="text-sm font-bold text-slate-500 hover:text-brand-blue transition-colors">Email</a>
            <a href={resumeLink} className="text-sm font-bold text-slate-500 hover:text-brand-blue transition-colors underline decoration-brand-blue/30 underline-offset-4">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
