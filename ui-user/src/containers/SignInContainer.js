import { connect } from 'react-redux';
import SignIn from '../components/SignIn/SignIn';
import { loginRequest } from '../actions/userAction';

// const mapStateToProps = state => {
//   return {
//     isBusy: state.isBusy,
//     isSucceed: state.isRegisterSucceed
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (gmail, password) => dispatch(loginRequest(gmail, password)),
});
export default connect(null, mapDispatchToProps)(SignIn);
