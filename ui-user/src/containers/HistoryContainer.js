import { connect } from 'react-redux';
import History from '../components/History/History';
// import { loginRequest } from '../actions/userAction';

const mapStateToProps = (state) => ({
    // userProfile: state.userProfile
});

const mapDispatchToProps = (dispatch) => ({
    // loginRequest: (gmail, password) => dispatch(loginRequest(gmail, password)),
});
export default connect(mapStateToProps, mapDispatchToProps)(History);
