import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Example } from './Example';

export default {
  title: 'Example',
  decorators: [withKnobs],
};

export const DefaultUsage = () => (
  <>
    <Example
      title={text('Title', 'Title of the component')}
      text={text('Text inside the component', 'Initial example text')}
    />
  </>
);

export const ExampleWithoutText = () => (
  <>
    <Example title={text('Title', 'Title of the component')} />
  </>
);
