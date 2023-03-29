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

export interface ITechnology {
  name: string;
  image: string;
  width: number;
  height: number;
  type: string;
}

export interface IImagePlay {
  url: string;
  urlWidth: number;
  urlHeight: number;
  thumb: string;
  thumbWidth: number;
  thumbHeight: number;
}
