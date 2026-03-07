import { motion } from 'motion/react';

export default function Testimonials() {
  const testimonials = [
    {
      title: 'Stories De Cafe',
      quote:
        '“The website perfectly captures the atmosphere of our cafe. It looks clean, modern, and makes it easy for customers to explore our menu and find us online. Since launching the website, more customers have been discovering our cafe online.”',
      author: 'Stories De Cafe',
    },
    {
      title: 'Nalla Bhoomi Restaurant',
      quote:
        '“The website design is simple, elegant, and represents our restaurant very well. It helps customers easily see our menu and learn more about us. The website has helped improve our online visibility and bring in more customers.”',
      author: 'Nalla Bhoomi Restaurant',
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-paper section-rule">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif tracking-tighter mb-14">Testimonials</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.title}
              className="border-2 border-ink p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {item.title}
              </p>
              <p className="font-serif text-2xl leading-tight italic">{item.quote}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-6">
                - {item.author}
              </p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
