export interface IWork {
  name: string;
  type: string;
  date: string;
  thumbnail: string;
  technologiesThumb: string;
  link: string;
  github: string;
  technologies: string[];
  description: string;
  contributors: {
    name: string;
    role: string;
    linkedin: string;
  }[];
  images: string[];
  youtube: string;
}
