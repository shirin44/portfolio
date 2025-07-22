const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("ai") || lowerCaseMessage.includes("machine learning")) {
      actions.handleAI();
    } else if (lowerCaseMessage.includes("frontend") || lowerCaseMessage.includes("react")) {
      actions.handleFrontend();
    } else if (lowerCaseMessage.includes("backend") || lowerCaseMessage.includes("node")) {
      actions.handleBackend();
    } else if (lowerCaseMessage.includes("teaching") || lowerCaseMessage.includes("english")) {
      actions.handleTeaching();
    } else if (lowerCaseMessage.includes("projects") || lowerCaseMessage.includes("portfolio")) {
      actions.handleProjects();
    } else if (lowerCaseMessage.includes("experience") || lowerCaseMessage.includes("work")) {
      actions.handleExperience();
    } else {
      actions.handleDefault();
    }
  };

  return <>{children({ parse })}</>;
};

export default MessageParser;
