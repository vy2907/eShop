import React from 'react';
import { storiesOf } from '@storybook/react';
import { SignUpForm } from './';

storiesOf('Components/Molecules/SignUpForm', module).add('normal', () => (
  <SignUpForm>Sample text</SignUpForm>
));
