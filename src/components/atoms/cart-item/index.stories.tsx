import React from 'react';
import { storiesOf } from '@storybook/react';
import { ItemCart } from '.';
import { CartItem } from 'src/setting/context/cart.context';

storiesOf('Components/Atoms/CartItem', module).add('normal', () => {
  const cartItem: CartItem = {
    name: 'Brown Brim',
    quantity: 1,
    id: 1,
    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    price: 0,
  };
  return <ItemCart cartItem={cartItem}>Sample text</ItemCart>;
});
