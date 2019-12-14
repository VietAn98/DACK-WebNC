import { connect } from 'react-redux';
import HomePage from '../pages/HomePage';
import { getListTeacher, listSixTeacherTop } from '../actions/userAction';

const mapStateToProps = (state) => ({
    listTeachers: state.listTeachers
});

const mapDispatchToProps = (dispatch) => ({
    listSixTeacherTop: () => dispatch(listSixTeacherTop()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
