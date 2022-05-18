import React from 'react';
import { CartItem } from 'src/setting/context/cart.context';

export interface CartItemProps {
  cartItem: CartItem;
}
export const ItemCart: React.FC<CartItemProps> = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <div className="a-cart-item">
      <img src={imageUrl} alt={`${name}`} />
      <div className="a-cart-item__details">
        <span className="a-cart-item__details--name">{name}</span>
        <span className="a-cart-item__details--price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
