export type Project = {
  id: string;
  title: string;
  date: string;
  problem: string;
  action: string;
  result: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "enterprise-knowledge-base",
    title: "Enterprise Knowledge Base",
    date: "2026",
    problem:
      "Teams lose time searching scattered PDFs, architecture docs, meeting notes, and internal knowledge.",
    action:
      "Built a multi-tenant RAG platform that ingests documents, creates Ollama embeddings, retrieves context from Qdrant, and streams grounded answers with citations.",
    result:
      "Delivers semantic search, document chat, RBAC, audit logs, async BullMQ processing, summaries, and a knowledge graph with fully local AI.",
    tags: ["Next.js 15", "Fastify", "Ollama", "Qdrant", "PostgreSQL", "BullMQ"],
    github:
      "https://github.com/murlipatel1/llm-document-processing-ollama",
    featured: true,
  },
  {
    id: "three-tier-application",
    title: "Kubernetes 3-Tier Application",
    date: "2026",
    problem:
      "A full-stack application needed a repeatable local setup and scalable deployment with persistent data and secure configuration.",
    action:
      "Containerized a Next.js frontend, Node.js/Express API, and PostgreSQL database, then created Kubernetes manifests, secrets, ConfigMaps, services, and deployment scripts.",
    result:
      "Runs consistently with Docker Compose and deploys to Minikube with persistent Postgres storage and an isolated three-tier architecture.",
    tags: ["Next.js", "Express", "Prisma", "PostgreSQL", "Docker", "Kubernetes"],
    github: "https://github.com/murlipatel1/three-tier-application",
    featured: true,
  },
  {
    id: "brain-imaging",
    title: "AI-Enhanced Brain Imaging",
    date: "Oct 2023",
    problem:
      "Doctors needed faster image-based diagnostics from limited imaging data.",
    action:
      "Built a cGAN image-to-image pipeline with Flask, React, MongoDB, and Azure Blob Storage for generative diagnostics support.",
    result:
      "Secured 1st place globally at the WowDAO worldwide hackathon; generated images help clinicians decide faster.",
    tags: ["React", "Flask", "cGAN", "Azure", "MongoDB", "Generative AI"],
    live: "https://wowdao.ai/team/byte-hogs-226.html",
    github: "https://wowdao.ai/team/byte-hogs-226.html",
    featured: true,
  },
  {
    id: "dead-stock",
    title: "Dead Stock Management",
    date: "Mar 2023",
    problem:
      "Warehouses lost time and money on slow, manual dead-stock audits.",
    action:
      "Engineered a MERN web app with real-time Email/SMS alerts and multi-service data integration.",
    result:
      "40% decrease in time spent on inventory audits, with faster dead-stock identification.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    github: "https://github.com/murlipatel1/dead_stock_managment_final",
    live: "https://github.com/murlipatel1/dead_stock_managment_final",
    featured: true,
  },
  {
    id: "simplit",
    title: "Simplit Finance App",
    date: "May 2023",
    problem:
      "Users struggled to see all finances and get actionable investment guidance in one place.",
    action:
      "Shipped a full-stack finance visualizer on GCP with an ML model suggesting stocks to buy.",
    result:
      "Built for the Google Cloud & AMD hackathon with end-to-end auth, visualization, and ML advice.",
    tags: ["GCP", "React", "Node.js", "PostgreSQL", "Python", "ML"],
    github: "https://github.com/murlipatel1/gfg_cloudhackethon",
    live: "https://github.com/murlipatel1/gfg_cloudhackethon",
    featured: true,
  },
];
