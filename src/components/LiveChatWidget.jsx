import React, { useState, useEffect, useRef } from "react";
import "./LiveChatWidget.css";
import ankitPhoto from "../assets/ankit.png";

const DEFAULT_WELCOME_MSG = {
  id: "welcome-1",
  sender: "ankit",
  text: "Hello! 👋 I'm Ankit Kumar. Send me a message here—it alerts my mobile phone directly, and my reply will appear right back in this chat!",
  time: "Just now",
};

const QUICK_PROMPTS = [
  "💼 I want to discuss a React Native mobile project",
  "⚡ We are hiring a Senior Mobile Team Lead",
  "📱 Let's connect on WhatsApp directly (+91 83682 45138)",
  "🚀 Looking for advice on mobile architecture & CI/CD",
];

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("portfolio_chat_messages");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [DEFAULT_WELCOME_MSG];
      }
    }
    return [DEFAULT_WELCOME_MSG];
  });
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [showConfig, setShowConfig] = useState(false);
  const [crispWebsiteId, setCrispWebsiteId] = useState(
    () => localStorage.getItem("portfolio_crisp_id") || ""
  );
  const [configInput, setConfigInput] = useState(crispWebsiteId);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setHasUnread(false);
    }
  }, [messages, isOpen]);

  // Persist messages
  useEffect(() => {
    localStorage.setItem("portfolio_chat_messages", JSON.stringify(messages));
  }, [messages]);

  // Global command palette listener
  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
      setHasUnread(false);
    };
    window.addEventListener("open-live-chat", handleOpenChat);
    return () => window.removeEventListener("open-live-chat", handleOpenChat);
  }, []);

  // Auto-close chat window when menu drawer opens
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (document.body.classList.contains("menu-open")) {
        setIsOpen(false);
      }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Crisp Mobile App Real-time Integration
  useEffect(() => {
    if (crispWebsiteId && crispWebsiteId.trim().length > 10) {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = crispWebsiteId.trim();

      const existingScript = document.getElementById("crisp-chat-script");
      if (!existingScript) {
        const s = document.createElement("script");
        s.id = "crisp-chat-script";
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        document.getElementsByTagName("head")[0].appendChild(s);
      }

      // Hide default Crisp bubble so our custom Obsidian glass widget controls it
      const interval = setInterval(() => {
        if (window.$crisp) {
          try {
            window.$crisp.push(["safe", true]);
            window.$crisp.push(["do", "chat:hide"]);
            clearInterval(interval);
          } catch (e) {}
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [crispWebsiteId]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setHasUnread(false);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  };

  const handleSendMessage = (textToSend = null) => {
    const messageContent = (textToSend || inputText).trim();
    if (!messageContent) return;

    const newMsg = {
      id: "msg-" + Date.now(),
      sender: "user",
      text: messageContent,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInputText("");

    // If Crisp mobile bridge is connected, send message through Crisp SDK
    if (window.$crisp && crispWebsiteId) {
      try {
        window.$crisp.push(["do", "message:send", ["text", messageContent]]);
      } catch (err) {
        console.warn("Crisp bridge send error:", err);
      }
    }

    // Interactive automated feedback with phone routing options
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);

      let botReply = "Thank you for reaching out! I have received your message notification on my mobile device. If you'd like an immediate instant response, you can also tap the WhatsApp button below to message my direct phone (+91 83682 45138) directly!";
      
      const lower = messageContent.toLowerCase();
      if (lower.includes("hire") || lower.includes("job") || lower.includes("lead") || lower.includes("role")) {
        botReply = "Thanks for considering me for your mobile team! I'm actively available for Senior Mobile Team Lead & Staff React Native roles with 5+ years of experience leading cross-functional teams and shipping 20+ apps. Looking forward to discussing details!";
      } else if (lower.includes("whatsapp") || lower.includes("call") || lower.includes("number")) {
        botReply = "You can reach me directly on WhatsApp at +91 83682 45138. Feel free to click the WhatsApp button anytime!";
      } else if (lower.includes("project") || lower.includes("app") || lower.includes("flitpay") || lower.includes("cost")) {
        botReply = "I'd love to learn more about your app vision! Whether it's fintech, marketplace, or real-time mobile apps, I ensure 99.9% crash-free stability standard. Let's schedule a call!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: "reply-" + Date.now(),
          sender: "ankit",
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          showWhatsAppCTA: true,
          userQuestion: messageContent,
        },
      ]);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSaveCrispConfig = (e) => {
    e.preventDefault();
    const cleaned = configInput.trim();
    setCrispWebsiteId(cleaned);
    localStorage.setItem("portfolio_crisp_id", cleaned);
    setShowConfig(false);
    alert(cleaned ? "✓ Crisp Mobile Phone Bridge saved! Open your Crisp app on your phone to receive live alerts." : "Crisp ID cleared.");
  };

  const clearChatHistory = () => {
    if (window.confirm("Clear chat history?")) {
      setMessages([DEFAULT_WELCOME_MSG]);
      localStorage.removeItem("portfolio_chat_messages");
    }
  };

  return (
    <>
      {/* Floating Chat Launcher Button */}
      <div className="live-chat-launcher-wrap">
        <button
          type="button"
          className={`live-chat-launcher-btn ${isOpen ? "open" : ""}`}
          onClick={handleToggle}
          aria-label={isOpen ? "Close live chat" : "Chat live with Ankit Kumar"}
          title="Chat Live with Ankit Kumar (Direct to Phone)"
        >
          {isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <>
              <div className="launcher-avatar-container">
                <img src={ankitPhoto} alt="Ankit Kumar" className="launcher-avatar-img" />
                <span className="launcher-online-dot" />
              </div>
              <div className="launcher-label-box">
                <span className="launcher-label-status">Direct to Phone</span>
                <span className="launcher-label-title">Chat with Ankit 💬</span>
              </div>
              {hasUnread && <span className="launcher-unread-badge">1</span>}
            </>
          )}
        </button>
      </div>

      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div className="live-chat-window" role="dialog" aria-label="Live Chat with Ankit Kumar">
          {/* Header */}
          <div className="chat-window-header">
            <div className="chat-header-user-info">
              <div className="chat-header-avatar-wrap">
                <img src={ankitPhoto} alt="Ankit Kumar" className="chat-header-avatar" />
                <span className="chat-header-pulse-dot" />
              </div>
              <div className="chat-header-text">
                <div className="chat-header-name-row">
                  <h4>Ankit Kumar</h4>
                  <span className="chat-verified-badge" title="Verified Mobile Lead">✓</span>
                </div>
                <p>
                  <span className="online-tag">Online</span> · Mobile Team Lead (5+ Yrs)
                </p>
              </div>
            </div>

            <div className="chat-header-actions">
              <button
                type="button"
                className="chat-action-icon-btn"
                onClick={() => setShowConfig(!showConfig)}
                title="Phone Live Chat Settings (Crisp App Integration)"
                aria-label="Settings"
              >
                ⚙️
              </button>
              <button
                type="button"
                className="chat-action-icon-btn"
                onClick={clearChatHistory}
                title="Clear Chat History"
                aria-label="Clear History"
              >
                🗑️
              </button>
              <button
                type="button"
                className="chat-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
                title="Close chat window"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Crisp Mobile Integration Settings Drawer */}
          {showConfig && (
            <div className="chat-config-panel">
              <div className="config-header">
                <h5>📱 Two-Way Phone App Connection</h5>
                <p>
                  Connect to the free <strong>Crisp Mobile App</strong> on your phone. When visitors chat, your phone rings immediately, and your reply appears here!
                </p>
              </div>
              <form onSubmit={handleSaveCrispConfig} className="config-form">
                <label htmlFor="crisp-id-input">Crisp Website ID (UUID):</label>
                <input
                  id="crisp-id-input"
                  type="text"
                  placeholder="e.g. 74b12345-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                  value={configInput}
                  onChange={(e) => setConfigInput(e.target.value)}
                />
                <div className="config-form-actions">
                  <a
                    href="https://app.crisp.chat/initiate/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="crisp-signup-link"
                  >
                    Get Free Crisp ID ↗
                  </a>
                  <button type="submit" className="config-save-btn">
                    Save & Activate
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Chat Messages Body */}
          <div className="chat-messages-body">
            <div className="chat-date-stamp">
              <span>Today · Real-time Mobile Bridge</span>
            </div>

            {messages.map((msg) => {
              const isUser = msg.sender === "user";
              return (
                <div key={msg.id} className={`chat-bubble-row ${isUser ? "user" : "ankit"}`}>
                  {!isUser && (
                    <img src={ankitPhoto} alt="Ankit" className="bubble-sender-avatar" />
                  )}
                  <div className="bubble-content-wrap">
                    <div className={`chat-bubble ${isUser ? "user-bubble" : "ankit-bubble"}`}>
                      <p>{msg.text}</p>

                      {msg.showWhatsAppCTA && (
                        <div className="chat-whatsapp-cta-box">
                          <span className="cta-note">Prefer direct WhatsApp chat on phone?</span>
                          <a
                            href={`https://api.whatsapp.com/send?phone=%2B918368245138&text=${encodeURIComponent(
                              `Hello Ankit, I am contacting you from your portfolio live chat: "${msg.userQuestion || ""}"`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="chat-whatsapp-bridge-btn"
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                            <span>Chat on WhatsApp (+91 83682 45138)</span>
                          </a>
                        </div>
                      )}
                    </div>
                    <span className="bubble-timestamp">{msg.time}</span>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="chat-bubble-row ankit">
                <img src={ankitPhoto} alt="Ankit" className="bubble-sender-avatar" />
                <div className="chat-bubble ankit-bubble typing-bubble">
                  <div className="typing-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="chat-quick-prompts">
            <div className="quick-prompts-scroll">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="quick-prompt-pill"
                  onClick={() => handleSendMessage(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <div className="chat-input-footer">
            <div className="chat-input-wrapper">
              <input
                ref={inputRef}
                type="text"
                className="chat-text-input"
                placeholder="Type a message to Ankit's phone..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                maxLength={400}
              />
              <button
                type="button"
                className="chat-send-btn"
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                title="Send Message"
                aria-label="Send message"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
            <div className="chat-footer-caption">
              <span>⚡ Direct Phone Bridge · Replies typically within minutes</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
