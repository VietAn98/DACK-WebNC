import { connect } from 'react-redux';
import AdminSignIn from '../components/AdminSignIn/AdminSignIn';
import { adminLoginRequest, login, noLogin, forgotPassword } from '../actions/adminAction';

const mapStateToProps = (state) => ({

	isSigInn: state.isSigIn,
	// isBusy: state.isBusy,
	// isSucceed: state.isRegisterSucceed
});


const mapDispatchToProps = (dispatch) => ({
  adminLogin: (gmail, password) => dispatch(adminLoginRequest(gmail, password)),
  login: () => dispatch(login()),
  noLogin: () => dispatch(noLogin()),
  forgotPassword: (email) => dispatch(forgotPassword(email))
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminSignIn);
