import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import quiz from "@/public/quiz.jpeg";
import linkVault from "@/public/linkVault.png"
import logo from "@/public/logo.png"
import weather from "@/public/weather.jpg"

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
    title: "System Associate",
    location: "Infosys",
    description:
      "Working as a System Associate in Infosys.Engaging in both automated and manual testing.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Graduated BCA",
    location: "Amity University Kolkata",
    description:
      "I graduated from Amity University Kolkata, completing my degree in Bachelors in Computer Applications",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2022",
  },
  
] as const;

export const projectsData = [
  {
    title: "Weather Forecast App",
    description:
      "Weather app that provides real-time weather conditions including wind speed, humidity percentage, and sunrise time, as well as a 7-day weather forecast.",
    tags: ["React Native", "Heroicons", "Lodash", "Tailwind", "WeatherAPI"],
    imageUrl: weather,
  },
  {
    title: "ChatterVerse",
    description:
      "A real-time chatting application that takes inspiration from messenger for it's looks with real-time notifications.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux"],
    imageUrl: logo,
  },
  {
    title: "LinkVault File Sharing",
    description:
      "Link Vault is a file sharing web app that helps you share files/ images to your friends via email/ sharing URL.",
    tags: ["React.js", "Next.js", "Clerk", "Tailwind", "Firebase"],
    imageUrl: linkVault,
  },
  {
    title:"Quiz App",
    description:"A simple quiz app that has timer, scoring system and memory to store highest score",
    tags:["HTML", "CSS","JavaScript"],
    imageUrl: quiz
  }
] as const;

export const skillsData = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "C/C++",
  "Kotlin",
  "React Native",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Keras",
  "TensorFlow",
  "Spring Boot",
  "Microservices",
  "Redux",
  "Docker",
  "AWS",
  "Kubernetes",
  "Git",
  "Postman",
  "Firebase",
  "Power Bi",
  "Selenium",
  "UFT",
  "XML"

] as const;