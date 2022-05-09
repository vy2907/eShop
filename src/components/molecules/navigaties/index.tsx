import React, { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from 'src/assets/images/logo.svg';
import { DropdownCard } from 'src/components/atoms/dropdown-card';
import { IconCart } from 'src/components/atoms/icon-cart';
import { NavigatyItem } from 'src/components/atoms/navigaty-item';
import { CartContext } from 'src/setting/context/card.context';
import { UserContext } from 'src/setting/context/user.context';
import { signOutUser } from 'src/setting/firebase';

export const Navigaties: React.FC = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="m-navigaties">
        <Link className="m-navigaties__logo" to="/">
          <img src={logo} />
        </Link>
        <ul className="m-navigaties__list">
          <NavigatyItem link={'/shop'} nameitem={'Shop'}></NavigatyItem>
          {currentUser ? (
            <span className="m-navigaties__list--signout" onClick={signOutUser}>
              Sign out
            </span>
          ) : (
            <NavigatyItem link={'/sign-in'} nameitem={'Sign in'}></NavigatyItem>
          )}
          <IconCart />
        </ul>
        {isCartOpen && <DropdownCard />}
      </div>
      <Outlet />
    </Fragment>
  );
};
