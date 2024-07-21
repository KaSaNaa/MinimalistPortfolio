import LandingSection from "./sections/Landing";
import "./App.css";
import Navbar from "./sections/Navbar";
import ProjectsSection from "./sections/Projects";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section id="landingSection">
        <LandingSection />
      </section>
      <section id="projectsSection">
        <ProjectsSection />
      </section>
      <section id="footerSection">
        <Footer />
      </section>
    </>
  );
}

export default App;
