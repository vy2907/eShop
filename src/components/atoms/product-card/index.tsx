import React, { useContext } from 'react';
import { CartContext } from 'src/setting/context/cart.context';
import { IProduct } from 'src/setting/context/product.context';
import { Button } from '../button';

export interface IProductCard {
  product: IProduct;
}

export const ProductCard: React.FC<IProductCard> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="a-product-card">
      <img className="a-product-card__img" src={imageUrl} alt={`${name}`} />
      <div className="a-product-card__footer">
        <span className="a-product-card__footer--name">{name}</span>
        <span className="a-product-card__footer--price">{price}</span>
      </div>
      <Button modifiers="inverted" onClickRequest={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};
