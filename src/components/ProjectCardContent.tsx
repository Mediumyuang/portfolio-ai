import { Linkedin, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import GlareIconButton from './GlareIconButton';
import GlareLink from './GlareLink';

interface ProjectCardContentProps {
  project: Project;
}

const ProjectCardContent = ({ project }: ProjectCardContentProps) => {
  return (
    <div className="h-full flex flex-col overflow-hidden bg-gradient-to-b from-black/60 to-black/40">
      {/* Image */}
      <div className="relative overflow-hidden bg-luxury-black-soft flex-shrink-0">
        <div className="aspect-[16/9] relative w-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/800x450/1a1a1a/6b2525?text=Image+Not+Found';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/20 to-transparent" />
          
          {/* Actions */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {project.link && (
              <GlareIconButton
                href={project.link}
                className="p-2.5 bg-luxury-red/90 hover:bg-luxury-red backdrop-blur-sm text-white transition-all shadow-lg shadow-luxury-red/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </GlareIconButton>
            )}
            {project.github && (
              <GlareIconButton
                href={project.github}
                className="p-2.5 bg-black/40 backdrop-blur-md border border-luxury-red/40 hover:border-luxury-red text-luxury-white transition-all shadow-lg"
                aria-label="Telegram"
              >
                <MessageCircle className="w-4 h-4" />
              </GlareIconButton>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col min-h-0">
        {/* Date - выровнено по левому краю */}
        <div className="flex items-center gap-2 text-xs text-luxury-white/50 mb-4 h-5">
          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="leading-tight">{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
        </div>

        {/* Title - фиксированная высота, выровнено по левому краю */}
        <h3 className="text-xl font-semibold text-luxury-white mb-3 line-clamp-2 min-h-[3rem] leading-tight">
          {project.title}
        </h3>

        {/* Description - фиксированная высота, выровнено по левому краю */}
        <p className="text-sm text-luxury-white/60 mb-4 leading-relaxed line-clamp-3 flex-1 min-h-[4.5rem]">
          {project.description}
        </p>

        {/* Tags - выровнены по левому краю, фиксированная минимальная высота */}
        <div className="flex flex-wrap gap-1.5 mb-4 min-h-[2rem] items-start">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium border border-luxury-red/20 bg-luxury-red/5 text-luxury-white/70 rounded-sm backdrop-blur-sm whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link - выровнено по левому краю, всегда внизу */}
        {project.link && (
          <GlareLink
            href={project.link}
            className="inline-flex items-center gap-2 text-sm font-medium text-luxury-red-light hover:text-luxury-red hover:gap-3 transition-all mt-auto h-6"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </GlareLink>
        )}
      </div>
    </div>
  );
};

export default ProjectCardContent;

