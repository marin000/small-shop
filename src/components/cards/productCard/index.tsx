import React, { useState } from 'react';
import { Product } from '@/types/product';
import { formatPrice, truncateText } from '@/utils/helper';
import ProductThumbnail from '@/components/productThumbnail';
import ProductDialog from '@/components/dialogs/productDialog';
import BaseButton from '@/components/baseButton';

const descriptionMaxLength = 100;

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  return (
    <React.Fragment>
      <div className="relative border rounded-lg p-4 shadow-md hover:shadow-lg transition">
        <ProductThumbnail title={title} thumbnail={thumbnail} />
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 mt-1">{formatPrice(price)}</p>
        <p className="text-gray-600 text-sm mt-1">
          {truncatedDescription}
          <span
            className="text-gray-500 mt-1 block cursor-pointer"
            onClick={toggleDialog}
          >
            Read more
          </span>
        </p>
        <p className={`mt-2 text-sm ${statusClass}`}>
          {availabilityStatus}
        </p>

        <BaseButton
          label="Details"
          size="small"
          onClick={toggleDialog}
          className="absolute bottom-4 right-4"
        />
      </div>

      <ProductDialog
        product={product}
        isOpen={isDialogOpen}
        onClose={toggleDialog}
      />
    </React.Fragment>
  );
};

export default ProductCard;
