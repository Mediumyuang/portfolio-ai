import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useRef, useState } from 'react';

const Contact = () => {
  const contacts = [
    { icon: Mail, label: 'Email', href: 'mailto:lazarevnikita260@gmail.com', text: 'lazarevnikita260@gmail.com' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/jolikowes', text: '@jolikowes' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikita-lazariev-777b79347', text: 'nikita-lazariev' },
    { icon: MessageCircle, label: 'Telegram', href: 'https://t.me/yrolla', text: '@yrolla' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-3 tracking-tight">
            <span className="text-luxury-white">Contact</span>
          </h2>
          <p className="text-sm md:text-base text-luxury-white/50 max-w-xl mx-auto">
            Get in touch to discuss projects
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            const cardRef = useRef<HTMLAnchorElement>(null);
            const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
            
            const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
              if (!cardRef.current) return;
              const rect = cardRef.current.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              setMousePos({ x, y });
            };
            
            return (
              <motion.a
                key={contact.label}
                ref={cardRef}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleMouseMove}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className="luxury-card p-5 text-center group relative overflow-hidden"
                style={{
                  '--glare-x': `${mousePos.x}%`,
                  '--glare-y': `${mousePos.y}%`,
                } as React.CSSProperties}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle 200px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 30%, transparent 60%)`,
                  }}
                />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 border border-luxury-red/30 text-luxury-red-light mb-4 group-hover:border-luxury-red group-hover:bg-luxury-red/10 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-medium text-luxury-white mb-1">{contact.label}</h3>
                  <p className="text-xs text-luxury-white/50">{contact.text}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
