import { connect } from 'react-redux';
import TeacherList from '../components/TeacherList/TeacherList';
import { getListTeacher } from '../actions/userAction';

const mapStateToProps = (state) => ({
    listTeachers: state.listTeachers
});

const mapDispatchToProps = (dispatch) => ({
    getListTeacher: () => dispatch(getListTeacher())
});
export default connect(mapStateToProps, mapDispatchToProps)(TeacherList);
