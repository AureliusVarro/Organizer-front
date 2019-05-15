import React from "react";
import DocumentTitle from "react-document-title";

import internalUrls from "../../common/constants/internal-urls";

import "./notes-page.scss";
import Notebook from "../../modules/notebook/Notebook";

const NotesPage = () => (
  <DocumentTitle title={internalUrls.NOTES.pageTitle}>
    <div className="notes-page">
      <Notebook />
    </div>
  </DocumentTitle>
);

export default NotesPage;
