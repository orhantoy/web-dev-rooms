import React from 'react';
import EventsPage from '../EventsPage/EventsPage.component';
import { AppHeader } from '../Appheader/AppHeader.component';
import Footer from '../footer/footer';
import './EventsPageComplete.styles.css';
import Header from '../Heading/Heading';

function EventsPageComplete() {
  return (
    <div className="events-page">
      <AppHeader className="app-header" />
      <Header />
      <EventsPage />
      <Footer />
    </div>
  );
}

export default EventsPageComplete;
