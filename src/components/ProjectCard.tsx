import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import GlareIconButton from './GlareIconButton';
import GlareLink from './GlareLink';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="group luxury-card overflow-hidden h-full"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-luxury-black-soft">
        <div className="aspect-[4/3] relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Actions */}
          <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.link && (
              <GlareIconButton
                href={project.link}
                className="p-2 bg-luxury-red hover:bg-luxury-red-light text-white transition-colors"
                aria-label="Open project"
              >
                <ExternalLink className="w-4 h-4" />
              </GlareIconButton>
            )}
            {project.github && (
              <GlareIconButton
                href={project.github}
                className="p-2 bg-black/30 backdrop-blur-sm border border-luxury-red/30 hover:border-luxury-red text-luxury-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </GlareIconButton>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-luxury-white/40 mb-3">
          <Calendar className="w-3 h-3" />
          <span>{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
        </div>

        <h3 className="text-lg font-medium text-luxury-white mb-2 group-hover:text-luxury-red-light transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-luxury-white/50 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs border border-luxury-white/10 text-luxury-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <GlareLink
            href={project.link}
            className="inline-flex items-center gap-1.5 text-sm text-luxury-red-light hover:gap-2 transition-all"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </GlareLink>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
