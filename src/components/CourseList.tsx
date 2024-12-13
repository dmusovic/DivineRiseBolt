import * as React from 'react';
import { Course } from '../types';
import { StyleSheet } from "react-nativescript";

interface CourseListProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

export function CourseList({ courses, onSelectCourse }: CourseListProps) {
  return (
    <scrollView className="w-full">
      <stackLayout className="p-4 space-y-4">
        {courses.map((course) => (
          <gridLayout
            key={course.id}
            className="bg-white rounded-lg p-4 shadow"
            rows="auto, auto, auto"
            columns="*, auto"
            onTap={() => onSelectCourse(course)}
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
            <progressBar
              row={2}
              col={1}
              value={course.progress}
              maxValue={100}
              className="w-16"
            />
          </gridLayout>
        ))}
      </stackLayout>
    </scrollView>
  );
}