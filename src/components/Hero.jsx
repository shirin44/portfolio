// src/components/Hero.jsx
import { TypeAnimation } from "react-type-animation"; // For animated text
import React from "react";
import { useState } from "react";
import JasmineFlower from "../assets/jasmine.png"; // Import the flower image

const Hero = () => {
    const [isTypingDone, setIsTypingDone] = useState(false);
  
    return (
      <section className="relative w-full min-h-screen flex flex-col justify-center items-start text-left bg-[#F6E6D6] px-16">
        {/* Header - Doubled Font Size */}
        <h1 className="text-[120px] font-bold text-[#1E3557] mb-6 leading-tight">
          Hi, I am Shirin
        </h1>
  
        {/* Typing Effect - Doubled Font Size */}
        {!isTypingDone ? (
          <TypeAnimation
            sequence={[
              "I build intuitive web applications,", 500, 
              "I build intuitive web applications,\nengineer AI solutions, train machines,", 500, 
              "I build intuitive web applications,\nengineer AI solutions, train machines,\nteach languages, and design user-centric experiences.", 1000, 
              () => setIsTypingDone(true), 
            ]}
            speed={50} 
            className="text-[50px] font-medium text-[#384959] leading-snug whitespace-pre-line max-w-[900px]"
          />
        ) : (
          <p className="text-[50px] font-medium text-[#384959] leading-snug max-w-[900px]">
            I build intuitive{" "}
            <span className="text-[#E3C27E] hover:underline cursor-pointer font-semibold">
              web applications
            </span>,<br />
            engineer{" "}
            <span className="text-[#E3C27E] hover:underline cursor-pointer font-semibold">
              AI solutions
            </span>,{" "}
            <span className="text-[#E3C27E] hover:underline cursor-pointer font-semibold">
              train machines
            </span>,<br />
            <span className="text-[#E3C27E] hover:underline cursor-pointer font-semibold">
              teach languages
            </span>, and{" "}
            <span className="text-[#E3C27E] hover:underline cursor-pointer font-semibold">
              design
            </span>{" "}
            user-centric experiences.
          </p>
        )}

        {/* Download CV Button */}
        <a
          href="/ShirinShujaa_CV.pdf"
          download
          className="mt-10 px-10 py-6 bg-[#1E3557] text-white text-2xl font-medium rounded-full shadow-md hover:bg-[#384959] transition"
        >
          Download CV
        </a>

        {/* Jasmine Flower Image - Increased Size */}
        <img
          src={JasmineFlower}
          alt="Jasmine Flower"
          className="absolute bottom-5 right-5 w-72 md:w-80 lg:w-120" // Adjusted for double size
        />
      </section>
    );
};

export default Hero;
