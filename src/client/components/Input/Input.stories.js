import React from 'react';
import Input from './Input';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

export default { title: 'Input', decorators: [withKnobs] };

export const Inputfield = () => (
  <Input
    disabled={boolean('Disabled', false)}
    text={text('placeholder', 'Fullname')}
  />
);
