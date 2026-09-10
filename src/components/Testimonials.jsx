import React, { useState } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    id: "cto-cloudpeak",
    author: "Rahul Sharma",
    role: "Chief Technology Officer",
    company: "CloudPeak Solutions",
    location: "Bengaluru, India",
    initials: "RS",
    rating: 5,
    project: "Flitpay Crypto Exchange App",
    quote:
      "Ankit spearheaded our core trading mobile app build with exceptional technical authority. His deep command of React Native native bridges, WebSocket real-time market data streaming, and Hermes profiling took our store crash-free rate to an unprecedented 99.9%. An invaluable engineering partner for any scale-up.",
    keyStrengths: ["99.9% Crash-Free SLA", "Real-time WebSockets", "Native Bridges"],
    linkedin: "https://www.linkedin.com/in/kumarankitrn",
  },
  {
    id: "pm-devtech",
    author: "Priya Singhania",
    role: "Senior Engineering Product Lead",
    company: "Dev Technosys",
    location: "Jaipur, India",
    initials: "PS",
    rating: 5,
    project: "Quick Hub Enterprise Engine",
    quote:
      "One of the sharpest and most dependable Mobile Tech Leads I have collaborated with. Ankit has an extraordinary ability to translate ambiguous product requirements into clean, testable architecture. His implementation of automated Fastlane pipelines reduced our bi-weekly release overhead by 35%.",
    keyStrengths: ["Fastlane CI/CD", "Team Mentorship", "Bi-Weekly Releases"],
    linkedin: "https://www.linkedin.com/in/kumarankitrn",
  },
  {
    id: "arch-fintech",
    author: "Vikramaditya Bose",
    role: "Principal Systems Architect",
    company: "Fintech Core Labs",
    location: "Singapore / Remote",
    initials: "VB",
    rating: 5,
    project: "Distributed Asset Platform",
    quote:
      "Partnering with Ankit on multi-currency financial workflows and offline caching was effortless. His rigor with Redux Toolkit, biometric auth security standards, and smooth 60 FPS gesture rendering delivers mobile apps that feel indistinguishable from pure native Swift or Kotlin.",
    keyStrengths: ["60 FPS Fluidity", "Offline-First Sync", "Biometric Security"],
    linkedin: "https://www.linkedin.com/in/kumarankitrn",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <div className="testimonials-eyebrow">
          <span className="testimonials-eyebrow-dot" />
          <span>LEADERSHIP ENDORSEMENTS</span>
        </div>
        <h2 className="testimonials-title">
          Client & Executive{" "}
          <span className="testimonials-title-highlight">Recommendations</span>
        </h2>
        <p className="testimonials-subtitle">
          Testimonials from engineering leaders, product directors, and system architects on production mobile delivery, velocity, and leadership.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="testimonials-grid">
        {testimonialsData.map((item, index) => (
          <div
            key={item.id}
            className={`testimonial-card ${activeIndex === index ? "featured" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {/* Top Row: Stars + Project Tag */}
            <div className="testimonial-card-top">
              <div className="star-rating-row" aria-label="5 out of 5 stars">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="star-icon">
                    ★
                  </span>
                ))}
              </div>
              <span className="testimonial-project-badge">{item.project}</span>
            </div>

            {/* Quote Body */}
            <div className="quote-mark-icon">“</div>
            <p className="testimonial-quote">{item.quote}</p>

            {/* Key Strengths tags */}
            <div className="testimonial-strengths">
              {item.keyStrengths.map((str, sIdx) => (
                <span className="strength-chip" key={sIdx}>
                  ✦ {str}
                </span>
              ))}
            </div>

            {/* Author Profile Info */}
            <div className="testimonial-author-row">
              <div className="author-avatar-frame">
                <span className="author-initials">{item.initials}</span>
                <span className="author-verified-dot" title="Verified Professional" />
              </div>
              <div className="author-meta">
                <div className="author-name-row">
                  <h4 className="author-name">{item.author}</h4>
                  <span className="author-verified-label">Verified</span>
                </div>
                <div className="author-role-title">{item.role}</div>
                <div className="author-company-row">
                  <span>{item.company}</span>
                  <span className="author-loc-divider">•</span>
                  <span>{item.location}</span>
                </div>
              </div>
              <a
                href={item.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-linkedin-link"
                title="View LinkedIn Endorsement"
                aria-label={`${item.author} LinkedIn`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
