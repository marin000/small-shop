import React, { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  text: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  disabled?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  position = 'top',
  disabled = false,
}) => {
  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    right: 'top-1/2 left-full transform -translate-y-1/2 ml-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'top-1/2 right-full transform -translate-y-1/2 mr-2',
  };

  return (
    <div className="relative group inline-block">
      {children}
      {!disabled && (
        <span
          className={`absolute z-10 p-2 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity ${positionClasses[position]} max-w-xs whitespace-nowrap`}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
