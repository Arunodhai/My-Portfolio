import { motion } from 'motion/react';

const services = [
  {
    id: '01',
    title: 'Business Websites',
    description: 'High-converting websites for brands, startups, agencies, and local businesses with clear messaging and polished design.'
  },
  {
    id: '02',
    title: 'SaaS Applications',
    description: 'End-to-end SaaS interfaces including onboarding, product dashboards, account flows, and admin experiences.'
  },
  {
    id: '03',
    title: 'Dashboards & Data Visualization',
    description: 'Interactive reporting views that transform complex product and business data into actionable insights.'
  },
  {
    id: '04',
    title: 'Custom Web Systems',
    description: 'Tailored web workflows such as booking platforms, internal tools, portals, and automation-oriented systems.'
  }
];

const processSteps = [
  "Discover goals and users",
  "Design clear user flows",
  "Build and iterate fast",
  "Optimize speed and SEO",
  "Launch with confidence"
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-paper text-ink border-t border-ink/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">
            My <span className="italic text-ink/70">Specialization</span>
          </h2>
          <p className="text-xl font-light text-ink/80 max-w-2xl">
            I help teams build websites and SaaS products across industries, with a strong focus on performance, usability, and measurable business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-baseline gap-4 mb-6 border-b border-ink/10 pb-4">
                <span className="font-mono text-sm text-ink/50">{service.id}</span>
                <h3 className="text-2xl md:text-3xl font-sans font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
              </div>
              <p className="text-ink/70 font-light leading-relaxed md:ml-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-serif mb-8">My Process</h3>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="flex-1 relative group">
                <div className="font-mono text-xs text-ink/40 mb-2">0{index + 1}</div>
                <div className="h-[1px] w-full bg-ink/10 mb-4 relative">
                  <div className="absolute top-0 left-0 h-full bg-ink w-0 group-hover:w-full transition-all duration-500" />
                </div>
                <p className="text-sm font-medium">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
