import React from 'react';
import { CartItem } from '@/types/cart';
import useCartStore from '@/store/cartStore';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CartItemCard from './components/cards/cartItemCard';
import CartFooter from './components/cartFooter';

const Cart: React.FC = () => {
  const { t } = useTranslation();
  const { cartItems, removeFromCart, updateCartItem } = useCartStore(
    (state) => state
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.details.price * item.quantity,
    0
  );

  const cartEmpty = cartItems.length === 0;

  return (
    <div className="max-w-4xl mx-auto flex flex-col min-h-screen">
      <h1 className="text-2xl mb-4">{t('cart.title')}</h1>

      <div className="flex-1 pb-32 w-full">
        {cartEmpty ? (
          <div className="text-center text-gray-600">
            {t('cart.cartEmpty')}{' '}
            <Link to="/" className="text-blue-500 hover:underline">
              {t('cart.goShopping')}
            </Link>
          </div>
        ) : (
          cartItems.map((item: CartItem) => (
            <CartItemCard
              key={item.id}
              item={item}
              onRemove={() => removeFromCart(item.id)}
              onUpdateQuantity={(newQuantity) =>
                updateCartItem(item.id, newQuantity)
              }
            />
          ))
        )}
      </div>
      {!cartEmpty && <CartFooter totalPrice={totalPrice} />}
    </div>
  );
};

export default Cart;
