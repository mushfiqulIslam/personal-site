
import { FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaperCardProps {
  title: string;
  abstract: string;
  status?: string;
  link?: string;
  arxivLink?: string;
}

const PaperCard = ({ title, abstract, status, link, arxivLink }: PaperCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          {status && (
            <div className="mb-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">{status}</span>
            </div>
          )}
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {abstract.length > 250 ? `${abstract.substring(0, 250)}...` : abstract}
          </p>
        </div>
        
        <div className="mt-auto pt-2 flex items-center gap-6">
          <Button
            asChild
            variant="ghost" 
            className="flex items-center text-portfolio-accent hover:text-portfolio-accent/80 p-0"
          >
            <a href={link} className="flex items-center">
              Read more <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          {arxivLink && (
            <a
              href={arxivLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-portfolio-accent hover:text-portfolio-accent/80"
            >
              arXiv
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaperCard;
