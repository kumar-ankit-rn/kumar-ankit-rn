import React, { useState } from "react";
import "./Certifications.css";

const certificationsData = [
  {
    id: "meta-rn",
    title: "Meta Certified React Native Specialist",
    issuer: "Meta Platforms",
    badge: "Meta Engineering",
    credentialId: "META-RN-88294B",
    issueDate: "Verified Accreditation",
    desc: "Advanced mobile architecture certification covering Hermes runtime optimization, native bridge communication, Fabric concurrent renderer, and complex gesture orchestration.",
    competencies: ["Hermes Engine", "React 18 Concurrent", "JSI & TurboModules", "Redux Toolkit"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12a4 4 0 0 1 8 0c0 2-4 5-4 5s-4-3-4-5z" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
    verifyUrl: "https://www.coursera.org/account/accomplishments",
  },
  {
    id: "google-play",
    title: "Google Play Academy Mobile Architecture",
    issuer: "Google Play Academy",
    badge: "Android Systems",
    credentialId: "GPA-VITALS-59124",
    issueDate: "Active Certification",
    desc: "Production expertise in Android Vitals, minimizing ANR (Application Not Responding) rates, memory leak profiling, Proguard/R8 obfuscation, and Google Play Console release management.",
    competencies: ["Android Vitals", "Crash Rate SLA", "Gradle & Proguard", "Play Store CI/CD"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
        <line x1="19" y1="12" x2="5" y2="12" />
      </svg>
    ),
    verifyUrl: "https://play.google.com/console",
  },
  {
    id: "apple-ios",
    title: "iOS Development & TestFlight Deployment",
    issuer: "Apple Developer Program",
    badge: "iOS Architecture",
    credentialId: "ADP-IOS-41908C",
    issueDate: "Accredited Release Lead",
    desc: "Mastery of iOS provisioning profiles, Keychain biometric security, Xcode workspace schemes, TestFlight continuous distribution, and App Store review guidelines compliance.",
    competencies: ["Xcode & Fastlane", "CocoaPods & Swift", "Keychain Security", "APNs Push Notifications"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    verifyUrl: "https://developer.apple.com/",
  },
  {
    id: "scrum-agile",
    title: "Agile & Mobile Engineering Delivery Practitioner",
    issuer: "Agile Leadership Alliance",
    badge: "Engineering Leadership",
    credentialId: "ALA-LEAD-2048X",
    issueDate: "Professional Practice",
    desc: "Driving agile sprint execution, bi-weekly app store releases, automated trunk-based continuous delivery, peer code reviews, and cross-functional design system collaboration.",
    competencies: ["Sprint Velocity", "CI/CD Trunk Pipelines", "Code Review Standards", "Jira & Confluence"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    verifyUrl: "https://www.linkedin.com/in/kumarankitrn",
  },
];

const Certifications = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyId = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="certs-section">
      <div className="certs-header">
        <div className="certs-eyebrow">
          <span className="certs-eyebrow-dot" />
          <span>VERIFIED CREDENTIALS</span>
        </div>
        <h2 className="certs-title">
          Professional Certifications &{" "}
          <span className="certs-title-highlight">Accreditations</span>
        </h2>
        <p className="certs-subtitle">
          Recognized technical qualifications in high-performance mobile engineering, platform compliance, security, and agile leadership.
        </p>
      </div>

      <div className="certs-grid">
        {certificationsData.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <div className="cert-card-header">
              <div className="cert-icon-wrapper">{cert.icon}</div>
              <div className="cert-badge-row">
                <span className="cert-issuer-badge">{cert.badge}</span>
                <div className="cert-status-tag">
                  <span className="cert-status-dot" />
                  <span>Verified</span>
                </div>
              </div>
            </div>

            <h3 className="cert-card-title">{cert.title}</h3>
            <div className="cert-issuer-name">{cert.issuer}</div>

            <p className="cert-card-desc">{cert.desc}</p>

            <div className="cert-competencies">
              {cert.competencies.map((skill, idx) => (
                <span className="cert-skill-pill" key={idx}>
                  {skill}
                </span>
              ))}
            </div>

            <div className="cert-card-footer">
              <div className="cert-id-group">
                <span className="cert-id-label">Credential ID:</span>
                <span className="cert-id-code">{cert.credentialId}</span>
              </div>

              <div className="cert-footer-actions">
                <button
                  type="button"
                  className="cert-copy-btn"
                  onClick={() => handleCopyId(cert.id, cert.credentialId)}
                  title="Copy Credential ID"
                >
                  {copiedId === cert.id ? "✓ Copied" : "Copy ID"}
                </button>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-verify-link"
                >
                  <span>Verify</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
