
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
    title: 'Optimizing OpenAI API Calls',
    excerpt: 'Best practices and techniques for making efficient API calls to OpenAI while managing costs and improving response times.',
    date: '2025-04-28',
    category: 'APIs',
    tags: ['API', 'OpenAI', 'Python', 'Optimization'],
    image: '/placeholder.svg',
    readTime: '6 min read',
    slug: 'optimizing-openai-api-calls'
  },
  {
    id: 3,
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
    id: 4,
    title: 'The Rise of Explainable AI',
    excerpt: 'Exploring the importance of transparency and interpretability in modern AI systems and how to implement XAI principles.',
    date: '2025-03-22',
    category: 'Machine Learning',
    tags: ['AI', 'XAI', 'Ethics', 'Machine Learning'],
    image: '/placeholder.svg',
    readTime: '7 min read',
    slug: 'rise-of-explainable-ai'
  },
  {
    id: 5,
    title: 'Study in Finland: From University Application to Moving Abroad',
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

              {/* Subscribe card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Rss className="h-5 w-5 text-portfolio-accent mr-2" />
                  <h3 className="text-xl font-semibold">Subscribe</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Get new posts delivered to your inbox.
                </p>
                <form onSubmit={handleSubscribe}>
                  <Input
                    placeholder="your@email.com"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-3"
                  />
                  <Button type="submit" className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90">
                    Subscribe
                  </Button>
                </form>
                <div className="mt-4 flex items-center">
                  <Rss className="h-4 w-4 text-orange-500 mr-2" />
                  <a 
                    href="#" 
                    className="text-orange-500 hover:underline text-sm"
                  >
                    Subscribe via RSS
                  </a>
                </div>
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
      
      {/* Featured writing ideas section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Writing Topics</h2>
          
          <Tabs defaultValue="tutorials" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="insights">Research Insights</TabsTrigger>
              <TabsTrigger value="behind-scenes">Behind the Scenes</TabsTrigger>
              <TabsTrigger value="trends">Tech Trends</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tutorials" className="mt-6">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Tutorial Articles</h3>
                <p className="mb-4">Step-by-step guides to help you implement advanced techniques:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Deploying ML Models with ZenML</li>
                  <li>Building a Custom RAG System with OpenAI</li>
                  <li>Implementing CI/CD for ML Applications</li>
                  <li>Performance Optimization for Django Applications</li>
                  <li>Creating Custom MLOps Workflows</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="insights" className="mt-6">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Research & Project Insights</h3>
                <p className="mb-4">Findings and analysis from my projects and research:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Explainable AI Techniques for Computer Vision</li>
                  <li>Benchmarking Modern LLM Approaches</li>
                  <li>Optimizing Model Performance with Limited Data</li>
                  <li>Case Studies of Real-World ML Applications</li>
                  <li>Comparing Open Source VS Proprietary ML Tools</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="behind-scenes" className="mt-6">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Behind the Scenes</h3>
                <p className="mb-4">Detailed looks into my development process:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Rebuilding My Portfolio Website</li>
                  <li>Setting Up My ML Development Environment</li>
                  <li>Containerizing Applications for Production</li>
                  <li>How I Structure Large ML Projects</li>
                  <li>Balancing Performance and Clarity in Code</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="trends" className="mt-6">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Tech Trend Analysis</h3>
                <p className="mb-4">Reflections on current and emerging technology trends:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>The Future of MLOps in Enterprise</li>
                  <li>Responsible AI Development Practices</li>
                  <li>Serverless Computing for ML Workflows</li>
                  <li>Microservices vs. Monoliths in Modern Applications</li>
                  <li>When to Use Specialized ML Hardware</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Blog;
