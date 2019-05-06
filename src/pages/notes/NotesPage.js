import React from 'react';
import DocumentTitle from 'react-document-title';

import internalUrls from '../../common/constants/internal-urls';

import './notes-page.scss';

const NotesPage = () => (
  <DocumentTitle title={internalUrls.NOTES.pageTitle}>
    <div className="notes-page">
      <h1>NotesPage</h1>
    </div>
  </DocumentTitle>
);

export default NotesPage;
