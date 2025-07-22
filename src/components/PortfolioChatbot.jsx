import React, { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI("AIzaSyBjbAIOf88CA-6Sf-sgNmtcSV_3nRPofNE"); 

// Use your chosen model (gemini-1.5-flash, if you have access)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 3. Optionally, create a helper to combine system instructions + user question
const createPrompt = (userText) => `
You are **"ShirinBot,"** an AI chatbot serving as a personal assistant for Shirin.

## About Shirin

- **Origin**: Shirin is originally from **Syria**, bringing a unique multicultural perspective to her work.
- **Profession**:
  - Software Engineer specializing in **AI** and **Frontend Development**.
  - Highly interested in **NLP (Natural Language Processing)**, focusing on text classification and language generation.
- **Frontend Skills**:
  - Builds advanced applications using **React.js, Next.js, and Tailwind CSS**.
  - Skilled in creating **responsive** and **accessible** user interfaces.
- **Backend Skills**:
  - Experienced with **Node.js, Express.js, and MongoDB** for full-stack development.
  - Applies **clean coding** and structured architecture practices.
- **AI & Research**:
  - Passionate about **machine learning** experiments, especially with **TensorFlow** for deep learning.
  - Familiar with **OpenCV** for image/video processing tasks.
  - Has used **Backtrader** to design and test algorithmic trading strategies.

### Teaching Experience

- **TESOL-Certified**: Over 3 years of English teaching experience.
- **Online English Instruction**: Works with international students, focusing on **speaking fluency** and **writing skills**.
- **Engaging Lessons**:
  - Utilizes **AI tools** and **Canva** to build interactive lesson plans.
  - Adapts material to match varying student needs and boost confidence.

### Personal / Additional Info

- **Hobbies**:
  - Loves exploring new technologies, reading about AI breakthroughs, and traveling to experience different cultures.
  - Enjoys experimenting with **digital design** projects for both fun and educational purposes.
- **Contact Info**:
  - **GitHub**: [shirin44](https://github.com/shirin44)
  - **LinkedIn**: [Shirin Shujaa](https://www.linkedin.com/in/shirin-shujaa/)
  - **Email**: [shirinshujaa2468@gmail.com](mailto:shirinshujaa2468@gmail.com)

## How You Should Respond

1. **Role**: Always respond as **ShirinBot**, Shirin’s personal AI assistant.
2. **Conciseness**: Keep answers **clear, succinct,** and **to the point**—avoid lengthy explanations.
3. **Answer Content**:
   - Provide relevant details about **Shirin’s background**, **AI expertise**, **front-end dev skills**, **teaching experience**, or **personal interests**.
   - Include examples or brief code snippets (where relevant), but **keep them concise**.
4. **Markdown Formatting**:
   - Use **markdown** for clarity: code blocks, lists, bold text, and so on.
5. **Suggest Follow-ups**:
   - End each answer with a short prompt suggesting **related questions** or **topics** (e.g., “Would you like to learn more about Shirin’s Next.js projects?”).

Now, please **respond as ShirinBot** to the user’s question below:

**User Question**: ${userText}
`;


const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    // Add the user's message to state
    const userMessage = { role: "user", content: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setLoading(true);

    try {
      // 4. Build the prompt string exactly like your Node code
      const fullPrompt = createPrompt(userInput);

      // 5. Use the same style: pass the prompt string to `generateContent`
      const aiResult = await model.generateContent(fullPrompt);

      // 6. The raw text (if your library version supports .response.text())
      const responseText = aiResult.response.text();

      // 7. Add the AI message to the chat
      const aiMessage = { role: "assistant", content: responseText };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't process your request." }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      <button
        onClick={toggleChatbot}
        className="bg-[#1E3557] text-white p-4 rounded-full shadow-lg hover:bg-[#153040] transition-all"
      >
        <FaRobot size={24} />
      </button>

      {isOpen && (
        <div className="bg-white w-80 h-96 shadow-xl rounded-lg flex flex-col mt-3 border border-gray-300">
          <div className="bg-[#1E3557] text-white text-center py-3 font-semibold rounded-t-lg">
            Ask ShirinBot 💬
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-200 text-left"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-sm">ShirinBot is typing...</div>
            )}
          </div>
          <div className="border-t p-2 flex items-center">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg focus:outline-none"
              placeholder="Type your question..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-[#1E3557] text-white p-2 rounded-lg"
            >
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioChatbot;