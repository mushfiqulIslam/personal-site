
import { Calendar, Clock, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BlogPostMetaProps {
  date: string;
  readTime: string;
  tags: string[];
}

const BlogPostMeta = ({ date, readTime, tags }: BlogPostMetaProps) => {
  const formatDate = (dateString: string): string => {
    const dateObj = new Date(dateString);
    
    // Check if the date is valid
    if (isNaN(dateObj.getTime())) {
      return dateString; // Return original string if invalid
    }
    
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formattedDate = formatDate(date);

  return (
    <>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          {formattedDate}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2" />
          {readTime}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} variant="outline" className="flex items-center">
            <Tag className="h-3 w-3 mr-1" />
            {tag}
          </Badge>
        ))}
      </div>
    </>
  );
};

export default BlogPostMeta;
