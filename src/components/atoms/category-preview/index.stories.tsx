import React from 'react';
import { storiesOf } from '@storybook/react';
import { CategoryPreview } from '.';

storiesOf('Components/Atoms/CategoryPreview', module).add('normal', () => (
  <CategoryPreview title={''} products={[]} />
));
