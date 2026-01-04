import React from "react";
import "./Section.css";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import x from "../assets/x.png";
import youtube from "../assets/youtube.png";
import whatsapp from "../assets/whatsapp.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import instagram from "../assets/instagram.jpg";
import fb from "../assets/fb.png";

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
      icon: phone,
      link:  "tel:+918368245138",
      isImage: true,
      label: "Call"
    },
     {
      icon: email,
      link: "mailto:kumar.ankit.rn@gmail.com",
      label: "LinkedIn",
      isImage: true,
    },
         {
      icon: whatsapp,
      link:"https://api.whatsapp.com/send?phone=%2B918368245138&fbclid=IwY2xjawPHrnRicmlkETFvbjV2eDh4VUU2eDZ2VnZGc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnsb8aSx2WVLLz3O2SCqtqY_HW9b7QcgzGfQa6sLXStJsiL_gmy7AgVmQmD3&brid=5k6ZhHjLR-ZoKMlayUCo6g",
      // link: "https://wa.me/qr/CZ7DDQUAD3FRM1",
      isImage: true,
      label: "Call"
    },
    {
      icon: youtube,
      link: "https://www.youtube.com/@kumar_ankit_rn",
      isImage: true
    },

        {
      icon: x,
      link: "https://x.com/kumarankitrn",
      isImage: true
    }, 

    {
      icon: instagram,
      link: "https://www.instagram.com/kumar.ankit.rn/",
      label: "LinkedIn",
      isImage: true,
    },  {
      icon: fb,
      link: "https://www.facebook.com/rn.kumar.ankit",
      label: "LinkedIn",
      isImage: true,
    },
    // {
    //   icon: dribbble,
    //   link: "https://dribbble.com/kumar-ankit-rn",
    //   label: "LinkedIn",
    //   isImage: true,
    // }
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
                <img src={item.icon} alt={item.label} width="50" height="50" style={{ borderRadius: "5px", background:'rgba(24, 27, 33)' }} />
              ) : (
                <span>{item.icon}</span>
              )}
            </div>
          </a>
        ))}
      </div>

      <p style={{ color: "#cdd8ff", paddingBottom: 10 }}>© 2026 Ankit Kumar. All rights reserved.</p>
            <p style={{ color: "#cdd8ff", paddingBottom: 50 }}> Made with ❤️ by Ankit Kumar</p>

     
    </div>
  );
}

export default Contact;
