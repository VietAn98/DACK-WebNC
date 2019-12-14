import { connect } from 'react-redux';
import Contract from '../components/Contract/Contract';
import {
    getListCity,
    getDistrictByIdCity,
    getUserInfor,
    getListDisctrict
} from '../actions/userAction';

const mapStateToProps = (state) => ({
    listCity: state.listCity,
    districtNames: state.districtNames,
    userProfiles: state.userProfiles,
    listDistrict: state.listDistrict
});

const mapDispatchToProps = (dispatch) => ({
    getListCity: () => dispatch(getListCity()),
    getDistrictByIdCity: (id) => dispatch(getDistrictByIdCity(id)),
    getUserInfor: (id) => dispatch(getUserInfor(id)),
    getListDisctrict: () => dispatch(getListDisctrict())
});
export default connect(mapStateToProps, mapDispatchToProps)(Contract);
