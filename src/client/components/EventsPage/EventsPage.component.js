import React from 'react';
import { StudyGroupLogo } from '../StudyGroupLogo/StudyGroupLogo';
import './EventsPage.styles.css';

function EventsPage() {
  return (
    <div>
      <div>Study Groups for Class15</div>
      <div className="main-container">
        <div className="top-part">
          <div className="logo-part">
            <div className="event-logo">
              <StudyGroupLogo />
            </div>
            <div className="right-part">
              <div className="event-group">Elastic - Week 46</div>
              <div className="event-date">Wednesday | 11 Nov 20 | 10:00</div>
              <div className="mentor-name">mentors name</div>
              <div className="event-link">link to registoration</div>
            </div>
          </div>
        </div>

        <button type="button" className="register-btn">
          Register Yourself
        </button>
      </div>
    </div>
  );
}

export default EventsPage;
