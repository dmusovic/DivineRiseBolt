import * as React from 'react';
import { Course } from '../../types';

interface CourseItemProps {
  course: Course;
  onSelect: (course: Course) => void;
}

export function CourseItem({ course, onSelect }: CourseItemProps) {
  return (
    <gridLayout
      className="bg-white rounded-lg p-4 shadow"
      rows="auto, auto"
      columns="*"
      onTap={() => onSelect(course)}
    >
      <image
        src={course.thumbnail}
        className="w-full h-40 rounded-t-lg"
        row={0}
        col={0}
      />
      <stackLayout row={1} col={0} className="mt-2">
        <label
          className="text-xl font-bold"
          text={course.title}
        />
        <label
          className="text-gray-600"
          text={course.description}
        />
      </stackLayout>
    </gridLayout>
  );
}