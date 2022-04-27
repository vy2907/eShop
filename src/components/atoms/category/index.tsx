import React from 'react';
import { ICategory } from 'src/model/iCategory';
export interface CategoryProps {
  category: ICategory;
}

export const Category: React.FC<CategoryProps> = ({ category }) => (
  <li className="a-category">
    <img className="a-category__image" src={category.imageUrl} />
    <div className="a-category__body">
      <h2>{category.title}</h2>
      <p>Shop Now</p>
    </div>
  </li>
);
