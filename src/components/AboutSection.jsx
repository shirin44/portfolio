"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Howl } from "howler";
import iconOrigin from "../assets/about/icon-origin.svg";
import iconCode from "../assets/about/icon-code.svg";
import iconProject from "../assets/about/icon-project.svg";
import iconVision from "../assets/about/icon-vision.svg";

// Sound
const clickSound = new Howl({ src: ["/sounds/click.mp3"], volume: 0.5 });
const hoverSound = new Howl({ src: ["/sounds/hover.mp3"], volume: 0.3 });

const iconData = {
  origin: {
    title: "Where I Come From",
    text: "Born in Syria 🇸🇾, I grew up between culture, creativity, and curiosity. This blend shaped how I think, code, and connect with people.",
    icon: iconOrigin,
  },
  code: {
    title: "Why I Code",
    text: "For me, coding is storytelling — I use languages like JavaScript, Python, and C++ to build things that feel intuitive and human.",
    icon: iconCode,
  },
  project: {
    title: "What I’ve Built",
    text: "From full-stack apps to AI experiments and games on bare-metal OS, I build to learn, iterate, and inspire.",
    icon: iconProject,
  },
  vision: {
    title: "Where I'm Going",
    text: "I want to create products powered by empathy and AI — tools that feel almost alive, designed to help people thrive.",
    icon: iconVision,
  },
};

const iconKeys = Object.keys(iconData);

const AboutSection = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleClick = (key) => {
    clickSound.play();
    setActiveKey((prev) => (prev === key ? null : key));
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-tr from-[#0f172a] to-[#1e293b] text-white px-6 py-20 overflow-hidden">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>

      <div className="relative max-w-5xl mx-auto h-[500px]">
        {iconKeys.map((key, i) => {
          const { icon, title, text } = iconData[key];
          const angle = (i / iconKeys.length) * 2 * Math.PI;
          const radius = 180;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          const isActive = activeKey === key;

          return (
            <motion.div
              key={key}
              className={`absolute w-24 h-24 origin-center`}
              style={{
                left: "50%",
                top: "50%",
                marginLeft: -48,
                marginTop: -48,
              }}
              animate={{ x, y }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
            >
              <motion.div
                className={`w-full h-full rounded-full bg-white border-4 border-[#1e3557] shadow-2xl cursor-pointer flex items-center justify-center relative`}
                drag
                dragElastic={0.5}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 15px #88BDF2",
                }}
                onMouseEnter={() => hoverSound.play()}
                onClick={() => handleClick(key)}
              >
                <motion.img
                  src={icon}
                  alt={key}
                  className="w-12 h-12"
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </motion.div>

              {/* Flipping Card */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="absolute top-28 left-1/2 -translate-x-1/2 bg-white text-[#1e3557] p-6 rounded-xl shadow-lg w-64 z-50"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  >
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-sm">{text}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Glowing background orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute w-72 h-72 bg-indigo-500/20 rounded-full top-[10%] left-[5%] blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-pink-400/10 rounded-full bottom-[10%] right-[5%] blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
