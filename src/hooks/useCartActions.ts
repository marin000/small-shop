import { useToastContext } from '@/providers/toastContext';
import useCartStore from '@/store/cartStore';
import { Product } from '@/types/product';
import { useTranslation } from 'react-i18next';

const useCartActions = () => {
  const { t } = useTranslation();
  const { showToast } = useToastContext();
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );
  const cart = useCartStore((state) => state.cartItems);

  const isProductInCart = (product: Product) =>
    cart.some((item) => item.id === product.id);

  const handleCartToggle = (product: Product) => {
    if (isProductInCart(product)) {
      removeFromCart(product.id);
      showToast(
        t('toast.dashboard.removedToCartTitle'),
        t('toast.dashboard.removedToCartMsg'),
        'info'
      );
    } else {
      addToCart(product);
      showToast(
        t('toast.dashboard.addedToCartTitle'),
        t('toast.dashboard.addedToCartMsg'),
        'success'
      );
    }
  };

  return { handleCartToggle, isProductInCart };
};

export default useCartActions;
