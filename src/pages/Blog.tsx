
import { useState } from 'react';
import { Tag, Rss } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BlogPostCard from '@/components/BlogPostCard';
import { useToast } from '@/components/ui/use-toast';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'Deploying ML Models with ZenML',
    excerpt: 'A step-by-step guide to deploy machine learning models efficiently using ZenML pipelines for production environments.',
    date: '2025-05-15',
    category: 'MLOps',
    tags: ['Machine Learning', 'MLOps', 'Python', 'ZenML'],
    image: '/placeholder.svg',
    readTime: '8 min read',
    slug: 'deploying-ml-models-zenml'
  },
  {
    id: 2,
    title: 'Building Scalable Microservices with Golang',
    excerpt: 'How to architect and implement highly scalable microservices using Golang, with focus on performance and maintainability.',
    date: '2025-04-10',
    category: 'Golang',
    tags: ['Golang', 'Microservices', 'Backend', 'Architecture'],
    image: '/placeholder.svg',
    readTime: '10 min read',
    slug: 'scalable-microservices-golang'
  },
  {
    id: 3,
    title: 'Study in Finland: From University Application to Accepting Study place',
    excerpt: 'A step-by-step guide for international students on applying to Finnish universities, handling residence permits, and preparing for life in Finland.',
    date: '2025-07-13',
    category: 'Study Abroad',
    tags: ["Finland", "University Application", "Student Life", "Moving Abroad"],
    image: '/placeholder.svg',
    readTime: '12 min read',
    slug: 'study-in-finland'
  }
];

// All available categories and tags from blog posts
const allCategories = [...new Set(blogPosts.map(post => post.category))];
const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  // Filter posts based on selected category, tags, and search query
  const filteredPosts = blogPosts.filter(post => {
    // Category filter
    if (selectedCategory && post.category !== selectedCategory) {
      return false;
    }

    // Tags filter
    if (selectedTags.length > 0 && !selectedTags.some(tag => post.tags.includes(tag))) {
      return false;
    }

    // Search query filter
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    return true;
  });

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedTags([]);
    setSearchQuery('');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a newsletter service
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to my blog updates.",
    });
    setEmail('');
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Thoughts, tutorials, and insights on Machine Learning, MLOps, software engineering,
            and technology trends from my experiences and research.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog sidebar with filters */}
            <div className="lg:w-1/4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
                <h3 className="text-xl font-semibold mb-4">Search</h3>
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="mb-4"
                />

                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <div className="space-y-2 mb-6">
                  {allCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`block w-full text-left px-3 py-2 rounded ${
                        selectedCategory === category 
                          ? 'bg-portfolio-accent text-white' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {allTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedTags.includes(tag) 
                          ? 'bg-portfolio-accent hover:bg-portfolio-accent/90' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => handleTagToggle(tag)}
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                {(selectedCategory || selectedTags.length > 0 || searchQuery) && (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleClearFilters}
                  >
                    Clear All Filters
                  </Button>
                )}
              </div>
            </div>
            
            {/* Blog posts */}
            <div className="lg:w-3/4">
              {filteredPosts.length === 0 ? (
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-medium mb-2">No posts found</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
