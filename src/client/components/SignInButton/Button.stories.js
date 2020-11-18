import React from 'react';
import Button from './Button';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Sign in Button',
  component: Button,
};

export const SignButton = () => (
  <Button click={action('clicked')}>
    <img
      alt="Sign in with Slack"
      src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
      srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
    />
  </Button>
);
