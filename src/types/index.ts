import { Url } from 'url';

export type Experience = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  tools: string[];
};

export type Education = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  grade: string;
  description: string;
  relevantCourses: string[];
};

export type Skill = {
  name: string;
  image: string;
  content: {
    name: string;
    image: string;
  }[];
};

export type Project = {
  id: number;
  title: string;
  category: string;
  thumbnailUrl: string;
  description?: string;
  images: string[];
  previewUrl: string;
  githubLink: string;
  publishedAt: string;
  featureList: string[];
  attributes: {
    name: string;
    value: string | number;
  }[];
};

export type Post = {
  id: number;
  title: string;
  publishedAt: string;
  thumbnailUrl: string;
  imageUrl: string;
  authorName: string;
  content: string;
};

export type Review = {
  author: {
    name: string;
    imageUrl: string;
    designation: string;
    company: string;
  };
  comment: string;
};
