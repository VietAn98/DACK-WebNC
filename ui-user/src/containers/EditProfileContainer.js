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
    updateStudentInfor,
    updateTeacherInfor,
    getUserInfor
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
    userProfiles: state.userProfiles
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
    updateStudentInfor: (gmail,
        name,
        gender,
        districtId,
        avatar) => dispatch(updateStudentInfor(gmail,
            name,
            gender,
            districtId,
            avatar)),
    updateTeacherInfor: (gmail,
        name,
        gender,
        districtId,
        introduce,
        skill,
        price,
        avatar) => dispatch(updateTeacherInfor(gmail,
            name,
            gender,
            districtId,
            introduce,
            skill,
            price,
            avatar)),
    getUserInfor: (user) => dispatch(getUserInfor(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
