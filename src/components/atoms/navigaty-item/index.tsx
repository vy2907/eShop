import React from 'react';
import { Link } from 'react-router-dom';

export interface NavigatyItemProps {
  link: string;
  nameitem: string;
}

export const NavigatyItem: React.FC<NavigatyItemProps> = props => (
  <li className="a-navigaty-item">
    <Link className="a-navigaty-item__link" to={props.link}>
      {props.nameitem}
    </Link>
  </li>
);
