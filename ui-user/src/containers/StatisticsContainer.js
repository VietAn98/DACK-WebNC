import { connect } from 'react-redux';
import Statistics from '../components/Statistics/Statistics';
import { getMoneyEachDay } from '../actions/userAction';

const mapStateToProps = (state) => ({
    moneyEachDay: state.moneyEachDay
});

const mapDispatchToProps = (dispatch) => ({
    getMoneyEachDay: (idTeacher) => dispatch(getMoneyEachDay(idTeacher)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
