import React from "react";
import DocumentTitle from "react-document-title";
import CalendarContainer from "../../modules/calendar/CalendarContainer";

import internalUrls from "../../common/constants/internal-urls";

import "./home-page.scss";

const HomePage = () => (
  <DocumentTitle title={internalUrls.HOME.pageTitle}>
    <div className="home-page">
      <CalendarContainer />
    </div>
  </DocumentTitle>
);

export default HomePage;
