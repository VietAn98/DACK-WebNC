import { connect } from 'react-redux';
import SignIn from '../components/SignIn/SignIn';
import { loginRequest, getInfor } from '../actions/userAction';

// const mapStateToProps = state => {
//   return {
//     isBusy: state.isBusy,
//     isSucceed: state.isRegisterSucceed
//   };
// };

const mapDispatchToProps = (dispatch) => ({
	loginRequest: (gmail, password) => dispatch(loginRequest(gmail, password)),
	getInfor: () => dispatch(getInfor()),
});
export default connect(null, mapDispatchToProps)(SignIn);
