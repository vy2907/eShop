import React from 'react';
import { storiesOf } from '@storybook/react';
import { CategoryReview } from './';

storiesOf('Components/Atoms/CategoryReview', module).add('normal', () => (
  <CategoryReview>Sample text</CategoryReview>
));
