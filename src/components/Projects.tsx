import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'QR Code Ordering & Restaurant Management System',
    category: 'SaaS / Web Application',
    description: 'QR-based restaurant ordering platform with management dashboard for real-time order handling.',
    image: '/projects/qr-ordering.png',
    liveUrl: 'https://sdc-qr-odering-system.vercel.app/',
    stack: ['Next.js', 'Node.js', 'Supabase'],
  },
  {
    id: '02',
    title: 'Intelligent Swiggy Expense Tracker Dashboard',
    category: 'Data Analytics Dashboard',
    description: 'Interactive dashboard visualizing order history, spending trends, and ordering behavior patterns.',
    image: '/projects/swiggy.png',
    liveUrl: 'https://swiggyexpensetracker.netlify.app/',
    stack: ['JavaScript', 'Charts', 'Chrome APIs'],
  },
  {
    id: '03',
    title: 'Stories De Cafe Website',
    category: 'Business Website',
    description: 'Modern cafe website showcasing menu, ambience, and brand identity with mobile-first design.',
    image: '/projects/storiesdecafe.png',
    liveUrl: 'https://stories-de-cafe.vercel.app/',
    stack: ['Next.js', 'Tailwind CSS'],
  },
  {
    id: '04',
    title: 'Nalla Bhoomi Restaurant Website',
    category: 'Restaurant Website',
    description: 'Restaurant website highlighting menu offerings, ambience, and location for local customer discovery.',
    image: '/projects/nalla-bhoomi.png',
    liveUrl: 'https://www.nallabhoomi.com/',
    stack: ['Next.js', 'Tailwind CSS'],
  },
  {
    id: '05',
    title: "Dr. Shyla's Clinic Website",
    category: 'Medical Website',
    description: 'Professional clinic website covering services, doctor profile, and clear patient contact flow.',
    image: '/projects/shylas.png',
    liveUrl: 'https://dr-shyla-s-clinic.vercel.app/',
    stack: ['Next.js', 'Tailwind CSS'],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-muted text-ink relative overflow-hidden section-rule"
      style={{
        backgroundImage:
          'linear-gradient(#00000008 1px, transparent 1px), linear-gradient(90deg, #00000008 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground mb-5">Featured Projects</p>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-none">
            Selected <span className="italic text-muted-foreground">Works</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-3xl">
            Real projects I have built across healthcare, restaurant websites, SaaS systems, and analytics dashboards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative overflow-hidden border-2 border-ink bg-paper hover:bg-ink hover:text-paper transition-colors duration-100"
            >
              <div className="relative z-10 p-5 md:p-6 h-full flex flex-col">
                <div className="relative overflow-hidden border-2 border-ink mb-5 md:mb-6 aspect-[16/10] group-hover:border-paper bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-start justify-between gap-4 mt-auto">
                  <div>
                    <p className="font-mono text-[11px] md:text-xs tracking-[0.18em] uppercase text-muted-foreground mb-2 group-hover:text-paper/70">
                      {project.id} • {project.category}
                    </p>
                    <h3 className="text-lg md:text-2xl font-serif tracking-tight leading-tight max-w-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-paper/80 max-w-xl">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="font-mono text-[10px] uppercase tracking-widest border border-ink px-2 py-1 group-hover:border-paper">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] md:text-xs font-mono uppercase tracking-[0.16em] border-2 border-ink px-3 py-2 group-hover:border-paper group-hover:text-paper hover:bg-ink hover:text-paper transition-none hover-target"
                  >
                    Live
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="mt-5 h-[2px] bg-ink/35 group-hover:bg-paper/35" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
