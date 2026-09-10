import React from "react";
import myPhoto from "../assets/ankit.png";
import TypeAndDelete from "./TypeAndDelete";
import "./Home.css";

export default function Home() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-section">
      {/* Left: Content & Identity */}
      <div className="hero-content">
        {/* Availability Badge */}
        <div className="hero-status-pill">
          <span className="status-pulse-dot" />
          <span className="hero-status-text">Available for Mobile Development & Leadership</span>
        </div>

        {/* Hero Title with Refined Hierarchy */}
        <div className="hero-title-group">
          <p className="hero-pretitle">HI THERE, I'M</p>
          <h1 className="hero-heading">
            <span className="hero-gradient-name">Ankit Kumar</span>
            <span className="wave" role="img" aria-label="waving hand">👋</span>
          </h1>
        </div>

        {/* Dynamic Typing Role Bar */}
        <div className="hero-role-wrapper">
          <span className="role-badge">SPECIALTY</span>
          <div className="role-text-content">
            <TypeAndDelete />
          </div>
        </div>

        {/* Professional Summary */}
        <p className="hero-summary">
          Team Lead & Senior Mobile Engineer with <strong>5+ years</strong> of hands-on experience and <strong>20+ apps developed</strong>, engineering scalable, high-performance applications for <strong>iOS</strong> and <strong>Android</strong> using <strong>React Native</strong>. Specializing in clean architecture, seamless native bridges, state management, and end-to-end store deployment.
        </p>

        {/* Key Metrics / Impact Stats */}
        <div className="hero-stats-row">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Apps Developed</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Production Ready</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number">Cross-Platform</span>
            <span className="stat-label">iOS & Android</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => handleScroll(e, "#projects")}
          >
            <span>Explore Projects</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          <a
            href="#resume"
            className="btn-secondary"
            onClick={(e) => handleScroll(e, "#resume")}
          >
            <span>View Resume</span>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </a>

          <a
            href="#contact"
            className="btn-ghost"
            onClick={(e) => handleScroll(e, "#contact")}
          >
            Let's Talk
          </a>
        </div>

        {/* Tech Stack Pills */}
        <div className="hero-tech-stack">
          <span className="tech-stack-label">STACK:</span>
          <div className="tech-badges">
            <span className="tech-pill">React Native</span>
            <span className="tech-pill">TypeScript</span>
            <span className="tech-pill">Redux</span>
            <span className="tech-pill">iOS & Android</span>
            <span className="tech-pill">REST APIs</span>
            <span className="tech-pill">Clean Architecture</span>
          </div>
        </div>
      </div>

      {/* Right: Optimized Portrait Presentation */}
      <div className="hero-visual">
        <div className="photo-wrapper">
          {/* Ambient Glow */}
          <div className="photo-glow" aria-hidden="true" />

          {/* Portrait Card */}
          <div className="photo-card">
            <img
              src={myPhoto}
              alt="Ankit Kumar - App Team Lead"
              className="photo-image"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Floating Badges: Anchored at lower corners to never block face/head */}
          <div className="floating-badges-container">
            {/* Badge 1: Lead Engineer */}
            <div className="floating-badge badge-lead">
              <div className="badge-icon-box badge-icon-cyan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <div className="badge-text-group">
                <span className="badge-label">Lead Engineer</span>
                <span className="badge-value">React Native</span>
              </div>
            </div>

            {/* Badge 2: Experience */}
            <div className="floating-badge badge-exp">
              <div className="badge-icon-box badge-icon-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="badge-text-group">
                <span className="badge-label">Track Record</span>
                <span className="badge-value">5+ Yrs • 20+ Apps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
