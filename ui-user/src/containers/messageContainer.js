import { connect } from 'react-redux';
import message from '../components/messenger/message';
import { getChatInforUserById } from '../actions/userAction';

const mapStateToProps = (state) => ({
    chatUserInfor: state.chatUserInfor,
});

const mapDispatchToProps = (dispatch) => ({
    getChatInforUserById: (id) => dispatch(getChatInforUserById(id)),
 });
export default connect(mapStateToProps, mapDispatchToProps)(message);
