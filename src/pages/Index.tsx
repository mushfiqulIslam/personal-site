
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';

const Index = () => {
  // Featured projects data
  const featuredProjects = [
    {
      title: "Picli",
      description: [
        "Co-founded a mobile app that suggests one nearby event or small challenge each day; live on the App Store and Google Play.",
        "Built the FastAPI backend and daily recommendation logic.",
        "Worked with Python, PostgreSQL, Redis, AWS ECS and Cloudflare."
      ],
    },
    {
      title: "UniPilot",
      description: [
        "AI-powered academic copilot built at the Learning Futures Hackathon 2026 (Aalto University).",
        "At-risk detection, AI study plans, and readiness checks on Finland's Opin.fi / HEDS data.",
        "Worked with TypeScript, React, AWS Lambda, Bedrock and DynamoDB."
      ],
    },
    {
      title: "Sales Chatbot",
      description: [
        "Generative AI chatbot for personalized product recommendations and order tracking.",
        "Layered architecture separating AI orchestration, business logic, retrieval, and data access.",
        "Worked with Python, LangChain, OpenAI API and PostgreSQL."
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="inline-block px-3 py-1 mb-4 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm font-medium">Portfolio</span>
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Here are some of my recent works that showcase my skills and expertise.
            </p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10">
              <Link to="/portfolio" className="flex items-center gap-2">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 mb-4 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm font-medium">About Me</span>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300">
                An M.Sc. Artificial Intelligence student and Software Engineer with an AI and data focus, working on LLM applications, data pipelines, and scalable backend systems.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
            >
              <p>
                With 5+ years in software engineering, including 3+ years building production LLM systems, I build production-grade AI systems including multi-agent architectures, RAG pipelines, and LLM-powered applications, and deploy them with modern DevOps practices. My passion is solving real-world problems using data and code.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <Button asChild variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10">
                <Link to="/about" className="flex items-center gap-2">
                  Learn More About Me <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-portfolio-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-portfolio-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-portfolio-accent/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              I'm currently open for collaborations and interesting projects. Feel free to reach out!
            </p>
            <Button asChild className="bg-white text-portfolio-blue hover:bg-gray-100">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;