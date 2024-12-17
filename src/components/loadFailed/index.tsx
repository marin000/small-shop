import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

interface LoadFailedProps {
  message: string;
}

const LoadFailed: React.FC<LoadFailedProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-red-500">
      <ExclamationCircleIcon className="w-12 h-12 mb-4" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

export default LoadFailed;
