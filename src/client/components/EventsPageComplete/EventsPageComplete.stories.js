import React from 'react';
import EventsPageComplete from './EventsPageComplete';
import ElasticLogo from '../StudyGroupLogo/Elastic.logo.svg';

export default { title: 'EventsPageComplete' };

export const Complete = () => (
  <EventsPageComplete
    path={ElasticLogo}
    title="Elastic - Week 46"
    datetime="Thursday | 12 Nov 20|13:00 CEST"
    mentor="Orhan"
    link="www.hyf.org"
  >
    Register Yourself
  </EventsPageComplete>
);
