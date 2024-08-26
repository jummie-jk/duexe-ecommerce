import { create } from "zustand";
import axios from "axios";

interface Product {
  photos: any;
  id: number;
  image: string;
  name: string;
  rating: string;
  badgeValue: string;
  available_quantity: string;
  category?: string;
  current_price: string;
  description: string;
}

interface ProductsState {
  products: Product[];
  product: Product | null;
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  fetchProduct: (productId: number) => Promise<void>;
}

const initialState: ProductsState = {
  error: null,
  products: [],
  product: null,
  isLoading: false,
  fetchProducts: async () => {},
  fetchProduct:  async () => {},
};

const useProductsStore = create<ProductsState>((set) => ({
  ...initialState,
  fetchProducts: async () => {
    set({ isLoading: true });
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        set({ products: data.items });
      });
  },

  fetchProduct: async (productId: number) => {
    set({ isLoading: true });

    try {
      const response = await axios.get(`/api/products/${productId}`);

      if (!response.data.success) {
        throw new Error(response.data.message || 'Failed to fetch product details');
      }

      const product: Product = response.data.product; 
      set({ product, isLoading: false });
    } catch (error) {
      console.error('Error fetching product details:', error);
      set({ error: 'Failed to fetch product details', isLoading: false });
    }
  },
}));
export default useProductsStore;
