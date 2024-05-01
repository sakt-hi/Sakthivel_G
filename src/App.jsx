import './App.scss'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import HeroBanner from './components/HeroBanner/HeroBanner'
import Navbar from './components/Navbar/Navbar'
import Parallax from './components/Parallax/Parallax'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <>
      <div>
        <section id='Home'>
          <Navbar />
          <About />
        </section>
        <section id='About'>
          <Parallax type="about" />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Experience />
        </section>
        <section id='Projects'>
          <Parallax type="projects" />
        </section>
        <Projects />
        <section id='Contact'>Contact</section>
      </div>
    </>
  )
}

export default App
