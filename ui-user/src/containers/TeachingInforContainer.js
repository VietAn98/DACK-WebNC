import { connect } from 'react-redux';
import TeachingInfor from '../components/TeachingInfor/TeachingInfor';
import {
	chosenTagList, registerTeachingRequest, avatarName, uploadAvatar
} from '../actions/userAction';

const mapStateToProps = (state) => {
	console.log('state', state);
	return {
		stringTag: state.stringTag,
		nameAvatar: state.nameAvatar
	};
};

const mapDispatchToProps = (dispatch) => ({
	chosenTagList: (stringTags) => dispatch(chosenTagList(stringTags)),
	registerTeachingRequest: (
		gmail,
		introduce,
		skill,
		price,
		avatar
	) => dispatch(registerTeachingRequest(gmail,
		introduce,
		skill,
		price,
		avatar)),
	avatarName: (avtName) => dispatch(avatarName(avtName)),
	uploadAvatar: (fd) => dispatch(uploadAvatar(fd)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TeachingInfor);
