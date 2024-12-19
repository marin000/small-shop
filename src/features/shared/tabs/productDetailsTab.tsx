import React from 'react';
import { formatPrice } from '@/utils/helper';
import { Product } from '@/types/product';
import BaseCard from '@/components/baseCard';
import ProductDetail from '@/features/dashboard/components/productDetail';
import { t } from 'i18next';

interface ProductDetailsTabProps {
  product: Product;
}

const ProductDetailsTab: React.FC<ProductDetailsTabProps> = ({
  product,
}) => {
  const {
    description,
    price,
    brand,
    category,
    stock,
    minimumOrderQuantity,
    dimensions,
    weight,
    rating,
    sku,
    returnPolicy,
    warrantyInformation,
    shippingInformation,
  } = product.details;

  return (
    <React.Fragment>
      <ProductDetail value={description} className="mb-4" />
      <div className="flex items-center mt-4 mb-4">
        <span className="bg-gray-300 p-2 mr-4 rounded-full shadow-sm inline-block">
          <ProductDetail
            label="Price"
            value={formatPrice(price)}
            className="text-lg font-semibold text-gray-800"
          />
        </span>
      </div>
      <BaseCard>
        <ProductDetail label={t('dashboard.brand')} value={brand} />
        <ProductDetail
          label={t('dashboard.category')}
          value={category}
        />
        <ProductDetail label={t('dashboard.stock')} value={stock} />
        <ProductDetail
          label={t('dashboard.minimumOrderQuantity')}
          value={minimumOrderQuantity}
        />
        <ProductDetail
          label={t('dashboard.dimensions')}
          value={`${dimensions.width} x ${dimensions.height} x ${dimensions.depth} cm`}
        />
        <ProductDetail label={t('dashboard.weight')} value={weight} />
        <ProductDetail
          label={t('dashboard.rating')}
          value={`${rating} / 5`}
        />
        <ProductDetail label={t('dashboard.sku')} value={sku} />
        <ProductDetail
          label={t('dashboard.returnPolicy')}
          value={returnPolicy}
        />
        <ProductDetail
          label={t('dashboard.warrantyInformation')}
          value={warrantyInformation}
        />
        <ProductDetail
          label={t('dashboard.shippingInformation')}
          value={shippingInformation}
        />
      </BaseCard>
    </React.Fragment>
  );
};

export default ProductDetailsTab;
