import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IProduct } from './categories.context';

export interface CartItem extends IProduct {
  quantity: number;
}

export interface ICart {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  cartItems: CartItem[];
  addItemToCart: (productToAdd: IProduct) => void;
  removeItemFromCart: (cartItemToRemove: IProduct) => void;
  clearItemFromCart: (cartItemToClear: IProduct) => void;
  cartItemCount: number;
  cartTotal: number;
}

const INITIAL_CART_CONTEXT: ICart = {
  isCartOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setIsCartOpen: (value: SetStateAction<boolean>) => null,
  cartItems: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addItemToCart: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeItemFromCart: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  clearItemFromCart: () => {},
  cartItemCount: 0,
  cartTotal: 0,
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

export const removeCartItem: (cartItems: CartItem[], cartItemToRemove: IProduct) => CartItem[] = (
  cartItems: CartItem[],
  cartItemToRemove: IProduct
) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  );
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: IProduct) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext(INITIAL_CART_CONTEXT);

export const CartProvider: React.FC = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartItemCount(count);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd: IProduct) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove: IProduct) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear: IProduct) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };
  // eslint-disable-next-line react/react-in-jsx-scope
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
