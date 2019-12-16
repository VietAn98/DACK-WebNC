import { connect } from 'react-redux';
import History from '../components/History/History';
import { getAllContracts } from '../actions/userAction';

const mapStateToProps = (state) => ({
    allContracts: state.allContracts
});

const mapDispatchToProps = (dispatch) => ({
    getAllContracts: () => dispatch(getAllContracts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(History);
