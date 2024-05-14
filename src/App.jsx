import { useEffect, useState } from 'react'
import './App.scss'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Cursor from './components/Cursor/Cursor'
import Experience from './components/Experience/Experience'
import HeroBanner from './components/HeroBanner/HeroBanner'
import Navbar from './components/Navbar/Navbar'
import Parallax from './components/Parallax/Parallax'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import { motion } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 2 seconds to show the loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timer to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <motion.div
          className="loaderWrapper"
          initial={{ opacity: 1 }}
          animate={{ opacity: loading ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: loading ? "flex" : "none" }}
        >
          <motion.div
            class="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="contentWrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          style={{ display: loading ? "none" : "block" }}
        >
          {/* <Cursor /> */}
          <section id="Home">
            <Navbar />
            <About />
          </section>
          <Projects />
          {/* <section id='About'>
          <Parallax type="about" />
        </section> */}
          <section id="About">
            <Skills />
          </section>
          <section>
            <Experience />
          </section>
          {/* <section id='Projects'>
          <Parallax type="projects" />
        </section> */}

          <section id="Contact">
            <Contact />
          </section>
        </motion.div>
      )}
    </>
  );
}

export default App
