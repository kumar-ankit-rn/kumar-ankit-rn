// import React from "react";
// import myPhoto from "../assets/ankit.png";
// import mobile from "../assets/mobile.png";
// import "./Home.css"; // 👈 import CSS for animation
// import TypeAndDelete from "./TypeAndDelete";

// function Home() {
//   return (
//     <div style={{backgroundColor: "rgba(24,27,33)"}}>
//     <div className="home">

//       <div className="home-left">
        // <h1>
        //   Hello, I’m <span className="highlight">Ankit <span className="wave">👋</span></span>
        //     {/* <TypeAndDelete /> */}
        // </h1>
        // <h2 style={{fontSize:26,color:'white'}}>
        //    <TypeAndDelete />
        //   {/* Technical Lead – Mobile Applications */}
        //   </h2>
//         <p style={{color:'white'}}>
// I am a passionate React Native developer and team lead, focused on building scalable and user-friendly mobile applications.
// With expertise in Android and iOS development using React Native, I deliver clean, functional, and creative solutions.
// I lead teams to follow best practices, write maintainable code, and adopt modern tools for faster development.
// My goal is to create high-performance apps that provide seamless experiences across platforms.
// I thrive in guiding teams, solving complex problems, and turning ideas into reality through mobile technology.
//         </p>
//         <a href="#contact" className="btn">Let’s Connect</a>
//       </div>

//       <div className="home-right">
//         <img src={myPhoto} alt="Ankit Kumar" className="profile-img" />
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Home;

// import React from "react";
// import myPhoto from "../assets/ankit.png";

// const Home = () => {
//   return (
//     <section style={styles.container}>
//       {/* Left Content */}
//       <div style={styles.left}>
//         <h1 style={styles.title}>
//           Hello, I’m <span style={styles.highlight}>Ankit</span> 👋
//         </h1>

//         <h2 style={styles.subTitle}>
//           React N<span style={styles.cursor}>_</span>
//         </h2>

//         <p style={styles.description}>
//           I am a passionate React Native developer and team lead, focused on
//           building scalable and user-friendly mobile applications. With
//           expertise in Android and iOS development using React Native, I deliver
//           clean, functional, and creative solutions. I lead teams to follow best
//           practices, write maintainable code, and adopt modern tools for faster
//           development. My goal is to create high-performance apps that provide
//           seamless experiences across platforms. I thrive in guiding teams,
//           solving complex problems, and turning ideas into reality through
//           mobile technology.
//         </p>

//         <button style={styles.button}>Let’s Connect</button>
//       </div>

//       {/* Right Image */}
//       <div style={styles.right}>
//         <div style={styles.imageWrapper}>
//           <img
//             src={myPhoto}
//             alt="Profile"
//             style={styles.image}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// const styles = {
//   container: {
//     minHeight: "70vh",
//     backgroundColor: "#0e1117",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "40px 10%",
//     fontFamily: "sans-serif",
//     color: "#ffffff",
//     // flex-wrap: wrap;
//   },
//   left: {
//     maxWidth: "600px",
//   },
//   title: {
//     fontSize: "48px",
//     fontWeight: "bold",
//     marginBottom: "10px",
//   },
  // highlight: {
  //   color: "#d4af6a",
  // },
//   subTitle: {
//     fontSize: "36px",
//     fontWeight: "bold",
//     marginBottom: "20px",
//   },
//   cursor: {
//     color: "#d4af6a",
//     animation: "blink 1s infinite",
//   },
//   description: {
//     fontSize: "16px",
//     lineHeight: "1.8",
//     color: "#d1d5db",
//     marginBottom: "30px",
//   },
//   button: {
//     backgroundColor: "#d4af6a",
//     color: "#000",
//     border: "none",
//     padding: "14px 28px",
//     fontSize: "16px",
//     borderRadius: "10px",
//     cursor: "pointer",
//   },
//   right: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   imageWrapper: {
//     width: "360px",
//     height: "500px",
//     borderRadius: "50% / 40%",
//     border: "10px solid #d8d9e3",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     overflow: "hidden",
//   },
//   image: {
//     width: "90%",
//     height: "90%",
//     objectFit: "cover",
//   },
// };

// export default Home;

import React from "react";
import myPhoto from "../assets/ankit.png";
import TypeAndDelete from "./TypeAndDelete";

export default function Home() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        body {
          background: rgba(24, 27, 33);
          color: white;
        }

        .hero {
          min-height: 10vh;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 40px 8%;
          gap: 40px;
          flex-wrap: wrap;
        }
        .highlight {
          color: #d4af6a;
        }
        .left {
          max-width: 600px;
          flex: 1;
        }

        .hello {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
        }

        .im {
          font-size: 64px;
          font-weight: 800;
          margin-top: 10px;
        }

        .name {
          font-size: 72px;
          font-weight: 800;
          color: #d4af6a;
          margin-top: 5px;
        }

        .wave {
          font-size: 48px;
          margin: 10px 0;
          animation: wave 1.5s infinite;
          display: inline-block;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(20deg); }
        }

        .role {
          font-size: 42px;
          font-weight: 700;
          margin-top: 20px;
          white-space: nowrap;
        }

        .cursor {
          color: #d4af6a;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }

        .desc {
          margin-top: 30px;
          font-size: 18px;
          line-height: 1.8;
          color: #cbd5f5;
          word-break: normal;
          overflow-wrap: break-word;
        }

        .right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .avatar {
          width: 320px;
          height: 450px;
          border-radius: 50% / 40%;
          background: white;
          border: 10px solid #dcdde6;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            align-items: flex-start;
          }

          .hello, .im {
            font-size: 48px;
          }

          .name {
            font-size: 56px;
          }

          .role {
            white-space: normal;
            font-size: 32px;
          }

          .avatar {
            width: 100%;
            height: 100%;
          }
        }
      `}</style>

      <section className="hero">
        {/* Left Content */}
        <div className="left">
               <h1>
          Hello, I’m <span className="highlight">Ankit <span className="wave">👋</span></span>
            {/* <TypeAndDelete /> */}
        </h1>
        <h2 style={{fontSize:26,color:'white'}}>
           <TypeAndDelete />
          {/* Technical Lead – Mobile Applications */}
          </h2>
          {/* <h1 className="hello">Hello,</h1>
          <h1 className="im">I’m</h1>
          <h1 className="name">Ankit</h1>

          <div className="wave">👋</div>

          <h2 className="role">
            React N<span className="cursor">_</span>
          </h2> */}

          <p className="desc">
            I am a passionate React Native developer and team lead, focused on
            building scalable and user-friendly mobile applications. With
            expertise in Android and iOS development using React Native, I
            deliver clean, functional, and creative solutions. I lead teams to
            follow best practices, write maintainable code, and adopt modern
            tools for faster development.
          </p>
        </div>

        {/* Right Content */}
        <div className="right">
          <div className="avatar">
            <img
              src={myPhoto}
              alt="profile"
            />
          </div>
        </div>
      </section>
    </>
  );
}
