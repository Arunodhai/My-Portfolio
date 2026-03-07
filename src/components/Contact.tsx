import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone, Linkedin, Github } from 'lucide-react';
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
    <section
      id="contact"
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-ink text-paper relative overflow-hidden section-rule border-paper"
      style={{
        backgroundImage: 'radial-gradient(circle at top center, rgba(255,255,255,0.14), rgba(255,255,255,0.02) 45%, transparent 70%)',
      }}
    >

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.span 
          className="font-mono text-sm tracking-widest uppercase text-paper/80 mb-6 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.span>
        
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-9xl font-serif tracking-tighter mb-12 text-paper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Have a <span className="italic text-paper/70">Project in Mind?</span>
        </motion.h2>
        
        <motion.p 
          className="max-w-2xl text-lg md:text-xl text-paper/90 mb-16 leading-relaxed"
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
          className="group relative inline-flex items-center justify-center w-56 h-16 border-2 border-paper hover:border-paper bg-transparent hover:bg-paper hover:text-ink transition-none hover-target"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm tracking-widest uppercase text-center">Start a Project</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </motion.a>

        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl mt-16 grid grid-cols-1 gap-4 text-left border-2 border-paper p-6 md:p-8 bg-ink"
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
              className="w-full bg-transparent border-b-2 border-paper px-0 py-3 text-paper placeholder:text-paper/80 italic focus:outline-none focus:border-b-[4px]"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-transparent border-b-2 border-paper px-0 py-3 text-paper placeholder:text-paper/80 italic focus:outline-none focus:border-b-[4px]"
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            required
            rows={5}
            className="w-full bg-transparent border-b-2 border-paper px-0 py-3 text-paper placeholder:text-paper/80 italic focus:outline-none focus:border-b-[4px] resize-none"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-paper bg-paper text-ink font-mono text-xs tracking-widest uppercase hover:bg-ink hover:text-paper transition-none disabled:opacity-60 hover-target"
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

        <div className="w-full max-w-3xl mt-10 border-t-2 border-paper pt-6 text-left">
          <p className="font-mono text-xs uppercase tracking-widest text-paper/70 mb-4">Contact Details</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <a href={`mailto:${emailAddress}`} className="inline-flex items-center gap-3 border-b border-paper/20 pb-2 hover:text-paper hover:border-paper transition-none">
              <Mail size={18} strokeWidth={1.5} />
              <span>Email: {emailAddress}</span>
            </a>
            <a href="tel:+919567641577" className="inline-flex items-center gap-3 border-b border-paper/20 pb-2 hover:text-paper hover:border-paper transition-none">
              <Phone size={18} strokeWidth={1.5} />
              <span>Phone / WhatsApp: {phoneNumber}</span>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border-b border-paper/20 pb-2 hover:text-paper hover:border-paper transition-none">
              <Linkedin size={18} strokeWidth={1.5} />
              <span>LinkedIn: View Profile</span>
            </a>
            <a href="https://github.com/Arunodhai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border-b border-paper/20 pb-2 hover:text-paper hover:border-paper transition-none">
              <Github size={18} strokeWidth={1.5} />
              <span>GitHub: github.com/Arunodhai</span>
            </a>
          </div>
        </div>

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
