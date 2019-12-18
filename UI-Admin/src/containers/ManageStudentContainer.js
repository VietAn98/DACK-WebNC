import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import student from '../components/manageAcc/student';
import { getListStudent, getListLimitStudent } from '../actions/manageAccAction';

const mapStateToProps = (state) => ({
  students: state.students

});

const mapDispatchToProps = (dispatch) => ({
  getStudents: getListStudent,
  getListLimitStudent: (page) => dispatch(getListLimitStudent(page))

});

export default connect(mapStateToProps, mapDispatchToProps)(student);
