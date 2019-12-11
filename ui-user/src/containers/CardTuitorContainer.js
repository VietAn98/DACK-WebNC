import { connect } from 'react-redux';
import CardTuitor from '../components/CardTuitor';
 import { listNameSkill } from '../actions/userAction';

const mapStateToProps = (state) => ({
	nameSkill: state.listNameSkill,
});

const mapDispatchToProps = (dispatch) => ({
    listNameSkill: (id) => dispatch(listNameSkill(id)),
    // loginRequest: (gmail, password) => dispatch(loginRequest(gmail, password)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CardTuitor);
