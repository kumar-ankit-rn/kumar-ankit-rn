import React from "react";
import "./Education.css";
import aravali from "../assets/aravali.png";
import rgj from "../assets/rgj.png";
import middle from "../assets/middle.png";

const Education = () => {
  const educationData = [
    {
      level: "Undergraduate Degree",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institute: "Aravali College of Engineering & Management",
      location: "Faridabad, Haryana",
      duration: "2018 – 2022",
      status: "First Class / Completed",
      image: aravali,
      highlights: [
        "Core specialization in Data Structures, Algorithms & Mobile Architecture",
        "Deep foundation in DBMS, Operating Systems, Networks & OOP Principles",
        "Led academic mobile app initiatives and collaborative engineering projects",
      ],
    },
    {
      level: "Higher Secondary",
      degree: "Senior Secondary Education (12th)",
      field: "Physics, Chemistry & Mathematics (PCM)",
      institute: "R.S.G.J High School",
      location: "Narwara, Bihar",
      duration: "2016 – 2018",
      status: "Completed",
      image: rgj,
      highlights: [
        "Focused Science & Mathematics stream with analytical problem-solving",
        "Strong mathematical, algorithmic, and computational foundation",
      ],
    },
    {
      level: "Secondary School",
      degree: "Secondary School Certificate (10th)",
      field: "General Sciences & Mathematics",
      institute: "R.S.G.J High School",
      location: "Narwara, Bihar",
      duration: "2014 – 2015",
      status: "Completed",
      image: middle,
      highlights: [
        "Comprehensive foundational studies in sciences, mathematics, and languages",
        "Graduated with top academic standing and honors",
      ],
    },
  ];

  return (
    <div className="education-section">
      {/* Section Header */}
      <div className="edu-header">
        <div className="edu-eyebrow">
          <span>ACADEMIC FOUNDATION</span>
        </div>
        <h2 className="edu-title">
          Educational <span className="edu-title-highlight">Qualifications</span>
        </h2>
        <p className="edu-subtitle">
          A solid academic bedrock in Computer Science, engineering methodologies, and mathematical problem-solving.
        </p>
      </div>

      {/* Timeline / Cards */}
      <div className="edu-timeline-container">
        {educationData.map((edu, index) => (
          <div className="edu-card" key={index}>
            {/* Institution Thumbnail Frame */}
            <div className="edu-image-frame">
              <img src={edu.image} alt={edu.institute} loading="lazy" />
              <div className="edu-image-overlay" />
            </div>

            {/* Academic Details */}
            <div className="edu-details">
              {/* Meta Top: Level & Status */}
              <div className="edu-meta-top">
                <span className="edu-type-tag">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
                  </svg>
                  {edu.level}
                </span>

                <div className="edu-status-pill">
                  <span className="edu-status-dot" />
                  <span>{edu.status}</span>
                </div>
              </div>

              {/* Degree & Field */}
              <h3 className="edu-degree-title">
                {edu.degree} — <span className="edu-field-highlight">{edu.field}</span>
              </h3>

              {/* Institution, Location & Duration */}
              <div className="edu-institution-row">
                <span className="edu-institute-name">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <line x1="9" y1="22" x2="9" y2="22.01" />
                    <line x1="15" y1="22" x2="15.01" y2="22" />
                    <line x1="12" y1="18" x2="12" y2="18.01" />
                    <line x1="8" y1="6" x2="16" y2="6" />
                    <line x1="8" y1="10" x2="16" y2="10" />
                    <line x1="8" y1="14" x2="16" y2="14" />
                  </svg>
                  {edu.institute}
                </span>

                <span className="edu-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {edu.location}
                </span>

                <span className="edu-duration-badge">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {edu.duration}
                </span>
              </div>

              {/* Coursework & Highlights */}
              <div className="edu-highlights">
                {edu.highlights.map((highlight, hIndex) => (
                  <div className="edu-highlight-item" key={hIndex}>
                    <span className="edu-check-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
