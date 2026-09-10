import React, { useState } from "react";
import "./Resume.css";
import myResume from "../assets/Ankit_Kumar.pdf";

const Resume = () => {
  const [downloadState, setDownloadState] = useState("idle"); // 'idle' | 'downloading' | 'success'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleDownload = () => {
    if (downloadState !== "idle") return;

    setDownloadState("downloading");

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = myResume;
      link.download = "Ankit_Kumar_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadState("success");
      setTimeout(() => {
        setDownloadState("idle");
      }, 2500);
    }, 600);
  };

  const handleView = () => {
    window.open(myResume, "_blank", "noopener,noreferrer");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kumar.ankit.rn@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2000);
  };

  return (
    <div className="resume-section">
      {/* Section Header */}
      <div className="resume-header">
        <div className="resume-eyebrow">
          <span className="resume-eyebrow-dot" />
          <span>CURRICULUM VITAE</span>
        </div>
        <h2 className="resume-title">
          Professional Dossier &{" "}
          <span className="resume-title-highlight">Verified Credentials</span>
        </h2>
        <p className="resume-subtitle">
          Comprehensive technical profile detailing 5+ years of cross-platform mobile engineering, 20+ apps developed, architecture leadership, and high-impact enterprise delivery.
        </p>
      </div>

      {/* Master 2-Column Dossier */}
      <div className="resume-dossier-grid">
        {/* Left Column: Interactive PDF Showcase & Download Deck */}
        <div className="resume-preview-deck">
          {/* Deck Top Window Bar */}
          <div className="deck-topbar">
            <div className="deck-window-controls">
              <span className="deck-dot red" />
              <span className="deck-dot yellow" />
              <span className="deck-dot green" />
            </div>
            <div className="deck-file-meta">
              <span className="deck-file-badge">PDF DOCUMENT</span>
              <span className="deck-file-size">212 KB • Current 2026</span>
            </div>
          </div>

          {/* Simulated Digital CV Canvas */}
          <div className="digital-cv-canvas">
            <div className="cv-canvas-header">
              <div>
                <h3 className="cv-canvas-name">ANKIT KUMAR</h3>
                <p className="cv-canvas-role">Mobile App Team Lead & Senior React Native Engineer</p>
              </div>
              <div className="cv-ats-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>98% ATS Scored</span>
              </div>
            </div>

            <div className="cv-status-row">
              <div className="cv-status-chip">
                <span className="cv-pulse-dot" />
                <span>Verified Active Dossier</span>
              </div>
              <div className="cv-status-chip">
                <span>📍 Delhi NCR / Remote</span>
              </div>
              <div className="cv-status-chip">
                <span>🎓 B.Tech CSE</span>
              </div>
            </div>

            {/* Stylized Document Summary Skeleton */}
            <div className="cv-skeleton-preview">
              <div className="skeleton-section">
                <div className="skeleton-title">
                  <span>Current Leadership</span>
                  <span className="skeleton-title-line" />
                </div>
                <div className="skeleton-item-row">
                  <span className="skeleton-item-main">CloudPeak Technologies — Mobile App Team Lead</span>
                  <span className="skeleton-item-period">2024 – Present</span>
                </div>
                <div className="skeleton-tags-row">
                  <span className="skeleton-tag">React Native</span>
                  <span className="skeleton-tag">TypeScript</span>
                  <span className="skeleton-tag">Team Governance</span>
                  <span className="skeleton-tag">CI/CD Fastlane</span>
                </div>
              </div>

              <div className="skeleton-section">
                <div className="skeleton-title">
                  <span>Production Apps & Systems</span>
                  <span className="skeleton-title-line" />
                </div>
                <div className="skeleton-item-row">
                  <span className="skeleton-item-main">Flitpay (Crypto), Quick Hub (Automation), HonestSherpa</span>
                  <span className="skeleton-item-period">Play Store Live</span>
                </div>
                <div className="skeleton-tags-row">
                  <span className="skeleton-tag">100K+ Active Users</span>
                  <span className="skeleton-tag">99.9% Stability</span>
                  <span className="skeleton-tag">WebSocket Feeds</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Center Buttons */}
          <div className="resume-actions-group">
            <div className="resume-btn-row">
              {/* Primary Download Button */}
              <button
                type="button"
                className={`resume-btn-primary ${
                  downloadState === "downloading"
                    ? "downloading"
                    : downloadState === "success"
                    ? "success"
                    : ""
                }`}
                onClick={handleDownload}
                disabled={downloadState !== "idle"}
                aria-label="Download Official Resume PDF"
              >
                {downloadState === "downloading" ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="spin-icon">
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" />
                    </svg>
                    <span>Preparing PDF...</span>
                  </>
                ) : downloadState === "success" ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Downloaded Successfully!</span>
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download Full Resume</span>
                  </>
                )}
              </button>

              {/* Secondary View Button */}
              <button
                type="button"
                className="resume-btn-secondary"
                onClick={handleView}
                aria-label="Open Resume in New Browser Tab"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>View in Tab</span>
              </button>
            </div>

            <div className="resume-safety-note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Recruiter-Ready • Virus-Free • Standard PDF Format (212 KB)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Executive Summary for Hiring Teams */}
        <div className="resume-summary-card">
          <div>
            <div className="summary-card-header">
              <span className="summary-card-eyebrow">EXECUTIVE DOSSIER</span>
              <h3 className="summary-card-title">Hiring Manager & Recruiter Snapshot</h3>
            </div>

            {/* Key Value Highlights */}
            <div className="summary-highlights-list">
              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Cross-Platform Mobile Architecture</h4>
                  <p>
                    5+ years specializing in React Native, architecting and delivering 20+ production iOS & Android apps with modular component architecture, offline sync, and native bridging.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>High Concurrency & Real-Time Data</h4>
                  <p>
                    Engineered crypto trading interfaces and live market feeds utilizing WebSockets, Redux Toolkit, and native optimizations maintaining smooth 60 FPS.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="highlight-content">
                  <h4>Team Leadership & Release Operations</h4>
                  <p>
                    Leading an agile engineering pod at CloudPeak Technologies, establishing automated Fastlane CI/CD pipelines, strict PR reviews, and sprint execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Competencies Matrix */}
            <div className="resume-competencies-block">
              <div className="competencies-title">
                <span>Core Technical Proficiencies</span>
                <span className="competencies-badge">ATS Standard Terms</span>
              </div>
              <div className="competencies-chips">
                <span className="competency-chip primary">React Native</span>
                <span className="competency-chip primary">TypeScript</span>
                <span className="competency-chip primary">Redux Toolkit</span>
                <span className="competency-chip">Native Bridges</span>
                <span className="competency-chip">WebSockets</span>
                <span className="competency-chip">Firebase FCM</span>
                <span className="competency-chip">Fastlane CI/CD</span>
                <span className="competency-chip">REST APIs</span>
                <span className="competency-chip">Performance Profiling</span>
                <span className="competency-chip">Git / Agile</span>
              </div>
            </div>
          </div>

          {/* Recruiter Fast Contact Bar */}
          <div className="recruiter-fast-bar">
            <div className="fast-bar-text">
              <span className="fast-bar-label">Direct Inquiries</span>
              <span className="fast-bar-email">kumar.ankit.rn@gmail.com</span>
            </div>
            <div className="fast-bar-actions">
              <button
                type="button"
                className="btn-copy-action"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href="https://www.linkedin.com/in/kumarankitrn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linkedin-action"
                aria-label="Visit LinkedIn Profile"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Global Confidence Badges */}
      <div className="resume-confidence-row">
        <div className="confidence-badge-card">
          <div className="confidence-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div className="confidence-body">
            <h4>ATS-Optimized Formatting</h4>
            <p>Formatted to pass enterprise applicant tracking systems with standard semantic headers and keyword density.</p>
          </div>
        </div>

        <div className="confidence-badge-card">
          <div className="confidence-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="confidence-body">
            <h4>Quantifiable Business Impact</h4>
            <p>Highlights real revenue metrics, 100K+ installs, 99.9% crash-free sessions, and app-store-shipped code.</p>
          </div>
        </div>

        <div className="confidence-badge-card">
          <div className="confidence-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <div className="confidence-body">
            <h4>Direct Technical Verification</h4>
            <p>All projects backed by live Play Store listings, demonstrable APKs, and verified GitHub repositories.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
