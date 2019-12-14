import { connect } from 'react-redux';
import Contract from '../components/Contract/Contract';
import {
    getListCity,
    getDistrictByIdCity,
    getSingleTeacherById,
    getListDisctrict
} from '../actions/userAction';

const mapStateToProps = (state) => ({
    listCity: state.listCity,
    districtNames: state.districtNames,
    detailTeacher: state.detailTeacher,
    listDistrict: state.listDistrict
});

const mapDispatchToProps = (dispatch) => ({
    getListCity: () => dispatch(getListCity()),
    getDistrictByIdCity: (id) => dispatch(getDistrictByIdCity(id)),
    getSingleTeacherById: (id) => dispatch(getSingleTeacherById(id)),
    getListDisctrict: () => dispatch(getListDisctrict())
});
export default connect(mapStateToProps, mapDispatchToProps)(Contract);
