import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialLinks from '@/components/SocialLinks';
import sampleCV from '../assets/Mushfiqul_Islam_Chowdhury__Resume.pdf';

const About = () => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = sampleCV;
    link.download = 'mushfiqul-islam-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h1 className="text-3xl font-bold mb-4">My Philosophy</h1>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3 text-portfolio-accent">Positive and Enthusiastic</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  I am an M.Sc. Artificial Intelligence student at the University of Jyväskylä with 5+ years in software engineering, including 3+ years building production LLM systems. I have built production-grade AI systems including multi-agent architectures, RAG pipelines, conversational AI interfaces, and LLM-powered applications, using Python, cloud infrastructure, and CI/CD with GitHub Actions and Docker Compose.
                </p>
              </div>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={handleDownloadCV}
              >
                <Download className="h-4 w-4" /> Download CV
              </Button>
            </div>
            
            <div className="md:col-span-1">
              <h1 className="text-3xl font-bold mb-4">Personal Info</h1>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">      
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>mushfiqulislamchowdhury@gmail.com</p>
                </div>
                
                <div>
                  <p className="font-semibold">Phone:</p>
                  <p>+358 449526275</p>
                </div>
                
                <div>
                  <p className="font-semibold">LinkedIn:</p>
                  <p>mushfiqul-islam-chowdhury</p>
                </div>
                
                <div>
                  <p className="font-semibold">Address:</p>
                  <p>Jyväskylä, Finland</p>
                </div>
              </div>
              
              <div className="mt-6">
                <SocialLinks />
              </div>
            </div>
            
            <div className="md:col-span-1">
              <h1 className="text-3xl font-bold mb-4">Achievements</h1>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Speaker, GDG Dhaka 2024</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Delivered a talk on "Career with AI" at Google Developers Group Dhaka, sharing practical guidance on responsible and applied AI.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Champion, Datathon 2020</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    National level competition named MUJIB BORSHO IT CARNIVAL 2020 organized by Dhaka International University.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-2">First Runner-up, Intra-University Programming Contest 2018</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Intra university programming contest of BRAC University organized by BUCC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                My journey in software engineering began during my undergraduate studies at BRAC University, where I discovered my passion for building scalable systems and analyzing data. Throughout my academic career, I focused on developing strong foundations in computer science and mathematics, which later became the cornerstone of my work in machine learning and data science.
              </p>
              
              <p className="mt-4">
                Alongside my studies I served as General Secretary of the BRAC University Computer Club (BUCC), organizing programming contests, workshops, and training sessions. I also joined Field Buzz as a part-time Junior Software Engineer, where I redesigned role-based access control by modularizing permissions.
              </p>
              
              <p className="mt-4">
                After graduating in 2021, I moved to Tirzok Private Limited, where I built a graph-based reward engine with Neo4j and custom Odoo modules for e-commerce transactions. This experience shaped my understanding of large-scale software systems and how different components interact.
              </p>
              
              <p className="mt-4">
                At Pipeline Bangladesh Ltd. I architected and led Risk Sensor (risksensor.io), a production multilingual AI security analysis platform built on multi-agent orchestration and RAG pipelines and used by 10+ companies, and designed data pipelines processing 120K+ events per minute. In 2025 I moved to Finland to pursue my M.Sc. in Artificial Intelligence at the University of Jyväskylä, and in early 2026 I interned at Kimberton AI Studio, working on AI-assisted workflows and web-based AI applications.
              </p>
              
              <p className="mt-4">
                Throughout my journey, I've remained committed to continuous learning and adaptation, keeping up with the latest technologies and methodologies in the rapidly evolving field of software engineering and data science.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
