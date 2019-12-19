import { connect } from 'react-redux';
import History from '../components/History/History';
import {
    getContractByUserId,
    getContractByTeacherId,
    filterContractsOfTeacher,
    filterContractsOfStudent,
    updateStateContract
} from '../actions/userAction';

const mapStateToProps = (state) => ({
    contractByIdUser: state.contractByIdUser,
});

const mapDispatchToProps = (dispatch) => ({
    getContractByUserId: (idUser) => dispatch(getContractByUserId(idUser)),
    getContractByTeacherId: (id) => dispatch(getContractByTeacherId(id)),
    filterContractsOfTeacher: (idUser, idState) => dispatch(
        filterContractsOfTeacher(idUser, idState)
    ),
    filterContractsOfStudent: (idUser, idState) => dispatch(
        filterContractsOfStudent(idUser, idState)
    ),
    updateStateContract: (idContract, state) => dispatch(updateStateContract(idContract, state))
});
export default connect(mapStateToProps, mapDispatchToProps)(History);
