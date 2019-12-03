import { connect } from 'react-redux';
import AdminSignIn from '../components/AdminSignIn/AdminSignIn';
import { adminLoginRequest } from '../actions/adminAction';

// const mapStateToProps = state => {
//   return {
//     isBusy: state.isBusy,
//     isSucceed: state.isRegisterSucceed
//   };
// };

const mapDispatchToProps = (dispatch) => ({
	adminLogin: (gmail, password) => dispatch(adminLoginRequest(gmail, password)),
});
export default connect(null, mapDispatchToProps)(AdminSignIn);
