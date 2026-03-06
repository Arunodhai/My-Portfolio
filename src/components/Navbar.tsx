import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-paper/80 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <a href="#" className="text-2xl font-serif font-bold tracking-tighter hover-target">
          A<span className="text-ink/50">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Work', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item === 'Work' ? 'projects' : item.toLowerCase()}`}
              className="font-mono text-xs tracking-widest uppercase hover:text-ink/50 transition-colors hover-target relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-ink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button className="md:hidden flex flex-col gap-1.5 hover-target p-2">
          <span className="w-6 h-[1px] bg-ink block" />
          <span className="w-4 h-[1px] bg-ink block ml-auto" />
        </button>
      </div>
    </motion.nav>
  );
}
