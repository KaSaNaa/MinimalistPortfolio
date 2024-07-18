import LandingSection from "./sections/Landing";
import "./App.css";
import Navbar from "./sections/Navbar";
import ProjectsSection from "./sections/Projects";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <LandingSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}

export default App;
