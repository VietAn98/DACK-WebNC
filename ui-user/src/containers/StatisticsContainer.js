import { connect } from 'react-redux';
import Statistics from '../components/Statistics/Statistics';
import {
    getMoneyEachDay,
    getTotalContracts,
    getSumEachMonth,
    getSumEachYear,
    getTotalPriceAndContract
} from '../actions/userAction';

const mapStateToProps = (state) => ({
    moneyEachDay: state.moneyEachDay,
    totalContracts: state.totalContracts,
    sumEachMonth: state.sumEachMonth,
    sumEachYear: state.sumEachYear,
    totalPriceNContract: state.totalPriceNContract
});

const mapDispatchToProps = (dispatch) => ({
    getMoneyEachDay: (idTeacher) => dispatch(getMoneyEachDay(idTeacher)),
    getTotalContracts: (idTeacher) => dispatch(getTotalContracts(idTeacher)),
    getSumEachMonth: (idTeacher) => dispatch(getSumEachMonth(idTeacher)),
    getSumEachYear: (idTeacher) => dispatch(getSumEachYear(idTeacher)),
    getTotalPriceAndContract: (idTeacher) => dispatch(getTotalPriceAndContract(idTeacher))
});
export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
