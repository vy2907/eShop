import React from 'react';
import { storiesOf } from '@storybook/react';
import { NavigatyItem } from '.';

storiesOf('Components/Atoms/NavigatyItem', module).add('normal', () => (
  <NavigatyItem link={'/'} nameitem={'shop'}></NavigatyItem>
));
