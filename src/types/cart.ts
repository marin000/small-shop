import { Product } from './product';

interface CartItem extends Product {
  quantity: number;
}

export interface CartStoreState {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  updateCartItem: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}
