import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contacts";
import Experience from "../sections/Experience";

function Home() {
  return (
    <main className="bg-slate-50">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;
