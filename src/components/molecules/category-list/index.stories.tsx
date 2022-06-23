import React from 'react';
import { storiesOf } from '@storybook/react';
import { ICategory } from 'src/model/iCategory';
import { CategoryList } from '.';

import hatsImage from 'src/assets/images/hats.png';
import jacketsImage from 'src/assets/images/jackets.png';
import menImage from 'src/assets/images/men.png';
import sneakersImage from 'src/assets/images/sneakers.png';
import womensImage from 'src/assets/images/womens.png';
import { DirectoryItem } from 'src/components/atoms/directory-item';
import { directory } from 'src/components/atoms/directory-item/index.stories';

export const categories: ICategory[] = [
  {
    id: 1,
    title: 'hats',
    imageUrl: hatsImage,
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: jacketsImage,
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: sneakersImage,
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: womensImage,
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: menImage,
  },
];

storiesOf('Components/Molecules/CategoryList', module).add('normal', () => (
  <CategoryList>
    {categories.map(category => (
      <DirectoryItem key={category.id} directory={directory} />
    ))}
  </CategoryList>
));
