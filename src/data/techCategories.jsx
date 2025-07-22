import { FaReact, FaNodeJs, FaPython, FaFigma, FaJs, FaHtml5, FaCss3, FaJava, FaCuttlefish } from "react-icons/fa";
import { SiMongodb, SiTensorflow, SiTailwindcss, SiTypescript, SiAdobeillustrator, SiExpress, SiRedux, SiNextdotjs, SiVite, SiPostgresql, SiMysql, SiCanva, SiScikitlearn, SiOpencv, SiOpenai, SiCplusplus } from "react-icons/si";
import MatlabLogo from "../assets/matlab.png"; 
import CapcutLogo from "../assets/capcut.png";
import React from "react";

const techCategories = {
  "Programming Languages": [
    { name: "C", icon: <FaCuttlefish size={30} /> },
    { name: "C++", icon: <SiCplusplus size={30} /> },
    { name: "Embedded C", icon: <FaCuttlefish size={30} /> },
    { name: "Assembly", icon: <FaCuttlefish size={30} /> },
    { name: "JavaScript", icon: <FaJs size={30} /> },
    { name: "TypeScript", icon: <SiTypescript size={30} /> },
    { name: "Python", icon: <FaPython size={30} /> },
    { name: "Java", icon: <FaJava size={30} /> },
    { name: "Makefile (Embedded)", icon: <FaCuttlefish size={30} /> },
  ],
  "Frontend Development": [
    { name: "React.js", icon: <FaReact size={30} /> },
    { name: "Next.js", icon: <SiNextdotjs size={30} /> },
    { name: "Redux", icon: <SiRedux size={30} /> },
    { name: "Vite", icon: <SiVite size={30} /> },
    { name: "JavaFX", icon: <FaJava size={30} /> },
    { name: "HTML", icon: <FaHtml5 size={30} /> },
    { name: "CSS", icon: <FaCss3 size={30} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={30} /> },
  ],
  "Backend & APIs": [
    { name: "Node.js", icon: <FaNodeJs size={30} /> },
    { name: "Express.js", icon: <SiExpress size={30} /> },
    { name: "SQL Databases", icon: <SiPostgresql size={30} /> },
    { name: "MongoDB", icon: <SiMongodb size={30} /> },
    { name: "OpenAI API", icon: <SiOpenai size={30} /> },
  ],
  "AI & Machine Learning": [
    { name: "TensorFlow", icon: <SiTensorflow size={30} /> },
    { name: "Scikit-learn", icon: <SiScikitlearn size={30} /> },
    { name: "OpenCV", icon: <SiOpencv size={30} /> },
    { name: "MATLAB", icon: <img src={MatlabLogo} alt="MATLAB" className="w-10 h-10" /> },
  ],
  "UI/UX & Creative Tools": [
    { name: "Figma", icon: <FaFigma size={30} /> },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={30} /> },
    { name: "Canva", icon: <SiCanva size={30} /> },
    { name: "CapCut", icon: <img src={CapcutLogo} alt="CapCut" className="w-10 h-10" /> },
  ],
};

export default techCategories;
