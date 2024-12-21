import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useCartActions from '@/hooks/useCartActions';
import { Product } from '@/types/product';
import BaseButton from '@/components/baseButton';
import { useToastContext } from '@/providers/toastContext';
import QuantityAdjuster from '@/features/shared/quantityAdjuster';
import clsx from 'clsx';

interface CartToggleButtonProps {
  product: Product;
  className?: string;
  isOutOfStock: boolean;
}

const CartAddButton: React.FC<CartToggleButtonProps> = ({
  product,
  className,
  isOutOfStock,
}) => {
  const { t } = useTranslation();
  const { showToast } = useToastContext();
  const [minToastShown, setMinToastShown] = useState(false);
  const [maxToastShown, setMaxToastShown] = useState(false);
  const { addProductToCart, getProductFromCart } = useCartActions();
  const { stock, minimumOrderQuantity } = product.details;

  const productInCart = getProductFromCart(product);

  const [quantity, setQuantity] = useState<number>(
    productInCart ? 1 : minimumOrderQuantity
  );

  useEffect(() => {
    if (productInCart) setQuantity(1);
    else setQuantity(minimumOrderQuantity);
  }, [productInCart, minimumOrderQuantity]);

  const handleIncrease = () => {
    const productInCartQuantity = productInCart
      ? productInCart.quantity
      : 0;
    const newQuantity = quantity + productInCartQuantity;
    if (newQuantity < stock)
      return setQuantity((prevQuantity) => prevQuantity + 1);

    if (maxToastShown) return;
    showToast(
      t('toast.dashboard.maxQuantityTitle'),
      t('toast.dashboard.maxQuantityMsg', { quantity }),
      'warning'
    );
    setMaxToastShown(true);
  };

  const handleDecrease = () => {
    const minQuantity = productInCart ? 1 : minimumOrderQuantity;
    if (quantity > minQuantity)
      return setQuantity((prevQuantity) => prevQuantity - 1);

    if (minToastShown) return;
    showToast(
      t('toast.dashboard.minQuantityTitle'),
      t('toast.dashboard.minQuantityMsg', { quantity }),
      'warning'
    );
    setMinToastShown(true);
  };

  const handleAddToCart = () => {
    addProductToCart(product, quantity);
    setQuantity(1);
    setMinToastShown(false);
    setMaxToastShown(false);
  };

  return (
    <div className={clsx('flex items-center ', className)}>
      {!isOutOfStock && (
        <React.Fragment>
          <BaseButton
            label={t('dashboard.addToCart')}
            variant="primary"
            size="small"
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className="mr-2 whitespace-nowrap"
          />
          <QuantityAdjuster
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            isMinQuantityReached={isOutOfStock}
            size="small"
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default CartAddButton;
