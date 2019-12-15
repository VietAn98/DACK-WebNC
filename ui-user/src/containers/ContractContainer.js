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
  createContract
} from '../actions/userAction';

const mapStateToProps = (state) => ({
  listCity: state.listCity,
  districtNames: state.districtNames,
  detailTeacher: state.detailTeacher,
  listDistrict: state.listDistrict,
  // userInfor: state.userInfor,
  userProfiles: state.userProfiles,
  listSkills: state.listSkills,
  endLearnDay: state.endLearnDay,
  listNameOfSkill: state.listNameOfSkill
});

const mapDispatchToProps = (dispatch) => ({
  getListCity: () => dispatch(getListCity()),
  getDistrictByIdCity: (id) => dispatch(getDistrictByIdCity(id)),
  getSingleTeacherById: (id) => dispatch(getSingleTeacherById(id)),
  getListDisctrict: () => dispatch(getListDisctrict()),
  // getInforUserById: (id) => dispatch(getInforUserById(id)),
  getUserInfor: (id) => dispatch(getUserInfor(id)),
  getListSkills: () => dispatch(getListSkills()),
  getEndDay: (day) => dispatch(getEndDay(day)),
  listNameSkill: (id) => dispatch(listNameSkill(id)),
  createContract: (
    teacherId,
    studentId,
    price,
    startDay,
    endDay,
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
        skill,
        numberDay,
        numberHour
      )
    )
});
export default connect(mapStateToProps, mapDispatchToProps)(Contract);
