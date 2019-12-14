import { connect } from 'react-redux';
import Contract from '../components/Contract/Contract';
import { getListCity } from '../actions/userAction';

const mapStateToProps = (state) => ({
    listCity: state.listCity
});

const mapDispatchToProps = (dispatch) => ({
    getListCity: () => dispatch(getListCity()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contract);