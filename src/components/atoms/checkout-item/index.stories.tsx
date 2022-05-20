import React from 'react';
import { storiesOf } from '@storybook/react';
import { CheckoutItem } from './';
import { CartItem } from 'src/setting/context/cart.context';

storiesOf('Components/Atoms/CheckoutItem', module).add('normal', () => {
  const cartItem: CartItem = {
    name: 'Brown Brim',
    quantity: 1,
    id: 1,
    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    price: 0,
  };
  return <CheckoutItem cartItem={cartItem}>Sample text</CheckoutItem>;
});
