import { connect } from "react-redux";
import changePassw from "../components/changePassw";
import { changePassword } from "../actions/adminAction";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  changePassword: (id, newPass, oldPass) =>
    dispatch(changePassword(id, newPass, oldPass))
});

export default connect(mapStateToProps, mapDispatchToProps)(changePassw);
