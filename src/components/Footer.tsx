
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Mushfiqul Islam Chowdhury</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Software Engineer | Backend Engineer | AI Engineer
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-gray-600 dark:text-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-gray-600 dark:text-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent transition-colors">About</Link>
              <Link to="/resume" className="text-sm text-gray-600 dark:text-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent transition-colors">Resume</Link>
              <Link to="/portfolio" className="text-sm text-gray-600 dark:text-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent transition-colors">Portfolio</Link>
              <Link to="/papers" className="text-sm text-gray-600 dark:text-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent transition-colors">Papers</Link>
              <Link to="/contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Get in touch</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">Email: mushfiqulislamchowdhury@gmail.com</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Phone: 01515248558</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Dhaka, Bangladesh</p>
            <div className="flex space-x-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-accent dark:hover:text-portfolio-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Mushfiqul Islam Chowdhury. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
