import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import BackgroundVideo from './components/BackgroundVideo'

function App() {
  return (
    <div className="relative">
      <BackgroundVideo />
      <CustomCursor />
      <div className="relative z-10 min-h-screen">
        <Navigation />
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default App
