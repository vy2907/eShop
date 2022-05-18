import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IProduct } from './product.context';

export interface CartItem extends IProduct {
  quantity: number;
}

export interface ICart {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItem[];
  addItemToCart: (productToAdd: IProduct) => void;
  cartItemCount: number;
}

const INITIAL_CART_CONTEXT: ICart = {
  isCartOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setIsCartOpen: (value: SetStateAction<boolean>) => null,
  cartItems: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addItemToCart: () => {},
  cartItemCount: 0,
};

export const addCartItem: (cartItems: CartItem[], productToAdd: IProduct) => CartItem[] = (
  cartItems: CartItem[],
  productToAdd: IProduct
) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const CartContext = createContext(INITIAL_CART_CONTEXT);

export const CartProvider: React.FC = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartItemCount(count);
  }, [cartItems]);

  const addItemToCart = (productToAdd: IProduct) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartItemCount };
  // eslint-disable-next-line react/react-in-jsx-scope
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
