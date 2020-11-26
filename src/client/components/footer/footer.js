import React from 'react';
import './footer.styles.css';
import home from './home.png';
import profile from './profile.jpg';

const Footer = () => {
  return (
    <div className="footer">
      <img src={home} alt="home icon" className="home-icon" />
      <img src={profile} alt="profile icon" className="profile-icon" />
      <ul>
        <li className="home-paragraph">HOME</li>
        <li className="profile-paragraph">PROFILE</li>
      </ul>
    </div>
  );
};

export default Footer;
