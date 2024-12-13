import * as React from 'react';
import { Lesson } from '../../types';
import { formatDuration } from '../../utils/formatUtils';

interface LessonContentProps {
  lesson: Lesson;
  onComplete: () => void;
}

export function LessonContent({ lesson, onComplete }: LessonContentProps) {
  return (
    <stackLayout className="w-full h-full bg-white p-4">
      <label className="text-2xl font-bold mb-2" text={lesson.title} />
      <label className="text-gray-600 mb-4" text={lesson.description} />
      <label className="text-gray-500 mb-4" text={`Duration: ${formatDuration(lesson.duration)}`} />
      
      {/* Placeholder for video content */}
      <gridLayout className="bg-gray-200 rounded-lg p-8 mb-4" height="200">
        <label 
          className="text-center text-gray-600" 
          text="Video content will be available in the native app"
        />
      </gridLayout>

      <button
        className="bg-blue-500 text-white p-4 rounded-lg"
        text="Mark as Complete"
        onTap={onComplete}
      />
    </stackLayout>
  );
}