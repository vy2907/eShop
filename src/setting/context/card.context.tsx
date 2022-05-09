import { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface ICard {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}

const INITIAL_CARD_CONTEXT: ICard = {
  isCartOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setIsCartOpen: (value: SetStateAction<boolean>) => null,
};

export const CartContext = createContext(INITIAL_CARD_CONTEXT);

export const CartProvider: React.FC = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  // eslint-disable-next-line react/react-in-jsx-scope
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
