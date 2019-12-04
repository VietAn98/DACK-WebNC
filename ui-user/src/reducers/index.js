// const createInitialState = () => ({
// 	name: '',
// 	gmail: '',
// 	districtId: '',
// 	gender: '',
// 	categoryUser: '',
// });

// const userProfile = (state = createInitialState(), action) => {
// 	switch (action.type) {
// 	case 'USER_PROFILE': {
// 		return {
// 			...state,
// 			name: action.name,
// 			gmail: action.gmail,
// 			categoryUser: action.categoryUser
// 		};
// 	}
// 	default:
// 		return state;
// 	}
// };

export const stringTag = (state = '', action) => {
	switch (action.type) {
	case 'CHOSEN_TAG_LIST': {
		return action.stringTags;
	}
	default:
		return state;
	}
};

export const nameAvatar = (state = {}, action) => {
	switch (action.type) {
	case 'AVATAR_NAME': {
		return action.avtName;
	}
	default:
		return state;
	}
};
