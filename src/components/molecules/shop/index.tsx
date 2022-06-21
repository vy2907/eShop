import React, { Fragment, useContext } from 'react';
import { ProductCard } from 'src/components/atoms/product-card';
import { CategoriesContext } from 'src/setting/context/categories.context';

export const Shop: React.FC = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map(title => (
        <Fragment key={title}>
          <h2 className="title">{title}</h2>
          <div className="m-shop">
            {categoriesMap[title].map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};
