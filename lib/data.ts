import React from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { DiJsBadge } from "react-icons/di";
import eventBookingImg from "@/public/eventBookingImg.png";
import authBackendImg from "@/public/authBackendImg.png";
import portfolioImg from "@/public/portfolioImg.jpeg";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { MdSatelliteAlt } from "react-icons/md";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Building Program Trainee",
    company: "North-Eastern Space Application Center-ISRO",
    location: "India",
    description:
      "Assisted in developing and analyzing SATCOM systems, focusing on link budget evaluation, transponder performance, modulation schemes, and multiple access techniques; collaborated with scientists to document HTS and MSS research for ISRO applications.",
    icon: React.createElement(MdSatelliteAlt),
    date: "March 2025 - Present",
  },
  {
    title: "Software Developer Intern",
    company: "Apex Planet Software Pvt. Ltd.",
    location: "India",
    description:
      "Built web applications and APIs using React, Next.js, and Node.js. Worked with teams to deliver high-quality software.",
    icon: React.createElement(DiJsBadge),
    date: "Jul 2025 - Sept 2025",
  },
  {
    title: "Software Developer Intern",
    company: "Edunet Foundation",
    location: "India",
    description:
      "Created responsive user interfaces with React and Tailwind CSS. Collaborated with designers and backend developers.",
    icon: React.createElement(LuBrainCircuit),
    date: "Jan 2025 - Jun 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Event Booking Platform",
    description:
      "A web app for booking and managing events with authentication and responsive UI. (Deprecated Due to Lack of Funding)",
    tags: ["Next.js", "React", "MongoDB", "Tailwind", "CSS Modules"],
    imageUrl: eventBookingImg,
  },
  {
    title: "Backend of User Authentication",
    description:
      "Secure backend for user authentication with JWT and role-based access control.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
    imageUrl: authBackendImg,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and experience. Optimized for SEO.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion", "Vercel"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React.Js",
  "Next.Js",
  "Node.Js",
  "Git",
  "Tailwind CSS",
  "MongoDB",
  "SQL",
  "Express",
  "Redux.Js",
  "Docker",
  "GitHub",
  "GitLab",
  "Figma",
  "Postman",
  "ESLint",
  "PowerShell",
  "Markdown",
  "Cloudflare",
  "DigitalOcean",
  "Vercel",
  "Netlify",
  "Bootstrap",
  "JWT",
  "NPM",
  "Nodemon",
  "React Router",
  "React Hook Form",
  "Prisma",
  "MySQL",
  "Vite",
  "Nginx",
  "EJS",
  "FastAPI",
  "Streamlit",
  "Jira",
  "Slack",
  "Notion",
  "Canva",
  "Bun",
  "AMD",
  "WSL"
] as const;

export const contactMe = [
  {
    icon: React.createElement(BiLogoGmail),
    name: "Gmail",
    contactUrl: "mailto:sarthakhota30@gmail.com",
  },
  {
    icon: React.createElement(FaLinkedin),
    name: "LinkedIn",
    contactUrl: "https://www.linkedin.com/in/sarthak-hota",
  },
  {
    icon: React.createElement(PiMicrosoftOutlookLogo),
    name: "Outlook",
    contactUrl: "mailto:sarthakhota30@outlook.com",
  },
  {
    icon: React.createElement(FaGithub),
    name: "Github",
    contactUrl: "https://github.com/GENIUS-69",
  },
  {
    icon: React.createElement(FaTwitter),
    name: "X - Twitter",
    contactUrl: "https://x.com/thesarthakhota",
  },
  {
    icon: React.createElement(FaTelegram),
    name: "Telegram",
    contactUrl: "https://t.me/SarthakHota",
  },
] as const;