import React from 'react';
import { Product } from '@/types/product';
import { useTranslation } from 'react-i18next';
import { truncateText } from '@/utils/helper';

const descriptionMaxLength = 100;

interface ProductDescriptionProps {
  product: Product;
  isOutOfStock: boolean;
  toggleDialog: () => void;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  product,
  isOutOfStock,
  toggleDialog,
}) => {
  const { t } = useTranslation();

  const {
    description,
    minimumOrderQuantity,
    stock,
    availabilityStatus,
  } = product.details;

  const truncatedDescription =
    description.length > descriptionMaxLength
      ? truncateText(description, descriptionMaxLength)
      : description;

  const statusRed =
    isOutOfStock || availabilityStatus === 'Low Stock';
  const status = isOutOfStock
    ? t('dashboard.outOfStock', {
        minimumOrderQuantity,
        stock,
      })
    : availabilityStatus;

  return (
    <div>
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
        className={`absolute bottom-4 left-4 text-sm ${
          statusRed ? 'text-red-500' : 'text-green-600'
        }`}
      >
        {status}
      </p>
    </div>
  );
};

export default ProductDescription;
