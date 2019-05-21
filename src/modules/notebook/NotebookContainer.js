import { connect } from "react-redux";
import Notebook from "./Notebook";

import {
  onToggleAddNotebookDialog,
  onCurrentNoteUpdated,
  addNote,
  editNote,
  deleteNote
} from "./redux/action-creators";

const mapStateToProps = state => ({
  ...state.notes
});

const mapDispatchToProps = {
  onToggleAddNotebookDialog,
  onCurrentNoteUpdated,
  addNote,
  editNote,
  deleteNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notebook);
