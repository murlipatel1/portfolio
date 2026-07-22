import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { VisitTracker } from "./components/VisitTracker";
import { Hero } from "./components/sections/Hero";
import { Highlights } from "./components/sections/Highlights";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <VisitTracker />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
