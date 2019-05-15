import React from "react";
import { connect } from "react-redux";

import {
  onToggleAddNotebookDialog,
  onToggleEditNotebookDialog,
  onTempNotebookUpdated,
  getNotebooks,
  addNotebook,
  editNotebook,
  deleteNotebook
} from "../redux/action-creators";

import AddNotebookDialog from "./dialogs/AddNotebookDialog";
import EditNotebookDialog from "./dialogs/EditNotebookDialog";

class CalendarDialogsContainer extends React.Component {
  componentDidMount() {
    this.props.getNotebooks();
  }

  render() {
    const {
      onToggleAddNotebookDialog,
      onToggleEditNotebookDialog,
      onTempNotebookUpdated,
      getNotebooks,
      addNotebook,
      editNotebook,
      deleteNotebook,

      //state
      tempNotebook,
      isOpenedAddNotebookDialog,
      isOpenedEditNotebookDialog
    } = this.props;
    return (
      <React.Fragment>
        <AddNotebookDialog
          addNotebook={addNotebook}
          onToggleAddNotebookDialog={onToggleAddNotebookDialog}
          onTempNotebookUpdated={onTempNotebookUpdated}
          tempNotebook={tempNotebook}
          isOpenedAddNotebookDialog={isOpenedAddNotebookDialog}
        />
        <EditNotebookDialog
          editNotebook={editNotebook}
          deleteNotebook={deleteNotebook}
          onToggleEditNotebookDialog={onToggleEditNotebookDialog}
          onTempNotebookUpdated={onTempNotebookUpdated}
          tempNotebook={tempNotebook}
          isOpenedEditNotebookDialog={isOpenedEditNotebookDialog}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  onToggleAddNotebookDialog,
  onToggleEditNotebookDialog,
  onTempNotebookUpdated,
  getNotebooks,
  addNotebook,
  editNotebook,
  deleteNotebook
};

const mapStateToProps = state => ({
  ...state.notes
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarDialogsContainer);
