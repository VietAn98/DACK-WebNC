import { connect } from 'react-redux';
import TeacherInfor from '../pages/TeacherInfoPage';
import {
  getInforUserById,
  listNameSkill,
  listTeacherTop,
  getCityByIdDistrict
} from '../actions/userAction';

const mapStateToProps = (state) => ({
  detailTeacher: state.detailTeacher,
  nameSkill: state.listNameSkill,
  listTeachers: state.listTeachers,
  cityName: state.cityName
});

const mapDispatchToProps = (dispatch) => ({
  getInforUserById: (id) => dispatch(getInforUserById(id)),
  listNameSkill: (id) => dispatch(listNameSkill(id)),
  listTeacherTop: () => dispatch(listTeacherTop()),
  getCityByIdDistrict: (id) => dispatch(getCityByIdDistrict(id))
  // loginRequest: (gmail, password) => dispatch(loginRequest(gmail, password)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TeacherInfor);
