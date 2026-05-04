import { 
  Terminal, 
  Shield, 
  Search, 
  Zap, 
  BrainCircuit, 
  FileSearch, 
  Cpu, 
  MessageSquare, 
  Layers,
  Code2,
  Mail,
  Linkedin,
  Github,
  Award,
  GraduationCap,
  BookOpen,
  ArrowUpRight,
  Database,
  Cloud,
  CheckCircle2,
  Eye,
  Activity,
  History,
  Layout,
  Globe,
  Bot
} from 'lucide-react';
import React from 'react';

export const PORTFOLIO_DATA = {
  identity: {
    name: "Shahzad Abbas",
    role: "AI Engineer",
    location: "Birmingham, United Kingdom",
    email: "shahzadabbas3811@gmail.com",
    linkedin: "https://www.linkedin.com/in/shahzadabbas381144/",
    github: "https://github.com/Ch-Chand",
    resumeUrl: "https://drive.google.com/file/d/140bpJwd5C4fe0M1tBvmsXYmN5ziKSxkg/view?usp=sharing",
    portfolioUrl: "https://shahzad-abbas.vercel.app/"
  },
  seo: {
    title: "Shahzad Abbas | AI Engineer Portfolio",
    description: "Portfolio of Shahzad Abbas, an AI Engineer based in Birmingham, UK, specialising in cybersecurity AI, phishing detection, BEC detection, webpage and email classification, data security AI, RAG systems, and agentic AI workflows."
  },
  hero: {
    title: "Shahzad Abbas",
    subtitle: "AI Engineer | Cybersecurity AI | GenAI Developer",
    description: "I build AI systems for cybersecurity, phishing/BEC detection, email and webpage classification, data security, RAG, and agentic AI workflows.",
    supportingLine: "My work combines machine learning, LLMs, NLP, computer vision, security data analysis, and agent-based automation to build practical AI systems for real-world cybersecurity and data protection problems."
  },
  about: {
    paragraph1: "I am Shahzad Abbas, an AI Engineer based in Birmingham, United Kingdom, with experience in machine learning, NLP, computer vision, generative AI, agentic workflows, and cybersecurity-focused AI systems.",
    paragraph2: "My recent work focuses on cybersecurity AI, including phishing, scam, BEC, webpage, URL, and email threat detection. I have worked on AI systems that use email headers, behavioural patterns, historical communication signals, webpage text, raw HTML, OCR text, screenshots, and vision-based models to identify suspicious or fake content.",
    paragraph3: "I have also worked on agentic AI workflows for generating realistic synthetic training data, reviewing data quality, improving labelled datasets, and supporting ML model improvement over time.",
    paragraph4: "My technical stack includes Python, scikit-learn, PyTorch, TensorFlow, Hugging Face Transformers, LLMs, FastAPI, Docker, SQL, LangChain, vector databases, BeautifulSoup, OCR, and feature engineering. I focus on building practical AI systems that move beyond notebooks, including data pipelines, model evaluation, API deployment, agentic workflows, and reliable AI-assisted review systems.",
    highlights: [
      "Cybersecurity AI",
      "Phishing and BEC Detection",
      "Webpage and URL Classification",
      "Email Threat Analysis",
      "Data Security AI",
      "Agentic AI Workflows",
      "RAG and LLM Applications",
      "ML Model Development"
    ]
  },
  experience: [
    {
      title: "AI Engineer — Data Security and Agentic AI",
      company: "Varonis",
      location: "Birmingham, United Kingdom",
      duration: "2025 – Present",
      description: "Working on AI systems for data protection, security analytics, and investigation of exposed, sensitive, risky, or potentially compromised data. Continuing cybersecurity AI work across phishing, BEC detection, webpage analysis, and agentic workflows, while also focusing on data security and AI-driven review systems.",
      bullets: [
        "Designed AI systems to support data protection and help investigate exposed, sensitive, risky, or potentially compromised data.",
        "Worked on workflows to understand data access, user activity, ownership context, and potential security risks.",
        "Continued cybersecurity AI projects related to phishing, BEC detection, email analysis, and webpage classification.",
        "Built agentic AI systems and agentic teams to improve detection workflows over time.",
        "Designed agent-based quality review systems to assess data quality, review model outputs, and support training-data improvement.",
        "Built workflows where agents review labelled data, identify weak samples, improve training quality, and support ML model retraining.",
        "Worked on LLM-based and ML-based systems for cybersecurity analytics, security data interpretation, and automated review.",
        "Focused on making AI systems more reliable through feedback loops, review pipelines, and continuous improvement."
      ],
      techTags: ["Python", "LLMs", "Agentic AI", "Data Security", "Security Analytics", "ML Systems", "Data Quality Review", "Model Improvement", "Cybersecurity AI"]
    },
    {
      title: "AI Engineer — Cybersecurity AI",
      company: "SlashNext",
      location: "Remote / Cybersecurity AI",
      duration: "2024 – 2025",
      description: "Worked on AI and machine learning systems for phishing, scam, BEC, and webpage/email threat detection. Designed and supported ML, LLM, vision-based, and agentic AI workflows to detect phishing attacks from emails, webpages, URLs, and links.",
      bullets: [
        "Designed ML and AI systems to detect phishing, scam, and BEC attacks from websites, emails, webpages, and links.",
        "Built email threat-detection workflows using behavioural patterns, historical communication signals, email headers, sender information, and content-level features.",
        "Developed webpage classification workflows using URL structure, HTML content, page text, OCR text, screenshots, and visual signals.",
        "Worked on vision-based models to identify whether a webpage looked fake, suspicious, or impersonated a legitimate brand.",
        "Designed agentic AI workflows to generate realistic synthetic and labelled training data for improving AI detection systems.",
        "Built LLM-based solutions for detecting BEC, phishing, and scam patterns in emails and webpages.",
        "Supported review and validation of classification outputs for phishing, scam, BEC, and security threat categories.",
        "Worked with Python, ML pipelines, LLMs, OCR, vision models, HTML parsing, URL feature engineering, and cybersecurity datasets.",
        "Helped improve AI-assisted cybersecurity classification and detection workflows."
      ],
      techTags: ["Python", "Machine Learning", "LLMs", "NLP", "Cybersecurity AI", "Phishing Detection", "BEC Detection", "Email Security", "Webpage Classification", "URL Feature Engineering", "OCR", "Computer Vision", "HTML Parsing", "Agentic AI"]
    },
    {
      title: "AI/ML Engineer",
      company: "MECHESOL CO",
      location: "Multan, Pakistan",
      duration: "Jul 2022 – Sep 2025",
      description: "Worked on applied AI, machine learning, NLP, computer vision, and data-driven solutions. Built practical AI systems from data processing and model training to evaluation and deployment.",
      bullets: [
        "Built machine learning and AI solutions using Python and modern ML frameworks.",
        "Developed NLP, computer vision, and data processing pipelines.",
        "Built RAG-based and LLM-based workflows for knowledge access and document search.",
        "Created machine learning pipelines for classification, prediction, and decision-support use cases.",
        "Built CNN-based image classification workflows for visual inspection and defect detection use cases.",
        "Created customer churn prediction workflows using data preprocessing, feature engineering, model training, and evaluation.",
        "Worked with Python, scikit-learn, PyTorch, TensorFlow, FastAPI, Docker, SQL, and Git.",
        "Collaborated with teams to convert business requirements into practical AI solutions."
      ],
      techTags: ["Python", "scikit-learn", "PyTorch", "TensorFlow", "NLP", "Computer Vision", "RAG", "FastAPI", "Docker", "SQL", "ML Pipelines"]
    }
  ],
  projects: {
    featured: [
      {
        title: "AI System for Phishing, Scam and BEC Detection",
        shortDescription: "Designed AI and ML workflows to detect phishing, scam, and Business Email Compromise attacks from emails, webpages, URLs, and links.",
        problemSolved: "Phishing and BEC attacks are difficult to detect because they use realistic language, trusted-looking senders, fake webpages, and behavioural manipulation. The goal was to build AI workflows that could identify suspicious patterns across email and web threat surfaces.",
        technicalApproach: "The system combined email header analysis, sender behaviour, historical communication patterns, message content, webpage content, URL structure, OCR text, screenshots, and LLM-based reasoning to support threat detection.",
        techStack: ["Python", "ML", "LLMs", "NLP", "Email Headers", "OCR", "Computer Vision", "Cybersercurity AI"],
        features: [
          "Email phishing detection",
          "BEC attack detection",
          "Scam pattern detection",
          "Email header and sender-signal analysis",
          "Behavioural and historical pattern analysis",
          "Webpage text and URL classification",
          "OCR-based content extraction",
          "Vision-based fake webpage detection",
          "LLM-based threat reasoning",
          "Agentic workflows for training-data generation and review"
        ],
        impact: "Supported more reliable detection of phishing, scam, and BEC attacks across email and web-based threat surfaces."
      },
      {
        title: "Webpage and URL Threat Classification System",
        shortDescription: "Built webpage and URL classification workflows for detecting suspicious, fake, phishing, and scam-related webpages.",
        problemSolved: "Fake webpages often imitate legitimate brands, login pages, payment pages, or trusted services. The project focused on classifying webpages using content, structure, visual, and URL-based signals.",
        technicalApproach: "The workflow used webpage text, raw HTML, page titles, OCR text, screenshots, URL structure, and visual signals. It combined transformer-based text features with handcrafted URL and HTML signals.",
        techStack: ["Python", "RoBERTa", "Transformers", "BeautifulSoup", "OCR", "Computer Vision", "HTML Parsing", "URL Feature Engineering", "NLP"],
        features: [
          "URL feature extraction",
          "HTML and page-text analysis",
          "Page title and raw HTML processing",
          "OCR text extraction from screenshots",
          "Vision-based fake-page detection",
          "Transformer-based text representation",
          "Threat-category validation and review",
          "Security-focused webpage classification"
        ],
        impact: "Improved webpage understanding and classification quality for cybersecurity detection workflows."
      },
      {
        title: "Agentic AI Workflows for Cybersecurity Model Improvement",
        shortDescription: "Designed agentic AI workflows to generate realistic training data, review labelled samples, identify weak data quality, and improve cybersecurity AI systems over time.",
        problemSolved: "Cybersecurity models need high-quality labelled data and continuous improvement. Weak, inconsistent, or unrealistic training data can reduce detection quality.",
        technicalApproach: "Designed agent-based workflows where AI agents generated realistic cybersecurity samples, reviewed labelled data, checked quality, flagged weak samples, and supported feedback loops for ML model improvement.",
        techStack: ["Python", "LLMs", "Agentic AI", "Prompt Engineering", "Data Quality Review", "ML Training Pipelines", "Cybersecurity AI"],
        features: [
          "Synthetic and labelled cybersecurity data generation",
          "Agent-based labelled-data review",
          "Automated quality checking of training samples",
          "Feedback loops for ML model improvement",
          "LLM-assisted threat-pattern generation",
          "Review workflows for phishing, scam, BEC, and webpage classification data",
          "Agentic teams for continuous improvement"
        ],
        impact: "Helped improve training-data quality and supported continuous improvement of ML and LLM-based security detection systems."
      },
      {
        title: "AI System for Data Security and Risk Investigation",
        shortDescription: "Worked on AI workflows for data protection and security analytics, focusing on sensitive data, exposed data, access patterns, and data-risk investigation.",
        problemSolved: "Organisations need to understand which data is sensitive, exposed, risky, or potentially compromised, and who may have accessed or interacted with it. The project focused on AI-assisted data security review and interpretation.",
        technicalApproach: "The system used AI workflows to analyse data-risk context, access patterns, exposed or sensitive data indicators, user behaviour, ownership context, and security signals. Agentic workflows supported review and quality improvement.",
        techStack: ["Python", "Machine Learning", "LLMs", "Data Security Analytics", "Agentic AI", "Data Quality Review"],
        features: [
          "Sensitive-data risk review",
          "Exposed-data investigation support",
          "Access-pattern and ownership-context analysis",
          "AI-assisted security signal interpretation",
          "Agentic teams for review and continuous improvement",
          "Data-quality review for ML training workflows"
        ],
        impact: "Supported AI-driven data protection and security analytics workflows."
      }
    ],
    others: [
      {
        title: "RAG-Based Knowledge Assistant",
        shortDescription: "Built a retrieval-augmented generation assistant that can search documents, retrieve relevant context, and generate accurate answers using LLMs.",
        problemSolved: "Teams often waste time searching across internal documents, PDFs, notes, and knowledge bases. The project focused on improving document search and answer generation.",
        technicalApproach: "The system used document ingestion, chunking, embeddings, vector search, context retrieval, and LLM-based response generation.",
        techStack: ["Python", "LangChain", "Vector DB", "Embeddings", "FastAPI", "LLMs", "RAG"],
        features: [
          "Document ingestion",
          "Text chunking",
          "Embedding generation",
          "Vector search",
          "Context retrieval",
          "LLM-based answers",
          "API-based serving",
          "Feedback-aware improvement workflow"
        ],
        impact: "Improved knowledge lookup speed and reduced manual search effort."
      },
      {
        title: "Predictive Maintenance using NASA C-MAPSS",
        shortDescription: "Developed a Remaining Useful Life prediction workflow using the NASA C-MAPSS FD001 turbofan engine dataset.",
        problemSolved: "Predictive maintenance helps estimate how long equipment can continue operating before failure. The goal was to predict Remaining Useful Life using sensor data and machine learning.",
        technicalApproach: "The project used leakage-safe unit-wise splitting, RUL capping, feature engineering, and model comparison between Random Forest and CatBoost. It used RMSE, MAE, and R² for evaluation.",
        techStack: ["Python", "Pandas", "scikit-learn", "Random Forest", "CatBoost", "Feature Engineering"],
        features: [
          "NASA C-MAPSS FD001 dataset",
          "RUL prediction",
          "Leakage-safe split",
          "Feature engineering",
          "Random Forest and CatBoost comparison",
          "RMSE, MAE, and R² evaluation",
          "Maintenance decision-support framing"
        ],
        impact: "Built interpretable models for maintenance decision support."
      },
      {
        title: "Customer Churn Prediction Pipeline",
        shortDescription: "Built a machine learning pipeline to identify customers likely to churn and support retention decisions.",
        problemSolved: "Businesses need to identify customers at risk of leaving so that retention actions can be planned earlier.",
        technicalApproach: "The project included data cleaning, exploratory data analysis, feature engineering, model training, evaluation, and interpretation.",
        techStack: ["Python", "SQL", "Pandas", "scikit-learn", "XGBoost", "Feature Engineering"],
        features: [
          "Data preprocessing",
          "Exploratory analysis",
          "Feature engineering",
          "Classification model training",
          "Model evaluation",
          "Business decision-support output"
        ],
        impact: "Supported retention-focused decision-making through predictive analytics."
      },
      {
        title: "CNN-Based Visual Defect Classifier",
        shortDescription: "Built a CNN-based image classification workflow for detecting visual defects.",
        problemSolved: "Manual visual inspection is slow and inconsistent. The project focused on automating visual defect classification using computer vision.",
        technicalApproach: "The workflow included image preprocessing, CNN model training, model evaluation, and prediction output analysis.",
        techStack: ["Python", "PyTorch/TensorFlow", "CNNs", "OpenCV", "Computer Vision"],
        features: [
          "Image preprocessing",
          "CNN training",
          "Defect classification",
          "Model evaluation",
          "Visual inspection workflow"
        ],
        impact: "Supported automated visual inspection and reduced manual checking effort."
      }
    ]
  },
  githubWork: [
    {
      title: "Python NLP Projects Collection",
      repository: "https://github.com/Ch-Chand/NLP-Projects",
      description: "A collection of natural language processing projects built using Python, covering text-processing and NLP experimentation.",
      positioning: "Additional NLP project collection showing Python-based natural language processing practice."
    },
    {
      title: "Data Science and Machine Learning Projects",
      repository: "https://github.com/Ch-Chand/Data-Science-Projects",
      description: "A collection of machine learning projects covering data understanding, data cleaning, exploratory analysis, feature engineering, model building, and model evaluation.",
      positioning: "Earlier machine learning project collection showing practical data science workflow experience."
    },
    {
      title: "Student Attendance using Face Recognition",
      repository: "", // Placeholder
      description: "Final-year computer vision project using face recognition to automate student attendance.",
      techStack: ["Python", "OpenCV", "LBPH", "Haar Cascade", "Tkinter"],
      positioning: "Earlier computer vision project demonstrating face detection, recognition, and desktop application development."
    }
  ],
  skills: [
    {
      category: "Cybersecurity AI",
      items: ["Phishing Detection", "BEC Detection", "Scam Detection", "URL Classification", "Webpage Classification", "Email Threat Analysis", "Email Header Analysis", "Threat Category Review", "Security Data Analysis", "Data Risk Investigation", "Data Protection AI"]
    },
    {
      category: "Generative AI and Agents",
      items: ["LLMs", "RAG", "LangChain", "Agentic AI", "Multi-Agent Workflows", "Synthetic Data Generation", "Prompt Engineering", "LLM-Based Review Systems", "AI Feedback Loops", "Agent-Based Quality Review"]
    },
    {
      category: "Machine Learning",
      items: ["scikit-learn", "Random Forest", "CatBoost", "XGBoost", "LightGBM", "Classification", "Regression", "Feature Engineering", "Model Evaluation", "Hyperparameter Tuning"]
    },
    {
      category: "NLP",
      items: ["Hugging Face Transformers", "RoBERTa", "Text Classification", "Embeddings", "Semantic Search", "Tokenization", "Document Understanding", "Email Content Analysis"]
    },
    {
      category: "Computer Vision",
      items: ["OCR", "Screenshot Analysis", "Vision-Based Classification", "Fake Webpage Detection", "CNNs", "OpenCV", "Image Preprocessing"]
    },
    {
      category: "Engineering & Deployment",
      items: ["Python", "FastAPI", "Docker", "SQL", "Git", "CI/CD", "Linux", "BeautifulSoup", "HTML Parsing", "APIs", "Jupyter", "VS Code"]
    }
  ],
  education: [
    {
      degree: "BS Computer Science",
      university: "Bahauddin Zakariya University",
      location: "Pakistan",
      year: "2022",
      areas: ["Artificial Intelligence", "Machine Learning", "Data Science", "Software Engineering", "Databases", "Python Programming"]
    },
    {
      degree: "Master’s in Project Management",
      university: "[Pending University]",
      location: "[Pending Location]",
      year: "[In Progress]",
      areas: ["Project Management", "AI in Project Management", "Predictive Maintenance", "Digital Transformation", "Business Analytics", "Research Methods"]
    }
  ],
  certifications: [
    { name: "Microsoft Certified: Azure Fundamentals", provider: "Microsoft", year: "2024" },
    { name: "Machine Learning Specialization", provider: "DeepLearning.AI", year: "2023" },
    { name: "Deep Learning Specialization", provider: "DeepLearning.AI", year: "2023" },
    { name: "Generative AI / LLMs", provider: "DeepLearning.AI", year: "2024" }
  ],
  publication: {
    title: "A Systematic Analysis for the Detection of Skin Disease Using Deep Learning Methodologies",
    journal: "Journal of Computing & Biomedical Informatics",
    year: "2023",
    description: "Research publication focused on applying deep learning methodologies for skin disease detection.",
    link: "" // Placeholder
  }
};
