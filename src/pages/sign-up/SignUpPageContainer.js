import { connect } from 'react-redux';
import SignUpPage from './SignUpPage';

import { signUpUser } from '../../common/redux/action-creators';

const mapStateToProps = state => state.common;

const mapDispatchToProps = {
  signUpUser
};

const SignUpPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);

export default SignUpPageContainer;
