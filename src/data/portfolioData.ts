
export interface Skill {
  id: number;
  name: string;
  category: string;
  color: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  image: string;
  liveDemoUrl: string;
  githubUrl: string;
  status?: "live" | "completed";
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  liveUrl?: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  url: string;
}

export const skills: Skill[] = [
  { id: 1, name: "HTML", category: "Frontend", color: "#FF5733", icon: "📄" },
  { id: 2, name: "CSS", category: "Frontend", color: "#2965f1", icon: "🎨" },
  { id: 3, name: "JavaScript", category: "Frontend", color: "#f0db4f", icon: "📜" },
  { id: 4, name: "React", category: "Frontend", color: "#61dafb", icon: "⚛️" },
  { id: 5, name: "TypeScript", category: "Frontend", color: "#007acc", icon: "🔷" },
  { id: 6, name: "Python", category: "Backend", color: "#3776AB", icon: "🐍" },
  { id: 7, name: "Flask", category: "Backend", color: "#000000", icon: "🌶️" },
  { id: 8, name: "Django", category: "Backend", color: "#092E20", icon: "🎸" },
  { id: 9, name: "Node.js", category: "Backend", color: "#68a063", icon: "🟢" },
  { id: 10, name: "RESTful APIs", category: "Backend", color: "#d95f02", icon: "🔄" },
  { id: 11, name: "Rust", category: "Backend", color: "#DEA584", icon: "🦀" },
  { id: 12, name: "FastAPI", category: "Backend", color: "#009688", icon: "⚡" },
  { id: 13, name: "REST API Design", category: "Backend", color: "#6C63FF", icon: "🔗" },
  { id: 14, name: "MySQL", category: "Database", color: "#4479A1", icon: "🐬" },
  { id: 15, name: "MongoDB", category: "Database", color: "#47A248", icon: "🍃" },
  { id: 16, name: "PostgreSQL", category: "Database", color: "#336791", icon: "🐘" },
  { id: 17, name: "M-Pesa / Daraja API", category: "Payments", color: "#4CAF50", icon: "💳" },
  { id: 18, name: "Data Pipelines", category: "Data", color: "#FF6F00", icon: "📊" },
  { id: 19, name: "Git & GitHub", category: "Tools", color: "#f1502f", icon: "🔧" },
  { id: 20, name: "CI/CD", category: "Practices", color: "#f0b90b", icon: "🚀" },
  { id: 21, name: "Agile", category: "Practices", color: "#663399", icon: "🔄" },
  { id: 22, name: "AWS/GCP", category: "Others", color: "#FF9900", icon: "☁️" },
];

export const projects: Project[] = [
  {
    id: 4,
    title: "NiTip Africa",
    problem: "Kenyan streamers and African content creators had no simple way to receive tips from fans using mobile money — existing solutions required paybills, had delays, and weren't built for live streaming.",
    solution: "A real-time M-Pesa tipping platform where fans scan a QR code on stream and the creator gets paid instantly. Features instant M-Pesa notifications, zero-threshold earnings, live on-screen tip alerts, creator dashboards, and community moderation tools. Currently in active beta.",
    technologies: ["M-Pesa Daraja API", "YouTube API", "Twitch API", "WebSockets", "Node.js", "React", "TypeScript"],
    image: "/images/nitip.png",
    liveDemoUrl: "https://nitip.africa",
    githubUrl: "https://github.com/Rusuf",
    status: "live",
  },
  {
    id: 1,
    title: "meal-planner",
    problem: "Users need a way to plan their meals and track their nutrition.",
    solution: "An intelligent tool for personalized meal planning and nutrition tracking. This project was showcased at a Tech Expo for its innovative approach.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/meal-planner.png",
    liveDemoUrl: "#",
    githubUrl: "https://github.com/Rusuf/meal-planner",
  },
  {
    id: 2,
    title: "PetCare Management System",
    problem: "Pet owners need a simple way to manage their pet's health and appointments.",
    solution: "A CRUD application using Django that increased scheduling productivity by 40%. Manages appointments, pet health records, and reminders.",
    technologies: ["Django", "Python", "RESTful APIs"],
    image: "/images/petcare.png",
    liveDemoUrl: "#",
    githubUrl: "https://github.com/Rusuf/PetCare",
  },
  {
    id: 3,
    title: "CEMA — Health Information System",
    problem: "Healthcare providers need a system for managing client registrations and program enrollments across TB, Malaria, and HIV initiatives.",
    solution: "A health information system for managing client registrations and program enrollments across TB, Malaria, and HIV initiatives. Includes a secure REST API for external system integration.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLite", "pytest"],
    image: "/images/health-analytics.png",
    liveDemoUrl: "#",
    githubUrl: "https://github.com/Rusuf/CEMA",
    status: "completed",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "NiTip Africa",
    role: "Founder",
    type: "Full-time",
    location: "Westlands, Nairobi",
    period: "Dec 2025 – Present",
    description: "Founded NiTip Africa — a real-time M-Pesa tipping platform for Kenyan streamers and African creators.",
    highlights: [
      "Built end-to-end: QR-code tipping flow, instant M-Pesa payment processing via Daraja API, real-time WebSocket alerts",
      "Designed full payment data architecture: transaction flows, creator earnings, zero-threshold payouts",
      "Integrated with YouTube for live stream tip overlays and creator dashboards",
      "Onboarded 50+ creators in beta, processing KES 100,000+ in real M-Pesa transactions at nitip.africa",
    ],
    liveUrl: "https://nitip.africa",
  },
  {
    id: 2,
    company: "SamzDixon Technologies",
    role: "Junior Software Engineer",
    type: "Full-time",
    location: "Nairobi",
    period: "Aug 2025 – Dec 2025",
    description: "Built an AI-powered market intelligence engine processing local POS transaction data and global web trend signals.",
    highlights: [
      "Built an AI-powered market intelligence engine processing local POS transaction data and global web trend signals to generate real-time pricing and menu optimisation recommendations for restaurant clients",
      "Engineered a high-performance Rust backend for the analytical data pipelines",
      "Integrated the AI service into an existing PHP monolith via REST API",
      "Presented data-driven insights and recommendations directly to business clients",
    ],
  },
  {
    id: 3,
    company: "MealLensAI",
    role: "Frontend Developer Intern",
    type: "Internship",
    location: "Remote",
    period: "Dec 2024 – Jun 2025",
    description: "Building and maintaining user interfaces with HTML, CSS, and JavaScript at MealLensAI.",
    highlights: [
      "Built and maintained user interfaces with HTML, CSS, and JavaScript",
      "Collaborated with designers and backend developers to ensure a cohesive experience",
      "Optimized frontend performance for better user experience",
      "Analysed user feedback data to identify recurring issues and improvement opportunities",
      "Supported customer onboarding and provided technical explanations to non-technical users",
    ],
  },
];

export const certifications: Certification[] = [
  { id: 1, title: "Meta Front-End Developer", issuer: "Coursera", url: "#" },
  { id: 2, title: "Google IT Automation with Python", issuer: "Coursera", url: "#" },
  { id: 3, title: "Responsive Web Design", issuer: "freeCodeCamp", url: "#" },
  { id: 4, title: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp", url: "#" },
];

export const aboutTimeline = [
  {
    id: 1,
    year: "2020",
    title: "Started Coding Journey During COVID",
    description: "Discovered my passion for programming during the pandemic lockdown. Started learning web development fundamentals with HTML, CSS, and JavaScript through online resources and self-study.",
  },
  {
    id: 2,
    year: "2021–2025",
    title: "Technical University of Kenya",
    description: "Bachelor of Science in Information Science. Coursework focused on Web Programming, Software Engineering, Database Systems, and Human-Computer Interaction.",
  },
  {
    id: 3,
    year: "2022",
    title: "First Hackathon Experience",
    description: "Participated in my first hackathon, working under pressure to deliver innovative solutions. Enhanced my problem-solving skills and learned to work effectively in time-constrained environments.",
  },
  {
    id: 4,
    year: "2023",
    title: "DevFest Hackathon & Advanced Projects",
    description: "Competed in DevFest hackathon, showcasing my growing expertise in web development. Worked on more complex projects incorporating modern frameworks like React and Node.js. Started contributing to open-source projects.",
  },
  {
    id: 5,
    year: "2024–2025",
    title: "Frontend Developer Intern at MealLensAI",
    description: "Dec 2024 – Jun 2025. Built and maintained user interfaces with HTML, CSS, and JavaScript. Analysed user feedback to identify recurring issues and supported customer onboarding with technical explanations.",
  },
  {
    id: 6,
    year: "2025",
    title: "Junior Software Engineer at SamzDixon Technologies",
    description: "Aug – Dec 2025. Built an AI-powered market intelligence engine processing POS transaction data and web trend signals. Engineered a high-performance Rust backend for analytical data pipelines.",
  },
  {
    id: 7,
    year: "2025–Present",
    title: "Founded NiTip Africa",
    description: "Dec 2025. Founded NiTip Africa — a live M-Pesa tipping platform for Kenyan streamers. QR-code tipping, instant payouts, YouTube integration. Active beta at nitip.africa.",
  },
];
