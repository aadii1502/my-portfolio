import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experiences";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Portfolio />
      <Experience />
      <ContactMe />
      <SocialMedia />
    </div>
  );
}

export default App;
