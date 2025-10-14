
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import sampleCV from '../assets/Mushfiqul_Islam_Chowdhury__Resume.pdf';

const Resume = () => {
  const skills = [
    { name: "Python", percentage: 90 },
    { name: "Golang", percentage: 85 },
    { name: "Java", percentage: 75 },
    { name: "SQL", percentage: 80 }
  ];
  
  const languages = [
    { name: "Bengali", percentage: 100 },
    { name: "English", percentage: 85 }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = sampleCV;
    link.download = 'mushfiqul-islam-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="text-portfolio-accent">My</span> Resume
              </h1>
              <Button 
                className="mt-4 md:mt-0 flex items-center gap-2 bg-portfolio-accent hover:bg-portfolio-accent/90"
                onClick={handleDownloadCV}
              >
                <Download className="h-4 w-4" /> Download Resume
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold mb-6 relative">
                  <span className="text-portfolio-accent accent-underline">Experience</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="text-portfolio-accent font-semibold mb-2">2022 - Present</div>
                    <h3 className="text-lg font-bold mb-1">Software Engineer</h3>
                    <div className="text-gray-500 dark:text-gray-400 mb-3">PIPELINE Bangladesh Ltd.</div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Primary responsibility is to write clean and maintainable code in Golang, Python, JavaScript, TypeScript etc and write efficient SQL and NoSQL queries for software systems and big data manipulation.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="text-portfolio-accent font-semibold mb-2">2021 - 2022</div>
                    <h3 className="text-lg font-bold mb-1">Junior Software Engineer</h3>
                    <div className="text-gray-500 dark:text-gray-400 mb-3">Tirzok Private Limited</div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Worked with Odoo, opensource ERP. Maintained odoo with other microservices to prepare a software pipeline to provide effective ERP solutions with different use cases.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="text-portfolio-accent font-semibold mb-2">2020 - 2021</div>
                    <h3 className="text-lg font-bold mb-1">Junior Software Engineer</h3>
                    <div className="text-gray-500 dark:text-gray-400 mb-3">Field Buzz</div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Developed and maintained backend systems using Django and various databases. Implemented features for field force automation solutions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-6 relative">
                  <span className="text-portfolio-accent accent-underline">Education</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="text-portfolio-accent font-semibold mb-2">2025 - Present</div>
                    <h3 className="text-lg font-bold mb-1">MSc. Artificial Intelligence</h3>
                    <div className="text-gray-500 dark:text-gray-400 mb-3">University of Jyväskylä</div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="text-portfolio-accent font-semibold mb-2">2017 - 2021</div>
                    <h3 className="text-lg font-bold mb-1">BSc. Computer Science Engineering</h3>
                    <div className="text-gray-500 dark:text-gray-400 mb-3">BRAC University</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div>
                <h2 className="text-xl font-bold mb-6 relative">
                  <span className="text-portfolio-accent accent-underline">Skills</span>
                </h2>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div
                          className="skill-bar"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-6 relative">
                  <span className="text-portfolio-accent accent-underline">Languages</span>
                </h2>
                
                <div className="space-y-6">
                  {languages.map((language, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{language.name}</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div
                          className="skill-bar"
                          style={{ width: `${language.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
