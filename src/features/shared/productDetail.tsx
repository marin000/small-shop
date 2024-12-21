import React from 'react';
import clsx from 'clsx';

interface ProductDetailProps {
  label?: string;
  value: string | number;
  className?: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  label,
  value,
  className,
}) => {
  return (
    <p className={clsx('text-gray-700 mb-1', className)}>
      {label && <strong>{label}:</strong>} {value}
    </p>
  );
};

export default ProductDetail;
