
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import avatarImage from "../assets/avatar.jpg";

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
                      <AvatarImage src={avatarImage} alt="Mushfiqul Islam Chowdhury" className="object-cover" />
                      <AvatarFallback className="text-lg text-white bg-gradient-to-br from-portfolio-blue to-portfolio-accent">MIC</AvatarFallback>
                    </Avatar>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-4">Building intelligent solutions with code and data</h2>
                  <p className="text-gray-300 mb-6">
                    With over three years of experience in AI and machine learning, I create scalable solutions that make a difference.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a href="https://www.linkedin.com/in/mushfiqul-islam-chowdhury/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a href="https://github.com/mushfiqulIslam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                      <Github className="h-5 w-5 text-white" />
                    </a>
                    <a href="https://twitter.com/_mushfiqulIslam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                    <a href="mailto:mushfiqulislamchowdhury@gmail.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                      <Mail className="h-5 w-5 text-white" />
                    </a>
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
