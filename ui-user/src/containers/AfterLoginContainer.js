import { connect } from 'react-redux';
import AfterLogin from '../components/AfterLogin/AfterLogin';
import { signOut } from '../actions/userAction';

// const mapStateToProps = (state) => ({
//     userProfile: state.userProfile
// });

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOut()),
});
export default connect(null, mapDispatchToProps)(AfterLogin);
