import * as React from 'react';
import { StyleSheet } from "react-nativescript";

interface VideoPlayerProps {
  videoUrl: string;
  onComplete: () => void;
}

export function VideoPlayer({ videoUrl, onComplete }: VideoPlayerProps) {
  return (
    <gridLayout rows="*, auto" className="w-full h-full bg-black">
      <videoPlayer
        row={0}
        src={videoUrl}
        autoplay={false}
        controls={true}
        fill={true}
        onFinished={onComplete}
      />
      <button
        row={1}
        className="bg-blue-500 text-white p-4 m-4 rounded-lg"
        text="Mark as Complete"
        onTap={onComplete}
      />
    </gridLayout>
  );
}