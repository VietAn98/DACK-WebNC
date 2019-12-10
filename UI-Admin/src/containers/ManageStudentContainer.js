import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import student from '../components/manageAcc/student';
import { getListStudent } from '../actions/manageAccAction';

const mapStateToProps = (state) => ({
    students: state.students

});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getStudents: getListStudent
  },
  dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(student);
