import React from 'react';
import { Product } from '../../types/product';
import { truncateText } from '../../utils/helper';
import ProductThumbnail from '../productThumbnail';
const descriptionMaxLength = 100;

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { description, thumbnail, title, price, availabilityStatus } =
    product;

  const truncatedDescription =
    description.length > descriptionMaxLength
      ? truncateText(description, descriptionMaxLength)
      : description;

  const statusClass =
    availabilityStatus === 'Low Stock'
      ? 'text-red-500'
      : 'text-green-600';

  return (
    <React.Fragment>
      <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer">
        <ProductThumbnail title={title} thumbnail={thumbnail} />
        <h2 className="text-lg font-semibold mt-2">{title}</h2>
        <p className="text-gray-600 mt-1">{price.toFixed(2)}€</p>
        <p className="text-gray-600 text-sm mt-1">
          {truncatedDescription}
          <div className="text-gray-500 mt-1">Read more</div>
        </p>
        <p className={`mt-2 text-sm ${statusClass}`}>
          {availabilityStatus}
        </p>
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
