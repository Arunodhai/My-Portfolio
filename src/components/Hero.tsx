import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import SplashCursor from './SplashCursor';

export default function Hero() {
  const whatsappUrl = 'https://wa.me/919567641577';

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden section-rule pt-24">
      <SplashCursor fixed={false} className="opacity-70" />
      <div className="z-10 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-16 h-1 bg-ink" />
          <div className="w-3 h-3 border-2 border-ink" />
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">Kerala, India • Available for freelance</p>
        </motion.div>

        <div className="relative">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.84] font-serif tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Arunodhai V
          </motion.h1>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-[8rem] leading-[0.84] font-serif italic tracking-tighter ml-8 md:ml-16 lg:ml-36 mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Web Developer
          </motion.h1>
        </div>

        <motion.div 
          className="mt-16 md:mt-20 max-w-2xl ml-auto mr-0 md:mr-12 lg:mr-0 border-t-2 border-ink pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg md:text-xl leading-relaxed text-ink">
            I design and build high-performance websites and SaaS products for startups, businesses, and modern brands. From landing pages to complex web apps, I focus on speed, clarity, and outcomes that support growth.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-paper border-2 border-ink font-mono text-xs tracking-widest uppercase hover:bg-paper hover:text-ink transition-none hover-target"
            >
              Hire Me
              <ArrowDownRight className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-ink font-mono text-xs tracking-widest uppercase hover:bg-ink hover:text-paper transition-none hover-target"
            >
              WhatsApp
              <ArrowDownRight className="w-4 h-4" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 group hover-target ml-1 font-mono text-xs uppercase tracking-widest border-b-2 border-ink pb-1">
              View Work
              <ArrowDownRight className="w-4 h-4" />
            </a>
          </div>
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
        <div className="w-[2px] h-16 bg-ink/20 relative overflow-hidden">
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
