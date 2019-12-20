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
    getContractByUserId: (idUser, page) => dispatch(getContractByUserId(idUser, page)),
    getContractByTeacherId: (id, page) => dispatch(getContractByTeacherId(id, page)),
    filterContractsOfTeacher: (idUser, idState) => dispatch(
        filterContractsOfTeacher(idUser, idState)
    ),
    filterContractsOfStudent: (idUser, idState) => dispatch(
        filterContractsOfStudent(idUser, idState)
    ),
    updateStateContract: (idContract, state) => dispatch(updateStateContract(idContract, state))
});
export default connect(mapStateToProps, mapDispatchToProps)(History);
