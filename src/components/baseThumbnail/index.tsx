import React from 'react';
import clsx from 'clsx';

interface BaseThumbnailProps {
  thumbnail: string;
  title: string;
  className?: string;
}

const BaseThumbnail: React.FC<BaseThumbnailProps> = ({
  thumbnail,
  title,
  className = '',
}) => {
  return (
    <img
      src={thumbnail}
      alt={title}
      className={clsx('h-48 object-contain rounded', className)}
    />
  );
};

export default BaseThumbnail;
