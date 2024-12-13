import * as React from 'react';
import { Progress as NativeProgress } from '@nativescript/core';

interface ProgressProps {
  value: number;
  maxValue?: number;
  className?: string;
}

export function Progress({ value, maxValue = 100, className = '' }: ProgressProps) {
  return (
    <progress
      value={value}
      maxValue={maxValue}
      className={`progress-custom ${className}`}
    />
  );
}