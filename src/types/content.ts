export interface VideoContent {
  id: string;
  title: string;
  creator: string;
  views: string;
  time: string;
  tag: string;
  badges: string[];
  age: string;
  videoUrl: string;
  thumbnail?: string;
}

export interface Creator {
  id: string;
  initial: string;
  name: string;
  info: string;
  profileUrl: string;
}
