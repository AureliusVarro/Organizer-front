import React from 'react';
import DocumentTitle from 'react-document-title';
import Calendar from '../../modules/calendar/Calendar';

import internalUrls from '../../common/constants/internal-urls';

import './home-page.scss';

const HomePage = () => (
  <DocumentTitle title={internalUrls.HOME.pageTitle}>
    <div className="home-page">
      <Calendar />
    </div>
  </DocumentTitle>
);

export default HomePage;
