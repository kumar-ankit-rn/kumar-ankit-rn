import React from "react";
import "./Skills.css";

interface SkillCategory {
  title: string;
  subtitle: string;
  iconType: "gold" | "cyan" | "emerald" | "violet";
  icon: React.ReactNode;
  skills: { name: string; primary?: boolean }[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Mobile App Development",
      subtitle: "Core Cross-Platform Engineering",
      iconType: "gold",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      skills: [
        { name: "React Native", primary: true },
        { name: "TypeScript", primary: true },
        { name: "JavaScript (ES6+)", primary: true },
        { name: "iOS Native Bridges", primary: true },
        { name: "Android Native Bridges", primary: true },
        { name: "React.js" },
        { name: "React Navigation" },
        { name: "Expo & Bare CLI" },
      ],
    },
    {
      title: "State & Architecture",
      subtitle: "Predictable & Scalable Codebases",
      iconType: "cyan",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      skills: [
        { name: "Redux Toolkit", primary: true },
        { name: "Clean Architecture", primary: true },
        { name: "Context API" },
        { name: "Offline-First Sync" },
        { name: "AsyncStorage Caching" },
        { name: "Design Patterns" },
        { name: "Component Modularity" },
      ],
    },
    {
      title: "APIs & Cloud Services",
      subtitle: "Seamless Data Integration",
      iconType: "emerald",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      ),
      skills: [
        { name: "RESTful APIs", primary: true },
        { name: "GraphQL APIs", primary: true },
        { name: "Firebase (FCM, Auth)", primary: true },
        { name: "Node.js" },
        { name: "MongoDB" },
        { name: "Socket.IO / WebSockets" },
        { name: "Payment Gateway APIs" },
      ],
    },
    {
      title: "DevOps & Quality Assurance",
      subtitle: "Deployment, CI/CD & Testing",
      iconType: "violet",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      skills: [
        { name: "App Store Connect", primary: true },
        { name: "Google Play Console", primary: true },
        { name: "CI/CD Deployment", primary: true },
        { name: "Git & GitHub" },
        { name: "Manual Mobile App Testing" },
        { name: "Postman API Suite" },
        { name: "Flipper Profiling" },
        { name: "Performance Auditing" },
      ],
    },
  ];

  return (
    <div className="skills-section">
      {/* Section Header */}
      <div className="skills-header">
        <div className="skills-eyebrow">
          <span>TECHNICAL CAPABILITIES</span>
        </div>
        <h2 className="skills-title">
          Skills & <span className="skills-title-highlight">Competencies</span>
        </h2>
        <p className="skills-subtitle">
          A comprehensive engineering toolkit honed over 5+ years and 20+ production mobile apps developed, leading cross-platform delivery teams.
        </p>
      </div>

      {/* 4 Categorized Master Domains */}
      <div className="skills-categories-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-category-card" key={index}>
            {/* Card Header */}
            <div className="category-card-header">
              <div className={`category-icon-wrap icon-${category.iconType}`}>
                {category.icon}
              </div>
              <div className="category-title-wrap">
                <h3>{category.title}</h3>
                <p>{category.subtitle}</p>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="category-skills-list">
              {category.skills.map((skill, sIndex) => (
                <div
                  className={`skill-tag-pill ${skill.primary ? "skill-primary" : ""}`}
                  key={sIndex}
                >
                  {skill.primary && <span className="skill-indicator-dot" />}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Core Highlights Summary Banner */}
      <div className="skills-core-banner">
        <div className="banner-left-text">
          <span className="banner-title">Leadership & Quality Standards</span>
          <span className="banner-desc">
            Adhering to strict code hygiene, modular architectures, and automated testing for zero-downtime releases.
          </span>
        </div>

        <div className="banner-quick-stats">
          <div className="quick-stat-item">
            <span className="quick-stat-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>TypeScript Safe</span>
          </div>

          <div className="quick-stat-item">
            <span className="quick-stat-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>60 FPS Optimized</span>
          </div>

          <div className="quick-stat-item">
            <span className="quick-stat-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>App Store Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
