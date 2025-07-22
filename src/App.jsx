import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechOrbit from './components/TechOrbit';
import PortfolioChatbot from './components/PortfolioChatbot';
import AboutSection from './components/AboutSection';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#F6E6D6] text-[#1E3557]">
      <Navbar />
      <main className="flex flex-col items-center">
        <section id="hero" className="w-full">
          <Hero />
          <AboutSection/>

        </section>
        <section id="technologies" className="w-full ">
          <TechOrbit />
           <PortfolioChatbot />
        </section>
       
        
      </main>
    </div>
  );
};



export default App;