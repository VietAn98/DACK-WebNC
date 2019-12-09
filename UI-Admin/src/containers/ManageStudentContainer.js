import { connect } from 'react-redux';
import student from '../components/manageAcc/student';
import {getListStudent} from '../actions/manageAccAction';
import { bindActionCreators} from "redux"

const mapStateToProps = (state) => ({
  
    students : state.students
  
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(
  {
    getStudents: getListStudent
  },
  dispatch
  )


export default connect(mapStateToProps, mapDispatchToProps)(student);
