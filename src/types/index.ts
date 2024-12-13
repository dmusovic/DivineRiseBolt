export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: number;
  completed: boolean;
}