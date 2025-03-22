import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContent.jsx";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Home from "./components/home";
import Our from "./components/ourproducts";
import Foot from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";
import Gifting from "./components/gifting";
import CakePage from "./components/cake.jsx";
import Caksi from "./components/caksicle";
import Cook from "./components/cookies";
import Brown from "./components/brownies";
import Login from "./components/login";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./components/cart.jsx";
import Product from "./components/productpage.jsx";
import Glass from "./components/glasses";
import Choc from "./components/chocolate.jsx";
import Cookie from "./components/Cookiespage.jsx";
import Desse from "./components/DessertPage.jsx";
import Brow from "./components/BrowniePage.jsx";
import Cak from "./components/Caksiclepage.jsx";
import Cakie from "./components/Cakepage.jsx";
import Chatbotlcon from "./components-chatbot/Chatbotlcon.jsx";
import ChatForm from "./components/ChatForm.jsx";
import ChatMessage from "./components/ChatMessage.jsx";
import { companyinfo } from "./components/companyinfo.js";
import CakeDecoration from "./Image_upload/CakeDecoration.js";
import CakeDecor from './Image_upload/CakeDecor'; 
const API_URL = process.env.REACT_APP_API_URL;
const companyData=JSON.parse(companyinfo);

function App() {
  const [chatHistory, setChatHistory] = useState([

    {
      hideInChat:true,
      role:"model",
      text: companyinfo
    }
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();
  useEffect(() => {
    console.log("Chatbot visibility:", showChatbot);
  }, [showChatbot]);

  const generateBotResponse = async (history) => {
    const userMessage = history[history.length - 1].text.toLowerCase();
    let botReply = "I'm not sure how to answer that. Can you be more specific?";

    // ✅ Check for company-related queries
    if (userMessage.includes("company name")) {
      botReply = `Our company is called ${companyData.name}.`;
    } else if (userMessage.includes("what do you do") || userMessage.includes("about company") || userMessage.includes("who are you")) {
      botReply = companyData.description;
      
    } 
    else if (userMessage.includes("hey") || userMessage.includes("how are you") || userMessage.includes("hello")) {
      botReply = `Hello from Chocolicious , You can reach us at:\n📧 Email: ${companyData.contact.email}\n📞 Phone: ${companyData.contact.phone}\n📍 Address: ${companyData.contact.address}`;
    }
    
    
    else if (userMessage.includes("contact")) {
      botReply = `You can reach us at:\n📧 Email: ${companyData.contact.email}\n📞 Phone: ${companyData.contact.phone}\n📍 Address: ${companyData.contact.address}`;
    } else if (userMessage.includes("social media")) {
      botReply = `Follow us on:\n📘 Facebook: ${companyData.socialMedia.facebook}\n📷 Instagram: ${companyData.socialMedia.instagram}\n🐦 Twitter: ${companyData.socialMedia.twitter}`;
    } else if (userMessage.includes("products")) {
      botReply = `We offer a variety of products including cakes, chocolates, brownies, cookies, and dessert glasses. Ask about a specific category for more details.`;
    } else {
      // ✅ Check if user asked about a specific product category
      for (const category in companyData.products) {
        if (userMessage.includes(category)) {
          botReply = `Here are our ${category}:\n`;
          companyData.products[category].forEach((product) => {
            botReply += `⭐ ${product.name} - ₹${product.new_price} (Old: ₹${product.old_price})\n`;
          });
          break;
        }
      }
    }

    // ✅ Update chat history with bot response
    setChatHistory([...history, { role: "model", text: botReply }]);
  };

  // Debugging - Check chatbot state
  // useEffect(() => {
  //   console.log("Chatbot visibility:", showChatbot);
  // }, [showChatbot]);

  // const generateBotResponse = async (history) => {
  //   console.log("API URL:", API_URL);

  //   const formattedHistory = history.map(({ role, text }) => ({
  //     role,
  //     parts: [{ text }],
  //   }));

  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ contents: formattedHistory }),
  //   };

  //   try {
  //     const response = await fetch(API_URL, requestOptions);
  //     const data = await response.json();
  //     if (!response.ok) throw new Error(data.error?.message || "Something went wrong");

  //     const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I didn't understand that.";
  //     setChatHistory([...history, { role: "model", text: botReply }]);
  //   } catch (error) {
  //     console.error("API Error:", error.message);
  //   }
  // };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<><Header /><Home /><Our /><Gifting /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/ourproducts" element={<Our />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/CakeDecor" element={<CakeDecor />} />
            <Route path="/cake" element={<CakePage />} />
            <Route path="/caksicle" element={<Caksi />} />
            <Route path="/glasses" element={<Glass />} />
            <Route path="/chocolate" element={<Choc />} />
            <Route path="/cook" element={<Cook />} />
            <Route path="/brownies" element={<Brown />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cookie/:id" element={<Cookie />} />
            <Route path="/desse/:id" element={<Desse />} />
            <Route path="/brow/:id" element={<Brow />} />
            <Route path="/cak/:id" element={<Cak />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cakie/:id" element={<Cakie />} />
            <Route path="/cake-decoration" element={<CakeDecoration />} /> 
          
          </Routes>
          <Foot />

          {/* Chatbot Container */}
          <div className="chatbot-container">
            <button 
              onClick={() => {
                setShowChatbot(prev => !prev);
                console.log("Chatbot toggled:", !showChatbot);
              }} 
              id="chatbot-toggler"
            >
              {showChatbot ? (
                <span className="material-symbols-rounded">close</span>
              ) : (
                <span className="material-symbols-rounded">mode_comment</span>
              )}
            </button>

            <div className={`chatbot-popular ${showChatbot ? "show-chatbot" : ""}`}>
              <div className="chat-header">
                <div className="header-info">
                  <Chatbotlcon />
                  <h2 className="logo-text">Chatbot</h2>
                </div>
                <button onClick={() => setShowChatbot(false)} className="material-symbols-rounded">
                  keyboard_arrow_down
                </button>
              </div>

              <div ref={chatBodyRef} className="chat-body">
                <div className="message bot-message">
                  <Chatbotlcon />
                  <p className="message-text">Hey there <br /> How can I help you today?</p>
                </div>

                {chatHistory.map((chat, index) => (
                  <ChatMessage key={index} chat={chat} />
                ))}
              </div>

              <div className="chat-footer">
                <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
              </div>
            </div>
          </div>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
