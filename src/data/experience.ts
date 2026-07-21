export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  date: string;
  technologies: string[];
  bullets: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "kaushalam",
    role: "Full Stack Developer",
    company: "Kaushalam Digital Pvt. Ltd.",
    location: "Ahmedabad",
    date: "Jan 2025 – Present",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Express.js",
      "MongoDB",
      "Azure Blob Storage",
      "Azure Virtual Network",
    ],
    bullets: [
      "Enhanced inventory, sales, and customer management systems for improved performance and reliability.",
      "Built a Doctor Management System with Next.js for a fast, SEO-optimized UI and smooth UX.",
      "Implemented efficient import/export using Node.js Worker Threads and database transactions to process large datasets without blocking, decreasing API load by 5%.",
      "Developed interactive analytics dashboards with Recharts for key business insights.",
      "Optimized e-commerce with Next.js SSR, lazy loading, and caching (timestamped images + Azure Blob) to boost frontend speed by 10%.",
    ],
  },
  {
    id: "infoware",
    role: "AI / ML Intern",
    company: "Infoware House Pvt. Ltd.",
    location: "Ahmedabad",
    date: "May 2024 – July 2024",
    technologies: [
      "Flask",
      "TensorFlow",
      "Beautiful Soup",
      "Scikit-Learn",
    ],
    bullets: [
      "Built a finance-focused project to predict financial assets and provide user feedback using ML models.",
    ],
  },
];
