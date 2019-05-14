import React from "react";
import { connect } from "react-redux";

import {
  onToggleAddTodoListDialog,
  onToggleEditTodoListDialog,
  onTempTodoListUpdated,
  getTodoLists,
  addTodoList,
  editTodoList,
  deleteTodoList
} from "../redux/action-creators";

import AddTodoListDialog from "./dialogs/AddTodoListDialog";
import EditTodoListDialog from "./dialogs/EditTodoListDialog";

class CalendarDialogsContainer extends React.Component {
  componentDidMount() {
    this.props.getTodoLists();
  }

  render() {
    const {
      onToggleAddTodoListDialog,
      onToggleEditTodoListDialog,
      onTempTodoListUpdated,
      getTodoLists,
      addTodoList,
      editTodoList,
      deleteTodoList,

      //state
      tempTodoList,
      isOpenedAddTodoListDialog,
      isOpenedEditTodoListDialog
    } = this.props;
    return (
      <div>
        <AddTodoListDialog
          addTodoList={addTodoList}
          onToggleAddTodoListDialog={onToggleAddTodoListDialog}
          onTempTodoListUpdated={onTempTodoListUpdated}
          tempTodoList={tempTodoList}
          isOpenedAddTodoListDialog={isOpenedAddTodoListDialog}
        />
        <EditTodoListDialog
          editTodoList={editTodoList}
          deleteTodoList={deleteTodoList}
          onToggleEditTodoListDialog={onToggleEditTodoListDialog}
          onTempTodoListUpdated={onTempTodoListUpdated}
          tempTodoList={tempTodoList}
          isOpenedEditTodoListDialog={isOpenedEditTodoListDialog}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  onToggleAddTodoListDialog,
  onToggleEditTodoListDialog,
  onTempTodoListUpdated,
  getTodoLists,
  addTodoList,
  editTodoList,
  deleteTodoList
};

const mapStateToProps = state => ({
  ...state.todo
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarDialogsContainer);
