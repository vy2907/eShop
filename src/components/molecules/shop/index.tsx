import React, { useContext } from 'react';
import { ProductCard } from 'src/components/atoms/product-card';
import { ProductsContext } from 'src/setting/context/product.context';

export const Shop: React.FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="m-shop">
      {products.map(IProduct => (
        <ProductCard
          key={IProduct.id}
          name={IProduct.name}
          imageUrl={IProduct.imageUrl}
          price={IProduct.price}
        />
      ))}
    </div>
  );
};
