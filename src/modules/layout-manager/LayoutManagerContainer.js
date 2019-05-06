import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import LayoutManager from './components/LayoutManager';

import {
  resetCurrentUser,
  getCurrentUser
} from '../../common/redux/action-creators';

import { onToggleSidebar } from './redux/action-creators';

const mapStateToProps = state => ({
  ...state.common,
  ...state.layoutManager
});

const mapDispatchToProps = {
  onToggleSidebar,
  resetCurrentUser,
  getCurrentUser
};

const LayoutManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutManager);

export default withRouter(LayoutManagerContainer);
