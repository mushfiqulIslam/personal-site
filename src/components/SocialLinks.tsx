
import { Github, Linkedin, Twitter } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a 
        href="https://www.linkedin.com/in/mushfiqul-islam-chowdhury/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-portfolio-accent transition-colors"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      <a 
        href="https://github.com/mushfiqulIslam" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-portfolio-accent transition-colors"
        aria-label="GitHub Profile"
      >
        <Github className="h-5 w-5" />
      </a>
      <a 
        href="https://twitter.com/_mushfiqulIslam" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-portfolio-accent transition-colors"
        aria-label="Twitter Profile"
      >
        <Twitter className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialLinks;
