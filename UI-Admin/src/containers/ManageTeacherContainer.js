import { connect } from 'react-redux';
import teacher from '../components/manageAcc/teacher';
import { getListTeacher, getListLimitTeacher } from '../actions/manageAccAction';


const mapStateToProps = (state) => ({
  teachers: state.teachers
});

const mapDispatchToProps = (dispatch) => ({
  getListTeacher: () => dispatch(getListTeacher()),
  getListLimitTeacher: (page) => dispatch(getListLimitTeacher(page)),

});

export default connect(mapStateToProps, mapDispatchToProps)(teacher);
