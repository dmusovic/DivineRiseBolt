import { Course, Lesson } from '../types';

export const calculateCourseProgress = (course: Course): number => {
  if (!course.lessons.length) return 0;
  
  const completedLessons = course.lessons.filter(lesson => lesson.completed).length;
  return Math.round((completedLessons / course.lessons.length) * 100);
};

export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  return `${minutes}min`;
};