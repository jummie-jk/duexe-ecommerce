import {create} from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  photos: any;
  id: number;
  image: string;
  name: string;
  rating: string;
  prevPrice: string;
  category?: string;
  slashPrice: string;
  quantity?: number,
  badgeValue: string;
  description: string;
  available_quantity:  string;
}

interface CartState {
  isAdded: boolean;
  cartItems: CartItem[];
  totalPrice: number,
  clearCart: () => void;
  setIsAdded: (isAdded: boolean) => void;
  addItemToCart: (newItem: CartItem) => void;
  removeItemFromCart: (itemId: number) => void;
  updateProductQuantity: (itemId: string, newQuantity: number) => void;
}
const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      isAdded: false,
      totalPrice:0,

      addItemToCart: (newItem: CartItem) => {
        set((state) => ({
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }], // Set initial quantity to 1
          isAdded: true,
        }));
      },
      
      setIsAdded: (isAdded: boolean) => set({ isAdded: isAdded }),

      removeItemFromCart: (itemId: number) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== itemId),
        }));
      },

      updateProductQuantity: (itemId, quantity) => {
        set((state) => {
          const updatedCartItems = state.cartItems.map((item) =>
            item.id.toString() === itemId ? { ...item, quantity } : item
          );

          const updatedTotalPrice = updatedCartItems.reduce((acc, item) => {
            const price = parseFloat(item.prevPrice);
            const quantity = item.quantity || 1;
            return acc + price * quantity;
          }, 0);

          return {
            cartItems: updatedCartItems,
            totalPrice: updatedTotalPrice,
          };
        });
      },

    clearCart: () => set({ cartItems: [] }),
  }),
    {
      name: "cart-storage", 
    }
  )
);


  export default useCartStore;
