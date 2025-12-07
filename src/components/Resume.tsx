import React from "react";
import "./Section.css";
import myResume from "../assets/Ankit_Kumar.pdf"; // 👈 import the pdf
function Resume() {
  return (
    <div className="section">
      <h2>My Resume</h2>
      <p>
        You can view or download my latest resume below 👇 to know more about my work and technical background.
        <br></br>
          <a
            href={myResume} 
        // href="../assets/Ankit_Kumar_React_Native_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
      View Resume
      </a>
      </p>
    
    </div>
  );
}

export default Resume;
