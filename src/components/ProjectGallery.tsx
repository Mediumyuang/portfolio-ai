import { motion } from 'framer-motion';
import { Project } from '../types';
import CardSwap, { Card } from './CardSwap';
import ProjectCardContent from './ProjectCardContent';

interface ProjectGalleryProps {
  projects: Project[];
}

const ProjectGallery = ({ projects }: ProjectGalleryProps) => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {/* Animated Title with gradient */}
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
            >
              <span className="bg-gradient-to-r from-luxury-white via-luxury-white/90 to-luxury-white/75 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>

            {/* Animated Subtitle */}
            <motion.p 
              className="text-base md:text-lg lg:text-xl max-w-xl leading-relaxed mb-6"
              variants={{
                hidden: { opacity: 0, y: 20, x: -15 },
                visible: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
            >
              <span className="bg-gradient-to-r from-luxury-white/70 via-luxury-white/60 to-luxury-white/50 bg-clip-text text-transparent">
                Creating AI-generated content with ComfyUI
              </span>
            </motion.p>

            {/* Animated Description with word-by-word reveal */}
            <motion.p 
              className="text-sm md:text-base text-luxury-white/50 max-w-xl leading-relaxed"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="inline-block"
              >
                I specialize in creating AI-generated content, including videos and images, using ComfyUI workflow automation.
              </motion.span>
              {' '}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="inline-block"
              >
                My work focuses on leveraging advanced AI models and custom workflows to produce high-quality visual content.
              </motion.span>
              {' '}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="inline-block"
              >
                Each project showcases innovative approaches to AI content generation, combining technical expertise with creative vision.
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Right Side - Card Swap Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            style={{ height: '700px', position: 'relative', width: '100%', minHeight: '700px' }}
          >
            <CardSwap
              cardDistance={70}
              verticalDistance={80}
              delay={2500}
              pauseOnHover={true}
              width={600}
              height={500}
              easing="elastic"
            >
              {projects.map((project) => (
                <Card key={project.id}>
                  <ProjectCardContent project={project} />
                </Card>
              ))}
            </CardSwap>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
