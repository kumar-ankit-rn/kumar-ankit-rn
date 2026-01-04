// import React from "react";
// import "./Projects.css";
// import qh from "../assets/qh.png";
// import fp from "../assets/fp.webp";

// const projects = [
//   {
//     title: "Quick Hub: Automate Marketing",
//     desc: "An all-in-one platform to streamline, automate, and optimize your marketing workflows—helping you save time, boost engagement, and drive faster growth with minimal effort.",
//     img: qh,
//     link:'https://play.google.com/store/search?q=Quick%20hub&c=apps'
//   },
//   {
//     title: "Flitpay: Crypto Trading App",
//     desc: "A secure and user-friendly crypto trading app that enables fast buying, selling, and tracking of digital assets with real-time market insights and seamless transactions.",
//     img: fp,
//     link:'https://play.google.com/store/apps/details?id=com.core.app.flitpay'
//   },
// //   {
// //     title: "Space Music Academy",
// //     desc: "A Next.js project of a Music Academy website using TypeScript, Tailwind and Aceternity UI.",
// //     img: "/images/music.png",
// //   },
// ];

// const Projects = () => {
//   return (
//     <section className="projects-section">
//       <h2 className="projects-title">Projects</h2>

//       <div className="projects-grid">
//         {projects.map((item, index) => (
//           <div className="project-card" key={index}>
//             <h3>{item.title}</h3>
//             <p>{item.desc}</p>

//             <div className="project-image">
//               <img src={item.img} alt={item.title} />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* <button className="show-btn">
//         Show all Projects <span>↗</span>
//       </button> */}
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import "./Projects.css";
import qh from "../assets/qh.png";
import fp from "../assets/fp.webp";

const projects = [
  {
    title: "Quick Hub: Automate Marketing",
    desc: "An all-in-one platform to streamline, automate, and optimize your marketing workflows—helping you save time, boost engagement, and drive faster growth with minimal effort.",
    img: qh,
    link: "https://play.google.com/store/search?q=Quick%20hub&c=apps",
  },
  {
    title: "Flitpay: Crypto Trading App",
    desc: "A secure and user-friendly crypto trading app that enables fast buying, selling, and tracking of digital assets with real-time market insights and seamless transactions.",
    img: fp,
    link: "https://play.google.com/store/apps/details?id=com.core.app.flitpay",
  },
];

const Projects = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((item, index) => (
          <div
            className="project-card clickable"
            key={index}
            onClick={() => openLink(item.link)}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <div className="project-image">
              <img src={item.img} alt={item.title} />
            </div>

            <span className="source-link">View on Play Store →</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

