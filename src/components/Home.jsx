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
          color: #cdd8ff;
          margin-top: 20px;
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
          // width: 320px;
                    width: 80%;
          height: 450px;
                    // height: 550px;

          border-radius: 100%;
          background: white;
          border: 10px solid #cdd8ff;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: stretch;
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
        <div className="left">
               <h1>
          Hello, I’m <span className="highlight">Ankit <span className="wave">👋</span></span>
        </h1>
        <h2 style={{fontSize:26,color:'#cdd8ff'}}>
           <TypeAndDelete />
          </h2>
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
