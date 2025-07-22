// src/components/Navbar.jsx
import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Menu icons
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Social icons
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-auto bg-[#1E3557] text-white rounded-full shadow-lg px-10 py-3 flex items-center justify-between z-50 shadow-[0px_6px_15px_rgba(0,0,0,0.15)]">
      
      {/* Name in ONE LINE */}
      <div className="text-lg font-semibold tracking-wide whitespace-nowrap mr-12">
        Shirin Shujaa
      </div>

      {/* Desktop Nav Links (Even Spacing) */}
      <ul className="hidden md:flex space-x-8 text-sm">
        {["Education", "Experience", "Projects", "Teaching ", "Blog"].map((item) => (
          <li key={item}>
            <Link
              to={item.toLowerCase().replace(/\s+/g, "-")}
              smooth={true}
              duration={500}
              className="cursor-pointer transition-colors hover:text-[#E3C27E]"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons (Correct Spacing) */}
      <div className="hidden md:flex space-x-6 ml-10">
        <a href="https://github.com/shirin44" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-[#E3C27E] transition text-lg" />
        </a>
        <a href="https://www.linkedin.com/in/shirin-shujaa/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-[#E3C27E] transition text-lg" />
        </a>
        <a href="mailto:shirinshujaa2468@gmail.com">
          <FaEnvelope className="text-white hover:text-[#E3C27E] transition text-lg" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1E3557] py-4 shadow-lg rounded-b-lg">
          <ul className="flex flex-col items-center space-y-4">
            {["Education", "Experience", "Projects", "Teaching & Languages", "Blog"].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase().replace(/\s+/g, "-")}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-[#E3C27E] hover:text-white transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;