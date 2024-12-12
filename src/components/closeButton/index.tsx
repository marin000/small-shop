import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '@headlessui/react';

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
  iconSize?: { width: number; height: number };
}

const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  className = '',
  iconSize = { width: 24, height: 24 },
}) => {
  return (
    <Button
      onClick={onClick}
      className={`absolute top-3 right-3 p-1 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-600 ${className}`}
      aria-label="Close"
    >
      <XMarkIcon
        style={{ width: iconSize.width, height: iconSize.height }}
        className="text-inherit"
      />
    </Button>
  );
};

export default CloseButton;
