import "./App.css";
import Skills from "./components/Skills";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";

function App() {
  return (
    <div style={{ margin: 0, padding: 0,backgroundColor: "rgba(24,27,33)"  }}>
      <Navbar /> 
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;