

// import React, { useState, useEffect } from "react";
// import "./Navbar.css";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isOpen]);

//   return (
//     <nav className="navbar">
//       {/* Nav Links */}
//       <div className={`nav-links ${isOpen ? "open" : ""}`}>
//         <ul>
//           <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
//           <li><a href="#about" onClick={handleLinkClick}>About</a></li>
//           <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
//           <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
//           <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
//           <li><a href="#resume" onClick={handleLinkClick}>Resume</a></li>
//           <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
//         </ul>
//       </div>

//       {/* Hamburger / Close button */}
//       <div
//         className={`hamburger ${isOpen ? "open" : ""}`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleLinkClick = (hash) => {
    setActiveLink(hash);
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          {["home","about","education","experience","skills","projects","resume","contact"].map(item => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => handleLinkClick(`#${item}`)}
                className={activeLink === `#${item}` ? "active-link" : ""}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
