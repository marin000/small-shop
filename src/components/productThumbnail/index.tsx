import React from 'react';
import clsx from 'clsx';

interface ProductThumbnailProps {
  thumbnail: string;
  title: string;
  className?: string;
}

const ProductThumbnail: React.FC<ProductThumbnailProps> = ({
  thumbnail,
  title,
  className = '',
}) => {
  return (
    <img
      src={thumbnail}
      alt={title}
      className={clsx('w-full h-48 object-cover rounded', className)}
    />
  );
};

export default ProductThumbnail;
