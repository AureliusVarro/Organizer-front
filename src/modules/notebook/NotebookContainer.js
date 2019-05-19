import { connect } from "react-redux";
import Notebook from "./Notebook";

import {
  onCurrentNoteUpdated,
  addNote,
  editNote,
  deleteNote
} from "./redux/action-creators";

const mapStateToProps = state => ({
  ...state.notes
});

const mapDispatchToProps = {
  onCurrentNoteUpdated,
  addNote,
  editNote,
  deleteNote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notebook);
