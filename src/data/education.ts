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
    link: "https://link.springer.com/chapter/10.1007/978-981-99-3758-5_44",
  },
  {
    id: "resource-oriented",
    title: "An Analysis of Resource-Oriented Algorithms for Cloud Computing",
    venue: "Springer Nature",
    link: "https://link.springer.com/chapter/10.1007/978-981-99-3758-5_46",
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
      "AI-Enhanced Brain Imaging for Improved Diagnostics: generative imaging to support faster clinical decisions.",
    link: "https://www.linkedin.com/posts/finalists-announcement-worldwide-ai-share-7112142639335972864-LVhn/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADhUqr8BtDptDB6gIJQ1U7tiKoVZUcaDPMY",
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
