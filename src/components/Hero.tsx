import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import SplashCursor from './SplashCursor';

export default function Hero() {
  const whatsappUrl = 'https://wa.me/919567641577';
  const emailAddress = 'arunodhai007@gmail.com';

  const contactIcons = [
    { href: `mailto:${emailAddress}`, label: 'Email', icon: Mail },
    { href: 'tel:+919567641577', label: 'Phone and WhatsApp', icon: Phone },
    { href: 'https://www.linkedin.com/in/arunodhai-v/', label: 'LinkedIn', icon: Linkedin, external: true },
    { href: 'https://github.com/Arunodhai', label: 'GitHub', icon: Github, external: true },
  ];

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
            Websites & SaaS
          </motion.h1>
        </div>

        <motion.div 
          className="mt-16 md:mt-20 max-w-2xl ml-auto mr-0 md:mr-12 lg:mr-0 border-t-2 border-ink pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg md:text-xl leading-relaxed text-ink">
            I design and build fast, modern websites and web applications that help businesses grow online.
          </p>
          
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-paper border-2 border-ink font-mono text-xs tracking-widest uppercase hover:bg-paper hover:text-ink transition-none hover-target"
            >
              Start a Project
              <ArrowDownRight className="w-4 h-4" />
            </a>
            <div className="inline-flex items-center gap-2">
              {contactIcons.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    aria-label={item.label}
                    title={item.label}
                    className="inline-flex items-center justify-center w-11 h-11 border-2 border-ink hover:bg-ink hover:text-paper transition-none hover-target"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 group hover-target ml-1 font-mono text-xs uppercase tracking-widest border-b-2 border-ink pb-1">
              Chat on WhatsApp
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
