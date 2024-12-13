import { useState, useCallback } from 'react';
import { Course, Lesson } from '../types';
import { calculateCourseProgress } from '../utils/progressUtils';

export function useCourseProgress(initialCourse: Course) {
  const [course, setCourse] = useState(initialCourse);

  const updateLessonProgress = useCallback((lessonId: string, completed: boolean) => {
    setCourse(prevCourse => {
      const updatedLessons = prevCourse.lessons.map(lesson =>
        lesson.id === lessonId ? { ...lesson, completed } : lesson
      );
      
      const updatedCourse = {
        ...prevCourse,
        lessons: updatedLessons,
        progress: calculateCourseProgress({ ...prevCourse, lessons: updatedLessons })
      };
      
      return updatedCourse;
    });
  }, []);

  return {
    course,
    updateLessonProgress
  };
}