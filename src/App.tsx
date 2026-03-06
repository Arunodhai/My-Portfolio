import SplashCursor from './components/SplashCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative bg-paper min-h-screen selection:bg-ink selection:text-paper">
      <SplashCursor />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
    </div>
  );
}
