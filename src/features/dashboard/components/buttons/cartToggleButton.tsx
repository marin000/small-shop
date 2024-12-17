import React from 'react';
import { useTranslation } from 'react-i18next';
import useCartActions from '@/hooks/useCartActions';
import { Product } from '@/types/product';
import BaseButton from '@/components/baseButton';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

interface CartToggleButtonProps {
  product: Product;
}

const CartToggleButton: React.FC<CartToggleButtonProps> = ({
  product,
}) => {
  const { t } = useTranslation();
  const { handleCartToggle, isProductInCart } = useCartActions();

  const isInCart = isProductInCart(product);

  return (
    <React.Fragment>
      {isInCart ? (
        <BaseButton
          label={t('dashboard.removeFromCart')}
          variant="danger"
          iconEnd={<ShoppingCartIcon className="w-5 h-5" />}
          onClick={() => handleCartToggle(product)}
        />
      ) : (
        <BaseButton
          label={t('dashboard.addToCart')}
          variant="primary"
          iconEnd={<ShoppingCartIcon className="w-5 h-5" />}
          onClick={() => handleCartToggle(product)}
        />
      )}
    </React.Fragment>
  );
};

export default CartToggleButton;
