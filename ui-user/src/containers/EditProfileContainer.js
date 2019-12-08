import { connect } from 'react-redux';
import EditProfile from '../components/EditProfile/EditProfile';
import {
    getListDisctrict,
    getListCity,
    getCityByIdDistrict,
    getDistrictByIdCity,
    getSkills,
    userLogin,
    getListSkills,
    avatarName,
    uploadAvatar,
    chosenTagList,
    listTemp,
    listTempUnchoose
} from '../actions/userAction';

const mapStateToProps = (state) => ({
    listDistrict: state.listDistrict,
    listCity: state.listCity,
    cityName: state.cityName,
    districtNames: state.districtNames,
    teacherSkills: state.teacherSkills,
    currentUser: state.currentUser,
    listSkills: state.listSkills,
    nameAvatar: state.nameAvatar,
    stringTag: state.stringTag,
    tempList: state.tempList,
    tempListUnChoose: state.tempListUnChoose
});

const mapDispatchToProps = (dispatch) => ({
    getListDisctrict: () => dispatch(getListDisctrict()),
    getListCity: () => dispatch(getListCity()),
    getCityByIdDistrict: (id) => dispatch(getCityByIdDistrict(id)),
    getDistrictByIdCity: (idCity) => dispatch(getDistrictByIdCity(idCity)),
    getSkills: (idTeacher) => dispatch(getSkills(idTeacher)),
    userLogin: (user) => dispatch(userLogin(user)),
    getListSkills: () => dispatch(getListSkills()),
    avatarName: (avt) => dispatch(avatarName(avt)),
    uploadAvatar: (fd) => dispatch(uploadAvatar(fd)),
    chosenTagList: (tags) => dispatch(chosenTagList(tags)),
    listTemp: (list) => dispatch(listTemp(list)),
    listTempUnchoose: (list) => dispatch(listTempUnchoose(list))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
