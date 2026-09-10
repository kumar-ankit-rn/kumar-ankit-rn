import React, { useState, useEffect } from "react";
import "./Navbar.css";

// Modern SVG Icons
const Icons = {
  Home: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 20V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  ),
  About: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Education: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
    </svg>
  ),
  Experience: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
    </svg>
  ),
  Skills: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
  Projects: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  Resume: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  Contact: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Blog: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  Certifications: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  Testimonials: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  Search: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  ChevronRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  Close: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Moon: () => (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  Sun: () => (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
};

const navItems = [
  { id: "home", label: "Home", Icon: Icons.Home },
  { id: "about", label: "About", Icon: Icons.About },
  { id: "education", label: "Education", Icon: Icons.Education },
  { id: "experience", label: "Experience", Icon: Icons.Experience },
  { id: "skills", label: "Skills", Icon: Icons.Skills },
  // { id: "certifications", label: "Certs", Icon: Icons.Certifications },
  { id: "projects", label: "Projects", Icon: Icons.Projects },
  { id: "blog", label: "Blog", Icon: Icons.Blog },
  // { id: "testimonials", label: "Vouches", Icon: Icons.Testimonials },
  { id: "resume", label: "Resume", Icon: Icons.Resume },
  { id: "contact", label: "Contact", Icon: Icons.Contact },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio_theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("light-theme", theme === "light");
    document.documentElement.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("portfolio_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleLinkClick = (e, hash) => {
    e.preventDefault();
    setActiveLink(hash);
    setIsOpen(false);

    // Remove scroll locks
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    document.body.classList.remove("menu-open");
    document.documentElement.classList.remove("menu-open");

    const targetElement = document.querySelector(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Lock background scrolling while drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.classList.add("menu-open");
      document.documentElement.classList.add("menu-open");

      const preventTouchScroll = (e) => {
        const drawerBody = document.querySelector(".side-drawer-body");
        if (drawerBody && drawerBody.contains(e.target)) {
          return;
        }
        e.preventDefault();
      };

      document.addEventListener("touchmove", preventTouchScroll, { passive: false });

      return () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        document.body.classList.remove("menu-open");
        document.documentElement.classList.remove("menu-open");
        document.removeEventListener("touchmove", preventTouchScroll);
      };
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");
    }
  }, [isOpen]);

  // Handle Escape key and auto-close on resize
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 1140 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="nav-brand"
          onClick={(e) => handleLinkClick(e, "#home")}
          aria-label="kumar.ankit.rn"
        >
          <div className="brand-badge">
            <span className="brand-ak">AK</span>
            <span className="brand-live-dot" title="Available for opportunities" />
          </div>
          <div className="brand-text-container">
            <div className="brand-handle">
              <span className="brand-segment">kumar</span>
              <span className="brand-dot">.</span>
              <span className="brand-segment">ankit</span>
              <span className="brand-dot">.</span>
              <span className="brand-tag">rn</span>
            </div>
            <span className="brand-subtitle">App Team Lead</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-desktop-links">
          <ul>
            {navItems.map(({ id, label, Icon }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleLinkClick(e, `#${id}`)}
                  className={`nav-item-link ${activeLink === `#${id}` ? "active-link" : ""}`}
                >
                  <span className="nav-item-icon">
                    <Icon />
                  </span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Nav Right Actions (Command Search + Theme Toggle + Mobile Hamburger) */}
        <div className="nav-right-actions">
          <button
            type="button"
            className="nav-cmd-k-btn"
            onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
            aria-label="Open command palette"
            title="Search and Quick Actions (Cmd + K)"
          >
            <Icons.Search />
            <span className="cmd-k-text">Search</span>
            <kbd className="cmd-k-kbd">⌘K</kbd>
          </button>

          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Activate Light Mode" : "Activate Dark Mode"}
          >
            <span className={`theme-icon-wrap ${theme}`}>
              {theme === "dark" ? <Icons.Moon /> : <Icons.Sun />}
            </span>
          </button>

          {/* Mobile Hamburger Button */}
          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Full-screen Dark Backdrop Overlay */}
      <div
        className={`drawer-backdrop ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Professional One-Side Drawer */}
      <aside
        className={`side-drawer ${isOpen ? "open" : ""}`}
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header */}
        <div className="side-drawer-header">
          <div className="drawer-user-info">
            <div className="drawer-avatar-wrap">
              <div className="drawer-avatar">AK</div>
              <span className="drawer-live-dot" />
            </div>
            <div>
              <div className="drawer-handle">
                <span className="brand-segment">kumar</span>
                <span className="brand-dot">.</span>
                <span className="brand-segment">ankit</span>
                <span className="brand-dot">.</span>
                <span className="brand-tag">rn</span>
              </div>
              <p className="drawer-subtitle">App Team Lead</p>
            </div>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <Icons.Close />
          </button>
        </div>

        {/* Drawer Navigation List with Icons */}
        <div className="side-drawer-body">
          {/* Quick Search Action */}
          <div className="drawer-search-box">
            <button
              type="button"
              className="drawer-search-btn"
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent("open-command-palette"));
              }}
            >
              <Icons.Search />
              <span>Quick Search & Actions</span>
              <kbd>⌘K</kbd>
            </button>
          </div>

          <div className="drawer-section-label">NAVIGATION</div>
          <ul className="side-drawer-list">
            {navItems.map(({ id, label, Icon }) => {
              const isActive = activeLink === `#${id}`;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleLinkClick(e, `#${id}`)}
                    className={`side-drawer-item ${isActive ? "active" : ""}`}
                  >
                    <div className="drawer-item-left">
                      <span className={`drawer-icon-box ${isActive ? "active" : ""}`}>
                        <Icon />
                      </span>
                      <span className="drawer-item-title">{label}</span>
                    </div>
                    <span className="drawer-chevron">
                      <Icons.ChevronRight />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Drawer Footer */}
        <div className="side-drawer-footer">
          <div className="drawer-theme-row">
            <span className="drawer-theme-label">Appearance</span>
            <button
              type="button"
              className="drawer-theme-switch-btn"
              onClick={toggleTheme}
              aria-label="Toggle Theme Mode"
            >
              <span className={`drawer-theme-pill ${theme}`}>
                {theme === "dark" ? (
                  <>
                    <Icons.Moon />
                    <span>Dark Theme</span>
                  </>
                ) : (
                  <>
                    <Icons.Sun />
                    <span>Light Theme</span>
                  </>
                )}
              </span>
            </button>
          </div>

          <div className="drawer-status">
            <span className="status-indicator"></span>
            <span>Available for projects</span>
          </div>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="drawer-contact-btn"
          >
            Get In Touch
          </a>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
