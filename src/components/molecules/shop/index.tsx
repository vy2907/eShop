import React, { useContext } from 'react';
import { ProductCard } from 'src/components/atoms/product-card';
import { ProductsContext } from 'src/setting/context/product.context';

export const Shop: React.FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="m-shop">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
