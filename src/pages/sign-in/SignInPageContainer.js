import { connect } from 'react-redux';
import SignInPage from './SignInPage';

import { signInUser } from '../../common/redux/action-creators';

const mapStateToProps = state => state.common;

const mapDispatchToProps = {
  signInUser
};

const SignInPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage);

export default SignInPageContainer;
