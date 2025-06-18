
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BlogPostHeaderProps {
  title: string;
  excerpt: string;
  category: string;
}

const BlogPostHeader = ({ title, excerpt, category }: BlogPostHeaderProps) => {
  return (
    <div className="mb-8">
      <Link to="/blog" className="inline-flex items-center text-portfolio-accent hover:text-portfolio-accent/80 mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>
      
      <div className="mb-6">
        <Badge className="bg-portfolio-accent hover:bg-portfolio-accent/90 mb-4">
          {category}
        </Badge>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{excerpt}</p>
      </div>
    </div>
  );
};

export default BlogPostHeader;
