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
    title: "Started Coding Journey During COVID",
    description: "Discovered my passion for programming during the pandemic lockdown. Started learning web development fundamentals with HTML, CSS, and JavaScript through online resources and self-study."
  },
  {
    id: 2,
    year: "2021",
    title: "University Projects & Team Collaboration",
    description: "Deepened my understanding of software development through university coursework. Started working on collaborative projects with fellow students, gaining experience in version control and team development practices."
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
    title: "Portfolio Development & Advanced Skills",
    description: "Building comprehensive portfolio showcasing my projects and skills. Focusing on advanced web technologies and preparing for final year projects. Continued participation in hackathons and coding challenges."
  },
  {
    id: 6,
    year: "2025",
    title: "Final Year & Graduation",
    description: "Completing my degree with a focus on full-stack development. Working on final year projects and preparing to transition into the professional tech industry. Ready to apply my accumulated knowledge in real-world applications."
  }
];
