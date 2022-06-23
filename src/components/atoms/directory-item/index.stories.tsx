import React from 'react';
import { storiesOf } from '@storybook/react';
import { ICategory } from 'src/model/iCategory';

import image from 'src/assets/images/hats.png';
import { DirectoryItem } from '.';

export const directory: ICategory = {
  id: 1,
  title: 'hats',
  imageUrl: image,
};

storiesOf('Components/Atoms/DirectoryItem', module).add('normal', () => (
  <DirectoryItem directory={directory} />
));
