import { Navbar } from "./components/Navbar";
import { About, Experience, Skills } from "./components/Sections";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <About />
        <Projects />
        <Experience />
        <Skills />
      </main>
    </div>
  );
}
