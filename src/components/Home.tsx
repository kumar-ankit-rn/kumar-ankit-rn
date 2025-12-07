import React from "react";
import myPhoto from "../assets/ankit.png";
import "./Home.css"; // 👈 import CSS for animation
import TypeAndDelete from "./TypeAndDelete";

function Home() {
  return (
    <div style={{backgroundColor: "rgba(24,27,33)"}}>
    <div className="home">

      <div className="home-left">
        <h1>
          Hello, I’m <span className="highlight">Ankit <span className="wave">👋</span></span>
            {/* <TypeAndDelete /> */}
        </h1>
        <h2 style={{fontSize:26,color:'white'}}>
           <TypeAndDelete />
          {/* Technical Lead – Mobile Applications */}
          </h2>
        <p style={{color:'white'}}>
I am a passionate React Native developer and team lead, focused on building scalable and user-friendly mobile applications.
With expertise in Android and iOS development using React Native, I deliver clean, functional, and creative solutions.
I lead teams to follow best practices, write maintainable code, and adopt modern tools for faster development.
My goal is to create high-performance apps that provide seamless experiences across platforms.
I thrive in guiding teams, solving complex problems, and turning ideas into reality through mobile technology.
        </p>
        <a href="#contact" className="btn">Let’s Connect</a>
      </div>

      <div className="home-right">
        <img src={myPhoto} alt="Ankit Kumar" className="profile-img" />
      </div>
    </div>
    </div>
  );
}

export default Home;
