import { useToastContext } from '@/providers/toastContext';
import useCartStore from '@/store/cartStore';
import { Product } from '@/types/product';
import { useTranslation } from 'react-i18next';

const useCartActions = () => {
  const { t } = useTranslation();
  const { showToast } = useToastContext();
  const addToCart = useCartStore((state) => state.addToCart);
  const updateProductQuantity = useCartStore(
    (state) => state.updateCartItem
  );

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
      const productInCartQuantity =
        getProductFromCart(product)?.quantity || 0;
      const newQuantity = quantity + productInCartQuantity;
      updateProductQuantity(product.id, newQuantity);
    } else {
      addToCart(product, quantity);
      showToast(
        t('toast.dashboard.addedToCartTitle'),
        t('toast.dashboard.addedToCartMsg'),
        'success'
      );
    }
  };

  const getTotalPrice = () =>
    cart
      .reduce(
        (total, item) => total + item.details.price * item.quantity,
        0
      )
      .toFixed(2);

  return {
    addProductToCart,
    getProductFromCart,
    isProductInCart,
    getTotalPrice,
  };
};

export default useCartActions;
