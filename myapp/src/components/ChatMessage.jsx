import React from "react";
import ChatbotIcon from "../components-chatbot/Chatbotlcon";

const ChatMessage = ({ chat }) => {  // ✅ Ensure correct prop passing
  return (
    !chat.hideInChat && (
    <div className={`message ${chat.role === "model" ? "bot" : "user"}-message`}>
      {chat.role === "model" && <ChatbotIcon />}
      <p className="message-text">{chat.text}</p> {/* ✅ Correctly display text */}
    </div>
    )
  );
};

export default ChatMessage;
