import * as React from 'react';
import { Lesson } from '../../types';
import { LessonItem } from './LessonItem';

interface LessonListProps {
  lessons: Lesson[];
  onSelectLesson: (lesson: Lesson) => void;
}

export function LessonList({ lessons, onSelectLesson }: LessonListProps) {
  return (
    <scrollView className="w-full">
      <stackLayout className="p-4 space-y-2">
        {lessons.map((lesson) => (
          <LessonItem
            key={lesson.id}
            lesson={lesson}
            onSelect={onSelectLesson}
          />
        ))}
      </stackLayout>
    </scrollView>
  );
}