import { connect } from 'react-redux';
import TeacherInfor from '../pages/TeacherInfoPage';
import {
  getUserInfor,
  listNameSkill,
  listTeacherTop,
  getCityByIdDistrict,
  getListDisctrict,
  filterSkillTeacher,
  getUserComment,
  getSingleTeacherById
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
  getSingleTeacherById: (id) => dispatch(getSingleTeacherById(id)),
  getUserInfor: (id) => dispatch(getUserInfor(id)),
  listNameSkill: (id) => dispatch(listNameSkill(id)),
  listTeacherTop: () => dispatch(listTeacherTop()),
  getCityByIdDistrict: (id) => dispatch(getCityByIdDistrict(id)),
  getListDisctrict: () => dispatch(getListDisctrict()),
  filterSkillTeacher: () => dispatch(filterSkillTeacher()),
  getUserComment: (idTeacher) => dispatch(getUserComment(idTeacher)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TeacherInfor);
