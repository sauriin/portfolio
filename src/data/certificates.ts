export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  documentUrl: string;
  verificationUrl?: string;
};

export const certificates: Certificate[] = [
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    issuer: "Forage",
    date: "May 30, 2026",
    documentUrl: "/documents/deloitte-job-simulation.pdf",
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google / Coursera",
    date: "June 26, 2024",
    documentUrl: "/documents/coursera-foundations-of-project-management.pdf",
    verificationUrl: "https://coursera.org/verify/HK9P2G2PSFRL",
  },
  {
    title: "AI Fluency for Students",
    issuer: "Anthropic Academy",
    documentUrl: "/documents/certificate-ai-fluency-for-student.pdf",
  },
  {
    title: "DevOps for Web Development",
    issuer: "AWS / DevTown",
    documentUrl: "/documents/aws-devops-for-web-development.pdf",
    verificationUrl: "https://cert.devtown.in/verify/1gnBck",
  },
  {
    title: "Frontend Development with ReactJS and JavaScript",
    issuer: "AWS / DevTown",
    documentUrl: "/documents/aws-frontend-dev-with-reactjs-and-javascript.pdf",
    verificationUrl: "https://cert.devtown.in/verify/12Ving",
  },
  {
    title: "DevOps for Web Development",
    issuer: "DevTown",
    date: "December 11, 2023",
    documentUrl: "/documents/devtown-devops-for-web-development.pdf",
    verificationUrl: "https://cert.devtown.in/verify/Zr36NB",
  },
  {
    title: "Frontend Development with ReactJS and JavaScript",
    issuer: "DevTown",
    date: "November 18, 2023",
    documentUrl: "/documents/devtown-frontend-dev-with-reactjs-and-javascript.pdf",
    verificationUrl: "https://cert.devtown.in/verify/ZL47Ny",
  },
];
