import * as React from 'react';
import { Course } from '../../types';
import { Progress } from '../ui/Progress';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

export function CourseCard({ course, onSelect }: CourseCardProps) {
  return (
    <gridLayout
      className="bg-white rounded-lg p-4 shadow"
      rows="auto, auto, auto"
      columns="*, auto"
      onTap={() => onSelect(course)}
    >
      <image
        src={course.thumbnail}
        className="w-full h-40 rounded-t-lg"
        row={0}
        col="0"
        colSpan={2}
      />
      <label
        className="text-xl font-bold mt-2"
        row={1}
        col={0}
        text={course.title}
      />
      <label
        className="text-gray-600"
        row={2}
        col={0}
        text={course.description}
      />
      <Progress
        row={2}
        col={1}
        value={course.progress}
        className="w-16"
      />
    </gridLayout>
  );
}