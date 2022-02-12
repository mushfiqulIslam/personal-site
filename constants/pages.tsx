// type
export interface Page {
  title?: string;
  description?: string;
}

export interface Pages {
  [key: string]: Page;
}

const pages: Pages = {
  home: {
    title: 'Mushfiqul Islam Chowdhury',
    description:
      'Software Enginerr, Data Science & Computer Vision Enthusiast.',
  },
  projects: {
    title: 'Projects',
    description:
      'You can see all my projects as an student and developer in this page.',
  },
  hireMe: {
    title: 'Hire me',
    description:
      'Passionate & Enthusiastic towards my work, fill the form to contact to me.',
  },
};

export default pages;
