import React, { useState } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    if (message.trim() === "") return; // Prevents empty messages

    // ✅ Add user message to chat history
    const newHistory = [...chatHistory, { role: "user", text: message }];
    setChatHistory(newHistory);

    // ✅ Show "Thinking..." before bot response
    setTimeout(() => {
      setChatHistory([...newHistory, { role: "model", text: "Thinking..." }]);
    }, 600);

    // ✅ Generate bot response
    setTimeout(() => {
      generateBotResponse([...newHistory]);
    }, 1000);

    console.log("Message Sent:", message);
    setMessage(""); // Clears input after sending
  };

  return (
    <form className="chat-form" onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Message..."
    className="message-input"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
  />
  <div className="send-btn-container">
    <button type="submit" className="send-btn">
      <span className="material-symbols-rounded">arrow_upward</span>
    </button>
  </div>
</form>

  );
};

export default ChatForm;
