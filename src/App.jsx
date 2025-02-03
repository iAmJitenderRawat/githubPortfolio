import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Stats } from "./components/Stats";
import "./App.css";

export function App() {
  return (
    <div>
      <Navbar />
      <div className="sections">
        <Home />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
