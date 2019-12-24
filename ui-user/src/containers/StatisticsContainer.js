import { connect } from 'react-redux';
import Statistics from '../components/Statistics/Statistics';
import {
    getMoneyEachDay,
    getTotalContracts,
    getSumEachMonth
} from '../actions/userAction';

const mapStateToProps = (state) => ({
    moneyEachDay: state.moneyEachDay,
    totalContracts: state.totalContracts,
    sumEachMonth: state.sumEachMonth
});

const mapDispatchToProps = (dispatch) => ({
    getMoneyEachDay: (idTeacher) => dispatch(getMoneyEachDay(idTeacher)),
    getTotalContracts: (idTeacher) => dispatch(getTotalContracts(idTeacher)),
    getSumEachMonth: (idTeacher) => dispatch(getSumEachMonth(idTeacher)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
