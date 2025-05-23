
import PaperCard from '@/components/PaperCard';

const Papers = () => {
  const papers = [
    {
      title: "Real Time Action Recognition from Video Footage",
      abstract: `Crime rate is increasing proportionally with the increasing rate of the population. The most prominent approach was to introduce Closed-Circuit Television (CCTV) camera-based surveillance to tackle the issue. Video surveillance cameras have added a new dimension to detect crime. Several research works on autonomous security camera surveillance are currently ongoing, where the fundamental goal is to discover violent activity from video feeds. From the technical viewpoint, this is a challenging problem because analyzing a set of frames, i.e., videos in temporal dimension to detect violence might need careful machine learning model training to reduce false results. This research focuses on this problem by integrating state-of-the-art Deep Learning methods to ensure a robust pipeline for autonomous surveillance for detecting violent activities, e.g., kicking, punching, and slapping. Initially, we designed a dataset of this specific interest, which contains 600 videos (200 for each action). Later, we have utilized existing pre-trained model archi- tectures to extract features, and later used deep learning network for classification. Also, We have classified our models' accuracy, and confusion matrix on different pre-trained architectures like VGG16, Inceptionv3, Resnet50, Xception and MobileNet V2 among which VGG16 and MobileNet V2 performed better.`,
      link: "https://ieeexplore.ieee.org/abstract/document/9732601",
      status: "Published",
    },
    {
      title: "Deep Neural Network-Based Sign Language Recognition: A Comprehensive Approach Using Transfer Learning with Explainability",
      abstract: "This research paper explores advanced methods in sign language recognition using deep neural networks with a focus on transfer learning and explainable AI techniques. The proposed approach aims to improve accessibility for the deaf and hard-of-hearing community through accurate and interpretable sign language translation systems.",
      link: "https://arxiv.org/abs/2409.07426",
      status: "Uploaded on arXiv",
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Latest <span className="text-portfolio-accent">Papers</span></h1>
            <p className="text-gray-600 dark:text-gray-300">
              My research work and academic publications in machine learning and software engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {papers.map((paper, index) => (
              <PaperCard key={index} {...paper} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Papers;
