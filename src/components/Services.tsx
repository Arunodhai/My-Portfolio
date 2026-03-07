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
  "Discovery - Understanding your business needs",
  "Design - Creating clean and modern UI",
  "Development - Building fast and scalable systems",
  "Launch - Deploying and optimizing the product"
];

export default function Services() {
  const tech = {
    frontend: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript'],
    backend: ['Node.js', 'REST APIs'],
    tools: ['Git', 'Vercel', 'Supabase', 'Figma'],
  };

  const focus = [
    'Fast websites',
    'Clean modern design',
    'Mobile-first development',
    'SEO-friendly structure',
    'Business-focused solutions',
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-paper text-ink section-rule">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tighter mb-6 leading-none">
            My <span className="italic text-ink/70">Specialization</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            I help teams build websites and SaaS products across industries, with a strong focus on performance, usability, and measurable business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="group border-2 border-ink p-8 transition-none hover:bg-ink hover:text-paper"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-baseline gap-4 mb-6 border-b-2 border-ink pb-4 group-hover:border-paper">
                <span className="font-mono text-sm text-muted-foreground group-hover:text-paper/70">{service.id}</span>
                <h3 className="text-2xl md:text-3xl font-serif tracking-tight">{service.title}</h3>
              </div>
              <p className="leading-relaxed md:ml-10 text-muted-foreground group-hover:text-paper">
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
          <h3 className="text-3xl font-serif mb-8">My Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex-1 relative group">
                <div className="font-mono text-xs text-muted-foreground mb-2">0{index + 1}</div>
                <div className="h-[2px] w-full bg-border-light mb-4 relative">
                  <div className="absolute top-0 left-0 h-full bg-ink w-0 group-hover:w-full transition-all duration-100" />
                </div>
                <p className="text-sm">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-serif mb-6">Technologies</h3>
            <div className="space-y-5">
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2">Frontend</p>
                <p>{tech.frontend.join(' • ')}</p>
              </div>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2">Backend</p>
                <p>{tech.backend.join(' • ')}</p>
              </div>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-2">Tools</p>
                <p>{tech.tools.join(' • ')}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-serif mb-6">What I Focus On</h3>
            <div className="space-y-3">
              {focus.map((item) => (
                <p key={item} className="border-b-2 border-ink pb-3">✔ {item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
