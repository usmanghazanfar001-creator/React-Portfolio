import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollState from './hooks/useScrollState';

const SECTION_IDS = ['home', 'about', 'skills', 'services', 'projects', 'experience', 'contact'];

function App() {
  const { progress, scrolled, active } = useScrollState(SECTION_IDS);

  return (
    <>
      <ScrollProgress progress={progress} />
      <Navbar scrolled={scrolled} active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop visible={scrolled} />
    </>
  );
}

export default App;
