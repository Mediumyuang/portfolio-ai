import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ASCIIText from './AsciiText';
import GlareButton from './GlareButton';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-start relative overflow-hidden pt-20">
      {/* ASCII Text at the top */}
      <div className="w-full h-64 md:h-80 lg:h-96 relative z-0 mt-8">
        <ASCIIText 
          text="AI SERVICES"
          asciiFontSize={6}
          textFontSize={150}
          textColor="#6b2525"
          planeBaseHeight={6}
          enableWaves={true}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-luxury-white/60 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Portfolio of my work in artificial intelligence and machine learning
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <GlareButton href="#projects" variant="primary">
              View Projects
            </GlareButton>
            <GlareButton href="#contact" variant="secondary">
              Contact
            </GlareButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16"
          >
            <a href="#projects" className="inline-flex flex-col items-center gap-2 group">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-5 h-5 text-luxury-white/40 group-hover:text-luxury-white/60 transition-colors" />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
