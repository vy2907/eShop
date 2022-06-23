import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from 'src/components/atoms/product-card';
import { CategoriesContext, IProduct } from 'src/setting/context/categories.context';

export const Category: React.FC = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState<IProduct[]>(category ? categoriesMap[category] : []);

  useEffect(() => {
    category && setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category && category.toUpperCase()}</h2>
      <div className="m-category">
        {products && products.map((product: IProduct) => <ProductCard key={product.id} product={product} />)}
      </div>
    </Fragment>
  );
};
