import React from 'react';
import DocumentTitle from 'react-document-title';

import internalUrls from '../../common/constants/internal-urls';

import './todo-page.scss';

const TodoPage = () => (
  <DocumentTitle title={internalUrls.TODO.pageTitle}>
    <div className="todo-page">
      <h1>TodoPage</h1>
    </div>
  </DocumentTitle>
);

export default TodoPage;
