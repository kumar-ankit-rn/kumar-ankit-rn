import React from "react";
import "./Section.css";

function Contact() {
  return (
    <div style={{textAlign:"center"}}>
      <h2 style={{textAlign:"center", fontSize:40, color:"rgb(213,183,117)"}}>Contact Me</h2>
      <p style={{color:"white"}}>If you'd like to connect, discuss an opportunity, or just say hello — feel free to reach out!</p>
      <div className="contact-row">
        <p>📱 <a href="tel:+918368245138" style={{color:"white"}}>Call Here {'\n'} +918368245138 </a></p>
                <p>💬 <a href="https://wa.me/qr/CZ7DDQUAD3FRM1" style={{color:"white"}}> WhatsApp Chat</a></p>

        <p>📧 <a href="mailto:ankitkumarm108@gmail.com" style={{color:"white"}}>ankitkumarm108@gmail.com</a></p>
        <p>💻 <a href="https://github.com/ankitkumarm108" target="_blank" rel="noreferrer" style={{color:"white"}}>GitHub</a></p>
        <p>🔗 <a href="https://www.linkedin.com/in/ankitkumarm108" target="_blank" rel="noreferrer" style={{color:"white"}}>LinkedIn</a></p>
      </div>
      <p style={{color:"white"}}>© 2025 Ankit Kumar. All rights reserved.</p>
    </div>
  );
}

export default Contact;
