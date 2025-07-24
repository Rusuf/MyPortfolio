
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
  githubUrl:string;
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
  { id: 11, name: "MySQL", category: "Database", color: "#4479A1", icon: "🐬" },
  { id: 12, name: "MongoDB", category: "Database", color: "#47A248", icon: "🍃" },
  { id: 13, name: "PostgreSQL", category: "Database", color: "#336791", icon: "🐘" },
  { id: 14, name: "Git & GitHub", category: "Tools", color: "#f1502f", icon: "🔧" },
  { id: 15, name: "CI/CD", category: "Practices", color: "#f0b90b", icon: "🚀" },
  { id: 16, name: "Agile", category: "Practices", color: "#663399", icon: "🔄" },
  { id: 17, name: "AWS/GCP", category: "Others", color: "#FF9900", icon: "☁️" }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "meal-planner",
    problem: "Users need a way to plan their meals and track their nutrition.",
    solution: "An intelligent tool for personalized meal planning and nutrition tracking. This project was showcased at a Tech Expo for its innovative approach.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/meal-planner.svg",
    liveDemoUrl: "#",
    githubUrl: "https://github.com/Rusuf/meal-planner"
  },
  {
    id: 2,
    title: "PetCare Management System",
    problem: "Pet owners need a simple way to manage their pet's health and appointments.",
    solution: "A CRUD application using Django that increased scheduling productivity by 40%. Manages appointments, pet health records, and reminders.",
    technologies: ["Django", "Python", "RESTful APIs"],
    image: "/images/petcare.svg",
    liveDemoUrl: "#",
    githubUrl: "https://github.com/Rusuf/PetCare"
  },
  {
    id: 3,
    title: "Public Health Analytics Tool",
    problem: "There is a need for real-time disease tracking and visualization.",
    solution: "An interactive dashboard using Python and Chart.js that won 1st place in a hackathon. Recognized for innovation in health data visualization.",
    technologies: ["Python", "Chart.js", "Flask"],
    image: "/images/health-analytics.svg",
    liveDemoUrl: "#",
    githubUrl: "https://github.com/Rusuf/CEMA"
  }
];

export const certifications: Certification[] = [
  { id: 1, title: "Meta Front-End Developer", issuer: "Coursera", url: "#" },
  { id: 2, title: "Google IT Automation with Python", issuer: "Coursera", url: "#" },
  { id: 3, title: "Responsive Web Design", issuer: "freeCodeCamp", url: "#" },
  { id: 4, title: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp", url: "#" }
];

export const aboutTimeline = [
  {
    id: 1,
    year: "2020",
    title: "Started Coding Journey During COVID",
    description: "Discovered my passion for programming during the pandemic lockdown. Started learning web development fundamentals with HTML, CSS, and JavaScript through online resources and self-study."
  },
  {
    id: 2,
    year: "2021-2025",
    title: "Technical University of Kenya",
    description: "Pursued a Bachelor of Science in Information Science. Relevant coursework included Web Programming, Software Engineering, Database Systems, and Human-Computer Interaction."
  },
  {
    id: 3,
    year: "2022",
    title: "First Hackathon Experience",
    description: "Participated in my first hackathon, working under pressure to deliver innovative solutions. Enhanced my problem-solving skills and learned to work effectively in time-constrained environments."
  },
  {
    id: 4,
    year: "2023",
    title: "DevFest Hackathon & Advanced Projects",
    description: "Competed in DevFest hackathon, showcasing my growing expertise in web development. Worked on more complex projects incorporating modern frameworks like React and Node.js. Started contributing to open-source projects."
  },
  {
    id: 5,
    year: "2024",
    title: "Frontend Developer at Meallensai",
    description: "Building and maintaining user interfaces with HTML, CSS, and JavaScript. Collaborating with designers and backend developers to ensure a cohesive experience and optimizing frontend performance."
  },
  {
    id: 6,
    year: "2025",
    title: "Final Year & Graduation",
    description: "Completing my degree with a focus on full-stack development. Working on final year projects and preparing to graduate in December. Ready to apply my accumulated knowledge in real-world applications."
  }
];
