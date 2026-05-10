import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contacts";

function Home({ theme, onToggleTheme }) {
    return (
        <>
            <Navbar theme={theme} onToggleTheme={onToggleTheme} />

            <main className="bg-slate-50 transition-colors duration-300 dark:bg-[#070b12]">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </>
    )
}

export default Home;
