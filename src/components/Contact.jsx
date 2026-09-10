import React, { useState, useEffect } from "react";
import "./Contact.css";
import CodePlayground from "./CodePlayground";

function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [playgroundOpen, setPlaygroundOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Time Mobile App Team Lead / Staff Role",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => setPlaygroundOpen(true);
    window.addEventListener("open-code-playground", handleOpen);
    return () => window.removeEventListener("open-code-playground", handleOpen);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kumar.ankit.rn@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Hello Ankit,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.subject}\n\nMessage:\n${formData.message}\n\nSent from your portfolio website.`
    );
    window.location.href = `mailto:kumar.ankit.rn@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kumarankitrn",
      iconClass: "linkedin",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/kumar-ankit-rn",
      iconClass: "github",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://api.whatsapp.com/send?phone=%2B918368245138",
      iconClass: "whatsapp",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      name: "X / Twitter",
      url: "https://x.com/kumarankitrn",
      iconClass: "x",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4l11.733 16h4.267l-11.733-16z" />
          <path d="M4 20l6.768-6.768m2.464-2.464l6.768-6.768" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@kumar_ankit_rn",
      iconClass: "youtube",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/kumar.ankit.rn/",
      iconClass: "instagram",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/rn.kumar.ankit",
      iconClass: "fb",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="contact-section">
      {/* Section Header */}
      <div className="contact-header">
        <div className="contact-eyebrow">
          <span className="contact-eyebrow-dot" />
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="contact-title">
          Let's Build Something{" "}
          <span className="contact-title-highlight">Exceptional Together</span>
        </h2>
        <p className="contact-subtitle">
          Whether you're looking for an experienced Mobile App Team Lead, exploring architectural consultation, or seeking high-performance React Native engineering — my inbox is always open.
        </p>
      </div>

      {/* Main 2-Column Contact Grid */}
      <div className="contact-grid">
        {/* Left Column: Direct Communication Channels */}
        <div className="contact-channels-card">
          <div>
            <div className="channels-header">
              <span className="channels-eyebrow">DIRECT CONTACT DOSSIER</span>
              <h3 className="channels-title">Fast-Track Communication</h3>
            </div>

            <div className="direct-channels-list">
              {/* Email Channel */}
              <div className="channel-item">
                <div className="channel-main">
                  <div className="channel-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <h4>Direct Email</h4>
                    <a href="mailto:kumar.ankit.rn@gmail.com">kumar.ankit.rn@gmail.com</a>
                  </div>
                </div>
                <div className="channel-actions">
                  <button
                    type="button"
                    className={`channel-btn-action ${copiedEmail ? "copied" : ""}`}
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href="mailto:kumar.ankit.rn@gmail.com"
                    className="channel-btn-action"
                    aria-label="Send email directly"
                  >
                    <span>Send</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* WhatsApp Channel */}
              <div className="channel-item">
                <div className="channel-main">
                  <div className="channel-icon-box whatsapp">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <h4>WhatsApp Chat</h4>
                    <a
                      href="https://api.whatsapp.com/send?phone=%2B918368245138"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +91 83682 45138
                    </a>
                  </div>
                </div>
                <div className="channel-actions">
                  <a
                    href="https://api.whatsapp.com/send?phone=%2B918368245138"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-btn-action"
                    aria-label="Chat on WhatsApp"
                  >
                    <span>Chat Now</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Direct Phone Channel */}
              <div className="channel-item">
                <div className="channel-main">
                  <div className="channel-icon-box phone">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <h4>Telephone / Voice</h4>
                    <a href="tel:+918368245138">+91 83682 45138</a>
                  </div>
                </div>
                <div className="channel-actions">
                  <a
                    href="tel:+918368245138"
                    className="channel-btn-action"
                    aria-label="Call directly"
                  >
                    <span>Call</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Location & Remote Availability */}
              <div className="channel-item">
                <div className="channel-main">
                  <div className="channel-icon-box location">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="channel-info">
                    <h4>Location & Relocation</h4>
                    <p>Delhi NCR, India • Remote Worldwide</p>
                  </div>
                </div>
                <div className="channel-actions">
                  <span className="channel-btn-action" style={{ cursor: "default" }}>
                    GMT +5:30
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Status Card */}
          <div className="availability-pill-card">
            <div className="availability-row">
              <span className="availability-status">
                <span className="pulse-green-dot" />
                <span>Open for Staff / Lead / High-Impact Roles</span>
              </span>
              <span>2026 Ready</span>
            </div>
            <div className="availability-row">
              <span>⚡ Average Response Time:</span>
              <span style={{ color: "#f8fafc", fontWeight: 600 }}>Under 12 Hours</span>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message & Project Inquiry Desk */}
        <div className="contact-form-card">
          <div className="form-card-header">
            <span className="form-card-eyebrow">DIRECT INQUIRY</span>
            <h3 className="form-card-title">Send a Direct Message</h3>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row-dual">
              <div className="form-group">
                <label className="form-label" htmlFor="sender-name">
                  <span>Your Name *</span>
                </label>
                <input
                  type="text"
                  id="sender-name"
                  name="name"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="sender-email">
                  <span>Your Email Address *</span>
                </label>
                <input
                  type="email"
                  id="sender-email"
                  name="email"
                  required
                  placeholder="e.g. sarah@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="inquiry-subject">
                <span>Inquiry Nature / Discussion Topic</span>
              </label>
              <select
                id="inquiry-subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="Full-Time Mobile App Team Lead / Staff Role">
                  Full-Time Mobile App Team Lead / Staff Role
                </option>
                <option value="Mobile Architecture Consultation">
                  Mobile Architecture Consultation
                </option>
                <option value="React Native App Development Contract">
                  React Native App Development Contract
                </option>
                <option value="Code Review & Performance Tuning">
                  Code Review & Performance Tuning
                </option>
                <option value="Speaking / Tech Mentorship">
                  Speaking / Tech Mentorship
                </option>
                <option value="General Professional Connect">
                  General Professional Connect
                </option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="inquiry-message">
                <span>Your Message / Project Scope *</span>
              </label>
              <textarea
                id="inquiry-message"
                name="message"
                required
                placeholder="Share project goals, timeline, tech stack, or role details..."
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
              />
            </div>

            <button type="submit" className="btn-submit-inquiry">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              <span>Dispatch Message via Mail Client</span>
            </button>

            {formSubmitted && (
              <div className="form-status-alert success">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Draft created! Your default email client has been opened with the details.</span>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Professional Social & Community Presence Matrix */}
      <div className="social-presence-bar">
        <span className="social-bar-label">Verified Professional Networks & Socials</span>
        <div className="social-pills-row">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-pill-btn ${item.iconClass}`}
              aria-label={`Visit Ankit Kumar on ${item.name}`}
            >
              <span className="social-pill-icon">{item.svg}</span>
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Global Footer & Architectural Lockup */}
      <div className="global-footer-divider" />

      <footer className="global-footer-content">
        <div className="footer-brand-block">
          <div className="footer-logo-badge">AK</div>
          <div className="footer-brand-text">
            <h4>kumar.ankit.rn</h4>
            <p>Mobile App Team Lead & Senior React Native Engineer</p>
          </div>
        </div>

        <nav className="footer-nav-links" aria-label="Footer Navigation">
          <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="footer-nav-link">
            Home
          </a>
          <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="footer-nav-link">
            About
          </a>
          <a href="#experience" onClick={(e) => handleScroll(e, "#experience")} className="footer-nav-link">
            Experience
          </a>
          <a href="#projects" onClick={(e) => handleScroll(e, "#projects")} className="footer-nav-link">
            Projects
          </a>
          <a href="#blog" onClick={(e) => handleScroll(e, "#blog")} className="footer-nav-link">
            Blog
          </a>
          <a href="#resume" onClick={(e) => handleScroll(e, "#resume")} className="footer-nav-link">
            Resume
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="footer-nav-link">
            Contact
          </a>
          <button
            type="button"
            className="footer-compiler-pill"
            onClick={() => setPlaygroundOpen(true)}
            title="Practice & Run Code Online"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span>Practice & Run Code ⚡</span>
          </button>
        </nav>
      </footer>

      <div className="footer-bottom-row">
        <span>© 2026 Ankit Kumar. All rights reserved.</span>
        
        <div className="footer-made-in-bharat">
          <span>Designed & Developed with <span className="footer-heart-pulse">❤️</span> by <strong className="footer-author-name">Ankit Kumar</strong> · India 🇮🇳</span>
        </div>
      </div>

      {/* Online Code Compiler & Playground Modal */}
      <CodePlayground isOpen={playgroundOpen} onClose={() => setPlaygroundOpen(false)} />
    </div>
  );
}

export default Contact;
