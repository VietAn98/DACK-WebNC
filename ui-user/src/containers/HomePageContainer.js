import { connect } from 'react-redux';
import HomePage from '../pages/HomePage';
import { getListTeacher } from '../actions/userAction';

const mapStateToProps = (state) => ({
    listTeachers: state.listTeachers
});

const mapDispatchToProps = (dispatch) => ({
    getListTeacher: () => dispatch(getListTeacher())
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
