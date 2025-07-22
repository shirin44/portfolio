import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import techCategories from "../data/techCategories"; 

const TechShowcase = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#F6E6D6] to-[#E3C27E] p-20 relative">
      {/* Floating Glow Effect */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full opacity-20 blur-3xl animate-pulse"></div>

      {/* Title with Entry Animation */}
      <motion.h2 
        className="text-5xl font-extrabold text-[#1E3557] mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
         Technologies I Use
      </motion.h2>

      {/* Tech Categories */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {Object.keys(techCategories).map((category, index) => (
          <motion.div
            key={category}
            className="bg-white shadow-2xl rounded-xl p-6 flex flex-col items-center cursor-pointer hover:scale-110 transition-all relative overflow-hidden group"
            onClick={() => setActiveCategory(category)}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Floating Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E3C27E] to-[#F6E6D6] opacity-0 group-hover:opacity-10 transition-all"></div>

            <p className="font-semibold text-lg text-center text-[#1E3557]">
              {category}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Pop-up Modal for Category Details */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCategory(null)}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-2xl w-[500px] max-w-[90%] text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-6 text-[#1E3557]">
                {activeCategory}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {techCategories[activeCategory].map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center">
                    {tech.icon ? tech.icon : <p className="text-lg font-semibold text-[#1E3557]">{tech.name}</p>}
                    <p className="text-sm mt-2 text-[#1E3557]">{tech.name}</p>
                  </div>
                ))}
              </div>
              <button
                className="mt-6 w-full bg-[#1E3557] text-white py-3 rounded-lg hover:bg-[#152a4f] transition-all"
                onClick={() => setActiveCategory(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TechShowcase;
