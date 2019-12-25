import { connect } from 'react-redux';
import SignIn from '../components/SignIn/SignIn';
import {
  loginRequest,
  getInfor,
  login,
  forgotPassword
} from '../actions/userAction';

const mapStateToProps = (state) => ({
  isSigIn: state.isSigIn,
  // isBusy: state.isBusy,
  // isSucceed: state.isRegisterSucceed
});

const mapDispatchToProps = (dispatch) => ({
  forgotPassword: (gmail) => dispatch(forgotPassword(gmail)),
  login: () => dispatch(login()),
  loginRequest: (gmail, password) => dispatch(loginRequest(gmail, password)),
  getInfor: () => dispatch(getInfor()),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
