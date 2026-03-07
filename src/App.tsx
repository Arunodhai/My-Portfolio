import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative bg-paper min-h-screen selection:bg-ink selection:text-paper">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[100] bg-ink text-paper px-4 py-2 text-xs uppercase tracking-widest border-2 border-ink -translate-y-16 focus-visible:translate-y-0 transition-transform duration-100"
      >
        Skip to content
      </a>
      <div className="relative z-10">
        <Navbar />
        <main id="main-content">
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
