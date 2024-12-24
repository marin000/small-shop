import React, { useState } from 'react';
import { Product } from '@/types/product';
import { checkOutOfStock } from '@/utils/helper';
import BaseCard from '@/components/baseCard';
import DetailsLink from '@/features/shared/detailsLink';
import ProductDialog from '@/features/shared/productDialog';
import useCartActions from '@/hooks/useCartActions';
import ProductDescription from './productDescription';
import ProductHeader from './productHeader';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { getProductFromCart } = useCartActions();
  const productInCart = getProductFromCart(product);

  const {
    details: { stock, minimumOrderQuantity },
  } = product;

  const isOutOfStock = checkOutOfStock(
    stock,
    minimumOrderQuantity,
    productInCart
  );

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  return (
    <React.Fragment>
      <BaseCard
        id="product-card"
        className="relative hover:shadow-lg transition min-w-72"
      >
        <ProductHeader
          product={product}
          isOutOfStock={isOutOfStock}
        />

        <ProductDescription
          product={product}
          isOutOfStock={isOutOfStock}
          toggleDialog={toggleDialog}
        />

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
