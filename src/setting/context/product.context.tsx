import { createContext, useState } from 'react';

import PRODUCTS from '../../../src/shop-data.json';

export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

const INITIAL_PRODUCT_CONTEXT: IProduct[] = [];

export const ProductsContext = createContext({ products: INITIAL_PRODUCT_CONTEXT });

export const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  // eslint-disable-next-line react/react-in-jsx-scope
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
