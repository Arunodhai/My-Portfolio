import { motion } from 'motion/react';
import { useState } from 'react';

const projects = [
  {
    id: '01',
    title: 'Stories De Café',
    category: 'Restaurant Website',
    tech: 'Next.js, Tailwind CSS',
    features: 'Mobile-first design • Fast loading • SEO optimized • Modern UI',
    image: 'https://picsum.photos/seed/cafe/800/600?grayscale',
  },
  {
    id: '02',
    title: 'QR Menu System',
    category: 'Web Application',
    tech: 'React, Node.js',
    features: 'Digital menu • Real-time kitchen dashboard • Order tracking • Admin analytics',
    image: 'https://picsum.photos/seed/menu/800/600?grayscale',
  },
  {
    id: '03',
    title: 'Swiggy Expense Tracker',
    category: 'Chrome Extension',
    tech: 'JavaScript, Chrome APIs',
    features: 'Spending dashboard • Order analytics • Food item insights • Visualization charts',
    image: 'https://picsum.photos/seed/dashboard/800/600?grayscale',
  },
  {
    id: '04',
    title: 'Restaurant Template',
    category: 'Website Template',
    tech: 'Next.js, Tailwind CSS',
    features: 'Menu display • Contact & location • Photo gallery • SEO optimized',
    image: 'https://picsum.photos/seed/template/800/600?grayscale',
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-ink text-paper relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
            Selected <span className="italic text-paper/70">Works</span>
          </h2>
        </div>

        <div className="flex flex-col border-t border-paper/20 relative">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative border-b border-paper/20 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between hover-target cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Background hover effect */}
              <div className="absolute inset-0 bg-paper/5 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out -z-10" />

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 z-10 w-full md:w-auto">
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="font-mono text-sm text-paper/50">{project.id}</span>
                  <h3 className="text-3xl md:text-5xl font-sans font-medium tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                    {project.title}
                  </h3>
                </div>
                <div className="ml-14 md:ml-0 flex flex-col gap-1 md:hidden group-hover:opacity-100 opacity-70 transition-opacity">
                  <span className="font-mono text-xs text-paper/50">{project.tech}</span>
                  <span className="text-sm font-light text-paper/80">{project.features}</span>
                </div>
              </div>
              
              <div className="hidden md:flex flex-col items-end gap-2 z-10 text-right">
                <span className="font-mono text-xs uppercase tracking-widest opacity-60">{project.category}</span>
                <span className="font-mono text-xs text-paper/50">{project.tech}</span>
                <span className="text-sm font-light text-paper/80 max-w-xs">{project.features}</span>
              </div>

              {/* Floating Image Reveal on Desktop */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] pointer-events-none hidden lg:block z-20 overflow-hidden rounded-lg"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 0.8,
                  rotate: hoveredIndex === index ? 0 : -5
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
