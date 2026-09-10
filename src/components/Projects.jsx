import React from "react";
import "./Projects.css";
import GithubHeatmap from "./GithubHeatmap";
import qh from "../assets/qh.png";
import fp from "../assets/fp.webp";

const projectsData = [
  {
    category: "Fintech & Crypto",
    status: "Live on Play Store",
    title: "Flitpay",
    tagline: "Crypto Exchange & Digital Asset Wallet",
    desc: "A high-security, low-latency cryptocurrency trading mobile application with instant buy/sell, portfolio tracking, live candlestick charts, and biometric security.",
    iconImg: fp,
    metrics: ["4.4★ Rating", "10K+ Downloads", "2FA Verified"],
    link: "https://play.google.com/store/apps/details?id=com.core.app.flitpay",
    buttonLabel: "View on Google Play Store",
    highlights: [
      "Real-time WebSocket streaming for live crypto market tickers & candlestick charts",
      "Multi-currency digital asset wallet with instant fiat-to-crypto INR gateway",
      "Biometric authentication (FaceID/Fingerprint) with 2FA security compliance",
      "Optimized React Native JS thread execution for fluid 60 FPS transitions",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "WebSockets",
      "Push Notifications",
      "REST APIs",
    ],
  },
  {
    category: "Marketing & Automation",
    status: "Live on Play Store",
    title: "Quick Hub",
    tagline: "Automated Marketing & Workflow Engine",
    desc: "An all-in-one mobile workflow suite empowering businesses to streamline campaigns, automate customer engagement, track analytics, and boost conversion velocity.",
    iconImg: qh,
    metrics: ["Enterprise Scale", "FCM Push Engine", "Multi-Tenant"],
    link: "https://play.google.com/store/search?q=Quick%20hub&c=apps",
    buttonLabel: "View on Google Play Store",
    highlights: [
      "Automated multi-channel marketing campaign workflows and delivery analytics",
      "High-throughput Firebase Cloud Messaging (FCM) push notification engine",
      "Offline-first data caching architecture with seamless background sync",
      "Custom native bridges for background processing and hardware optimization",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "Firebase FCM",
      "RESTful Services",
      "Offline Sync",
    ],
  },
  {
    category: "E-Commerce & Rental",
    status: "Production App",
    title: "HonestSherpa",
    tagline: "On-Demand Furniture & Living Rental",
    desc: "A seamless mobile marketplace allowing users to browse, rent, or buy premium furniture and home essentials with flexible subscriptions and scheduled delivery.",
    fallbackIcon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    metrics: ["E-Commerce", "Flexible Plans", "Live Geolocation"],
    link: "https://play.google.com/store/apps",
    buttonLabel: "Explore App Platform",
    highlights: [
      "Dynamic catalog browsing with categorized search and multi-attribute filters",
      "Secure payment gateway integration with recurring rental subscription models",
      "Real-time order tracking and geolocation logistics map integration",
      "Modular component library with reusable design system tokens",
    ],
    technologies: [
      "React Native",
      "JavaScript (ES6+)",
      "Context API",
      "Payment Gateway",
      "Google Maps SDK",
    ],
  },
];

const Projects = () => {
  const [activeQrProject, setActiveQrProject] = React.useState(null);
  const [copiedLink, setCopiedLink] = React.useState(false);

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="projects-section">
      {/* Section Header */}
      <div className="projects-header">
        <div className="projects-eyebrow">
          <span>FEATURED WORK</span>
        </div>
        <h2 className="projects-title">
          Production Mobile Apps &{" "}
          <span className="projects-title-highlight">Featured Engineering</span>
        </h2>
        <p className="projects-subtitle">
          Over 20+ mobile apps developed and shipped to app stores, serving hundreds of thousands of active users with 99.9% crash-free stability.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Top Row: App Icon + Titles + Badges */}
            <div className="project-app-header">
              {/* App Icon Frame */}
              <div className="app-icon-frame">
                {project.iconImg ? (
                  <img
                    src={project.iconImg}
                    alt={`${project.title} icon`}
                    className="app-icon-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="app-icon-placeholder">
                    {project.fallbackIcon}
                  </div>
                )}
              </div>

              {/* Title & Metadata */}
              <div className="app-header-meta">
                <div className="app-badges-top">
                  <span className="category-badge">{project.category}</span>
                  <div className="live-status-pill">
                    <span className="live-dot" />
                    <span>{project.status}</span>
                  </div>
                </div>

                <h3 className="app-title">{project.title}</h3>
                <p className="app-tagline">{project.tagline}</p>
              </div>
            </div>

            {/* Description */}
            <p className="project-description">{project.desc}</p>

            {/* Metrics & Impact Bar */}
            <div className="project-metrics-row">
              {project.metrics.map((metric, mIndex) => (
                <React.Fragment key={mIndex}>
                  <div className="metric-item">
                    <span className="metric-star">✦</span>
                    <span>{metric}</span>
                  </div>
                  {mIndex < project.metrics.length - 1 && (
                    <span className="metric-divider">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Technical Highlights */}
            <div className="project-highlights-list">
              {project.highlights.map((highlight, hIndex) => (
                <div className="project-highlight-item" key={hIndex}>
                  <span className="highlight-check-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Tags */}
            <div className="project-tech-row">
              {project.technologies.map((tech, tIndex) => (
                <span className="tech-tag-pill" key={tIndex}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons Row */}
            <div className="project-action-row">
              <button
                type="button"
                className="store-action-btn"
                onClick={() => openLink(project.link)}
              >
                <span>{project.buttonLabel}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </button>

              <button
                type="button"
                className="qr-action-btn"
                onClick={() => setActiveQrProject(project)}
                title="Scan to test on your phone"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                <span>Scan QR</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* QR Code Mobile Test Modal */}
      {activeQrProject && (
        <div
          className="qr-modal-overlay"
          onClick={() => setActiveQrProject(null)}
        >
          <div
            className="qr-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="qr-modal-header">
              <div className="qr-modal-title-box">
                <span className="qr-eyebrow">INSTANT MOBILE INSPECT</span>
                <h3>{activeQrProject.title} — Mobile Testing</h3>
              </div>
              <button
                type="button"
                className="qr-close-btn"
                onClick={() => setActiveQrProject(null)}
                aria-label="Close QR Modal"
              >
                ✕
              </button>
            </div>

            <div className="qr-modal-body">
              <div className="qr-code-frame">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(activeQrProject.link)}&margin=10&color=0f172a&bgcolor=ffffff`}
                  alt={`${activeQrProject.title} QR code`}
                  className="qr-code-img"
                />
                <div className="qr-frame-border" />
              </div>

              <div className="qr-info-pane">
                <div className="qr-badge-pill">
                  <span className="qr-live-dot" />
                  <span>LIVE PRODUCTION STORE BUILD</span>
                </div>
                <h4>Point your phone camera to scan</h4>
                <p>
                  Instantly open the store link directly on your Android or iOS device to test build performance, fluidity, and UI flows.
                </p>

                <div className="qr-meta-specs">
                  <div className="spec-row">
                    <span className="spec-label">Target Application</span>
                    <span className="spec-val">{activeQrProject.title}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Category</span>
                    <span className="spec-val">{activeQrProject.category}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Status</span>
                    <span className="spec-val">{activeQrProject.status}</span>
                  </div>
                </div>

                <div className="qr-dialog-actions">
                  <button
                    type="button"
                    className="qr-copy-link-btn"
                    onClick={() => handleCopyLink(activeQrProject.link)}
                  >
                    {copiedLink ? "✓ Link Copied!" : "📋 Copy Store Link"}
                  </button>
                  <button
                    type="button"
                    className="qr-open-store-btn"
                    onClick={() => openLink(activeQrProject.link)}
                  >
                    Open in Browser ↗
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive GitHub Velocity & Contribution Heatmap */}
      <GithubHeatmap />
    </div>
  );
};

export default Projects;
