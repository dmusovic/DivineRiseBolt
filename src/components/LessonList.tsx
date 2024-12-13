import * as React from 'react';
import { Lesson } from '../types';
import { StyleSheet } from "react-nativescript";

interface LessonListProps {
  lessons: Lesson[];
  onSelectLesson: (lesson: Lesson) => void;
}

export function LessonList({ lessons, onSelectLesson }: LessonListProps) {
  return (
    <scrollView className="w-full">
      <stackLayout className="p-4 space-y-2">
        {lessons.map((lesson) => (
          <gridLayout
            key={lesson.id}
            className="bg-white rounded-lg p-4"
            rows="auto, auto"
            columns="*, auto"
            onTap={() => onSelectLesson(lesson)}
          >
            <label
              className="text-lg font-bold"
              row={0}
              col={0}
              text={lesson.title}
            />
            <label
              className="text-gray-600 text-sm"
              row={1}
              col={0}
              text={lesson.description}
            />
            <label
              className="text-sm text-gray-500"
              row={0}
              col={1}
              text={`${Math.floor(lesson.duration / 60)}min`}
            />
            {lesson.completed && (
              <label
                className="text-green-500"
                row={1}
                col={1}
                text="✓ Completed"
              />
            )}
          </gridLayout>
        ))}
      </stackLayout>
    </scrollView>
  );
}