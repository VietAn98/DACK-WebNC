import { connect } from 'react-redux';
import SignUp from '../components/SignUp/SignUp';
import { registerRequest, getListCity, getDistrictByIdCity } from '../actions/userAction';

const mapStateToProps = (state) => {
  return {
    listCity: state.listCity,
    districtNames: state.districtNames
  };
};

const mapDispatchToProps = (dispatch) => ({
	registerRequest: (
		name,
		gmail,
		password,
		districtId,
		gender,
		categoryUser,
		address
	) => dispatch(registerRequest(name, gmail, password, districtId, gender, categoryUser, address)),
	getListCity: () => dispatch(getListCity()),
	getDistrictByIdCity: (id) => dispatch(getDistrictByIdCity(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
