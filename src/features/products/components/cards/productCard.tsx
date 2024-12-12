import React, { useState } from 'react';
import { Product } from '@/types/product';
import { formatPrice, truncateText } from '@/utils/helper';
import BaseButton from '@/components/baseButton';
import BaseCard from '@/components/baseCard';
import ProductDialog from '../productDialog';
import BaseThumbnail from '@/components/baseThumbnail';

const descriptionMaxLength = 100;

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    details: { description, price, availabilityStatus },
    thumbnail,
    title,
  } = product;

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
      <BaseCard className="relative hover:shadow-lg transition">
        <BaseThumbnail title={title} thumbnail={thumbnail} />
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 mt-1">
          <span className="bg-gray-300 p-1 rounded-md shadow-sm inline-block mb-2">
            {formatPrice(price)}
          </span>
        </p>
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
      </BaseCard>

      <ProductDialog
        product={product}
        isOpen={isDialogOpen}
        onClose={toggleDialog}
      />
    </React.Fragment>
  );
};

export default ProductCard;
