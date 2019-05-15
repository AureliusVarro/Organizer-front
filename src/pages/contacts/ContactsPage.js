import React from "react";
import DocumentTitle from "react-document-title";

import internalUrls from "../../common/constants/internal-urls";

import "./contacts-page.scss";
import ContactsList from "../../modules/contacts/ContactsList";

const ContactsPage = () => (
  <DocumentTitle title={internalUrls.CONTACTS.pageTitle}>
    <div className="contacts-page">
      <ContactsList />
    </div>
  </DocumentTitle>
);

export default ContactsPage;
