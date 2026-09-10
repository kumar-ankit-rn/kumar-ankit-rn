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
import Blog from "./components/Blog";
import MetricsStrip from "./components/MetricsStrip";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import CommandPalette from "./components/CommandPalette";
import LiveChatWidget from "./components/LiveChatWidget";

function App() {
  return (
    <div className="app-container">
      <Navbar /> 
      <section id="home"><Home /></section>
      <section id="metrics"><MetricsStrip /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      {/* <section id="certifications"><Certifications /></section> */}
      <section id="projects"><Projects /></section>
      <section id="blog"><Blog /></section>
      {/* <section id="testimonials"><Testimonials /></section> */}
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
      <CommandPalette />
      <LiveChatWidget />
    </div>
  );
}

export default App;