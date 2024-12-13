import * as React from 'react';
import { Lesson } from '../../types';
import { formatDuration } from '../../utils/progressUtils';

interface LessonCardProps {
  lesson: Lesson;
  onSelect: (lesson: Lesson) => void;
}

export function LessonCard({ lesson, onSelect }: LessonCardProps) {
  return (
    <gridLayout
      className="bg-white rounded-lg p-4"
      rows="auto, auto"
      columns="*, auto"
      onTap={() => onSelect(lesson)}
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
        text={formatDuration(lesson.duration)}
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
  );
}