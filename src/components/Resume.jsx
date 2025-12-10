// import React, { useState } from "react";
// import myResume from "../assets/Ankit_Kumar.pdf";

// const Resume = () => {
//   const [hover, setHover] = useState(false);

//   const downloadResume = () => {
//     const link = document.createElement("a");
//     link.href = myResume; // ✅ Imported PDF from assets
//     link.download = "Ankit_Kumar.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section style={styles.section}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>My Resume</h2>
//         <p style={styles.text}>
//           Download my resume to explore my experience, skills, and professional
//           journey.
//         </p>

//         <button
//           onClick={downloadResume}
//           style={{
//             ...styles.button,
//             ...(hover ? styles.buttonHover : {}),
//           }}
//           onMouseEnter={() => setHover(true)}
//           onMouseLeave={() => setHover(false)}
//         >
//           ⬇ Download Resume
//         </button>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   section: {
//     backgroundColor: 'rgba(24, 27, 33)',
//     minHeight: "10vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "20px",
//   },
//   card: {
//     background: "rgba(255, 255, 255, 0.05)",
//     backdropFilter: "blur(10px)",
//     borderRadius: "20px",
//     padding: "50px 40px",
//     textAlign: "center",
//     maxWidth: "520px",
//     width: "100%",
//     border: "1px solid rgba(255,255,255,0.1)",
//     boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
//   },
//   title: {
//     fontSize: "36px",
//     fontWeight: "800",
//     color: "#cdd8ff",
//     marginBottom: "16px",
//     letterSpacing: "0.5px",
//   },
//   text: {
//     fontSize: "16px",
//     color: "#cbd5f5",
//     marginBottom: "32px",
//     lineHeight: "1.7",
//   },
//   button: {
//     background:
//       "linear-gradient(135deg, rgb(213,183,117), rgb(160,130,80))",
//     color: '#cdd8ff',
//     border: "none",
//     padding: "15px 36px",
//     borderRadius: "14px",
//     fontSize: "16px",
//     fontWeight: "700",
//     cursor: "pointer",
//     transition: "all 0.25s ease-in-out",
//     boxShadow: "0 10px 30px rgba(213,183,117,0.45)",
//   },
//   buttonHover: {
//     transform: "translateY(-3px) scale(1.02)",
//     boxShadow: "0 18px 45px rgba(213,183,117,0.65)",
//   },
// };

// export default Resume;

import React, { useState } from "react";
import myResume from "../assets/Ankit_Kumar.pdf";

const Resume = () => {
  const [hoverDownload, setHoverDownload] = useState(false);
  const [hoverView, setHoverView] = useState(false);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = myResume;
    link.download = "Ankit_Kumar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const viewResume = () => {
    window.open(myResume, "_blank"); // ✅ Open PDF in new tab
  };

  return (
    <section style={styles.section}>
      <div style={styles.card}>
        <h2 style={styles.title}>My Resume</h2>
        <p style={styles.text}>
          Download my resume to explore my experience, skills, and professional
          journey.
        </p>

        <div style={styles.buttonRow}>
          {/* View Button */}
          <button
            onClick={viewResume}
            style={{
              ...styles.button,
              ...styles.viewButton,
              ...(hoverView ? styles.buttonHover : {}),
            }}
            onMouseEnter={() => setHoverView(true)}
            onMouseLeave={() => setHoverView(false)}
          >
            👁 View Resume
          </button>

          {/* Download Button */}
          <button
            onClick={downloadResume}
            style={{
              ...styles.button,
              ...(hoverDownload ? styles.buttonHover : {}),
            }}
            onMouseEnter={() => setHoverDownload(true)}
            onMouseLeave={() => setHoverDownload(false)}
          >
            ⬇ Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "rgba(24, 27, 33)",
    minHeight: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "50px 40px",
    textAlign: "center",
    maxWidth: "520px",
    width: "100%",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
  },
  title: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#cdd8ff",
    marginBottom: "16px",
    letterSpacing: "0.5px",
  },
  text: {
    fontSize: "16px",
    color: "#cbd5f5",
    marginBottom: "32px",
    lineHeight: "1.7",
  },
  buttonRow: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    background:
      "linear-gradient(135deg, rgb(213,183,117), rgb(160,130,80))",
    color: "white",
    border: "none",
    padding: "15px 28px",
    borderRadius: "14px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.25s ease-in-out",
    boxShadow: "0 10px 30px rgba(213,183,117,0.45)",
  },
  viewButton: {
    background:
      "linear-gradient(135deg, white, black)",
  },
  buttonHover: {
    transform: "translateY(-3px) scale(1.02)",
    boxShadow: "0 18px 45px rgba(213,183,117,0.65)",
  },
};

export default Resume;
