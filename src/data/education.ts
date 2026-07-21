export type EducationItem = {
  id: string;
  school: string;
  degree: string;
  date: string;
  grade: string;
};

export const education: EducationItem[] = [
  {
    id: "pdeu",
    school: "Pandit Deendayal Energy University, Gandhinagar",
    degree: "B.Tech in Computer Engineering",
    date: "2021 – 2025",
    grade: "CGPA 9.43",
  },
  {
    id: "edunova",
    school: "Edunova Higher Secondary School",
    degree: "Higher Secondary (Science)",
    date: "2019 – 2021",
    grade: "85%",
  },
];

export type Publication = {
  id: string;
  title: string;
  venue: string;
  link?: string;
};

export const publications: Publication[] = [
  {
    id: "task-based",
    title: "An Analysis of Task-Based Algorithms for Cloud Computing",
    venue: "Springer Nature",
  },
  {
    id: "resource-oriented",
    title: "An Analysis of Resource-Oriented Algorithms for Cloud Computing",
    venue: "Springer Nature",
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  date: string;
  description: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: "wowdao",
    title: "1st Rank Globally",
    org: "WowDAO Worldwide Hackathon",
    date: "Oct 2023",
    description:
      "AI-Enhanced Brain Imaging for Improved Diagnostics — generative imaging to support faster clinical decisions.",
    link: "https://wowdao.ai/team/byte-hogs-226.html",
  },
  {
    id: "ssip",
    title: "SSIP Finalist",
    org: "Government of Gujarat",
    date: "Nov 2022 – Feb 2023",
    description:
      "Dead stock management web app with WhatsApp chatbot notifications to reduce warehouse waste.",
  },
];
