import { connect } from 'react-redux';
import NewPassword from '../components/newPassword';
 import { updatePassword, getMailByKeyPass } from '../actions/userAction';

const mapStateToProps = (state) => ({
    keyPass: state.keyPass
});

const mapDispatchToProps = (dispatch) => ({
    updatePassword: (pass) => dispatch(updatePassword(pass)),
    getMailByKeyPass: (key) => dispatch(getMailByKeyPass(key)),

});
export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
