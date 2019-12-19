/* eslint-disable global-require */
import { connect } from 'react-redux';
import {
  getListCity,
  getDistrictByIdCity,
  getSingleTeacherById,
  getListDisctrict,
  getInforUserById,
  getUserInfor,
  // getListSkills,
  getEndDay,
  listNameSkill,
  createContract,
  getCityByIdDistrict,
  getCityByIdDistrictForTeacher,
  getTotalHour,

  getDetailContractByIdContract,
  updateStateContract,
  sendComplaint,
  sendComment,
  getComplaintByIdContract,
  rateStar
} from '../actions/userAction';

const Components = {
  Contract: require('../components/Contract/Contract').default,
  ReadOnlyContract: require('../components/Contract/ReadOnlyContract').default
};

const mapStateToProps = (state) => ({
  listCity: state.listCity,
  districtNames: state.districtNames,
  detailTeacher: state.detailTeacher,
  listDistrict: state.listDistrict,
  userInfor: state.userInfor,
  userProfiles: state.userProfiles,
  endLearnDay: state.endLearnDay,
  listNameOfSkill: state.listNameOfSkill,
  cityName: state.cityName,
  cityNameForTeacher: state.cityNameForTeacher,
  totalHour: state.totalHour,

  // ReadOnlyContract
  contractByIdContract: state.contractByIdContract,
  complaintByIdContract: state.complaintByIdContract,
  starNumber: state.starNumber
});

const mapDispatchToProps = (dispatch) => ({
  getListCity: () => dispatch(getListCity()),
  getDistrictByIdCity: (id) => dispatch(getDistrictByIdCity(id)),
  getSingleTeacherById: (id) => dispatch(getSingleTeacherById(id)),
  getListDisctrict: () => dispatch(getListDisctrict()),
  getInforUserById: (id) => dispatch(getInforUserById(id)),
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
  getTotalHour: (hour) => dispatch(getTotalHour(hour)),

  // ReadOnlyContract
  getDetailContractByIdContract: (idContract) => dispatch(
    getDetailContractByIdContract(idContract)
  ),
  updateStateContract: (idContract, state) => dispatch(updateStateContract(idContract, state)),
  sendComplaint: (contractId, reason) => dispatch(
    sendComplaint(contractId,
      reason)
  ),
  sendComment: (idUser, content, starNumber, idTeacher, idContract) => dispatch(
    sendComment(idUser,
      content,
      starNumber,
      idTeacher,
      idContract)
  ),
  getComplaintByIdContract: (idContract) => dispatch(getComplaintByIdContract(idContract)),
  rateStar: (star) => dispatch(rateStar(star))
});
export default (componentName) => connect(
  mapStateToProps,
  mapDispatchToProps
)(Components[componentName]);
