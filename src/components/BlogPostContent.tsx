
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
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
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default BlogPostContent;
