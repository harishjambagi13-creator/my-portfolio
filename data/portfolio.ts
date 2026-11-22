export const portfolioData = {
  name: "HARISH",
  fullName: "Harish",
  role: "FULL-STACK DEVELOPER • AI & ML ENGINEER",
  tagline:
    "Building scalable full-stack web applications and practical machine learning systems from concept to deployment.",
  aboutBio:
    "I'm an AI & Machine Learning developer and full-stack builder. I specialize in turning complex ideas into fast, production-ready web platforms—combining Next.js, TypeScript, and Supabase with intelligent ML workflows and clean dark-mode interfaces.",
  heroImage: "/profile.png",
  aboutImage: "/about-photo.png",
  email: "harish@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  instagram: "https://instagram.com/yourusername",

  stats: [
    { value: "15+", label: "PROJECTS BUILT" },
    { value: "12+", label: "TECHNOLOGIES MASTERED" },
    { value: "5+", label: "SERVICES OFFERED" },
  ],

  projects: [
    {
      id: "01",
      title: "ShopSphere E-Commerce",
      category: "Full-Stack Web App",
      image: "/projects/project1.png",
      description:
        "A complete full-stack e-commerce platform featuring user authentication, dynamic product catalog, cart management, Razorpay checkout integration, and an admin portal.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Razorpay"],
      liveUrl: "https://github.com/yourusername",
      repoUrl: "https://github.com/yourusername",
    },
    {
      id: "02",
      title: "CineScope Movie Explorer",
      category: "API & Frontend Engineering",
      image: "/projects/project2.png",
      description:
        "Interactive movie discovery application powered by the TMDB API and Supabase, complete with instant search, trending carousels, and personal watchlists.",
      tech: ["Next.js", "TypeScript", "TMDB API", "Supabase", "Tailwind CSS"],
      liveUrl: "https://github.com/yourusername",
      repoUrl: "https://github.com/yourusername",
    },
    {
      id: "03",
      title: "Intelligent ML Prediction Suite",
      category: "Artificial Intelligence & ML",
      image: "/projects/project3.png",
      description:
        "End-to-end machine learning pipeline with automated feature engineering, model evaluation, and an interactive web dashboard for real-time predictions.",
      tech: ["Python", "Scikit-Learn", "FastAPI", "React", "Pandas"],
      liveUrl: "https://github.com/yourusername",
      repoUrl: "https://github.com/yourusername",
    },
  ],

  services: [
    {
      name: "Full-Stack Web Application",
      price: "₹15,000 – ₹45,000",
      desc: "End-to-end Next.js & Supabase web apps with authentication, database, and Razorpay payments.",
    },
    {
      name: "Animated Portfolio & Landing Page",
      price: "₹5,000 – ₹15,000",
      desc: "High-converting, custom dark-mode websites with Framer Motion animations.",
    },
    {
      name: "AI & Machine Learning Integration",
      price: "₹10,000 – ₹30,000",
      desc: "Custom ML models, predictive analytics dashboards, and LLM API integrations.",
    },
    {
      name: "UI/UX Redesign & Frontend Polish",
      price: "₹6,000 – ₹18,000",
      desc: "Modernizing existing websites into fast, responsive, mobile-first experiences.",
    },
  ],

  skills: [
    {
      category: "Frontend & UI",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
    },
    {
      category: "Backend & Database",
      items: ["Supabase", "PostgreSQL", "Node.js", "REST APIs", "Razorpay API", "FastAPI"],
    },
    {
      category: "AI, ML & Tools",
      items: ["Python", "Machine Learning", "Data Analysis", "Git & GitHub", "VS Code", "Vercel"],
    },
  ],
};