import React from 'react';
import { storiesOf } from '@storybook/react';
import { DropdownCard } from './';

storiesOf('Components/Atoms/DropdownCard', module).add('normal', () => (
  <DropdownCard>Sample text</DropdownCard>
));
