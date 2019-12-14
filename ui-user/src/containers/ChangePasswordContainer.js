import { connect } from 'react-redux';
import ChangePassword from '../components/ChangePassword/ChangePassword';
import { changeOldPassword } from '../actions/userAction';

const mapStateToProps = (state) => ({
    // currentUser: state.currentUser,
    // userProfiles: state.userProfiles
});

const mapDispatchToProps = (dispatch) => ({
 changeOldPassword: (gmail, newPass, oldPass) => { dispatch(changeOldPassword(gmail,newPass, oldPass))}
});
export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
