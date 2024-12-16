import clsx from 'clsx';
import React from 'react';

interface BaseDividerProps {
  className?: string;
}

const BaseDivider: React.FC<BaseDividerProps> = ({ className }) => {
  return <hr className={clsx('w-ful bg-gray-100', className)} />;
};

export default BaseDivider;
