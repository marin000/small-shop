import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BaseButton from '@/components/baseButton';
import { useTranslation } from 'react-i18next';
import BaseCard from '@/components/baseCard';
import useUserActions from '@/hooks/useUserActions';

interface CartFooterProps {
  totalPrice: string;
}

const CartFooter: React.FC<CartFooterProps> = ({ totalPrice }) => {
  const { t } = useTranslation();
  const { isUserLoggedIn } = useUserActions();
  const userLoggedIn = isUserLoggedIn();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    localStorage.setItem('lastVisitedPage', location.pathname);
    navigate('/login');
  };
  return (
    <BaseCard className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-300 hover:shadow-lg transition w-full max-w-[36rem] p-4">
      <div className="mb-4 text-right">
        <p className="text-xl font-semibold">
          {t('cart.cartTotalPrice')} {totalPrice}€
        </p>
      </div>
      <div className="flex justify-between items-center">
        <Link to="/">
          <BaseButton label={t('cart.buttonBack')} variant="black" />
        </Link>
        {userLoggedIn ? (
          <Link to="/checkout">
            <BaseButton
              label={t('cart.checkout')}
              variant="success"
              disabled={!userLoggedIn}
            />
          </Link>
        ) : (
          <BaseButton
            label={t('cart.loginButton')}
            variant="primary"
            onClick={handleLoginRedirect}
          />
        )}
      </div>
    </BaseCard>
  );
};

export default CartFooter;
