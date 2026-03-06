import { motion } from 'motion/react';

export default function About() {
  const skills = {
    Frontend: ["Next.js", "React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    Backend: ["Node.js", "REST APIs"],
    Tools: ["Git", "Vercel", "Supabase", "Chrome Extension APIs"],
    Other: ["Data visualization", "SaaS product design", "UI/UX design"]
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-paper relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        <div className="lg:col-span-5 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-ink/10 mix-blend-overlay z-10" />
            <img 
              src="https://picsum.photos/seed/developer/800/1000?grayscale" 
              alt="Portrait" 
              className="w-full h-full object-cover filter contrast-125"
              referrerPolicy="no-referrer"
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-paper/50 z-20 rounded-xl" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <div className="text-3xl font-serif font-bold">5+</div>
              <div className="text-xs font-mono uppercase tracking-widest opacity-60 mt-1">Projects Built</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold">10+</div>
              <div className="text-xs font-mono uppercase tracking-widest opacity-60 mt-1">Tech Used</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold">50k+</div>
              <div className="text-xs font-mono uppercase tracking-widest opacity-60 mt-1">Lines of Code</div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm <span className="italic text-ink/70">Arunodhai</span>.
          </motion.h2>
          
          <motion.div 
            className="space-y-6 text-lg text-ink/80 font-light leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a web developer based in Kerala, India, focused on building websites that are clean, fast, and built for real business goals.
            </p>
            <p>
              My core work includes business websites, SaaS products, dashboards, and data-driven web apps. I prioritize clear user experience, performance, and practical workflows teams can adopt quickly.
            </p>
            <p>
              Beyond client work, I explore product ideas, experiment with SaaS concepts, and refine interfaces that balance aesthetics with usability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="font-mono text-sm tracking-widest uppercase text-ink/60 mb-6">Experience & Education</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start border-b border-ink/10 pb-4">
                <div>
                  <h4 className="font-medium">Software Engineer</h4>
                  <p className="text-sm text-ink/60 mt-1">Building backend systems, automation pipelines, and data processing workflows.</p>
                </div>
                <span className="font-mono text-xs opacity-60">Current</span>
              </div>
              <div className="flex justify-between items-start border-b border-ink/10 pb-4">
                <div>
                  <h4 className="font-medium">MCA Graduate</h4>
                  <p className="text-sm text-ink/60 mt-1">Master of Computer Applications</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-mono text-sm tracking-widest uppercase text-ink/60 mb-6">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {[...skills.Frontend, ...skills.Backend, ...skills.Tools].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 border border-ink/10 rounded-full text-sm font-medium hover:bg-ink hover:text-paper transition-colors duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
