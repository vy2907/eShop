import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from 'src/assets/images/logo.svg';
import { NavigatyItem } from 'src/components/atoms/navigaty-item';

export const Navigaties: React.FC = () => (
  <Fragment>
    <div className="m-navigaties">
      <Link className="m-navigaties__logo" to="/">
        <img src={logo} />
      </Link>
      <ul className="m-navigaties__list">
        <NavigatyItem link={'/shop'} nameitem={'Shop'}></NavigatyItem>
        <NavigatyItem link={'/sign-in'} nameitem={'Sign in'}></NavigatyItem>
      </ul>
    </div>
    <Outlet />
  </Fragment>
);
