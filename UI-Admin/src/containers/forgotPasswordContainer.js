import { connect } from 'react-redux';
import NewPassword from '../components/forgotPassword';
import {updatePassword, getMailByKeyPass} from '../actions/adminAction'

const mapStateToProps = (state) => ({
    keyPass: state.keyPass,
})

const mapDispatchToProps = (dispatch) => ({
    updatePassword: (pass) => dispatch(updatePassword(pass)),
    getMailByKeyPass: (key) => dispatch(getMailByKeyPass(key)),
    
})

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
