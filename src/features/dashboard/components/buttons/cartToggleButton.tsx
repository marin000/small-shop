import React from 'react';
import { Button } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import Tooltip from '@/components/tooltip';
import { useTranslation } from 'react-i18next';
import useCartActions from '@/hooks/useCartActions';
import { Product } from '@/types/product';

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
    <Tooltip
      text={
        isInCart
          ? t('dashboard.removeFromCart')
          : t('dashboard.addToCart')
      }
      position="top"
    >
      <Button
        onClick={() => handleCartToggle(product)}
        className="cursor-pointer hover:bg-gray-200 rounded-full ml-2 p-2 bg-gray-100"
      >
        {isInCart ? (
          <MinusIcon className="h-6 w-6 text-red-500" />
        ) : (
          <PlusIcon className="h-6 w-6 text-blue-500" />
        )}
      </Button>
    </Tooltip>
  );
};

export default CartToggleButton;
