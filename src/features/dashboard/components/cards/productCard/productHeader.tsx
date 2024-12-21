import React from 'react';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/helper';
import BaseThumbnail from '@/components/baseThumbnail';
import CartAddButton from '../../cartAddButton';

interface ProductHeaderProps {
  product: Product;
  isOutOfStock: boolean;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({
  product,
  isOutOfStock,
}) => {
  return (
    <div>
      <BaseThumbnail
        title={product.title}
        thumbnail={product.thumbnail}
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <div className="flex items-center mt-4 mb-4 justify-between">
        <p className="text-gray-600">
          <span className="bg-gray-300 rounded-full shadow-sm inline-block p-1 mr-4">
            {formatPrice(product.details.price)}
          </span>
        </p>
        <CartAddButton
          product={product}
          isOutOfStock={isOutOfStock}
          className="ml-auto"
        />
      </div>
    </div>
  );
};

export default ProductHeader;
