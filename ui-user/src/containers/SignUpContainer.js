import { connect } from 'react-redux';
import SignUp from '../components/SignUp/SignUp';
import { registerRequest } from '../actions/userAction';

// const mapStateToProps = state => {
//   return {
//     isBusy: state.isBusy,
//     isSucceed: state.isRegisterSucceed
//   };
// };

const mapDispatchToProps = (dispatch) => ({
	registerRequest: (
		name,
		gmail,
		password,
		districtId,
		gender,
		categoryUser,
	) => dispatch(registerRequest(name, gmail, password, districtId, gender, categoryUser)),
});
export default connect(null, mapDispatchToProps)(SignUp);
