
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import NotFound from './NotFound';

interface BlogPostData {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  content: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const parseDate = (dateString: string): string => {
    // Remove quotes and trim whitespace
    const cleanDate = dateString.replace(/['"]/g, '').trim();
    
    // Try to parse the date
    const parsedDate = new Date(cleanDate);
    
    // Check if the date is valid
    if (isNaN(parsedDate.getTime())) {
      console.warn(`Invalid date format: ${cleanDate}`);
      return cleanDate; // Return original string if parsing fails
    }
    
    return parsedDate.toISOString().split('T')[0]; // Return YYYY-MM-DD format
  };

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        // Try to import the markdown file
        const module = await import(`../content/blog/${slug}.md?raw`);
        const content = module.default;
        
        // Parse frontmatter (simple implementation)
        const lines = content.split('\n');
        const frontmatterEnd = lines.findIndex((line, index) => index > 0 && line === '---');
        
        if (frontmatterEnd === -1) {
          throw new Error('Invalid frontmatter');
        }

        const frontmatterLines = lines.slice(1, frontmatterEnd);
        const markdownContent = lines.slice(frontmatterEnd + 1).join('\n');

        const frontmatter: any = {};
        frontmatterLines.forEach(line => {
          const [key, ...valueParts] = line.split(':');
          console.log(key);
          console.log(valueParts);
          if (key && valueParts.length > 0) {
            const value = valueParts.join(':').trim();
            if (key === 'tags') {
              frontmatter[key] = value.replace(/[\[\]]/g, '').split(',').map((tag: string) => tag.trim());
            } else {
              frontmatter[key] = value.replace(/['"]/g, '');
            }
          }
        });

        setPost({
          title: frontmatter.title,
          excerpt: frontmatter.excerpt,
          date: parseDate(frontmatter.date || new Date().toISOString()),
          category: frontmatter.category,
          tags: frontmatter.tags || [],
          readTime: frontmatter.readTime,
          content: markdownContent
        });
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-portfolio-accent mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return <NotFound />;
  }


  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return dateString; // Return original string if invalid
    }
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formattedDate = formatDate(post.date);

  return (
    <div className="min-h-screen pt-20">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-portfolio-accent hover:text-portfolio-accent/80 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <Badge className="bg-portfolio-accent hover:bg-portfolio-accent/90 mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{post.excerpt}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formattedDate}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="flex items-center">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({...props}) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
              h2: ({...props}) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
              h3: ({...props}) => <h3 className="text-xl font-medium mt-4 mb-2" {...props} />,
              p: ({...props}) => <p className="mb-4 leading-relaxed" {...props} />,
              ul: ({...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
              ol: ({...props}) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
              code: ({...props}) => <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm" {...props} />,
              pre: ({...props}) => <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
              blockquote: ({...props}) => <blockquote className="border-l-4 border-portfolio-accent pl-4 italic mb-4" {...props} />,
              a: ({...props}) => <a className="text-portfolio-accent hover:underline" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link to="/blog">
            <Button variant="outline" className="inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Posts
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
