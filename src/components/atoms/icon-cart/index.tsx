import React, { useContext } from 'react';
import { CartContext } from 'src/setting/context/cart.context';
import iconcart from '../../../../src/assets/images/shopping-bag.svg';

export const IconCart: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="a-icon-cart" onClick={toggleIsCartOpen}>
      <img src={iconcart} className="a-icon-cart__icon" />
      <span className="a-icon-cart__item-count">{cartItemCount}</span>
    </div>
  );
};
