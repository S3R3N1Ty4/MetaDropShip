import { create } from 'zustand';
import api from '../lib/api';

interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  price: number;
  product: any;
}

interface CartStore {
  items: CartItem[];
  loading: boolean;
  fetchCart: (userId: string) => Promise<void>;
  addToCart: (productId: string, quantity: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  loading: false,

  fetchCart: async (userId: string) => {
    set({ loading: true });
    try {
      const response = await api.get('/cart');
      set({ items: response.data.items || [] });
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    } finally {
      set({ loading: false });
    }
  },

  addToCart: async (productId: string, quantity: number) => {
    try {
      await api.post('/cart/add', { productId, quantity });
      const state = get();
      await state.fetchCart('');
    } catch (error) {
      console.error('Failed to add to cart:', error);
      throw error;
    }
  },

  removeFromCart: async (productId: string) => {
    try {
      await api.delete(`/cart/${productId}`);
      const state = get();
      await state.fetchCart('');
    } catch (error) {
      console.error('Failed to remove from cart:', error);
      throw error;
    }
  },

  clearCart: async () => {
    try {
      await api.delete('/cart');
      set({ items: [] });
    } catch (error) {
      console.error('Failed to clear cart:', error);
      throw error;
    }
  },

  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
}));
