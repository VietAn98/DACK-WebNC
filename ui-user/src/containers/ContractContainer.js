import { connect } from 'react-redux';
import Contract from '../components/Contract/Contract';
import {
  getListCity,
  getDistrictByIdCity,
  getSingleTeacherById,
  getListDisctrict,
  // getInforUserById,
  getUserInfor,
  getListSkills,
  getEndDay,
  listNameSkill,
  createContract,
  getCityByIdDistrict,
  getCityByIdDistrictForTeacher,
  getTotalHour
} from '../actions/userAction';

const mapStateToProps = (state) => ({
  listCity: state.listCity,
  districtNames: state.districtNames,
  detailTeacher: state.detailTeacher,
  listDistrict: state.listDistrict,
  // userInfor: state.userInfor,
  userProfiles: state.userProfiles,
  endLearnDay: state.endLearnDay,
  listNameOfSkill: state.listNameOfSkill,
  cityName: state.cityName,
  cityNameForTeacher: state.cityNameForTeacher,
  totalHour: state.totalHour
});

const mapDispatchToProps = (dispatch) => ({
  getListCity: () => dispatch(getListCity()),
  getDistrictByIdCity: (id) => dispatch(getDistrictByIdCity(id)),
  getSingleTeacherById: (id) => dispatch(getSingleTeacherById(id)),
  getListDisctrict: () => dispatch(getListDisctrict()),
  // getInforUserById: (id) => dispatch(getInforUserById(id)),
  getUserInfor: (id) => dispatch(getUserInfor(id)),
  getEndDay: (day) => dispatch(getEndDay(day)),
  listNameSkill: (id) => dispatch(listNameSkill(id)),
  createContract: (
    teacherId,
    studentId,
    price,
    startDay,
    endDay,
    dateCreate,
    skill,
    numberDay,
    numberHour
  ) => dispatch(
    createContract(
      teacherId,
      studentId,
      price,
      startDay,
      endDay,
      dateCreate,
      skill,
      numberDay,
      numberHour
    )
  ),
  getCityByIdDistrict: (idDis) => dispatch(getCityByIdDistrict(idDis)),
  getCityByIdDistrictForTeacher: (idDis) => dispatch(getCityByIdDistrictForTeacher(idDis)),
  getTotalHour: (hour) => dispatch(getTotalHour(hour))
});
export default connect(mapStateToProps, mapDispatchToProps)(Contract);
