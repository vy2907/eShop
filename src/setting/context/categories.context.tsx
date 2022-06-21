import { createContext, useEffect, useState } from 'react';
import { getCategoriesAndDocuments } from '../firebase';

export interface IProduct {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ICategoryProduct {
  [key: string]: IProduct[];
}

const INITIAL_PRODUCT_CONTEXT: ICategoryProduct = {};

export const CategoriesContext = createContext({ categoriesMap: INITIAL_PRODUCT_CONTEXT });

export const CategoriesProvider: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categoriesMap, setCategoriesMap] = useState<ICategoryProduct>({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      // eslint-disable-next-line no-console
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  // eslint-disable-next-line react/react-in-jsx-scope
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
