import { Product } from './product';

export interface CartItem extends Product {
  quantity: number;
}

export interface CartStoreState {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateCartItem: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}
