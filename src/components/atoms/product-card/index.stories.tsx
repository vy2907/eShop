import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductCard } from './';
import { IProduct } from 'src/setting/context/product.context';

storiesOf('Components/Atoms/ProductCard', module).add('normal', () => {
  const product: IProduct = {
    id: 1,
    name: 'Brown Brim',
    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    price: 25,
  };

  return <ProductCard product={product}>Sample text</ProductCard>;
});
