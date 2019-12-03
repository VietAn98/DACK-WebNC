import { connect } from 'react-redux';
import AdminCreate from '../components/AdminCreate/AdminCreate';
import { adminCreateAccount } from '../actions/adminAction';

// const mapStateToProps = state => {
//   return {
//     isBusy: state.isBusy,
//     isSucceed: state.isRegisterSucceed
//   };
// };

const mapDispatchToProps = (dispatch) => ({
	adminCreateAccount: (
		name,
		gmail,
		password,
	) => dispatch(adminCreateAccount(name, gmail, password)),
});
export default connect(null, mapDispatchToProps)(AdminCreate);
