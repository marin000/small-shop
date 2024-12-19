import { CartStoreState } from '@/types/cart';
import { Product } from '@/types/product';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const addProductToCart = (
  state: CartStoreState,
  product: Product,
  quantity: number
) => {
  const existingProduct = state.cartItems.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    return {
      cartItems: state.cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      ),
    };
  } else {
    return {
      cartItems: [
        ...state.cartItems,
        { ...product, quantity: Math.max(1, quantity) },
      ],
    };
  }
};

const updateProductQuantity = (
  state: CartStoreState,
  productId: number,
  quantity: number
) => {
  return {
    cartItems: state.cartItems.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    ),
  };
};

const removeProductFromCart = (
  state: CartStoreState,
  productId: number
) => {
  return {
    cartItems: state.cartItems.filter(
      (item) => item.id !== productId
    ),
  };
};

const clearAllCartItems = () => {
  return {
    cartItems: [],
  };
};

const useCartStore = create<CartStoreState>()(
  devtools(
    persist(
      (set) => ({
        cartItems: [],
        addToCart: (product: Product, quantity: number) =>
          set((state) => addProductToCart(state, product, quantity)),
        updateCartItem: (productId: number, quantity: number) =>
          set((state) =>
            updateProductQuantity(state, productId, quantity)
          ),
        removeFromCart: (productId: number) =>
          set((state) => removeProductFromCart(state, productId)),
        clearCart: () => set(() => clearAllCartItems()),
      }),
      {
        name: 'cart-storage',
      }
    )
  )
);

export default useCartStore;
