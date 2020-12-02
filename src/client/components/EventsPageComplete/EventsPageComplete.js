import React from 'react';
import PropTypes from 'prop-types';
// import EventsPage from '../EventsPage/EventsPage.component';
import { AppHeader } from '../Appheader/AppHeader.component';
import Footer from '../footer/footer';
import './EventsPageComplete.styles.css';
import Header from '../Heading/Heading';
import { CardWithEventsOrStudyGroups } from '../CardWithEventsOrStudyGroups/CardWithEventsOrStudyGroups';

function EventsPageComplete() {
  return (
    <div className="events-page">
      <AppHeader id="app-header" />
      <Header id="header" />
      <CardWithEventsOrStudyGroups id="event-card" />
      <Footer id="footer" />
    </div>
  );
}

CardWithEventsOrStudyGroups.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  datetime: PropTypes.string,
  mentor: PropTypes.string,
  link: PropTypes.string,
};

CardWithEventsOrStudyGroups.defaultProps = {
  path: '',
  children: '',
  title: '',
  datetime: '',
  mentor: '',
  link: '',
};

export default EventsPageComplete;
