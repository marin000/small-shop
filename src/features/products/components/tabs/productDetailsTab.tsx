import React from 'react';
import { formatPrice } from '@/utils/helper';
import { ProductDetails } from '@/types/product';
import BaseCard from '@/components/baseCard';
import ProductDetail from '@/features/products/components/productDetail';

interface ProductDetailsTabProps {
  productDetails: ProductDetails;
}

const ProductDetailsTab: React.FC<ProductDetailsTabProps> = ({
  productDetails,
}) => {
  const {
    description,
    price,
    brand,
    category,
    stock,
    dimensions,
    weight,
    rating,
    sku,
    returnPolicy,
    warrantyInformation,
    shippingInformation,
  } = productDetails;
  return (
    <React.Fragment>
      <ProductDetail value={description} className="mb-4" />
      <span className="bg-gray-300 p-1 rounded-md shadow-sm inline-block mb-2">
        <ProductDetail
          label="Price"
          value={formatPrice(price)}
          className="text-lg font-semibold text-gray-800"
        />
      </span>
      <BaseCard>
        <ProductDetail label="Brand" value={brand} />
        <ProductDetail label="Category" value={category} />
        <ProductDetail label="Stock" value={stock} />
        <ProductDetail
          label="Dimensions"
          value={`${dimensions.width} x ${dimensions.height} x ${dimensions.depth} cm`}
        />
        <ProductDetail label="Weight" value={weight} />
        <ProductDetail label="Rating" value={`${rating} / 5`} />
        <ProductDetail label="Sku" value={sku} />
        <ProductDetail label="Return policy" value={returnPolicy} />
        <ProductDetail
          label="Warranty Information"
          value={warrantyInformation}
        />
        <ProductDetail
          label="Shipping Information"
          value={shippingInformation}
        />
      </BaseCard>
    </React.Fragment>
  );
};

export default ProductDetailsTab;
