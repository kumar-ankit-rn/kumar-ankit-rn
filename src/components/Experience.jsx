import React from "react";
import "./Experience.css";

const Experience = () => {
  const data = [
    {
      title: "Full Stack Developer",
      company: "Dreamer Infotech Pvt Ltd",
      time: "Aug 2021 - Feb 2022",
      side: "left",
    },
    {
     title: "React Native Developer",
      company: "Mobiloitte Technologies India Pvt. Ltd.",
      time: "Feb 2022 - Aug 2022",
      side: "right",
    },
    {
      title: "React Native Developer",
      company: "Flitwebs Pvt. Ltd",
      time: "Aug 2022 - March 2023",
      side: "left",
    },
    {
      title: "React Native Developer",
      company: "Dev Technosys Pvt. Ltd",
      time: "March 2023 - Nov 2023",
      side: "right",
    },
    {
      title: "Mobile Application Team Lead",
      company: "CloudPeak Technologies Pvt. Ltd.,",
      time: "Nov 2023 - Present",
      side: "left",
    },
  ];

  return (
    <section className="exp-section">
      <h2 className="exp-heading">💼 Experience</h2>

      <div className="timeline-wrapper">
        <div className="center-line"></div>

        <div className="timeline-grid">
          {data.map((item, index) => (
            <div className="timeline-row" key={index}>
              {item.side === "left" && (
                <div className="card card-left">
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                  <span>{item.time}</span>
                </div>
              )}

              <div className="dot-wrap">
                <div className="dot">💼</div>
              </div>

              {item.side === "right" && (
                <div className="card card-right">
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                  <span>{item.time}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* <button className="view-btn">View All →</button> */}
    </section>
  );
};

export default Experience;
