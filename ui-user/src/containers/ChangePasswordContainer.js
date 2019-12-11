import { connect } from 'react-redux';
import ChangePassword from '../components/ChangePassword/ChangePassword';
// import { signOut, getUserInfor } from '../actions/userAction';

const mapStateToProps = (state) => ({
    // currentUser: state.currentUser,
    // userProfiles: state.userProfiles
});

const mapDispatchToProps = (dispatch) => ({
    // signOut: () => dispatch(signOut()),
    // getUserInfor: (idUser) => dispatch(getUserInfor(idUser))
});
export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
