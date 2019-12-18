import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Contract from "../components/manageContract/contract";
import {
  getListLimitContract,
  getListContract,
  filterCotractByState
} from "../actions/contractAction";

const mapStateToProps = state => ({
  contracts: state.contracts,
  statesContract: state.getStatesContract
});

const mapDispatchToProps = dispatch => ({
  getListLimitContract: page => dispatch(getListLimitContract(page)),
  getListContract: () => dispatch(getListContract()),
  filterCotractByState: (index, page) => dispatch(filterCotractByState(index, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contract);
