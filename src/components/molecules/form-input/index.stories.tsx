import React from 'react';
import { storiesOf } from '@storybook/react';
import { FormInput } from './';

storiesOf('Components/Molecules/FormInput', module).add('normal', () => (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  <FormInput label="Email" onChange={() => {}} />
));
