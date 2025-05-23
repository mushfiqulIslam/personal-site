
import { ExternalLink, Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string[];
  technologies?: string[];
  liveLink?: string;
  codeLink?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies = [],
  liveLink,
  codeLink,
}: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="mb-4">
          <Code className="h-10 w-10 text-portfolio-accent mb-2" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        </div>
        
        <div className="space-y-2 mb-4 text-gray-700 dark:text-gray-300">
          {description.map((item, index) => (
            <p key={index} className="text-sm">• {item}</p>
          ))}
        </div>
        
        {technologies && technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center space-x-4 mt-4">
          {liveLink && (
            <a 
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-portfolio-accent hover:text-portfolio-accent/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Live Demo
            </a>
          )}
          {codeLink && (
            <a 
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-portfolio-accent hover:text-portfolio-accent/80 transition-colors"
            >
              <Code className="h-4 w-4 mr-1" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
