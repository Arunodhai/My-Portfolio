import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: "Dr. Shyla's Clinic Website",
    category: 'Healthcare Website',
    image: '/projects/shylas.png',
    liveUrl: 'https://dr-shyla-s-clinic.vercel.app/',
  },
  {
    id: '02',
    title: 'Stories De Cafe Website',
    category: 'Cafe Website',
    image: '/projects/storiesdecafe.png',
    liveUrl: 'https://stories-de-cafe.vercel.app/',
  },
  {
    id: '03',
    title: 'Nalla Bhoomi Restaurant Website',
    category: 'Restaurant Website',
    image: '/projects/nalla-bhoomi.png',
    liveUrl: 'https://www.nallabhoomi.com/',
  },
  {
    id: '04',
    title: 'QR Code Ordering & Restaurant Management System',
    category: 'SaaS / Web Application',
    image: '/projects/qr-ordering.png',
    liveUrl: 'https://sdc-qr-odering-system.vercel.app/',
  },
  {
    id: '05',
    title: 'Intelligent Swiggy Expense Tracker Dashboard',
    category: 'Data Analytics Dashboard',
    image: '/projects/swiggy.png',
    liveUrl: 'https://swiggyexpensetracker.netlify.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-ink text-paper relative overflow-hidden">
      <div className="absolute -top-56 left-0 w-[38rem] h-[38rem] rounded-full bg-paper/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-56 right-0 w-[44rem] h-[44rem] rounded-full bg-paper/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-18"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-paper/45 mb-5">Featured Projects</p>
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
            Selected <span className="italic text-paper/70">Works</span>
          </h2>
          <p className="mt-4 text-paper/70 text-sm md:text-base max-w-3xl">
            Real projects I have built across healthcare, restaurant websites, SaaS systems, and analytics dashboards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-3xl border border-paper/20 bg-gradient-to-b from-paper/10 to-paper/[0.04] hover:border-paper/45 transition-all duration-500"
            >
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-paper/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 p-5 md:p-6 h-full flex flex-col">
                <div className="relative rounded-2xl overflow-hidden border border-paper/20 bg-ink/60 mb-5 md:mb-6 aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-b from-paper/0 via-paper/0 to-ink/35 pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-3 md:p-4 group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-start justify-between gap-4 mt-auto">
                  <div>
                    <p className="font-mono text-[11px] md:text-xs tracking-[0.18em] uppercase text-paper/55 mb-2">
                      {project.id} • {project.category}
                    </p>
                    <h3 className="text-lg md:text-2xl font-sans font-semibold tracking-tight leading-tight max-w-2xl">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] md:text-xs font-mono uppercase tracking-[0.16em] text-paper/85 border border-paper/35 rounded-full px-3 py-2 hover:border-paper/70 hover:text-paper hover:bg-paper/10 transition-all hover-target"
                  >
                    Live
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="mt-5 h-px bg-gradient-to-r from-paper/35 to-transparent" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
