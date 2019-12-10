import { connect } from 'react-redux';
import TeacherList from '../components/TeacherList/TeacherList';
import { getListTeacher, getListCity, getDistrictByIdCity } from '../actions/userAction';

const mapStateToProps = (state) => ({
    listTeachers: state.listTeachers,
    listCity: state.listCity,
    districtNames: state.districtNames
});

const mapDispatchToProps = (dispatch) => ({
    getListTeacher: () => dispatch(getListTeacher()),
    getListCity: () => dispatch(getListCity()),
    getDistrictByIdCity: (idCity) => dispatch(getDistrictByIdCity(idCity))
});
export default connect(mapStateToProps, mapDispatchToProps)(TeacherList);
