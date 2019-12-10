import { connect } from 'react-redux';
import DetailUser from '../components/manageAcc/detailUser';
import {
 getAddressByUser, getDetailUser, getDistrictByUser, updateStateAccount
} from '../actions/manageAccAction';

const mapStateToProps = (state) => ({
    detailUser: state.detailUser,
    getAddress: state.getAddress,
    getDistrict: state.getDistrict,
  });

const mapDispatchToProps = (dispatch) => ({
    getDetailUsers: (id) => dispatch(getDetailUser(id)),
    getAddressByUser: (idu) => dispatch(getAddressByUser(idu)),
    getDistrictByUser: (id) => dispatch(getDistrictByUser(id)),
    updateStateAccount: (userId, adLock) => dispatch(updateStateAccount(userId, adLock))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailUser);
