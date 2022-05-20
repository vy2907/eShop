import React, { useContext } from 'react';
import { CartContext, CartItem } from 'src/setting/context/cart.context';

export interface CheckoutItemProps {
  cartItem: CartItem;
}

export const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="a-checkout-item">
      <div className="a-checkout-item__img">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="a-checkout-item__name">{name}</span>
      <div className="a-checkout-item__quantity">
        <span className="a-checkout-item__arrow" onClick={removeItemHandler}>
          &#10094;
        </span>
        <span className="a-checkout-item__value">{quantity}</span>
        <span className="a-checkout-item__arrow" onClick={addItemHandler}>
          &#10095;
        </span>
      </div>
      <span className="a-checkout-item__price">{price}</span>
      <div className="a-checkout-item__button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
