import React from "react";

const ActionProvider = ({ createChatBotMessage, setState }) => {
  const sendMessage = (text) => {
    const message = createChatBotMessage(text);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  // Define all chatbot actions
  const handleAI = () => sendMessage("I love working with AI! I build ML models, NLP applications, and use TensorFlow & OpenCV.");
  const handleFrontend = () => sendMessage("Frontend is my passion! I build stunning interfaces with React, Tailwind CSS, and Next.js.");
  const handleBackend = () => sendMessage("I'm skilled in backend development with Node.js, Express.js, and MongoDB for scalable applications.");
  const handleTeaching = () => sendMessage("I'm a TESOL-certified instructor who helps students build confidence in English speaking and writing!");
  const handleProjects = () => sendMessage("I have built projects like a movie recommendation app, a portfolio chatbot, and trading bots.");
  const handleExperience = () => sendMessage("I have experience in software engineering, AI, frontend, backend, and English teaching.");
  const handleDefault = () => sendMessage("Ask me about AI, Frontend, Backend, Teaching, My Projects, or My Experience!");

  return (
    <div>
      {/* This should not return an object */}
    </div>
  );
};

export default ActionProvider;
