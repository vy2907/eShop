import React, { useContext } from 'react';
import { CheckoutItem } from 'src/components/atoms/checkout-item';
import { CartContext } from 'src/setting/context/cart.context';

export const Checkout: React.FC = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="m-checkout">
      <ul className="m-checkout__header">
        <li>Product</li>
        <li>Description</li>
        <li>Quantity</li>
        <li>Price</li>
        <li>Remove</li>
      </ul>
      {cartItems.map(cartItem => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="m-checkout__total"> Total: ${cartTotal}</span>
    </div>
  );
};
