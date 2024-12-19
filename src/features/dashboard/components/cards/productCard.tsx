import React, { useState } from 'react';
import { Product } from '@/types/product';
import { formatPrice, truncateText } from '@/utils/helper';
import BaseCard from '@/components/baseCard';
import BaseThumbnail from '@/components/baseThumbnail';
import { useTranslation } from 'react-i18next';
import CartAddButton from '../cartAddButton';
import DetailsLink from '@/features/shared/detailsLink';
import ProductDialog from '@/features/shared/productDialog';

const descriptionMaxLength = 100;

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    details: {
      description,
      price,
      availabilityStatus,
      stock,
      minimumOrderQuantity,
    },
    thumbnail,
    title,
  } = product;

  const truncatedDescription =
    description.length > descriptionMaxLength
      ? truncateText(description, descriptionMaxLength)
      : description;

  const isOutOfStock = stock < minimumOrderQuantity;
  const statusRed =
    isOutOfStock || availabilityStatus === 'Low Stock';
  const status = isOutOfStock
    ? t('dashboard.outOfStock', {
        minimumOrderQuantity,
        stock,
      })
    : availabilityStatus;

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  return (
    <React.Fragment>
      <BaseCard className="relative hover:shadow-lg transition">
        <BaseThumbnail title={title} thumbnail={thumbnail} />
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex items-center mt-4 mb-4">
          <p className="text-gray-600">
            <span className="bg-gray-300 rounded-full shadow-sm inline-block p-1 mr-4">
              {formatPrice(price)}
            </span>
          </p>
          <CartAddButton product={product} />
        </div>

        <p className="text-gray-600 text-sm mt-1">
          {truncatedDescription}
          <span
            className="text-gray-500 mt-1 mb-6 block cursor-pointer"
            onClick={toggleDialog}
          >
            {t('dashboard.readMore')}
          </span>
        </p>
        <p
          className={`absolute bottom-4 left 4 text-sm ${
            statusRed ? 'text-red-500' : 'text-green-600'
          }`}
        >
          {status}
        </p>

        <DetailsLink
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
