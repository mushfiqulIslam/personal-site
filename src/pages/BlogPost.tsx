
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogPostHeader from '@/components/BlogPostHeader';
import BlogPostMeta from '@/components/BlogPostMeta';
import BlogPostContent from '@/components/BlogPostContent';

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

  const parseDate = (dateString: string): string => {
    const cleanDate = dateString.replace(/['"]/g, '').trim();
    const parsedDate = new Date(cleanDate);
    
    if (isNaN(parsedDate.getTime())) {
      return cleanDate;
    }
    
    return parsedDate.toISOString().split('T')[0];
  };

  const parseFrontmatter = (frontmatterContent: string) => {
    const frontmatter: any = {};
    const lines = frontmatterContent.split(/\r?\n/).map(line => line.trim()).filter(line => line);
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const colonIndex = line.indexOf(':');
      
      if (colonIndex <= 0) continue;
      
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      if (key === 'tags' && value.startsWith('[') && value.includes(']')) {
        const arrayMatch = value.match(/\[(.*?)\]/);
        if (arrayMatch) {
          const arrayContent = arrayMatch[1];
          frontmatter[key] = arrayContent
            .split(',')
            .map(item => item.trim().replace(/^["']|["']$/g, ''))
            .filter(item => item.length > 0);
        }
      } else {
        frontmatter[key] = value.replace(/^["']|["']$/g, '');
      }
    }
    
    return frontmatter;
  };

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;

      const module = await import(`../content/blog/${slug}.md?raw`);
      const content = module.default;
      
      const frontmatterRegex = /^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]+([\s\S]*)$/;
      const match = content.match(frontmatterRegex);
      
      if (match) {
        const [, frontmatterContent, markdownContent] = match;
        const frontmatter = parseFrontmatter(frontmatterContent);

        const postData = {
          title: frontmatter.title || 'Untitled',
          excerpt: frontmatter.excerpt || frontmatter.description || '',
          date: parseDate(frontmatter.date || new Date().toISOString()),
          category: frontmatter.category || frontmatter.categories || 'Uncategorized',
          tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : (frontmatter.tags ? [frontmatter.tags] : []),
          readTime: frontmatter.readTime || frontmatter.read_time || frontmatter['read-time'] || '5 min read',
          content: markdownContent.trim()
        };
        
        setPost(postData);
      } else {
        // Fallback: split by --- manually
        const parts = content.split(/^---\s*$/m);
        if (parts.length >= 3) {
          const frontmatterContent = parts[1].trim();
          const markdownContent = parts.slice(2).join('---').trim();
          const frontmatter = parseFrontmatter(frontmatterContent);

          const postData = {
            title: frontmatter.title || 'Untitled',
            excerpt: frontmatter.excerpt || frontmatter.description || '',
            date: parseDate(frontmatter.date || new Date().toISOString()),
            category: frontmatter.category || frontmatter.categories || 'Uncategorized',
            tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : (frontmatter.tags ? [frontmatter.tags] : []),
            readTime: frontmatter.readTime || frontmatter.read_time || frontmatter['read-time'] || '5 min read',
            content: markdownContent
          };
          
          setPost(postData);
        }
      }
    };

    loadPost();
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-portfolio-accent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <BlogPostHeader 
          title={post.title}
          excerpt={post.excerpt}
          category={post.category}
        />
        
        <BlogPostMeta 
          date={post.date}
          readTime={post.readTime}
          tags={post.tags}
        />

        <div className="mt-8">
          <BlogPostContent content={post.content} />
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
