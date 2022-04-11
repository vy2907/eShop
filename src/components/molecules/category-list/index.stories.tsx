import React from 'react';
import { storiesOf } from '@storybook/react';
import { ICategory } from 'src/model/iCategory';
import { CategoryList } from '.';
import { Category } from 'src/components/atoms/category';

export const categories: ICategory[] = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  },
];

storiesOf('Components/Molecules/CategoryList', module).add('normal', () => (
  <CategoryList>
    {categories.map(category => (
      <Category key={category.id} category={category} />
    ))}
  </CategoryList>
));
