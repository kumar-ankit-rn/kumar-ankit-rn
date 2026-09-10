import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Mobile Application Team Lead",
      company: "CloudPeak Technologies Pvt. Ltd.",
      time: "Nov 2023 – Present",
      isCurrent: true,
      highlights: [
        "Leading mobile engineering teams to architect and ship scalable cross-platform React Native apps for iOS & Android.",
        "Enforcing clean architecture, TypeScript safety, automated CI/CD build pipelines, and strict code review standards.",
        "Managing full release lifecycles on Apple App Store Connect and Google Play Console with 99.9% crash-free stability.",
      ],
      technologies: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "iOS (Swift)",
        "Android (Kotlin)",
        "CI/CD",
        "Store Deployment",
      ],
    },
    {
      title: "Senior React Native Developer",
      company: "Dev Technosys Pvt. Ltd.",
      time: "March 2023 – Nov 2023",
      isCurrent: false,
      highlights: [
        "Architected scalable mobile features, payment gateways, push notification services, and real-time location APIs.",
        "Optimized JavaScript thread execution and memory usage, achieving fluid 60 FPS transitions and micro-animations.",
        "Collaborated closely with design and product teams to translate complex Figma design systems into responsive mobile interfaces.",
      ],
      technologies: [
        "React Native",
        "TypeScript",
        "Redux",
        "Payment Gateways",
        "Push Notifications",
        "REST APIs",
      ],
    },
    {
      title: "React Native Developer",
      company: "Flitwebs Pvt. Ltd.",
      time: "Aug 2022 – March 2023",
      isCurrent: false,
      highlights: [
        "Engineered core application features with offline-first data caching, local storage, and secure authentication flows.",
        "Constructed modular reusable UI components and custom native modules to extend React Native functionality.",
      ],
      technologies: [
        "React Native",
        "JavaScript (ES6+)",
        "Context API",
        "AsyncStorage",
        "Native Bridges",
      ],
    },
    {
      title: "React Native Developer",
      company: "Mobiloitte Technologies India Pvt. Ltd.",
      time: "Feb 2022 – Aug 2022",
      isCurrent: false,
      highlights: [
        "Delivered responsive mobile screens, integrated REST APIs, and performed rigorous performance and bug triage.",
        "Collaborated in fast-paced agile sprint cycles, delivering production milestones on schedule.",
      ],
      technologies: [
        "React Native",
        "JavaScript",
        "Redux",
        "Git / GitHub",
        "Agile / Scrum",
      ],
    },
    {
      title: "Full Stack & Mobile Developer",
      company: "Dreamer Infotech Pvt. Ltd.",
      time: "Aug 2021 – Feb 2022",
      isCurrent: false,
      highlights: [
        "Began professional engineering career by developing responsive web interfaces and mobile app modules.",
        "Assisted in backend REST API design, database schemas, and state validation.",
      ],
      technologies: [
        "React Native",
        "React.js",
        "JavaScript",
        "Node.js",
        "MySQL",
      ],
    },
  ];

  return (
    <div className="experience-section">
      {/* Section Header */}
      <div className="exp-header">
        <div className="exp-eyebrow">
          <span>CAREER TIMELINE</span>
        </div>
        <h2 className="exp-title">
          Professional <span className="exp-title-highlight">Experience</span>
        </h2>
        <p className="exp-subtitle">
          5+ years of dedicated engineering leadership with 20+ mobile apps developed and shipped across the global mobile ecosystem.
        </p>
      </div>

      {/* Timeline Stream */}
      <div className="exp-timeline">
        {experiences.map((item, index) => (
          <div className="timeline-item" key={index}>
            {/* Timeline Node Icon */}
            <div className={`timeline-node ${item.isCurrent ? "current" : ""}`}>
              {item.isCurrent ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <line x1="12" y1="12" x2="12.01" y2="12" />
                </svg>
              )}
            </div>

            {/* Experience Card */}
            <div className="exp-card">
              {/* Header: Role, Company & Badges */}
              <div className="exp-card-header">
                <div>
                  <h3 className="exp-role-title">{item.title}</h3>
                  <div className="exp-company-row">
                    <span className="exp-company-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                        <line x1="9" y1="22" x2="9" y2="22.01" />
                        <line x1="15" y1="22" x2="15.01" y2="22" />
                        <line x1="8" y1="6" x2="16" y2="6" />
                        <line x1="8" y1="10" x2="16" y2="10" />
                        <line x1="8" y1="14" x2="16" y2="14" />
                      </svg>
                    </span>
                    <span>{item.company}</span>
                  </div>
                </div>

                {/* Date & Current Status */}
                <div className="exp-badges-right">
                  {item.isCurrent && (
                    <span className="exp-status-current">
                      <span className="current-pulse-dot" />
                      Current Role
                    </span>
                  )}
                  <span className="exp-time-badge">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {item.time}
                  </span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <ul className="exp-bullets">
                {item.highlights.map((bullet, bIndex) => (
                  <li className="exp-bullet-item" key={bIndex}>
                    <span className="exp-bullet-arrow">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Used */}
              <div className="exp-tech-row">
                {item.technologies.map((tech, tIndex) => (
                  <span className="exp-tech-tag" key={tIndex}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
