
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-portfolio-blue overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-portfolio-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-portfolio-blue/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-portfolio-accent/10 text-portfolio-accent rounded-full text-sm font-medium">Software Engineer</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hello, I am <br />
                <span className="text-portfolio-accent">Mushfiqul Islam Chowdhury</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">Software Engineer | Backend Engineer | AI Engineer</p>
              <p className="text-gray-300 max-w-lg">
                Passionate about solving real-world problems using AI, machine learning, and scalable backend systems.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
                <Button asChild className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white rounded-md">
                  <Link to="/resume">View Resume</Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border border-white text-white hover:bg-white/10 rounded-md">
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Me <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="w-full md:w-2/5">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-portfolio-accent opacity-40"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-portfolio-accent opacity-40"></div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 relative z-10">
                <div className="text-center">
                  <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-portfolio-accent mb-6 shadow-lg shadow-portfolio-accent/20">
                    <Avatar className="w-full h-full">
                      <AvatarImage src="https://mushfiqulislam.me/assets/imgs/avatar.jpg" alt="Mushfiqul Islam Chowdhury" className="object-cover" />
                      <AvatarFallback className="text-lg text-white bg-gradient-to-br from-portfolio-blue to-portfolio-accent">MIC</AvatarFallback>
                    </Avatar>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-4">Building intelligent solutions with code and data</h2>
                  <p className="text-gray-300 mb-6">
                    With over three years of experience in AI and machine learning, I create scalable solutions that make a difference.
                  </p>
                  <div className="flex justify-center space-x-4">
                    {/* Social icons would be here */}
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};
export default Hero;
