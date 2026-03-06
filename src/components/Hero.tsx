import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background subtle elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-ink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-ink/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="z-10 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-[1px] bg-ink/30" />
          <p className="font-mono text-sm tracking-widest uppercase text-ink/60">Kerala, India • Available for freelance</p>
        </motion.div>

        <div className="relative">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-serif tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Arunodhai V
          </motion.h1>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-[7rem] leading-[0.85] font-sans font-bold tracking-tighter ml-12 md:ml-24 lg:ml-48 text-outline hover:text-ink transition-colors duration-500 mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Web Developer
          </motion.h1>
          
          {/* Decorative circle */}
          <motion.div 
            className="absolute top-1/2 right-1/4 w-32 h-32 md:w-48 md:h-48 border border-ink/20 rounded-full -z-10 mix-blend-multiply opacity-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          />
        </div>

        <motion.div 
          className="mt-16 md:mt-24 max-w-xl ml-auto mr-0 md:mr-12 lg:mr-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg md:text-xl leading-relaxed font-light text-ink/80">
            I build modern, fast, and visually appealing websites for cafés, restaurants, and small businesses. Specializing in <span className="font-serif italic text-ink">restaurant websites</span> and data-driven web apps.
          </p>
          
          <a href="#projects" className="inline-flex items-center gap-2 mt-8 group hover-target">
            <span className="font-mono text-sm tracking-widest uppercase border-b border-ink pb-1 group-hover:border-ink/50 group-hover:text-ink/50 transition-colors">View Work</span>
            <ArrowDownRight className="w-4 h-4 group-hover:text-ink/50 transition-colors group-hover:translate-x-1 group-hover:translate-y-1 duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase rotate-90 origin-left translate-x-2">Scroll</span>
        <div className="w-[1px] h-16 bg-ink/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-ink"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
