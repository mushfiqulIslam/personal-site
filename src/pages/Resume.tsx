
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import sampleCV from '../assets/Mushfiqul_Islam_Chowdhury__Resume.pdf';

const Resume = () => {
  const skills = [
    { name: "Python", percentage: 90 },
    { name: "SQL", percentage: 80 },
    { name: "Go", percentage: 80 },
    { name: "JavaScript / TypeScript", percentage: 60 },
    { name: "Bash", percentage: 60 }
  ];

  const technologies = [
    { area: "AI/ML & Data Science", items: "Claude Code, Cursor, MCP, LLM applications, RAG, ReAct agents, LangChain/LangGraph, OpenAI API, Anthropic API, NumPy, Pandas, scikit-learn, TensorFlow, PyTorch" },
    { area: "Frontend & Full-Stack", items: "REST APIs, FastAPI, React, web-based AI applications, API integration" },
    { area: "Cloud / MLOps", items: "AWS (EC2, ECS, SageMaker, Bedrock), GCP (Firestore, Vertex AI), Docker, Kubernetes, GitHub Actions (CI/CD), MLflow, ZenML" },
    { area: "Data & Backend", items: "PostgreSQL, Kafka, Apache Spark, Redis, Qdrant, Neo4j, Django, DynamoDB, SQLite" },
    { area: "Testing & Quality", items: "TDD, structured AI evaluation" }
  ];

  const languages = [
    { name: "Bengali (Native)", percentage: 100 },
    { name: "English (Fluent)", percentage: 90 },
    { name: "Finnish (Basic, improving)", percentage: 25 }
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
                    <div className="text-portfolio-accent font-semibold mb-2">Jan 2026 - Apr 2026</div>
                    <h3 className="text-lg font-bold mb-1">Intern</h3>
                    <div className="text-gray-500 dark:text-gray-400 mb-3">Kimberton AI Studio</div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Contributed to automation pipelines and AI-assisted workflows, focusing on backend logic, orchestration, and system reliability. Worked on web-based AI application components using React/Next.js and API-driven backend integration.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="text-portfolio-accent font-semibold mb-2">May 2022 - Aug 2025</div>
                    <h3 className="text-lg font-bold mb-1">Software Engineer</h3>
                    <div className="text-gray-500 dark:text-gray-400 mb-3">Pipeline Bangladesh Ltd</div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Architected and led Risk Sensor (risksensor.io), a production multilingual AI security analysis platform using ReAct-style multi-agent orchestration and RAG pipelines, cutting a one-week manual review to near-real-time automation. Built high-throughput data pipelines processing 120K+ events/logs per minute and reduced memory consumption by over 95%.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="text-portfolio-accent font-semibold mb-2">Jun 2021 - Apr 2022</div>
                    <h3 className="text-lg font-bold mb-1">Junior Software Engineer</h3>
                    <div className="text-gray-500 dark:text-gray-400 mb-3">Tirzok Private Limited</div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Designed and implemented a graph-based reward engine using Neo4j and custom Odoo modules to automate rank calculation and reward distribution for e-commerce transactions.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="text-portfolio-accent font-semibold mb-2">Apr 2020 - May 2021</div>
                    <h3 className="text-lg font-bold mb-1">Junior Software Engineer (Part-time)</h3>
                    <div className="text-gray-500 dark:text-gray-400 mb-3">Field Information Solutions Ltd (Field Buzz)</div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Redesigned role-based access control by modularizing permissions, improving usability and security.
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
                    <div className="text-portfolio-accent font-semibold mb-2">Aug 2025 - Present</div>
                    <h3 className="text-lg font-bold mb-1">MSc. Artificial Intelligence</h3>
                    <div className="text-gray-500 dark:text-gray-400 mb-3">University of Jyväskylä</div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Focus on applied machine learning, NLP/LLM applications, and practical AI systems, with emphasis on empirical ML evaluation and responsible AI practices.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="text-portfolio-accent font-semibold mb-2">Jan 2017 - Sep 2021</div>
                    <h3 className="text-lg font-bold mb-1">BSc. Computer Science and Engineering</h3>
                    <div className="text-gray-500 dark:text-gray-400 mb-3">BRAC University</div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Undergraduate thesis: Real Time Action Recognition from Video Footage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-bold mb-6 relative">
                <span className="text-portfolio-accent accent-underline">Technologies</span>
              </h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
                {technologies.map((tech, index) => (
                  <div key={index}>
                    <div className="font-semibold mb-1">{tech.area}</div>
                    <p className="text-gray-600 dark:text-gray-300">{tech.items}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div>
                <h2 className="text-xl font-bold mb-6 relative">
                  <span className="text-portfolio-accent accent-underline">Programming</span>
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
