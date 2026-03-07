import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const whatsappUrl = 'https://wa.me/919567641577';
  const phoneNumber = '+91 9567641577';
  const emailAddress = 'arunodhai007@gmail.com';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
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

        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mt-16 grid grid-cols-1 gap-4 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <input type="hidden" name="access_key" value="0176d6db-0659-4d27-a0bf-d5ef1cbe21c4" />
          <input type="hidden" name="subject" value="New Portfolio Inquiry" />
          <input type="hidden" name="to_email" value={emailAddress} />
          <input type="checkbox" name="botcheck" className="hidden" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-paper/5 border border-paper/20 rounded-xl px-4 py-3 text-paper placeholder:text-paper/45 focus:outline-none focus:border-paper/50"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-paper/5 border border-paper/20 rounded-xl px-4 py-3 text-paper placeholder:text-paper/45 focus:outline-none focus:border-paper/50"
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            required
            rows={5}
            className="w-full bg-paper/5 border border-paper/20 rounded-xl px-4 py-3 text-paper placeholder:text-paper/45 focus:outline-none focus:border-paper/50 resize-none"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-paper text-ink font-mono text-xs tracking-widest uppercase hover:bg-paper/90 transition-colors disabled:opacity-60 hover-target"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
            <ArrowRight className="w-4 h-4" />
          </button>

          {status === 'success' && (
            <p className="text-sm text-paper/80">Message sent successfully. I will get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-paper/70">Something went wrong. Please try WhatsApp directly.</p>
          )}
        </motion.form>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-paper/10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="font-mono text-xs opacity-50 uppercase tracking-widest">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
        <div className="flex gap-6">
          <a href={`mailto:${emailAddress}`} className="font-mono text-xs opacity-50 hover:opacity-100 hover:text-paper uppercase tracking-widest transition-colors hover-target">
            Email
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="font-mono text-xs opacity-50 hover:opacity-100 hover:text-paper uppercase tracking-widest transition-colors hover-target">
            WhatsApp
          </a>
          <a href="tel:+919567641577" className="font-mono text-xs opacity-50 hover:opacity-100 hover:text-paper uppercase tracking-widest transition-colors hover-target">
            {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
}
