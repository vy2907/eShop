import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from 'src/setting/context/cart.context';
import { Button } from '../button';
import { ItemCart } from '../cart-item';

export const DropdownCard: React.FC = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  return (
    <div className="a-dropdown-card">
      <div className="a-dropdown-card__items">
        {cartItems.map(item => (
          <ItemCart key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClickRequest={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};
