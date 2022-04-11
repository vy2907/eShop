import React from 'react';
import { storiesOf } from '@storybook/react';
import { ICategory } from 'src/model/iCategory';
import { Category } from '.';

import image from 'src/assets/images/hats.png';

export const category: ICategory = {
  id: 1,
  title: 'hats',
  imageUrl: image,
};

storiesOf('Components/Atoms/Category', module).add('normal', () => <Category category={category} />);
