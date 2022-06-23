import React, { useContext } from 'react';
import { CategoryPreview } from 'src/components/atoms/category-preview';
import { CategoriesContext } from 'src/setting/context/categories.context';

export const CategoriesPreview: React.FC = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </>
  );
};
