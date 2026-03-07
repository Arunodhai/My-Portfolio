import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-paper relative section-rule">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        <div className="lg:col-span-5 lg:order-2 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto overflow-hidden border-2 border-ink"
          >
            <img 
              src="/me.jpg" 
              alt="Portrait" 
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-5 border-2 border-paper z-20" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-0 text-center border-2 border-ink"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="py-6 border-r-2 border-ink">
              <div className="text-3xl font-serif">5+</div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">Projects Built</div>
            </div>
            <div className="py-6 border-r-2 border-ink">
              <div className="text-3xl font-serif">10+</div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">Tech Used</div>
            </div>
            <div className="py-6">
              <div className="text-3xl font-serif">50k+</div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">Lines of Code</div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7 lg:order-1 flex flex-col justify-center">
          <motion.h2 
            className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter leading-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm <span className="italic text-ink/70">Arunodhai</span>.
          </motion.h2>
          
          <motion.div 
            className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12"
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
            <h3 className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-6">Experience & Education</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start border-b-2 border-ink pb-4">
                <div>
                  <h4 className="font-serif text-2xl">Software Engineer</h4>
                  <p className="text-sm text-muted-foreground mt-1">Building webapps, dashboards, extensions, backend systems, automation pipelines, and data processing workflows.</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">Current</span>
              </div>
              <div className="flex justify-between items-start border-b-2 border-ink pb-4">
                <div>
                  <h4 className="font-serif text-2xl">MCA Graduate</h4>
                  <p className="text-sm text-muted-foreground mt-1">Master of Computer Applications • 3rd Rank Holder</p>
                </div>
              </div>
              <div className="flex justify-between items-start border-b-2 border-ink pb-4">
                <div>
                  <h4 className="font-serif text-2xl">BCA Graduate</h4>
                  <p className="text-sm text-muted-foreground mt-1">Bachelor of Computer Applications • 1st Rank Holder (Gold Medal)</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
