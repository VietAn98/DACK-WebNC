import { connect } from 'react-redux';
import EditProfile from '../components/EditProfile/EditProfile';
import {
    getListDisctrict,
    getListCity,
    getCityByIdDistrict,
    getDistrictByIdCity,
    getSkills,
    userLogin
} from '../actions/userAction';

const mapStateToProps = (state) => ({
    listDistrict: state.listDistrict,
    listCity: state.listCity,
    cityName: state.cityName,
    districtNames: state.districtNames,
    teacherSkills: state.teacherSkills,
    currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    getListDisctrict: () => dispatch(getListDisctrict()),
    getListCity: () => dispatch(getListCity()),
    getCityByIdDistrict: (id) => dispatch(getCityByIdDistrict(id)),
    getDistrictByIdCity: (idCity) => dispatch(getDistrictByIdCity(idCity)),
    getSkills: (idTeacher) => dispatch(getSkills(idTeacher)),
    userLogin: (user) => dispatch(userLogin(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
