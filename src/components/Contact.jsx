import React from "react";
import "./Section.css";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import x from "../assets/x.png";

function Contact() {
  const data = [
    {
      icon: linkedin,
      link: "https://www.linkedin.com/in/kumarankitrn",
      isImage: true,
      label: "LinkedIn"
    },
     {
      icon: github,
      link: "https://github.com/kumar-ankit-rn",
      isImage: true
    },
        {
      icon: x,
      link: "https://x.com/kumarankitrn",
      isImage: true
    },
     {
      icon: "💬 WhatsApp Chat",
      link: "https://wa.me/qr/CZ7DDQUAD3FRM1",
      isImage: false,
      label: "Call"
    },
    {
      icon: "📞 Call Here +91 8368245138",
      link: "tel:+918368245138",
      isImage: false,
      label: "Call"
    },
     {
      icon: "📧 kumar.ankit.rn@gmail.com",
      link: "mailto:kumar.ankit.rn@gmail.com",
      label: "LinkedIn"
    },
   
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ textAlign: "center", fontSize: 40, color: "rgb(213,183,117)", paddingTop: 20 }}>Contact Me</h2>
      <p style={{ color: "#cdd8ff", paddingRight: 50, paddingLeft: 50, paddingBottom: 30, paddingTop: 30 }}>
        If you'd like to connect, discuss an opportunity, or just say hello — feel free to reach out!
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "5px", marginBottom: 40, flexWrap:'wrap' }}>
        {data.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            style={{ textDecoration: "none", color: "#cdd8ff" }}
          >
            <div style={{
              padding: "12px",
              borderRadius: "10px",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              gap: "5px"
            }}>
              {item.isImage ? (
                <img src={item.icon} alt={item.label} width="30" height="30" style={{ borderRadius: "5px" }} />
              ) : (
                <span>{item.icon}</span>
              )}
            </div>
          </a>
        ))}
      </div>

      <p style={{ color: "#cdd8ff", paddingBottom: 50 }}>© 2025 Ankit Kumar. All rights reserved.</p>
    </div>
  );
}

export default Contact;
