import React from "react";
import "./Education.css";
import aravali from "../assets/aravali.png";
import rgj from "../assets/rgj.png";
import middle from "../assets/middle.png";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor Of Technology in Computer Science Engineering",
      institute: "Aravali College of Engineering and Management Faridabad ",
      year: "2018 – 2022 | Completed",
      image:aravali},
    {
      title: "12th | PCM",
      institute: "R.S.G.J High school narwara",
      year: "2018 | Completed",
      image: rgj
    },
    {
      title: "10th",
      institute: "R.S.G.J High school narwara",
      year: "2015 | Completed",
      image:rgj
    },
  ];

  return (
    <section className="education-section">
      <h2 className="edu-title">🎓 My Education</h2>
      <p className="edu-subtitle">
        Education is not learning facts, but training the mind to think.
      </p>

      {educationData.map((edu, index) => (
        <div className="edu-card" key={index}>
          <div className="edu-image">
            <img src={edu.image} alt={edu.title} />
          </div>
          <div className="edu-content">
            <h3>{edu.title}</h3>
            <p>{edu.institute}</p>
            <div className="edu-duration">{edu.year}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
