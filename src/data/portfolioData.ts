
export interface Skill {
  id: number;
  name: string;
  proficiency: number;
  color: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "HTML",
    proficiency: 90,
    color: "#FF5733",
    icon: "📄"
  },
  {
    id: 2,
    name: "CSS",
    proficiency: 85,
    color: "#2965f1",
    icon: "🎨"
  },
  {
    id: 3,
    name: "JavaScript",
    proficiency: 80,
    color: "#f0db4f",
    icon: "📜"
  },
  {
    id: 4,
    name: "React",
    proficiency: 85,
    color: "#61dafb",
    icon: "⚛️"
  },
  {
    id: 5,
    name: "TypeScript",
    proficiency: 75,
    color: "#007acc",
    icon: "🔷"
  },
  {
    id: 6,
    name: "Node.js",
    proficiency: 70,
    color: "#68a063",
    icon: "🟢"
  },
  {
    id: 7,
    name: "UI/UX",
    proficiency: 75,
    color: "#FF69B4",
    icon: "🎯"
  },
  {
    id: 8,
    name: "Tailwind CSS",
    proficiency: 85,
    color: "#38b2ac",
    icon: "🌊"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Cosmic Weather App",
    description: "A weather application with a space theme that shows forecasts with cosmic animations based on weather conditions.",
    technologies: ["React", "TypeScript", "OpenWeather API", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Interstellar Task Manager",
    description: "A task management application with space-themed UI where each task is a 'mission' and categories are 'galaxies'.",
    technologies: ["React", "Redux", "Firebase", "Styled Components"],
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Nebula Social Network",
    description: "A social network concept where users are 'explorers' and posts are 'discoveries' in a cosmic-themed interface.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Stellar E-Commerce",
    description: "An e-commerce platform with a space theme where products are displayed as collectible celestial objects.",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Sanity.io"],
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const aboutTimeline = [
  {
    id: 1,
    year: "2020",
    title: "Started Coding Journey",
    description: "Discovered my passion for web development and began learning HTML, CSS, and JavaScript."
  },
  {
    id: 2,
    year: "2021",
    title: "First Web Application",
    description: "Built my first complete web application using React and deployed it online."
  },
  {
    id: 3,
    year: "2022",
    title: "Expanded Knowledge",
    description: "Dived deeper into backend technologies and database management with Node.js and MongoDB."
  },
  {
    id: 4,
    year: "2023",
    title: "Professional Development",
    description: "Started working on freelance projects and contributed to open-source communities."
  },
  {
    id: 5,
    year: "2024",
    title: "1 Million Devs Hackathon",
    description: "Participated in the hackathon to push my skills further and connect with other developers."
  }
];
