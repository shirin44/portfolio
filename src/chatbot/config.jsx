import { createChatBotMessage } from "react-chatbot-kit";

const botName = "ShirinBot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hi! I'm ${botName}. Ask me about AI, Frontend, Backend, My Projects, or My Teaching Experience!`,
      {
        widget: "quickOptions",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "quickOptions",
      widgetFunc: (props) => (
        <div>
          <button onClick={() => props.actions.handleAI()}>AI & Machine Learning</button>
          <button onClick={() => props.actions.handleFrontend()}>Frontend Development</button>
          <button onClick={() => props.actions.handleBackend()}>Backend Development</button>
          <button onClick={() => props.actions.handleTeaching()}>Teaching & English</button>
          <button onClick={() => props.actions.handleProjects()}>My Projects</button>
          <button onClick={() => props.actions.handleExperience()}>My Experience</button>
        </div>
      ),
    },
  ],
};

export default config;
