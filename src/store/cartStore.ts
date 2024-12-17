import { CartStoreState } from '@/types/cart';
import { Product } from '@/types/product';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const addProductToCart = (
  state: CartStoreState,
  product: Product
) => {
  const existingItem = state.cartItems.find(
    (item) => item.id === product.id
  );
  if (existingItem) {
    return {
      cartItems: state.cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  } else {
    return {
      cartItems: [...state.cartItems, { ...product, quantity: 1 }],
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
      item.id === productId ? { ...item, quantity } : item
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
        addToCart: (product: Product) =>
          set((state) => addProductToCart(state, product)),
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
