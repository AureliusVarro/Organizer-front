import React from "react";
import DocumentTitle from "react-document-title";

import internalUrls from "../../common/constants/internal-urls";

import "./notes-page.scss";

import Notebook from "../../modules/notebook/Notebook";
import NotebookDialogContainer from "../../modules/notebook/components/NotebookDialogContainer";

const NotesPage = () => (
  <DocumentTitle title={internalUrls.NOTES.pageTitle}>
    <div className="notes-page">
      <NotebookDialogContainer />
      <Notebook />
    </div>
  </DocumentTitle>
);

export default NotesPage;
