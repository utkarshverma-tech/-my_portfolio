// ─────────────────────────────────────────────
//  DATA: Projects
//  To add a new project, simply append a new
//  object to this array. No other changes needed.
// ─────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    title: "AI-Powered Exam Proctoring System",
    description:
      "An intelligent automated proctoring platform leveraging computer vision and deep learning to detect suspicious behavior during online examinations. Features real-time facial recognition, gaze tracking, head pose estimation, and multi-person detection with an alert system for exam administrators.",
    tech: ["Python", "OpenCV", "PyTorch", "Dlib", "MediaPipe", "FastAPI", "WebRTC", "React"],
    github: "https://github.com/utkarshverma-tech",
    demo: null,
    category: "Computer Vision",
    status: "Completed",
    highlights: [
      "Real-time facial recognition",
      "Gaze & head pose tracking",
      "Multi-person detection",
      "Automated alert system",
    ],
  },
  {
    id: 2,
    title: "AI Assistant for Blind People",
    description:
      "A real-time assistive AI system designed to enhance independence for visually impaired individuals. Uses object detection, scene understanding, and natural language generation to describe surroundings through audio feedback. Integrates OCR for text reading and GPS-based navigation assistance.",
    tech: ["Python", "YOLOv8", "TensorFlow", "Transformers", "gTTS", "OpenCV", "Raspberry Pi", "Flask"],
    github: "https://github.com/utkarshverma-tech",
    demo: null,
    category: "AI/ML",
    status: "Completed",
    highlights: [
      "Real-time object detection",
      "Natural language scene description",
      "OCR text reading",
      "Audio feedback system",
    ],
  },
  // ── ADD MORE PROJECTS BELOW ──
  // {
  //   id: 3,
  //   title: "Your Next Project",
  //   description: "Description here",
  //   tech: ["Python", "React"],
  //   github: "https://github.com/...",
  //   demo: null,
  //   category: "AI/ML",
  //   status: "In Progress",
  //   highlights: ["Feature 1", "Feature 2"],
  // },
];

// ─────────────────────────────────────────────
//  DATA: Skills
// ─────────────────────────────────────────────

export const skillCategories = [
  {
    id: 1,
    category: "AI / Machine Learning",
    icon: "🧠",
    color: "cyan",
    skills: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP", "Transfer Learning", "Model Optimization", "Reinforcement Learning", "GANs"],
  },
  {
    id: 2,
    category: "Frameworks & Libraries",
    icon: "⚙️",
    color: "purple",
    skills: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "Scikit-learn", "Hugging Face", "MediaPipe", "YOLOv8"],
  },
  {
    id: 3,
    category: "Programming Languages",
    icon: "💻",
    color: "green",
    skills: ["Python", "C++", "JavaScript", "SQL", "Bash", "CUDA"],
  },
  {
    id: 4,
    category: "Data & MLOps",
    icon: "📊",
    color: "orange",
    skills: ["Pandas", "NumPy", "Matplotlib", "MLflow", "Docker", "Git", "Jupyter", "Weights & Biases"],
  },
  {
    id: 5,
    category: "Cloud & Deployment",
    icon: "☁️",
    color: "blue",
    skills: ["AWS", "Google Cloud", "FastAPI", "Flask", "REST APIs", "Linux", "Kubernetes", "CI/CD"],
  },
  {
    id: 6,
    category: "Computer Vision Techniques",
    icon: "👁️",
    color: "pink",
    skills: ["Object Detection", "Image Segmentation", "Facial Recognition", "OCR", "Pose Estimation", "3D Vision", "Image Classification", "Optical Flow"],
  },
];

// ─────────────────────────────────────────────
//  DATA: Education
// ─────────────────────────────────────────────

export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications (Artificial Intelligence)",
    field: "Computer Science (Artificial Intelligence)",
    institution: "Future University Bareilly",
    location: "Bareilly, Uttar Pradesh",
    year: "2024 – 2027",
    grade: "7.5+ CGPA",
    highlights: ["AI/ML Specialization", "Computer Vision Research", "Dean's List"],
  },
  // Add more education entries if needed
];

// ─────────────────────────────────────────────
//  DATA: Navigation Links
// ─────────────────────────────────────────────

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

// ─────────────────────────────────────────────
//  DATA: Certificates
//  To add a certificate:
//  1. Upload PDF to Google Drive
//  2. Share → Anyone with link → Copy link
//  3. Link format: https://drive.google.com/file/d/FILE_ID/view
//  4. downloadUrl: https://drive.google.com/uc?export=download&id=FILE_ID
// ─────────────────────────────────────────────

export const certificates = [
  {
    id: 1,
    title: "Intro to Natural Language Processing in Microsoft Azure",
    issuer: "Coursera",
    date: "feb 2026",
    description:
      "Successfully completed a foundational course in Natural Language Processing (NLP), gaining knowledge of text analysis, language models, and AI-driven language processing using Microsoft Azure tools. Developed an understanding of real-world applications such as chatbots, sentiment analysis, and language understanding systems.",
    skills: ["Natural Language Processing (NLP)",
"Text Analysis",
"Sentiment Analysis",
"Language Modeling",
"Chatbot Development",
"Microsoft Azure AI Services",
"Data Processing",
"Language Understanding"],
    downloadUrl: "https://drive.google.com/uc?export=download&id=1JMV1U5LgmlgKeac9vUoTDWg-wfeK-mBj", // Replace: https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
    previewUrl: "https://drive.google.com/file/d/1JMV1U5LgmlgKeac9vUoTDWg-wfeK-mBj/view", // Replace: https://drive.google.com/file/d/YOUR_FILE_ID/view
    color: "cyan",
  },
  {
    id: 2,
    title: "Computer Vision in Microsoft Azure – Microsoft (via Coursera)",
    issuer: "Coursera",
    date: "feb 2026",
    description:
      "Successfully completed a course in Computer Vision, gaining knowledge of image processing, object detection, and AI-based visual analysis using Microsoft Azure tools. Developed an understanding of real-world applications such as facial recognition, image classification, and automated visual systems.",
    skills: ["Computer Vision",
"Image Processing",
"Object Detection",
"Image Classification",
"Facial Recognition",
"Microsoft Azure AI Services",
"Visual Data Analysis",
"AI-based Image Understanding"],
    downloadUrl: "https://drive.google.com/uc?export=download&id=1GVwalVzNllYk5xkVkA9qAqQbr4-s-03t",
    previewUrl: "https://drive.google.com/file/d/1GVwalVzNllYk5xkVkA9qAqQbr4-s-03t/view",
    color: "purple",
  },
  {
    id: 3,
    title: "Microsoft Azure – Machine Learning Course Certificate",
    issuer: "Coursera",
    date: "feb 2026",
    description:
      "Successfully completed a course in Machine Learning, gaining knowledge of supervised and unsupervised learning techniques, model training, and evaluation using Microsoft Azure tools. Developed an understanding of real-world applications such as predictive modeling, data analysis, and AI model deployment.",
    skills: ["Machine Learning",
"Supervised Learning",
"Unsupervised Learning",
"Model Training & Evaluation",
"Data Analysis",
"Microsoft Azure Machine Learning",
"AI Model Deployment",
"Predictive Modeling"],
    downloadUrl: "https://drive.google.com/uc?export=download&id=1-r8hoGpumEsScZbcakXwN2mRh9l7KytR",
    previewUrl: "https://drive.google.com/file/d/1-r8hoGpumEsScZbcakXwN2mRh9l7KytR/view",
    color: "orange",
  },
  {
    id: 4,
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Forage",
    date: "feb 2026",
    description:
      "Completed a hands-on job simulation in Data Analytics, gaining practical experience in data analysis and forensic technology. Developed skills in analyzing datasets, extracting insights, and understanding real-world business problem-solving approaches.",
    skills: ["Data Analysis",
"Forensic Technology",
"Data Interpretation",
"Problem Solving",
"Business Insights",
"Analytical Thinking"],
    downloadUrl: "https://drive.google.com/uc?export=download&id=1Uq5EAVgAd2t67zFl7AkmmT_DemhTv2ax",
    previewUrl: "https://drive.google.com/file/d/1Uq5EAVgAd2t67zFl7AkmmT_DemhTv2ax/view",
    color: "green",
  },
  // ── ADD MORE CERTIFICATES BELOW ──
  {
    id: 5,
    title: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "feb 2026",
    description: "Completed a hands-on job simulation in GenAI-powered data analytics, gaining practical experience in exploratory data analysis, risk profiling, and AI-based prediction techniques. Developed skills in data storytelling, business reporting, and implementing AI-driven strategies for real-world problem-solving.",
    skills: ["Exploratory Data Analysis",
"Risk Profiling",
"Predictive Analytics",
"Generative AI",
"Data Storytelling",
"Business Reporting",
"AI-driven Decision Making"],
    downloadUrl: "https://drive.google.com/uc?export=download&id=1GoD7BYkaILPznVYIGHnzbNdtDdS_xNB-",
    previewUrl: "https://drive.google.com/file/d/1GoD7BYkaILPznVYIGHnzbNdtDdS_xNB-/view",
    color: "blue",
  },
];

// ─────────────────────────────────────────────
//  DATA: Personal Info
// ─────────────────────────────────────────────

export const personalInfo = {
  name: "Utkarsh Verma",
  role: "AI/ML & Computer Vision Engineer",
  taglines: [
    "AI/ML Engineer",
    "Computer Vision Specialist",
    "Deep Learning Architect",
    "Problem Solver",
    "Innovation Driver",
  ],
  email: "Utkarsh895703@gmail.com",
  linkedin: "https://www.linkedin.com/in/utkarshverma89",
  github: "https://github.com/utkarshverma-tech",
  // ── RESUME LINK ──
  // Upload your resume PDF to Google Drive
  // Share → Anyone with link → Copy
  // Paste the direct download link below:
  // Format: https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
  resumeLink: "https://docs.google.com/document/d/1skaBMRtAndQ-IO9PJ8c8D0tAtca_beEg/export?format=pdf", // ← Replace with your Google Drive PDF link
  location: "India",
};
