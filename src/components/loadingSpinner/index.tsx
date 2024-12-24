import React from 'react';
import clsx from 'clsx';

interface ILoadingSpinnerProps {
  width?: string;
  height?: string;
}

const LoadingSpinner: React.FC<ILoadingSpinnerProps> = ({
  width = '50',
  height = '50',
}) => {
  return (
    <div
      id="loading-spinner"
      data-testid="loading-spinner"
      className={clsx(
        'animate-spin',
        'rounded-full',
        'border-t-transparent',
        'border-blue-500'
      )}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderWidth: '4px',
        borderStyle: 'solid',
      }}
    ></div>
  );
};

export default LoadingSpinner;
