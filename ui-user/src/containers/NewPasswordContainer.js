import { connect } from 'react-redux';
import NewPassword from '../components/newPassword';
 import { updatePassword } from '../actions/userAction';

// const mapStateToProps = (state) => ({
// });

const mapDispatchToProps = (dispatch) => ({
    updatePassword: (pass) => dispatch(updatePassword(pass)),
});
export default connect(null, mapDispatchToProps)(NewPassword);
