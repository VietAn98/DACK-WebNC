import { connect } from 'react-redux';
import teacher from '../components/manageAcc/teacher';
import { getListTeacher } from '../actions/manageAccAction';


const mapStateToProps = (state) => ({
  teachers: state.teachers
});

const mapDispatchToProps = (dispatch) => ({
  getListTeacher: () => dispatch(getListTeacher()),

});

export default connect(mapStateToProps, mapDispatchToProps)(teacher);
