import React from 'react';
import Input from './Input';

export default { title: 'Input' };

export const Fullname = () => <Input placeholder="Full Name..." />;
export const Codepenlink = () => <Input placeholder="Codepen Link" />;
export const Slacklink = () => (
  <Input placeholder="https://slack.com/meeting..." />
);
