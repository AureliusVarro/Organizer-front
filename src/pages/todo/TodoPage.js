import React from "react";
import DocumentTitle from "react-document-title";

import internalUrls from "../../common/constants/internal-urls";

import "./todo-page.scss";

import TodoContainer from "../../modules/todo/TodoContainer";
import TodoListDialogContainer from "../../modules/todo/components/TodoListDialogContainer";

const TodoPage = () => (
  <DocumentTitle title={internalUrls.TODO.pageTitle}>
    <div className="todo-page">
      <TodoListDialogContainer />
      <TodoContainer />
    </div>
  </DocumentTitle>
);

export default TodoPage;
