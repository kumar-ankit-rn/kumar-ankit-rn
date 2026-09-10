import React, { useState, useEffect, useRef } from "react";
import "./CommandPalette.css";

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 2800);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    showToast(`✓ Copied ${label} to clipboard!`);
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.classList.toggle("light-theme", next === "light");
    document.documentElement.classList.toggle("dark-theme", next === "dark");
    localStorage.setItem("portfolio_theme", next);
    showToast(`✓ Switched to ${next} theme!`);
    setIsOpen(false);
  };

  const openUrl = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const items = [
    // Navigation
    {
      id: "nav-home",
      category: "Navigation",
      title: "Home",
      subtitle: "Overview & Hero introduction",
      badge: "Section",
      action: () => scrollToSection("home"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      ),
    },
    {
      id: "nav-metrics",
      category: "Navigation",
      title: "Career Benchmarks & Impact",
      subtitle: "20+ apps developed, 100K+ users, 99.9% crash-free stability SLA",
      badge: "Section",
      action: () => scrollToSection("metrics"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
    {
      id: "nav-about",
      category: "Navigation",
      title: "About Me",
      subtitle: "Philosophy, background & engineering principles",
      badge: "Section",
      action: () => scrollToSection("about"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      id: "nav-education",
      category: "Navigation",
      title: "Education & Academics",
      subtitle: "B.Tech Computer Science & engineering foundations",
      badge: "Section",
      action: () => scrollToSection("education"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
    },
    {
      id: "nav-experience",
      category: "Navigation",
      title: "Work Experience",
      subtitle: "Dev Technosys, Flitwebs & client projects",
      badge: "Section",
      action: () => scrollToSection("experience"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      ),
    },
    {
      id: "nav-skills",
      category: "Navigation",
      title: "Core Technical Skills",
      subtitle: "React Native, Redux, Native Bridges, TypeScript, CI/CD",
      badge: "Section",
      action: () => scrollToSection("skills"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    /*
    {
      id: "nav-certs",
      category: "Navigation",
      title: "Certifications & Accreditations",
      subtitle: "Meta, Google Play, Apple & Agile Scrum credentials",
      badge: "Section",
      action: () => scrollToSection("certifications"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
    },
    */
    {
      id: "nav-projects",
      category: "Navigation",
      title: "Production Projects & Heatmap",
      subtitle: "Flitpay, Quick Hub, HonestSherpa & GitHub calendar",
      badge: "Section",
      action: () => scrollToSection("projects"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
        </svg>
      ),
    },
    {
      id: "nav-blog",
      category: "Navigation",
      title: "Engineering Blog & Architecture Notes",
      subtitle: "Technical deep dives on 60 FPS, Fastlane CI/CD & native bridges",
      badge: "Section",
      action: () => scrollToSection("blog"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    /*
    {
      id: "nav-testimonials",
      category: "Navigation",
      title: "Client & Executive Testimonials",
      subtitle: "Endorsements from CTOs, Engineering Leads & Product Managers",
      badge: "Section",
      action: () => scrollToSection("testimonials"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    */
    {
      id: "nav-resume",
      category: "Navigation",
      title: "Executive Resume & CV",
      subtitle: "Interactive resume dossier and printable PDF preview",
      badge: "Section",
      action: () => scrollToSection("resume"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      ),
    },
    {
      id: "nav-contact",
      category: "Navigation",
      title: "Contact & Fast-Track Dossier",
      subtitle: "Send direct message, email, or WhatsApp chat",
      badge: "Section",
      action: () => scrollToSection("contact"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        </svg>
      ),
    },

    // Quick Actions
    {
      id: "action-playground",
      category: "Quick Actions",
      title: "Online Code Compiler & Playground",
      subtitle: "Practice JavaScript, algorithms & real-time mobile logic live in-browser",
      badge: "Compiler",
      action: () => {
        window.dispatchEvent(new CustomEvent("open-code-playground"));
        setIsOpen(false);
      },
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      id: "action-chat",
      category: "Quick Actions",
      title: "Open Live Chat with Ankit",
      subtitle: "Send direct message to mobile phone (+91 83682 45138)",
      badge: "Live Chat",
      action: () => {
        window.dispatchEvent(new CustomEvent("open-live-chat"));
        setIsOpen(false);
      },
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      id: "action-theme",
      category: "Quick Actions",
      title: "Toggle Color Theme",
      subtitle: "Switch between Obsidian Dark and Clean Slate Light mode",
      badge: "Command",
      action: toggleTheme,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
        </svg>
      ),
    },
    {
      id: "action-copy-email",
      category: "Quick Actions",
      title: "Copy Direct Email Address",
      subtitle: "kumar.ankit.rn@gmail.com",
      badge: "Action",
      action: () => copyToClipboard("kumar.ankit.rn@gmail.com", "Email"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      ),
    },
    {
      id: "action-copy-phone",
      category: "Quick Actions",
      title: "Copy WhatsApp Phone Number",
      subtitle: "+91 83682 45138",
      badge: "Action",
      action: () => copyToClipboard("+918368245138", "Phone Number"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: "action-download-cv",
      category: "Quick Actions",
      title: "Download Official CV Resume PDF",
      subtitle: "Complete verified credentials & technical history",
      badge: "Download",
      action: () => {
        scrollToSection("resume");
        showToast("✓ Navigated to Resume Download portal");
      },
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
    },

    // External Profiles
    {
      id: "social-github",
      category: "External Profiles",
      title: "GitHub Developer Profile",
      subtitle: "https://github.com/kumar-ankit-rn (Open source contributions)",
      badge: "External",
      action: () => openUrl("https://github.com/kumar-ankit-rn"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      id: "social-linkedin",
      category: "External Profiles",
      title: "LinkedIn Executive Profile",
      subtitle: "https://www.linkedin.com/in/kumarankitrn (Professional network)",
      badge: "External",
      action: () => openUrl("https://www.linkedin.com/in/kumarankitrn"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      id: "social-whatsapp",
      category: "External Profiles",
      title: "Instant WhatsApp Direct Message",
      subtitle: "Start a real-time mobile conversation",
      badge: "External",
      action: () => openUrl("https://api.whatsapp.com/send?phone=%2B918368245138"),
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
  ];

  // Filter items by search query
  const filteredItems = items.filter((item) => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  // Global keydown listener for Cmd+K / Ctrl+K and Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setSearch("");
      setSelectedIndex(0);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 50);
    }
  }, [isOpen]);

  // Handle arrow navigation in the list
  const handleInputKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredItems.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredItems.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeElement = listRef.current.querySelector(".palette-item.active");
      if (activeElement) {
        activeElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="palette-toast">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Backdrop & Modal */}
      {isOpen && (
        <div
          className="palette-backdrop"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="palette-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Command Palette"
          >
            {/* Search Input Bar */}
            <div className="palette-search-bar">
              <span className="palette-search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                ref={inputRef}
                type="text"
                className="palette-input"
                placeholder="Type a command or jump to section..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
              />
              {search && (
                <button
                  type="button"
                  className="palette-clear-btn"
                  onClick={() => setSearch("")}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
              <kbd className="palette-esc-badge">ESC</kbd>
            </div>

            {/* Results List */}
            <div className="palette-results-list" ref={listRef}>
              {filteredItems.length === 0 ? (
                <div className="palette-empty-state">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <p>No results found for "{search}"</p>
                  <span>Try searching for "Projects", "Resume", "Email", or "Theme"</span>
                </div>
              ) : (
                filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`palette-item ${selectedIndex === index ? "active" : ""}`}
                    onClick={() => item.action()}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="palette-item-icon">{item.icon}</div>
                    <div className="palette-item-content">
                      <div className="palette-item-title-row">
                        <span className="palette-item-title">{item.title}</span>
                        <span className="palette-category-tag">{item.category}</span>
                      </div>
                      <span className="palette-item-desc">{item.subtitle}</span>
                    </div>
                    <div className="palette-item-enter">
                      <span className="palette-enter-tag">{item.badge}</span>
                      <kbd className="palette-enter-key">↵</kbd>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer shortcuts hint */}
            <div className="palette-footer">
              <div className="palette-footer-shortcuts">
                <span className="shortcut-item">
                  <kbd>↑</kbd> <kbd>↓</kbd> Navigate
                </span>
                <span className="shortcut-item">
                  <kbd>↵</kbd> Select
                </span>
                <span className="shortcut-item">
                  <kbd>ESC</kbd> Close
                </span>
              </div>
              <div className="palette-footer-brand">
                <span>kumar.ankit.rn</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandPalette;
