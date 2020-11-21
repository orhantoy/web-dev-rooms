import React from 'react';

import { AppHeader } from './AppHeader.component';

export default {
  title: 'appHeader',
};

export const appHeader = () => <AppHeader />;

/*

// the second method withknobs and files (props)

import { withKnobs } from '@storybook/addon-knobs'; // use withknobs when you are working with more than one img file or you want to try things around
import Vector from './Vector.svg'; // css and propreties come directly within the svg file
import React from 'react';
import { AppHeader } from './AppHeader'; // the component that you are working with

export default {
  // what you see @ bookstory list
  title: 'AppHeader',
  decorators: [withKnobs],
};

export const appHeader = () => <AppHeader path={Vector} />; // exported component with the path (explore ur folder to see the img/svg)
 */
