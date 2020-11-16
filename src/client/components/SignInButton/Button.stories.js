import React from 'react';
import Button from './Button';
import { withKnobs, text } from '@storybook/addon-knobs/react';

export default {
  title: 'Sign in Button',
  component: Button,
  decorators: [withKnobs],
};

export const ActiveKnobs = () => (
  <Button>{text('Label', 'Sign in with Slack')}</Button>
);
