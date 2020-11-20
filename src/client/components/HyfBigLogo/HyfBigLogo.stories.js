import React from 'react';
import HyfBigLogo from './HyfBigLogo';
import { withKnobs } from '@storybook/addon-knobs';

export default { title: 'HyfBigLogo Component', decorators: [withKnobs] };

export const HyfLogo = () => {
  return <HyfBigLogo title="WEB DEV ROOMS" />;
};
