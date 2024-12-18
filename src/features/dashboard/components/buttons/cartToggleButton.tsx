import React from 'react';
import { useTranslation } from 'react-i18next';
import useCartActions from '@/hooks/useCartActions';
import { Product } from '@/types/product';
import BaseButton from '@/components/baseButton';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Tooltip from '@/components/tooltip';

interface CartToggleButtonProps {
  product: Product;
  hasLabel?: boolean;
  tooltipDisabled?: boolean;
}

const CartToggleButton: React.FC<CartToggleButtonProps> = ({
  product,
  hasLabel = true,
  tooltipDisabled = false,
}) => {
  const { t } = useTranslation();
  const { handleCartToggle, isProductInCart } = useCartActions();

  const isInCart = isProductInCart(product);

  return (
    <React.Fragment>
      {isInCart ? (
        <Tooltip
          text={t('dashboard.removeFromCart')}
          position="top"
          disabled={tooltipDisabled}
        >
          <BaseButton
            label={hasLabel ? t('dashboard.removeFromCart') : ''}
            variant="danger"
            iconEnd={<ShoppingCartIcon className="w-5 h-5" />}
            onClick={() => handleCartToggle(product)}
          />
        </Tooltip>
      ) : (
        <Tooltip
          text={t('dashboard.addToCart')}
          position="top"
          disabled={tooltipDisabled}
        >
          <BaseButton
            label={hasLabel ? t('dashboard.addToCart') : ''}
            variant="primary"
            iconEnd={<ShoppingCartIcon className="w-5 h-5" />}
            onClick={() => handleCartToggle(product)}
          />
        </Tooltip>
      )}
    </React.Fragment>
  );
};

export default CartToggleButton;
