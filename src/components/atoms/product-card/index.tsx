import React from 'react';
import { Button } from '../button';

export interface IProductCard {
  name: string;
  imageUrl: string;
  price: number;
}

export const ProductCard: React.FC<IProductCard> = props => {
  return (
    <div className="a-product-card">
      <img className="a-product-card__img" src={props.imageUrl} alt={`${props.name}`} />
      <div className="a-product-card__footer">
        <span className="a-product-card__footer--name">{props.name}</span>
        <span className="a-product-card__footer--price">{props.price}</span>
      </div>
      <Button modifiers="inverted">Add to card</Button>
    </div>
  );
};
