import { connect } from 'react-redux';
import Statistics from '../components/Statistics/Statistics';
import {
    getMoneyEachDay,
    getTotalContracts
} from '../actions/userAction';

const mapStateToProps = (state) => ({
    moneyEachDay: state.moneyEachDay,
    totalContracts: state.totalContracts
});

const mapDispatchToProps = (dispatch) => ({
    getMoneyEachDay: (idTeacher) => dispatch(getMoneyEachDay(idTeacher)),
    getTotalContracts: (idTeacher) => dispatch(getTotalContracts(idTeacher))
});
export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
