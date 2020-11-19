import React from 'react';
import { AppHeader } from './AppHeader';

export default {
  title: 'appHeader',
};

export const appHeader = () => <AppHeader />;

/*

// the second method withknobs and files (props)

import { files, withKnobs } from '@storybook/addon-knobs'; // use withknobs when you are working with more than one img file
import React from 'react';
import { AppHeader } from './AppHeader'; // the component that you are working with

export default {
  // what you see @ bookstory list
  title: 'AppHeader',
  decorators: [withKnobs],
};

export const appHeader = () => <AppHeader path={files('images', '.svg')} />; // exported component with the path (explore ur folder to see the img/svg)
 */
