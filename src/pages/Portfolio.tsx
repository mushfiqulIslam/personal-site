
import ProjectCard from '@/components/ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      title: "Food Any where",
      description: [
        "Online food ordering system.",
        "Build Web version of this system with API.",
        "Worked with Django, SQLite and REST API."
      ],
      technologies: ["Python", "Django", "REST API", "SQLite"],
      codeLink: "https://github.com/mushfiqulIslam/Foodanywhere",
    },
    {
      title: "BUCC Signup App",
      description: [
        "Sign up app for Brac University Computer Club.",
        "It was used in club fair.",
        "Worked with Tkinter, Pillow, Openpyxl, and Pyinstaller."
      ],
      technologies: ["Python", "Tkinter", "Pillow", "Openpyxl", "Pyinstaller"],
      codeLink: "https://github.com/buccbracu/buccsignup",
    },
    {
      title: "StackOverflow Assistant Bot",
      description: [
        "A bot that can identify programming related problems from conversation and suggest related stackoverflow links.",
        "Worked with ChatterBot, Numpy, Pandas, Sci-kit Learn and NLP."
      ],
      technologies: ["Python", "ChatterBot", "NLP", "Numpy", "Pandas", "Scikit-learn"],
      codeLink: "https://github.com/mushfiqulIslam/mltraining/tree/master/StackOverflow%20Assistant",
    },
    {
      title: "ML Model Deployment Pipeline",
      description: [
        "End-to-end machine learning pipeline for model training and deployment.",
        "Automated CI/CD integration with testing and validation.",
        "Containerized deployment with monitoring and logging."
      ],
      technologies: ["MLflow", "ZenML", "Docker", "Kubernetes", "Python"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-portfolio-accent">My</span> Portfolio
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Here's a collection of projects I've built that demonstrate my skills and experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Currently, I have no intention to switch job</h2>
            <div className="mt-6">
              <button className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white font-medium py-2 px-6 rounded-md transition-colors">
                Still want to talk?
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
