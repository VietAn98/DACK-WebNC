import { connect } from 'react-redux';
import detailContract from '../components/manageContract/detailContract';
import { getDetailContract, updateContract, getListContract } from '../actions/contractAction';

const mapStateToProps = (state) => ({
    detailContracts: state.detailContract,
    statesContract: state.getStatesContract

});

const mapDispatchToProps = (dispatch) => ({
    getDetailContract: (id) => dispatch(getDetailContract(id)),
    getListStateContract: () => dispatch(getListContract()),
    updateContract: (id, state) => dispatch(updateContract(id, state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(detailContract);
