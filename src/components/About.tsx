import React from "react";
import "./About.css";

export default function About() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="about-section">
      {/* Section Header */}
      <div className="about-header">
        <div className="about-eyebrow">
          <span>ABOUT ME</span>
        </div>
        <h2 className="about-title">
          Architecting Scalable Mobile Products &{" "}
          <span className="about-title-highlight">Empowering Engineering Teams</span>
        </h2>
        <p className="about-subtitle">
          Combining deep technical mastery in React Native with empathetic, results-driven leadership to build world-class mobile applications.
        </p>
      </div>

      {/* Main Grid: Story Card + Pillars */}
      <div className="about-grid">
        {/* Left Column: Narrative Story */}
        <div className="about-story-card">
          <div className="story-badge-header">
            <div className="story-avatar-mini">AK</div>
            <div className="story-header-text">
              <h3>Ankit Kumar</h3>
              <p>Team Lead – Mobile Application Development</p>
            </div>
          </div>

          <p className="about-paragraph">
            With <strong>5+ years of hands-on experience</strong> in the mobile ecosystem, I specialize in architecting, engineering, and scaling mission-critical <strong>React Native</strong> applications for both <strong>iOS</strong> and <strong>Android</strong> platforms—having architected and developed <strong>20+ production mobile apps</strong> spanning fintech, crypto trading, automation, and enterprise platforms.
          </p>

          <p className="about-paragraph">
            My engineering philosophy is rooted in <strong>clean code, modular architecture, and predictable state management</strong>. Having led products from initial architectural drafts through App Store and Google Play deployments, I bridge the gap between ambitious business goals and bulletproof technical execution.
          </p>

          {/* Leadership Quote Box */}
          <div className="about-quote-box">
            “True engineering leadership is about more than shipping code—it is about creating clean systems, raising code quality bars, and mentoring developers to do the best work of their careers.”
          </div>

          <p className="about-paragraph">
            As a Team Lead, I actively champion <strong>rigorous code reviews, automated CI/CD workflows, performance profiling, and agile velocity</strong>. I stay deeply connected to advancements in mobile technology—always learning, optimizing, and driving innovation.
          </p>

          {/* Quick Actions */}
          <div className="about-story-actions">
            <a
              href="#resume"
              className="about-cta-btn"
              onClick={(e) => handleScroll(e, "#resume")}
            >
              <span>Explore My Resume</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#contact"
              className="about-contact-link"
              onClick={(e) => handleScroll(e, "#contact")}
            >
              Get In Touch →
            </a>
          </div>
        </div>

        {/* Right Column: 4 Pillars of Leadership & Engineering */}
        <div className="about-pillars">
          {/* Pillar 1 */}
          <div className="pillar-card">
            <div className="pillar-icon-box icon-gold">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
            <div className="pillar-content">
              <h4>Cross-Platform Architecture</h4>
              <p>
                Engineering scalable, maintainable React Native architectures with clean design patterns, TypeScript safety, and seamless native module bridges.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="pillar-card">
            <div className="pillar-icon-box icon-cyan">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="pillar-content">
              <h4>Engineering Team Leadership</h4>
              <p>
                Guiding cross-functional developers, establishing engineering best practices, conducting thorough code reviews, and fostering collaborative agile teams.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="pillar-card">
            <div className="pillar-icon-box icon-emerald">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </div>
            <div className="pillar-content">
              <h4>End-to-End Store Deployment</h4>
              <p>
                Managing full product releases on App Store Connect and Google Play Console, handling provisioning, OTA updates, guidelines, and compliance.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="pillar-card">
            <div className="pillar-icon-box icon-violet">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="pillar-content">
              <h4>Performance & 60 FPS UX</h4>
              <p>
                Eliminating memory leaks, optimizing JavaScript thread execution, tuning re-renders, and crafting fluid 60fps micro-animations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Principles Bottom Bar */}
      <div className="about-principles-bar">
        <div className="principle-item">
          <span className="principle-dot" />
          <span className="principle-text">Clean & Maintainable Code</span>
        </div>
        <div className="principle-item">
          <span className="principle-dot" />
          <span className="principle-text">Test-Driven & Stable Releases</span>
        </div>
        <div className="principle-item">
          <span className="principle-dot" />
          <span className="principle-text">Cross-Functional Leadership</span>
        </div>
        <div className="principle-item">
          <span className="principle-dot" />
          <span className="principle-text">Continuous Modern Tooling</span>
        </div>
      </div>
    </div>
  );
}
