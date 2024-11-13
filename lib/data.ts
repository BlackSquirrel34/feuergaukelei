import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import strapiImg from "@/public/strapi-react-blog.png";
import sportsImg from "@/public/sports-store.png";
import travellersImg from "@/public/travellers-lounge.png";
import dentistImg from "@/public/dentist-home.png";

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
    title: "Student Research Assistant",
    location: "University of Bamberg",
    description:
      "I developed my first web application in Django, with help and feedback from a senior developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "IBM Full-Stack JavaScript Developer",
    location: "IBM Skills Network via Coursera",
    description:
      "For obtaining this professional certificate, I had to show my ability to build cloud-native full-stack applications using JavaScript.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Bamberg",
    description:
      "I'm now a Full-Stack developer working as a freelancer. My stack includes React, Node.js, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "React Strapi Blog",
    description:
      "A blogging application fetching the posts from the headless strapi CMS via a json API.",
    tags: ["React", "Tailwind"],
    imageUrl: strapiImg,
  },
  {
    title: "Sport Shop",
    description:
      "Node web application listing products retrieved from a database by category. Including pagination and shopping cart functionality.",
    tags: ["React", "TypeScript", "Node.js"],
    imageUrl: sportsImg,
  },
  {
    title: "Traveller's Lounge",
    description:
      "A travel recommendation website with Home, About and Contact Page. Allows to search for destinations based on keywords.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: travellersImg,
  },
  {
    title: "Dentist Website",
    description:
      "Implements a Bootstrap template with a Django backend, including navigation, template inheritance, template tags, and functional email contact forms.",
    tags: ["Django", "Python", "HTML", "CSS"],
    imageUrl: dentistImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "SQL",
  "Python",
  "Django",
  "Framer Motion",
  "Java",
] as const;