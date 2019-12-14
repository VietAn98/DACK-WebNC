import { connect } from 'react-redux';
import TeacherInfor from '../pages/TeacherInfoPage';
import {
  getInforUserById,
  listNameSkill,
  listTeacherTop,
  getCityByIdDistrict,
  getListDisctrict,
  filterSkillTeacher,
  getUserComment
} from '../actions/userAction';

const mapStateToProps = (state) => ({
  detailTeacher: state.detailTeacher,
  listNameOfSkill: state.listNameOfSkill,
  listTeachers: state.listTeachers,
  cityName: state.cityName,
  listDistrict: state.listDistrict,
  userComment: state.userComment
});

const mapDispatchToProps = (dispatch) => ({
  getInforUserById: (id) => dispatch(getInforUserById(id)),
  listNameSkill: (id) => dispatch(listNameSkill(id)),
  listTeacherTop: () => dispatch(listTeacherTop()),
  getCityByIdDistrict: (id) => dispatch(getCityByIdDistrict(id)),
  getListDisctrict: () => dispatch(getListDisctrict()),
  filterSkillTeacher: () => dispatch(filterSkillTeacher()),
  getUserComment: (idTeacher) => dispatch(getUserComment(idTeacher)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TeacherInfor);
