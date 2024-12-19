import React from 'react';
import { Link } from 'react-router-dom';
import BaseButton from '@/components/baseButton';
import { useTranslation } from 'react-i18next';
import BaseCard from '@/components/baseCard';

interface CartFooterProps {
  totalPrice: number;
}

const CartFooter: React.FC<CartFooterProps> = ({ totalPrice }) => {
  const { t } = useTranslation();
  return (
    <BaseCard className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-300 hover:shadow-lg transition w-full max-w-[36rem] p-4">
      <div className="mb-4 text-right">
        <p className="text-xl font-semibold">
          {t('cart.cartTotalPrice')} {totalPrice.toFixed(2)}€
        </p>
      </div>

      <div className="flex justify-between items-center">
        <Link to="/">
          <BaseButton label={t('cart.buttonBack')} variant="black" />
        </Link>
        <Link to="/checkout">
          <BaseButton label={t('cart.checkout')} variant="success" />
        </Link>
      </div>
    </BaseCard>
  );
};

export default CartFooter;
