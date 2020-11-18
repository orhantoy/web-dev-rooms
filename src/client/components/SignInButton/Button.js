import React from 'react';
import './Button.css';

const Button = ({ click }) => {
  const clicked = () => {
    click();
  };
  return (
    <button type="submit" className="button" onClick={clicked}>
      <img
        alt="Sign in with Slack"
        src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
        srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
      />
    </button>
  );
};
export default Button;
