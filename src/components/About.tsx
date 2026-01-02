import { motion } from 'framer-motion';
import { Code, Brain, Zap, Target } from 'lucide-react';

const About = () => {
  const expertise = [
    { icon: Brain, title: 'AI Content Creation', description: 'Generating images and videos using advanced AI models' },
    { icon: Code, title: 'ComfyUI Workflows', description: 'Custom workflow automation and optimization' },
    { icon: Zap, title: 'Influencer Marketing', description: 'Boosting reach, views, and conversions' },
    { icon: Target, title: 'Content Strategy', description: 'From concept to viral content' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-3 tracking-tight">
            <span className="text-luxury-white">About</span>
          </h2>
          <p className="text-sm md:text-base text-luxury-white/50 max-w-xl mx-auto">
            Specializing in AI-generated content creation and influencer marketing
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="luxury-card p-5 text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 border border-luxury-red/30 mb-4 group-hover:border-luxury-red transition-colors">
                  <Icon className="w-6 h-6 text-luxury-red-light" />
                </div>
                <h3 className="text-base font-medium text-luxury-white mb-2">{item.title}</h3>
                <p className="text-xs text-luxury-white/50 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="luxury-card p-6 md:p-8 max-w-3xl mx-auto text-center"
        >
          <p className="text-sm md:text-base text-luxury-white/70 leading-relaxed">
            I create AI-generated content including images and videos using ComfyUI workflows.
            My work focuses on helping brands and influencers increase reach, views, and conversions
            through strategic AI content creation and campaign management.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
