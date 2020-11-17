import React from 'react';
import Input from './Input';

export default { title: 'Input' };

export const Fullname = () => (
  <Input classname="large" placeholder="Full Name..." />
);
export const Codepenlink = () => (
  <Input classname="medium" placeholder="Codepen Link" />
);
export const Slacklink = () => (
  <Input classname="small" placeholder="https://slack.com/meeting..." />
);
