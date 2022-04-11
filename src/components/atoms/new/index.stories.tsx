import React from 'react';
import { storiesOf } from '@storybook/react';
import { New } from './';

storiesOf('Components/Atoms/New', module).add('normal', () => <New>Sample text</New>);
