import { connect } from 'react-redux';
import AfterLogin from '../components/AfterLogin/AfterLogin';
import { signOut, getUserInfor } from '../actions/userAction';

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    userProfiles: state.userProfiles
});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut()),
    getUserInfor: (idUser) => dispatch(getUserInfor(idUser))
});
export default connect(mapStateToProps, mapDispatchToProps)(AfterLogin);
