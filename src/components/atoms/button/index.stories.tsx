import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './';

storiesOf('Components/Atoms/Button', module)
  .add('normal', () => <Button>Sample text</Button>)
  .add('google-sign-in', () => <Button modifiers="google-sign-in">google-sign-in</Button>)
  .add('inverted', () => <Button modifiers="inverted">sign in</Button>);
