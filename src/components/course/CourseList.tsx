import * as React from 'react';
import { Course } from '../../types';
import { CourseItem } from './CourseItem';

interface CourseListProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

export function CourseList({ courses, onSelectCourse }: CourseListProps) {
  return (
    <scrollView className="w-full">
      <stackLayout className="p-4 space-y-4">
        {courses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
            onSelect={onSelectCourse}
          />
        ))}
      </stackLayout>
    </scrollView>
  );
}