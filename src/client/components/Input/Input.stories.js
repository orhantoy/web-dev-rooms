import React from "react";
import Input from "./Input";

export default { title: "Input" };

export const Fullname = () => (
  <Input className="large" placeholder="Full Name..." />
);
export const Codepenlink = () => (
  <Input className="medium" placeholder="Codepen Link" />
);
export const Slacklink = () => (
  <Input className="small" placeholder="https://slack.com/meeting..." />
);
