import React from 'react';
import DocumentTitle from 'react-document-title';

import './not-found.scss';

const NotFound = () => (
  <DocumentTitle title="Page not found">
    <div className="page-not-found-container">
      <h1 className="error-number">404</h1>
      <h3 className="title">Page not found</h3>
    </div>
  </DocumentTitle>
);

export default NotFound;
