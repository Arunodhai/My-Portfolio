import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-ink text-paper relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-paper/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.span 
          className="font-mono text-sm tracking-widest uppercase text-paper/50 mb-6 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.span>
        
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-9xl font-serif tracking-tighter mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Have a <span className="italic text-paper/70">Project in Mind?</span>
        </motion.h2>
        
        <motion.p 
          className="max-w-xl text-lg md:text-xl text-paper/70 font-light mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I partner with founders and teams to build websites and web apps that are fast, clear, and ready to grow.
        </motion.p>

        <motion.a 
          href="mailto:hello@example.com"
          className="group relative inline-flex items-center justify-center w-48 h-48 rounded-full border border-paper/30 hover:border-paper bg-transparent hover:bg-paper/5 transition-all duration-500 hover-target"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-sm tracking-widest uppercase group-hover:text-paper transition-colors text-center">Start a<br/>Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:text-paper transition-all duration-300 mt-2" />
          </div>
          
          {/* Spinning text ring could go here for extra wow factor */}
        </motion.a>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-paper/10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="font-mono text-xs opacity-50 uppercase tracking-widest">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
        <div className="flex gap-6">
          {['Email', 'WhatsApp', 'LinkedIn', 'GitHub'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="font-mono text-xs opacity-50 hover:opacity-100 hover:text-paper uppercase tracking-widest transition-colors hover-target"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
