import Navbar from './Components/Navbar'
import Home from './Components/Sections/Home'
import About from './Components/Sections/About'
import Skills from './Components/Sections/Skills'
import Projects from './Components/Sections/Projects'
import Contact from './Components/Sections/Contact'
import Footer from './Components/ui/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App