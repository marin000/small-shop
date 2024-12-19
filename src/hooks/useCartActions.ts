import { useToastContext } from '@/providers/toastContext';
import useCartStore from '@/store/cartStore';
import { Product } from '@/types/product';
import { useTranslation } from 'react-i18next';

const useCartActions = () => {
  const { t } = useTranslation();
  const { showToast } = useToastContext();
  const addToCart = useCartStore((state) => state.addToCart);

  const cart = useCartStore((state) => state.cartItems);

  const isProductInCart = (product: Product) =>
    cart.some((item) => item.id === product.id);

  const getProductFromCart = (product: Product) =>
    cart.find((item) => item.id === product.id);

  const addProductToCart = (product: Product, quantity: number) => {
    if (isProductInCart(product)) {
      showToast(
        t('toast.dashboard.updateCartTitle'),
        t('toast.dashboard.updateCartMsg'),
        'info'
      );
    } else {
      addToCart(product, quantity);
      showToast(
        t('toast.dashboard.addedToCartTitle'),
        t('toast.dashboard.addedToCartMsg'),
        'success'
      );
    }
  };

  return { addProductToCart, getProductFromCart, isProductInCart };
};

export default useCartActions;
