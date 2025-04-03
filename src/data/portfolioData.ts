
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
    title: "Meal Planner",
    description: "A comprehensive meal planning application that helps users organize their weekly meals, create shopping lists, and discover new recipes.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    demoUrl: "#",
    githubUrl: "https://github.com/Rusuf/meal-planner"
  },
  {
    id: 2,
    title: "Vetstuff",
    description: "A veterinary management system designed to help vet clinics manage appointments, patient records, and medical histories.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    demoUrl: "#",
    githubUrl: "https://github.com/Rusuf/Vetstuff"
  },
  {
    id: 3,
    title: "WorkIBL",
    description: "A workplace management tool that streamlines task allocation, team communication, and project tracking for improved productivity.",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Socket.io"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    demoUrl: "#",
    githubUrl: "https://github.com/Rusuf/WorkIBL"
  },
  {
    id: 4,
    title: "Olaiserr-Mobile",
    description: "A cross-platform mobile application that brings innovative features and intuitive design to enhance user experience on mobile devices.",
    technologies: ["React Native", "Redux", "Firebase", "Expo"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    demoUrl: "#",
    githubUrl: "https://github.com/Rusuf/Olaiserr-Mobile"
  },
  {
    id: 5,
    title: "Soufable",
    description: "An interactive table reservation system for restaurants that simplifies the booking process and improves customer experience.",
    technologies: ["React", "Express", "MongoDB", "Stripe API"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    demoUrl: "#",
    githubUrl: "https://github.com/Rusuf/soufable"
  },
  {
    id: 6,
    title: "QAI",
    description: "An AI-powered question answering system that provides accurate information across various domains through natural language processing.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c",
    demoUrl: "#",
    githubUrl: "https://github.com/Rusuf/QAI"
  },
  {
    id: 7,
    title: "Blog Platform",
    description: "A modern blogging platform with content management system, user authentication, and social sharing capabilities.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    demoUrl: "#",
    githubUrl: "https://github.com/Rusuf/blog"
  },
  {
    id: 8,
    title: "Python Learning Tool",
    description: "An educational platform designed to help beginners learn Python programming through interactive lessons and exercises.",
    technologies: ["Django", "Python", "JavaScript", "Docker"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    demoUrl: "#",
    githubUrl: "https://github.com/Rusuf/python2"
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
