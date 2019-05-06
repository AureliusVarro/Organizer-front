import React from 'react';
import DocumentTitle from 'react-document-title';

import internalUrls from '../../common/constants/internal-urls';

import './contacts-page.scss';

const ContactsPage = () => (
  <DocumentTitle title={internalUrls.CONTACTS.pageTitle}>
    <div className="contacts-page">
      <h1>ContactsPage</h1>
    </div>
  </DocumentTitle>
);

export default ContactsPage;
