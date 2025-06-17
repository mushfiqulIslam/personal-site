
---
title: "Behind the Scenes: Rebuilding My Portfolio"
excerpt: "A detailed look at the technical decisions and design process behind my latest portfolio website update."
date: "2025-03-05"
category: "Web Development"
tags: ["React", "Portfolio", "Design", "Development"]
readTime: "5 min read"
---

# Behind the Scenes: Rebuilding My Portfolio

After years of using a basic HTML/CSS portfolio, I decided it was time for a complete rebuild. This post walks through the technical decisions, design choices, and development process behind my new portfolio website.

## Why Rebuild?

### The Old Portfolio Problems
- **Static content**: Difficult to update and maintain
- **Limited functionality**: No blog, no dynamic content
- **Poor mobile experience**: Not responsive enough
- **Outdated tech stack**: Plain HTML/CSS with jQuery

### Goals for the New Version
- **Modern tech stack**: React, TypeScript, Tailwind CSS
- **Dynamic content management**: Easy to update projects and blog posts
- **Excellent mobile experience**: Mobile-first design
- **Performance optimized**: Fast loading and good SEO
- **Professional appearance**: Clean, modern design

## Technology Stack Decisions

### Frontend Framework: React
```typescript
// Why React?
// - Component-based architecture for maintainability
// - Rich ecosystem and community support
// - Excellent developer experience
// - Easy deployment options

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
};
```

### Styling: Tailwind CSS
```css
/* Why Tailwind CSS? */
/* - Utility-first approach for rapid development */
/* - Consistent design system */
/* - Excellent responsive design utilities */
/* - Small bundle size with purging */

.hero-section {
  @apply min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900;
}

.card {
  @apply bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow;
}
```

### State Management: React Query
```typescript
// For server state management and caching
import { useQuery } from '@tanstack/react-query';

const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

const Portfolio = () => {
  const { data: projects, isLoading, error } = useProjects();
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects?.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
```

## Design Process

### 1. Research and Inspiration
I spent time analyzing successful developer portfolios, focusing on:
- **Clean, minimalist designs** that let content shine
- **Strong typography** for readability
- **Effective use of white space**
- **Clear navigation** and information hierarchy

### 2. Design System Creation
```typescript
// Color palette definition
const colors = {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  },
  accent: '#f59e0b',
  gray: {
    50: '#f9fafb',
    900: '#111827',
  }
};

// Typography scale
const typography = {
  h1: 'text-4xl md:text-5xl font-bold',
  h2: 'text-3xl md:text-4xl font-semibold',
  body: 'text-base leading-relaxed',
  caption: 'text-sm text-gray-600',
};
```

### 3. Component Architecture
```typescript
// Reusable component structure
interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    githubUrl?: string;
    liveUrl?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.githubUrl && (
            <a href={project.githubUrl} className="text-blue-600 hover:underline">
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} className="text-blue-600 hover:underline">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
```

## Development Challenges

### 1. Dark Mode Implementation
```typescript
// Context-based theme management
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') as Theme || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### 2. Performance Optimization
```typescript
// Image optimization with lazy loading
import { useState, useRef, useEffect } from 'react';

const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
};
```

### 3. Blog System Implementation
```typescript
// Markdown-based blog system
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
}

const BlogPost: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString()}
          </time>
          <div className="flex gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-gray-100 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};
```

## Deployment and CI/CD

### GitHub Actions Workflow
```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Performance Results

### Lighthouse Scores
- **Performance**: 95/100
- **Accessibility**: 100/100
- **Best Practices**: 100/100
- **SEO**: 100/100

### Optimization Techniques Used
- Image lazy loading and optimization
- Code splitting with React.lazy()
- Efficient bundle sizes with tree shaking
- Proper caching strategies
- Semantic HTML for accessibility

## Lessons Learned

### Technical Insights
1. **Component composition** is more flexible than inheritance
2. **TypeScript** significantly improves development experience
3. **Tailwind CSS** speeds up styling but requires discipline
4. **Performance optimization** should be considered from the start

### Design Insights
1. **Simplicity** often trumps complexity
2. **Consistent spacing** makes a huge difference
3. **Typography** is crucial for readability
4. **Mobile-first** approach prevents desktop bias

## Future Improvements

### Planned Features
- **Content Management System** for easier updates
- **Analytics integration** for visitor insights
- **Enhanced blog features** (search, categories, RSS)
- **Project filtering** and search functionality

### Technical Debt
- Add comprehensive test coverage
- Implement proper error boundaries
- Optimize bundle size further
- Add accessibility testing

## Conclusion

Rebuilding my portfolio was both challenging and rewarding. The new site better represents my skills and provides a platform for sharing knowledge through blogging.

The most important lesson: **start simple and iterate**. Perfect is the enemy of good, and getting something online is better than endless tweaking in development.

The complete source code is available on my GitHub, and I'm always open to feedback and suggestions for improvements!
