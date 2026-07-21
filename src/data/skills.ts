export type Skill = {
  name: string;
  icon?: string;
  invert?: boolean;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

const icon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: icon("java/java-original.svg") },
      { name: "C", icon: icon("c/c-original.svg") },
      { name: "Python", icon: icon("python/python-original.svg") },
      { name: "JavaScript", icon: icon("javascript/javascript-original.svg") },
      { name: "TypeScript", icon: icon("typescript/typescript-original.svg") },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: icon("react/react-original.svg") },
      { name: "Next.js", icon: icon("nextjs/nextjs-original.svg"), invert: true },
      { name: "Tailwind CSS", icon: icon("tailwindcss/tailwindcss-original.svg") },
      {
        name: "Recharts",
        icon: "https://cdn.simpleicons.org/d3/F9A03C",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: icon("nodejs/nodejs-original.svg") },
      {
        name: "Express.js",
        icon: icon("express/express-original.svg"),
        invert: true,
      },
      { name: "Spring Boot", icon: icon("spring/spring-original.svg") },
      {
        name: "Flask",
        icon: icon("flask/flask-original.svg"),
        invert: true,
      },
      { name: "RESTful APIs" },
      {
        name: "MCP Services",
        icon: "https://cdn.simpleicons.org/anthropic/D4A27F",
      },
    ],
  },
  {
    title: "Cloud & Data",
    skills: [
      {
        name: "AWS",
        icon: icon("amazonwebservices/amazonwebservices-original-wordmark.svg"),
      },
      { name: "GCP", icon: icon("googlecloud/googlecloud-original.svg") },
      { name: "MongoDB", icon: icon("mongodb/mongodb-original.svg") },
      { name: "MySQL", icon: icon("mysql/mysql-original.svg") },
      { name: "PostgreSQL", icon: icon("postgresql/postgresql-original.svg") },
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      { name: "Git", icon: icon("git/git-original.svg") },
      { name: "GitHub", icon: icon("github/github-original.svg"), invert: true },
      { name: "Docker", icon: icon("docker/docker-original.svg") },
      { name: "Jenkins", icon: icon("jenkins/jenkins-original.svg") },
      { name: "Postman", icon: icon("postman/postman-original.svg") },
      {
        name: "GrapeJS",
        icon: "https://avatars.githubusercontent.com/u/22072210?s=64&v=4",
      },
    ],
  },
];
