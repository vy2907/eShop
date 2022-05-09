import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProductCard } from './';

storiesOf('Components/Atoms/ProductCard', module).add('normal', () => (
  <ProductCard name={'Brown Brim'} imageUrl={'https://i.ibb.co/ZYW3VTp/brown-brim.png'} price={0}>
    Sample text
  </ProductCard>
));
