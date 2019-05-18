import React from "react";
import DocumentTitle from "react-document-title";

import internalUrls from "../../common/constants/internal-urls";

import "./contacts-page.scss";
import ContactsList from "../../modules/contacts/ContactsList";
import ContactDialogContainer from "../../modules/contacts/components/ContactDialogContainer";

const ContactsPage = () => (
  <DocumentTitle title={internalUrls.CONTACTS.pageTitle}>
    <div className="contacts-page">
      <ContactDialogContainer />
      <ContactsList />
    </div>
  </DocumentTitle>
);

export default ContactsPage;
