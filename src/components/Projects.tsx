import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Stories De Cafe',
    category: 'Brand Website',
    tech: 'Next.js, Tailwind CSS',
    highlights: ['Mobile-first', 'Fast loading', 'SEO structure'],
    image: 'https://picsum.photos/seed/cafe/1200/900?grayscale',
  },
  {
    id: '02',
    title: 'QR Menu System',
    category: 'SaaS Workflow',
    tech: 'React, Node.js',
    highlights: ['Live order updates', 'Kitchen dashboard', 'Ops analytics'],
    image: 'https://picsum.photos/seed/menu/1200/900?grayscale',
  },
  {
    id: '03',
    title: 'Expense Insights Extension',
    category: 'Chrome Extension',
    tech: 'JavaScript, Chrome APIs',
    highlights: ['Spending trends', 'Category split', 'Visual reporting'],
    image: 'https://picsum.photos/seed/dashboard/1200/900?grayscale',
  },
  {
    id: '04',
    title: 'Restaurant Web Template',
    category: 'Template System',
    tech: 'Next.js, Tailwind CSS',
    highlights: ['Reusable blocks', 'Menu modules', 'Launch-ready SEO'],
    image: 'https://picsum.photos/seed/template/1200/900?grayscale',
  },
];

const cardSpans = ['md:col-span-7', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7'];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-ink text-paper relative overflow-hidden">
      <div className="absolute -top-40 -left-20 w-[35rem] h-[35rem] rounded-full bg-paper/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-52 -right-20 w-[40rem] h-[40rem] rounded-full bg-paper/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
            Selected <span className="italic text-paper/70">Works</span>
          </h2>
          <p className="mt-4 text-paper/70 text-sm md:text-base max-w-2xl">
            A curated mix of websites, SaaS experiences, and product interfaces built for speed, clarity, and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`${cardSpans[index]} group relative min-h-[24rem] md:min-h-[26rem] rounded-2xl overflow-hidden border border-paper/20 hover:border-paper/40 transition-colors duration-300`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-ink/15 via-ink/40 to-ink/95" />

              <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] md:text-xs tracking-widest uppercase text-paper/65">
                    {project.id} • {project.category}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[11px] md:text-xs font-mono uppercase tracking-widest text-paper/80 border border-paper/30 rounded-full px-3 py-1">
                    Explore
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div>
                  <p className="font-mono text-[11px] md:text-xs text-paper/60 mb-3">{project.tech}</p>
                  <h3 className="text-2xl md:text-4xl font-sans font-semibold tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.highlights.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] md:text-xs font-mono uppercase tracking-wider text-paper/80 bg-paper/10 border border-paper/20 rounded-full px-3 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
