import React from "react";
import "./MetricsStrip.css";

const metrics = [
  {
    value: "5+",
    unit: "Years",
    label: "Industry Experience",
    description: "Architecting high-scale React Native, iOS & Android applications",
    badge: "Senior RN",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: "100K+",
    unit: "Users",
    label: "Production Reach",
    description: "Fintech, crypto exchanges & enterprise consumer apps",
    badge: "Scale",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "99.9%",
    unit: "SLA",
    label: "Crash-Free Rate",
    description: "Rigorous memory leak prevention & 60 FPS UI thread execution",
    badge: "Stability",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    value: "20+",
    unit: "Apps",
    label: "Apps Developed",
    description: "Production mobile apps engineered & shipped to Google Play & App Store",
    badge: "Scale",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    value: "12m",
    unit: "Velocity",
    label: "CI/CD Pipeline",
    description: "Zero-touch automated Fastlane testing, build & store uploads",
    badge: "DevOps",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

const MetricsStrip = () => {
  return (
    <div className="metrics-strip-container">
      <div className="metrics-strip-glow" />
      <div className="metrics-strip-inner">
        <div className="metrics-strip-header">
          <div className="metrics-live-badge">
            <span className="metrics-live-dot" />
            <span>GLOBAL PRODUCTION BENCHMARKS</span>
          </div>
          <span className="metrics-strip-subtitle">Demonstrated business impact across enterprise deployments</span>
        </div>

        <div className="metrics-grid">
          {metrics.map((item, index) => (
            <div className="metric-card" key={index}>
              <div className="metric-card-top">
                <div className="metric-icon-box">{item.icon}</div>
                <span className="metric-badge-tag">{item.badge}</span>
              </div>
              <div className="metric-number-row">
                <span className="metric-main-val">{item.value}</span>
                <span className="metric-unit-text">{item.unit}</span>
              </div>
              <h4 className="metric-card-label">{item.label}</h4>
              <p className="metric-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsStrip;
